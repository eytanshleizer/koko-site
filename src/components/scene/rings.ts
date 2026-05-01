/**
 * Dyson ring orbiting the star.
 *
 * Geometry: a *tall narrow* band — the broad face is the inner cylindrical
 * wall, which faces directly inward toward the star. That's the surface that
 * absorbs the light. The outer wall and the thin top/bottom edges are in
 * silhouette.
 *
 * Surface detail: a procedural normal map breaks the perfect rotational
 * symmetry into discrete "panels" around the circumference. Without it, an
 * axisymmetric metal cylinder spinning around its own axis is visually
 * indistinguishable from a stationary one.
 *
 * Material: MeshStandardMaterial, metalness=1, low roughness. Needs:
 *   - a PointLight at the star's position (set in HeroOrb.astro)
 *   - scene.environment for ambient reflections (set in HeroOrb.astro)
 */

import * as THREE from "three"

export interface RingOptions {
  /** Inner radius (smaller = closer to star). */
  innerRadius?: number
  /** Outer radius. */
  outerRadius?: number
  /** Band thickness along the ring's normal axis. */
  height?: number
  /** Initial tilt around X (radians). */
  tilt?: number
  /** Initial twist around Z (radians) — changes the tilt direction. */
  twist?: number
  /** World-space axis the ring's orientation spins around (orbit-style 3D motion). */
  spinAxis?: THREE.Vector3
  /** Spin angular velocity (rad/sec). Negative = reverse direction. */
  spinSpeed?: number
  /** Base color (warm dark gray reads as iron/bronze under warm light). */
  color?: number
  /** 0..1 — 1 = full metal. */
  metalness?: number
  /** 0..1 — lower = mirror, higher = matte. */
  roughness?: number
  /** How strongly the env map shows up. */
  envMapIntensity?: number
}

export interface RingHandle {
  group: THREE.Group
  update(time: number): void
}

/**
 * Custom band geometry: a hollow short cylinder with proper hard normals on
 * each face. Top + bottom annuli have +Y / -Y normals; inner / outer walls
 * have radial normals. This gives crisp PBR shading with clean specular
 * highlights instead of the rounded look of TorusGeometry.
 */
function makeBandRing(
  innerR: number,
  outerR: number,
  height: number,
  segments: number,
): THREE.BufferGeometry {
  const positions: number[] = []
  const normals: number[] = []
  const uvs: number[] = []
  const indices: number[] = []
  const halfH = height / 2
  const stride = 8

  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2
    const c = Math.cos(a)
    const s = Math.sin(a)
    const u = i / segments
    // 0: top-outer
    positions.push(outerR * c, halfH, outerR * s); normals.push(0, 1, 0); uvs.push(u, 1)
    // 1: top-inner
    positions.push(innerR * c, halfH, innerR * s); normals.push(0, 1, 0); uvs.push(u, 0.55)
    // 2: bottom-outer
    positions.push(outerR * c, -halfH, outerR * s); normals.push(0, -1, 0); uvs.push(u, 0.45)
    // 3: bottom-inner
    positions.push(innerR * c, -halfH, innerR * s); normals.push(0, -1, 0); uvs.push(u, 0)
    // 4: outer wall top
    positions.push(outerR * c, halfH, outerR * s); normals.push(c, 0, s); uvs.push(u, 1)
    // 5: outer wall bottom
    positions.push(outerR * c, -halfH, outerR * s); normals.push(c, 0, s); uvs.push(u, 0)
    // 6: inner wall top (normal points inward toward star)
    positions.push(innerR * c, halfH, innerR * s); normals.push(-c, 0, -s); uvs.push(u, 1)
    // 7: inner wall bottom
    positions.push(innerR * c, -halfH, innerR * s); normals.push(-c, 0, -s); uvs.push(u, 0)
  }

  for (let i = 0; i < segments; i++) {
    const a = i * stride
    const b = (i + 1) * stride
    // Top face — wound so the geometric normal points +Y (matches the
    // declared vertex normals). In Three.js viewed from +Y, +X is right and
    // +Z appears at the bottom of the screen, so CCW-from-above goes
    // outer-current → inner-current → inner-next → outer-next.
    indices.push(a + 0, a + 1, b + 1)
    indices.push(a + 0, b + 1, b + 0)
    // Bottom face — geometric normal -Y (matches declared vertex normals).
    indices.push(a + 2, b + 2, b + 3)
    indices.push(a + 2, b + 3, a + 3)
    // Outer wall (CCW from outside)
    indices.push(a + 4, b + 4, b + 5)
    indices.push(a + 4, b + 5, a + 5)
    // Inner wall (CCW from inside, i.e. the star's POV)
    indices.push(a + 6, a + 7, b + 7)
    indices.push(a + 6, b + 7, b + 6)
  }

  const geom = new THREE.BufferGeometry()
  geom.setIndex(indices)
  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  geom.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3))
  geom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2))
  return geom
}

/**
 * Procedural normal map: vertical grooves dividing the circumference into
 * discrete panels. RGB encodes a tangent-space normal — flat surface is
 * (128, 128, 255). Grooves push the normal sideways so light grazes them
 * differently than the flat panel faces, making rotation visible.
 */
function makePanelNormalMap(panels: number): THREE.Texture {
  const W = 1024
  const H = 64
  const canvas = document.createElement("canvas")
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext("2d")!

  ctx.fillStyle = "rgb(128, 128, 255)" // flat
  ctx.fillRect(0, 0, W, H)

  const panelW = W / panels
  for (let i = 0; i < panels; i++) {
    const x = i * panelW
    // Each groove: a small dark band where the normal tilts to one side, then
    // a small light band where it tilts back — a V-shaped seam.
    const grad = ctx.createLinearGradient(x, 0, x + 6, 0)
    grad.addColorStop(0, "rgb(128, 128, 255)")
    grad.addColorStop(0.5, "rgb(60, 128, 220)")
    grad.addColorStop(1, "rgb(196, 128, 220)")
    ctx.fillStyle = grad
    ctx.fillRect(x - 3, 0, 6, H)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.NoColorSpace // normal maps are linear data, not sRGB
  return tex
}

export function buildRing(scene: THREE.Scene, opts: RingOptions = {}): RingHandle {
  // Tall narrow band so the broad face is the inner cylinder wall (sun-facing).
  const innerR = opts.innerRadius ?? 0.94
  const outerR = opts.outerRadius ?? 0.99
  const height = opts.height ?? 0.12
  const tilt = opts.tilt ?? -0.32
  const twist = opts.twist ?? 0
  const spinAxis = (opts.spinAxis ?? new THREE.Vector3(0, 1, 0)).clone().normalize()
  const spinSpeed = opts.spinSpeed ?? 0.16
  const color = opts.color ?? 0x14100c
  const metalness = opts.metalness ?? 1.0
  const roughness = opts.roughness ?? 0.18
  const envMapIntensity = opts.envMapIntensity ?? 1.4

  const group = new THREE.Group()
  scene.add(group)

  // Initial orientation = tilt around X, then twist around Z. This sets the
  // ring's plane in world space.
  const baseQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(tilt, 0, twist, "XYZ"))
  // Reused per frame.
  const spinQuat = new THREE.Quaternion()

  const normalMap = makePanelNormalMap(36)

  const mat = new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    envMapIntensity,
    normalMap,
    normalScale: new THREE.Vector2(0.4, 0.4),
  })
  // 96 segments is plenty for a thin band at this on-screen size — the
  // silhouette reads as smoothly circular and triangle count is halved.
  const mesh = new THREE.Mesh(makeBandRing(innerR, outerR, height, 96), mat)
  group.add(mesh)

  return {
    group,
    update(time: number) {
      // The ring's whole orientation spins around the world-space spinAxis.
      // Because spinAxis is generally NOT aligned with the ring's own central
      // axis, this produces visibly 3D orbital motion (the tilt direction
      // precesses around the spin axis).
      spinQuat.setFromAxisAngle(spinAxis, time * spinSpeed)
      group.quaternion.copy(spinQuat).multiply(baseQuat)
    },
  }
}
