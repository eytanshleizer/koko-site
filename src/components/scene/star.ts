/**
 * The star at the center of the hero scene.
 *
 * Goal: feels like a real sun — burning, alive, with proper limb darkening and a
 * soft warm halo. Restrained on size and brightness so the type stays the lead.
 *
 * Composed of three layers:
 *   1. Core sphere with a plasma shader (low-freq + high-freq value noise drifting).
 *   2. Inner halo (additive backside sphere) — soft warm bloom around the core.
 *   3. Outer corona (additive backside sphere) — wider, dimmer atmospheric falloff.
 */

import * as THREE from "three"

export interface StarOptions {
  /** Visible core radius. Default 0.55. */
  radius?: number
  /** Animation speed multiplier. Default 1. */
  speed?: number
}

export interface StarHandle {
  group: THREE.Group
  update(time: number): void
}

const vertNormalOnly = `
  varying vec3 vN;
  void main() {
    vN = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const vertNormalAndPos = `
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vN = normalize(normalMatrix * normal);
    vP = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const noiseHeader = `
  // Cheap 3D value noise with smooth interpolation.
  float h(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }
  float n(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(h(i), h(i + vec3(1.0, 0.0, 0.0)), f.x),
          mix(h(i + vec3(0.0, 1.0, 0.0)), h(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
      mix(mix(h(i + vec3(0.0, 0.0, 1.0)), h(i + vec3(1.0, 0.0, 1.0)), f.x),
          mix(h(i + vec3(0.0, 1.0, 1.0)), h(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
      f.z
    );
  }
  // 3-octave fractional Brownian motion for plasma surface.
  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      v += a * n(p);
      p *= 2.05;
      a *= 0.5;
    }
    return v;
  }
`

export function buildStar(scene: THREE.Scene, opts: StarOptions = {}): StarHandle {
  const radius = opts.radius ?? 0.55
  const speed = opts.speed ?? 1

  const group = new THREE.Group()
  scene.add(group)

  /* -------------------- Core: bright sun surface -------------------- */
  // Mostly a smooth bright disc with proper limb darkening; noise is *barely*
  // present, only there as a low-frequency brightness wobble so it feels alive
  // rather than printed. No visible granulation pattern.
  const coreMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: vertNormalAndPos,
    fragmentShader: `
      varying vec3 vN;
      varying vec3 vP;
      uniform float uTime;
      ${noiseHeader}

      void main() {
        // Limb darkening — a real sun viewed photographically dims toward the edge.
        // mu = cos(view angle from surface normal). 1 at center, 0 at limb.
        float mu = clamp(dot(normalize(vN), vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
        // Eddington-like limb darkening: I/I0 = 1 - u + u*mu
        float limb = 0.45 + 0.55 * mu;

        // Body color: bright warm white at the center, warm gold at the edge.
        vec3 hot  = vec3(1.00, 0.985, 0.92);
        vec3 warm = vec3(1.00, 0.85, 0.58);
        vec3 col  = mix(warm, hot, smoothstep(0.0, 1.0, limb));

        // Subtle low-freq plasma — a barely-there brightness wobble (±5%).
        // Single octave at low frequency = no visible "texture", just slow shimmer.
        float wobble = n(vP * 1.5 + vec3(uTime * 0.05, uTime * 0.03, 0.0));
        col *= 0.95 + 0.10 * wobble;

        // Brighten — push toward the headroom.
        col *= 1.05;

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
  const core = new THREE.Mesh(new THREE.SphereGeometry(radius, 96, 96), coreMat)
  group.add(core)

  /* -------------------- Glow planes (true radial bloom, no ring artifacts) -------------------- */
  // Camera-facing planes with 2D radial falloff — bright at center, fades outward.
  // This avoids the backside-sphere "peak at silhouette" ring that plagues 3D bloom.
  const glowVert = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  // Rim bloom — very tight and intense, hugging the silhouette of the disc.
  // This is the "small but strong" light burst right at the sun's surface.
  const rimBloomMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: glowVert,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        float d = clamp(distance(vUv, vec2(0.5)) * 2.0, 0.0, 1.0);
        // Very tight, very hot — concentrates light right at the surface.
        float i = pow(1.0 - d, 1.1);
        vec3 col = vec3(1.00, 0.97, 0.86);
        gl_FragColor = vec4(col * i * 3.0, i);
      }
    `,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    // depthTest ON — same reason as the other bloom layers. Inside the core's
    // silhouette this gets discarded (core is in front), but the core is
    // already bright there, so we don't miss it.
  })
  const rimBloom = new THREE.Mesh(
    new THREE.PlaneGeometry(radius * 1.9, radius * 1.9),
    rimBloomMat,
  )
  rimBloom.renderOrder = 3
  group.add(rimBloom)

  // Surface bloom — sized just slightly larger than the core, so its falloff
  // bleeds just past the silhouette and softens the hard edge of the disc.
  const surfaceBloomMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: glowVert,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        float d = clamp(distance(vUv, vec2(0.5)) * 2.0, 0.0, 1.0);
        // Tight, hot bloom that overlaps the surface and bleeds slightly outside.
        float i = pow(1.0 - d, 1.4);
        vec3 col = vec3(1.00, 0.95, 0.80);
        gl_FragColor = vec4(col * i * 2.0, i * 0.95);
      }
    `,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    // depthTest ON — rings should occlude this halo too. Inside the core's
    // silhouette this bloom gets discarded (core is in front), but the core
    // is already bright there so it's not missed.
  })
  const surfaceBloom = new THREE.Mesh(
    new THREE.PlaneGeometry(radius * 2.8, radius * 2.8),
    surfaceBloomMat,
  )
  surfaceBloom.renderOrder = 2
  group.add(surfaceBloom)

  // Inner glow — tight bright bloom hugging the disc
  const innerGlowMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: glowVert,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        // Distance from center of plane (0..1).
        float d = clamp(distance(vUv, vec2(0.5)) * 2.0, 0.0, 1.0);
        // Bright, fairly tight — concentrates light right around the star.
        float i = pow(1.0 - d, 1.8);
        vec3 col = vec3(1.00, 0.95, 0.82);
        gl_FragColor = vec4(col * i * 2.2, i);
      }
    `,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    // depthTest stays ON so opaque rings/objects in front of the star can
    // properly occlude this halo (otherwise additive bloom passes through
    // them and the rings look translucent).
  })
  const innerGlow = new THREE.Mesh(new THREE.PlaneGeometry(radius * 5.0, radius * 5.0), innerGlowMat)
  innerGlow.renderOrder = 1
  group.add(innerGlow)

  // Outer corona — wide warm atmospheric falloff into space.
  // Sized to fit comfortably within the canvas viewport so the falloff hits
  // zero before reaching the container edges (no visible square clipping).
  // Slightly softer falloff + boosted intensity to keep the perceived reach.
  const coronaMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: glowVert,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        float d = clamp(distance(vUv, vec2(0.5)) * 2.0, 0.0, 1.0);
        float i = pow(1.0 - d, 1.9);
        vec3 col = vec3(1.0, 0.78, 0.50);
        gl_FragColor = vec4(col * i * 2.4, i * 1.0);
      }
    `,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    // depthTest stays ON for the same reason as innerGlow — rings should
    // occlude this corona instead of glowing through them.
  })
  const corona = new THREE.Mesh(new THREE.PlaneGeometry(radius * 5.5, radius * 5.5), coronaMat)
  corona.renderOrder = 0
  group.add(corona)

  return {
    group,
    update(time: number) {
      const t = time * speed
      coreMat.uniforms.uTime.value = t
      rimBloomMat.uniforms.uTime.value = t
      surfaceBloomMat.uniforms.uTime.value = t
      innerGlowMat.uniforms.uTime.value = t
      coronaMat.uniforms.uTime.value = t
    },
  }
}
