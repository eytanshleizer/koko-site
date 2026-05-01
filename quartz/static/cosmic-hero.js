import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";

const canvas = document.getElementById("cosmic-canvas");
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // === STARFIELD ===
  const starCount = 900;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 100;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.14,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  // === SOFT GLOWING SPHERE (Kimi-style) ===
  const sphereGroup = new THREE.Group();

  const bodyGeo = new THREE.SphereGeometry(1.55, 96, 96);
  const bodyMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      colorA: { value: new THREE.Color(0x0a0a18) },
      colorB: { value: new THREE.Color(0x1a1432) },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 colorA;
      uniform vec3 colorB;
      varying vec3 vNormal;
      void main() {
        float lambert = max(dot(vNormal, normalize(vec3(0.6, 0.7, 0.8))), 0.0);
        vec3 base = mix(colorA, colorB, lambert);
        gl_FragColor = vec4(base, 1.0);
      }
    `,
  });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  sphereGroup.add(body);

  const rimGeo = new THREE.SphereGeometry(1.62, 96, 96);
  const rimMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(0xa855f7) },
      color2: { value: new THREE.Color(0x22d3ee) },
      color3: { value: new THREE.Color(0xe879f9) },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      varying vec3 vNormal;
      void main() {
        float fres = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.4);
        float t = sin(time * 0.4) * 0.5 + 0.5;
        vec3 c = mix(color1, color2, t);
        c = mix(c, color3, smoothstep(0.6, 1.0, fres));
        gl_FragColor = vec4(c, fres * 0.95);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
    depthWrite: false,
  });
  const rim = new THREE.Mesh(rimGeo, rimMat);
  sphereGroup.add(rim);

  const haloGeo = new THREE.SphereGeometry(2.6, 64, 64);
  const haloMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(0x6d28d9) },
      color2: { value: new THREE.Color(0x0891b2) },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        vec3 col = mix(color1, color2, sin(time * 0.5) * 0.5 + 0.5);
        gl_FragColor = vec4(col, intensity * 0.32);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const halo = new THREE.Mesh(haloGeo, haloMat);
  sphereGroup.add(halo);

  scene.add(sphereGroup);

  function createOrbit(radius, color, opacity, tilt) {
    const orbitGeometry = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 192);
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2 + tilt;
    return orbit;
  }
  const orbit1 = createOrbit(2.6, 0xa855f7, 0.18, 0.3);
  const orbit2 = createOrbit(3.3, 0x22d3ee, 0.13, -0.2);
  const orbit3 = createOrbit(4.1, 0xe879f9, 0.09, 0.5);
  scene.add(orbit1, orbit2, orbit3);

  const orbitingParticles = [];
  function createOrbitingParticle(radius, speed, color, size, phase) {
    const geometry = new THREE.SphereGeometry(size, 24, 24);
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const particle = new THREE.Mesh(geometry, material);
    const particleGlow = new THREE.Mesh(
      new THREE.SphereGeometry(size * 2.2, 16, 16),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22 }),
    );
    particle.add(particleGlow);
    scene.add(particle);
    orbitingParticles.push({
      mesh: particle,
      radius,
      speed,
      phase,
      tiltX: Math.random() * 0.5 - 0.25,
    });
  }
  createOrbitingParticle(2.6, 0.3, 0xa855f7, 0.08, 0);
  createOrbitingParticle(3.3, 0.2, 0x22d3ee, 0.1, Math.PI * 0.7);
  createOrbitingParticle(4.1, 0.15, 0xe879f9, 0.06, Math.PI * 1.3);
  createOrbitingParticle(3.3, 0.25, 0xfbbf24, 0.05, Math.PI * 0.3);

  const dustCount = 220;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3] = (Math.random() - 0.5) * 30;
    dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
  const dustMaterial = new THREE.PointsMaterial({
    color: 0xa855f7,
    size: 0.07,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true,
  });
  const dust = new THREE.Points(dustGeometry, dustMaterial);
  scene.add(dust);

  camera.position.z = 7.5;
  camera.position.y = 0.6;

  let mx = 0,
    my = 0,
    tx = 0,
    ty = 0;
  document.addEventListener("mousemove", (e) => {
    tx = (e.clientX / window.innerWidth - 0.5) * 2;
    ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;
    mx += (tx - mx) * 0.02;
    my += (ty - my) * 0.02;

    sphereGroup.rotation.y += 0.0018;
    sphereGroup.rotation.x += 0.0008;

    rimMat.uniforms.time.value = time;
    haloMat.uniforms.time.value = time;
    halo.scale.setScalar(1 + Math.sin(time * 1.4) * 0.03);

    orbit1.rotation.z += 0.001;
    orbit2.rotation.z -= 0.0008;
    orbit3.rotation.z += 0.0005;

    orbitingParticles.forEach((p) => {
      const angle = time * p.speed + p.phase;
      p.mesh.position.x = Math.cos(angle) * p.radius;
      p.mesh.position.z = Math.sin(angle) * p.radius;
      p.mesh.position.y = Math.sin(angle * 2) * p.tiltX * p.radius;
    });

    stars.rotation.y += 0.00009;
    stars.rotation.x += 0.00004;
    dust.rotation.y += 0.00028;
    dust.rotation.x += 0.00009;

    camera.position.x = mx * 1.4;
    camera.position.y = 0.6 - my * 0.7;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// === GSAP SCROLL REVEALS ===
const gsap1 = document.createElement("script");
gsap1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
gsap1.onload = () => {
  const gsap2 = document.createElement("script");
  gsap2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
  gsap2.onload = () => {
    // eslint-disable-next-line no-undef
    gsap.registerPlugin(ScrollTrigger);
    // eslint-disable-next-line no-undef
    gsap.utils.toArray(".reveal-cosmic").forEach((el) => {
      // eslint-disable-next-line no-undef
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        },
      );
    });
    // eslint-disable-next-line no-undef
    gsap.fromTo(
      ".domain-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".domains-grid", start: "top 80%" },
      },
    );
    // eslint-disable-next-line no-undef
    gsap.fromTo(
      ".trajectory-card",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".trajectory-grid", start: "top 85%" },
      },
    );
    // eslint-disable-next-line no-undef
    gsap.fromTo(
      ".featured-triptych",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".featured-triptych", start: "top 85%" },
      },
    );
  };
  document.head.appendChild(gsap2);
};
document.head.appendChild(gsap1);
