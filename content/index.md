---
title: Eytan Shleizer
---

<style>
  /* ===== COSMIC HERO CANVAS ===== */
  .cosmic-canvas-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
    background: radial-gradient(ellipse at 30% 20%, rgba(88, 28, 135, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 40%),
                radial-gradient(ellipse at 50% 50%, rgba(219, 39, 119, 0.08) 0%, transparent 60%),
                #000000;
  }
  
  #cosmic-canvas {
    width: 100%;
    height: 100%;
  }
  
  /* ===== HERO SECTION ===== */
  .hero-cosmos {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 6rem 0;
    position: relative;
  }
  
  .hero-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #a855f7;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
  
  .hero-name-cosmic {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(56px, 14vw, 140px);
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 0.95;
    margin: 0;
    padding: 0 !important;
    border: none !important;
    background: linear-gradient(135deg, #f5f5f5 0%, #e879f9 30%, #22d3ee 60%, #f5f5f5 100%);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: cosmic-gradient 12s ease infinite;
  }
  
  @keyframes cosmic-gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .hero-tagline-cosmic {
    font-family: "Inter", sans-serif;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 400;
    color: #a8a8a8;
    margin: 2rem 0 3rem;
    max-width: 540px;
    line-height: 1.7;
  }
  
  .hero-tagline-cosmic strong {
    color: #f5f5f5;
    font-weight: 600;
  }
  
  .hero-cta-cosmos {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .btn-cosmic-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2.25rem;
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    color: #fff !important;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none !important;
    border-radius: 999px;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
  }
  
  .btn-cosmic-primary:hover {
    transform: scale(1.03);
    box-shadow: 0 0 50px rgba(168, 85, 247, 0.5), 0 0 80px rgba(236, 72, 153, 0.3);
    color: #fff !important;
  }
  
  .btn-cosmic-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2.25rem;
    background: transparent;
    color: #e0e0e0 !important;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none !important;
    border-radius: 999px;
    border: 1px solid rgba(168, 85, 247, 0.4);
    transition: all 0.3s ease;
  }
  
  .btn-cosmic-secondary:hover {
    border-color: #a855f7;
    color: #a855f7 !important;
    background: rgba(168, 85, 247, 0.08);
    transform: scale(1.02);
  }
  
  /* ===== SCROLL INDICATOR ===== */
  .scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #6a6a6a;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    animation: pulse-down 2s ease-in-out infinite;
  }
  
  .scroll-indicator::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, #6a6a6a, transparent);
  }
  
  @keyframes pulse-down {
    0%, 100% { opacity: 0.5; transform: translateX(-50%) translateY(0); }
    50% { opacity: 1; transform: translateX(-50%) translateY(5px); }
  }
  
  /* ===== PHILOSOPHY SECTION ===== */
  .philosophy-section {
    padding: 8rem 0 6rem;
    border-top: 1px solid rgba(168, 85, 247, 0.15);
  }
  
  .section-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #22d3ee;
    margin-bottom: 1.5rem;
  }
  
  .philosophy-headline {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: #f5f5f5;
    margin: 0 0 2rem 0;
    max-width: 720px;
    border: none !important;
    padding: 0 !important;
  }
  
  .philosophy-headline .accent-cyan {
    color: #22d3ee;
  }
  
  .philosophy-headline .accent-magenta {
    color: #e879f9;
  }
  
  .philosophy-text {
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #a8a8a8;
    max-width: 600px;
    margin-bottom: 3rem;
  }
  
  /* ===== DOMAINS GRID ===== */
  .domains-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }
  
  .domain-card {
    background: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(168, 85, 247, 0.2);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  
  .domain-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #a855f7, #22d3ee, transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .domain-card:hover {
    border-color: rgba(168, 85, 247, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.15);
  }
  
  .domain-card:hover::before {
    opacity: 1;
  }
  
  .domain-icon {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: block;
  }
  
  .domain-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: #f5f5f5;
    margin: 0 0 0.75rem 0;
    border: none !important;
    padding: 0 !important;
  }
  
  .domain-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.95rem;
    line-height: 1.65;
    color: #8a8a9a;
    margin: 0;
  }
  
  /* ===== TRAJECTORY SECTION ===== */
  .trajectory-section {
    padding: 6rem 0;
    border-top: 1px solid rgba(34, 211, 238, 0.15);
  }
  
  .trajectory-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.25rem;
    margin-top: 2rem;
  }
  
  .trajectory-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(20, 20, 20, 0.4);
    border: 1px solid rgba(34, 211, 238, 0.15);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    text-decoration: none !important;
    transition: all 0.3s ease;
  }
  
  .trajectory-card:hover {
    border-color: #22d3ee;
    background: rgba(34, 211, 238, 0.05);
    transform: translateX(4px);
  }
  
  .trajectory-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(34, 211, 238, 0.2));
    border-radius: 10px;
    font-size: 1.25rem;
  }
  
  .trajectory-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #f5f5f5;
    margin: 0 0 0.2rem 0;
    border: none !important;
    padding: 0 !important;
  }
  
  .trajectory-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    color: #6a6a6a;
    margin: 0;
  }
  
  /* ===== RECENT POSTS ===== */
  .posts-section {
    padding: 6rem 0 4rem;
    border-top: 1px solid rgba(232, 121, 249, 0.15);
  }
  
  /* ===== REVEAL ANIMATION ===== */
  .reveal-cosmic {
    opacity: 0;
    transform: translateY(40px);
  }
  
  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    .hero-cosmos {
      min-height: 90vh;
      padding: 4rem 0;
    }
    
    .hero-cta-cosmos {
      flex-direction: column;
      width: 100%;
    }
    
    .btn-cosmic-primary,
    .btn-cosmic-secondary {
      justify-content: center;
      width: 100%;
    }
    
    .philosophy-section,
    .trajectory-section,
    .posts-section {
      padding: 4rem 0;
    }
    
    .scroll-indicator {
      display: none;
    }
  }
</style>

<div class="cosmic-canvas-wrapper">
  <canvas id="cosmic-canvas"></canvas>
</div>

<div class="hero-cosmos">
  <span class="hero-label">Explorer · Thinker · Builder</span>
  <h1 class="hero-name-cosmic">Eytan<br/>Shleizer</h1>
  <p class="hero-tagline-cosmic">
    I explore <strong>problems worth solving</strong>—how they emerge, evolve, and resist easy answers. 
    Thinking deeply about AI, futures design, and the shape of what's coming.
  </p>
  <div class="hero-cta-cosmos">
    <a href="./posts" class="btn-cosmic-primary">Explore Writing →</a>
    <a href="./about" class="btn-cosmic-secondary">About Me</a>
  </div>
  <div class="scroll-indicator">Scroll</div>
</div>

<div class="philosophy-section reveal-cosmic">
  <span class="section-label">What I Think About</span>
  <h2 class="philosophy-headline">
    Problems are <span class="accent-cyan">territories</span>, not puzzles.<br/>
    The future is <span class="accent-magenta">designed</span>, not predicted.
  </h2>
  <p class="philosophy-text">
    Most problems worth working on can't be solved—they can only be explored, understood, and navigated. 
    I'm drawn to the hard questions: how do we think clearly about systems too complex to model? 
    What does AI actually change about how we work and create? Where is all this going?
  </p>
  
  <div class="domains-grid">
    <div class="domain-card">
      <span class="domain-icon">🌀</span>
      <h3>Problem Exploration</h3>
      <p>Mapping the structure of hard problems. Understanding why some questions resist answers, and what to do about it.</p>
    </div>
    <div class="domain-card">
      <span class="domain-icon">🤖</span>
      <h3>AI & Intelligence</h3>
      <p>Beyond the hype cycle—what AI actually enables, where it breaks, and how to build things that work.</p>
    </div>
    <div class="domain-card">
      <span class="domain-icon">🔮</span>
      <h3>Futures Design</h3>
      <p>The future isn't something that happens to us. It's something we shape through the choices we make now.</p>
    </div>
    <div class="domain-card">
      <span class="domain-icon">🧠</span>
      <h3>Deep Thinking</h3>
      <p>Cultivating the capacity for sustained attention. Thinking that goes somewhere instead of spinning in place.</p>
    </div>
  </div>
</div>

<div class="trajectory-section reveal-cosmic">
  <span class="section-label">Navigate</span>
  <div class="trajectory-grid">
    <a href="./about" class="trajectory-card">
      <div class="trajectory-icon">◐</div>
      <div>
        <h3>About</h3>
        <p>Background & context</p>
      </div>
    </a>
    <a href="./posts" class="trajectory-card">
      <div class="trajectory-icon">◉</div>
      <div>
        <h3>Writing</h3>
        <p>Essays & explorations</p>
      </div>
    </a>
    <a href="./skills" class="trajectory-card">
      <div class="trajectory-icon">◈</div>
      <div>
        <h3>Skills</h3>
        <p>What I work with</p>
      </div>
    </a>
  </div>
</div>

<div class="posts-section reveal-cosmic">
  <span class="section-label">Recent Transmissions</span>
</div>

<script type="module">
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

const canvas = document.getElementById('cosmic-canvas');
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // === STARFIELD ===
  const starCount = 800;
  const starPositions = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);
  
  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 100;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    starSizes[i] = Math.random() * 2 + 0.5;
  }
  
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
  
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.15,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  
  // === CENTRAL SPHERE (Planet) ===
  const sphereGeometry = new THREE.IcosahedronGeometry(1.5, 4);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x1a1a2e,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);
  
  // === SPHERE GLOW (Aura) ===
  const glowGeometry = new THREE.SphereGeometry(1.8, 32, 32);
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(0xa855f7) },
      color2: { value: new THREE.Color(0x22d3ee) }
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
        vec3 color = mix(color1, color2, sin(time * 0.5) * 0.5 + 0.5);
        gl_FragColor = vec4(color, intensity * 0.4);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  });
  const glow = new THREE.Mesh(glowGeometry, glowMaterial);
  scene.add(glow);
  
  // === ORBITAL RINGS ===
  function createOrbit(radius, color, opacity, tilt) {
    const orbitGeometry = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 128);
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: opacity,
      side: THREE.DoubleSide
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2 + tilt;
    return orbit;
  }
  
  const orbit1 = createOrbit(2.5, 0xa855f7, 0.2, 0.3);
  const orbit2 = createOrbit(3.2, 0x22d3ee, 0.15, -0.2);
  const orbit3 = createOrbit(4.0, 0xe879f9, 0.1, 0.5);
  scene.add(orbit1, orbit2, orbit3);
  
  // === ORBITING PARTICLES (Small planets) ===
  const orbitingParticles = [];
  
  function createOrbitingParticle(radius, speed, color, size, phase) {
    const geometry = new THREE.SphereGeometry(size, 16, 16);
    const material = new THREE.MeshBasicMaterial({ 
      color: color,
      transparent: true,
      opacity: 0.9
    });
    const particle = new THREE.Mesh(geometry, material);
    
    // Glow for particle
    const particleGlow = new THREE.Mesh(
      new THREE.SphereGeometry(size * 2, 16, 16),
      new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.2
      })
    );
    particle.add(particleGlow);
    
    scene.add(particle);
    orbitingParticles.push({ mesh: particle, radius, speed, phase, tiltX: Math.random() * 0.5 - 0.25 });
  }
  
  createOrbitingParticle(2.5, 0.3, 0xa855f7, 0.08, 0);
  createOrbitingParticle(3.2, 0.2, 0x22d3ee, 0.1, Math.PI * 0.7);
  createOrbitingParticle(4.0, 0.15, 0xe879f9, 0.06, Math.PI * 1.3);
  createOrbitingParticle(3.2, 0.25, 0xfbbf24, 0.05, Math.PI * 0.3);
  
  // === TRAJECTORY LINES (Curved paths) ===
  function createTrajectory(points, color) {
    const curve = new THREE.CatmullRomCurve3(points);
    const curvePoints = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const material = new THREE.LineBasicMaterial({ 
      color: color, 
      transparent: true, 
      opacity: 0.15 
    });
    return new THREE.Line(geometry, material);
  }
  
  const trajectory1 = createTrajectory([
    new THREE.Vector3(-8, 2, -5),
    new THREE.Vector3(-3, 1, 0),
    new THREE.Vector3(0, 0, 2),
    new THREE.Vector3(5, -1, 0),
    new THREE.Vector3(10, -2, -5)
  ], 0xa855f7);
  
  const trajectory2 = createTrajectory([
    new THREE.Vector3(8, -3, -8),
    new THREE.Vector3(4, -1, -2),
    new THREE.Vector3(0, 1, 1),
    new THREE.Vector3(-4, 2, -2),
    new THREE.Vector3(-8, 3, -8)
  ], 0x22d3ee);
  
  scene.add(trajectory1, trajectory2);
  
  // === AMBIENT PARTICLES (Dust/nebula) ===
  const dustCount = 200;
  const dustPositions = new Float32Array(dustCount * 3);
  
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3] = (Math.random() - 0.5) * 30;
    dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }
  
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  
  const dustMaterial = new THREE.PointsMaterial({
    color: 0xa855f7,
    size: 0.08,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true
  });
  
  const dust = new THREE.Points(dustGeometry, dustMaterial);
  scene.add(dust);
  
  camera.position.z = 8;
  camera.position.y = 1;
  
  // === MOUSE PARALLAX ===
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  
  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  
  // === ANIMATION LOOP ===
  let time = 0;
  
  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;
    
    // Smooth mouse follow
    mouseX += (targetX - mouseX) * 0.02;
    mouseY += (targetY - mouseY) * 0.02;
    
    // Sphere rotation
    sphere.rotation.y += 0.002;
    sphere.rotation.x += 0.001;
    
    // Glow pulse
    glowMaterial.uniforms.time.value = time;
    glow.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
    
    // Orbital rings rotation
    orbit1.rotation.z += 0.001;
    orbit2.rotation.z -= 0.0008;
    orbit3.rotation.z += 0.0005;
    
    // Orbiting particles
    orbitingParticles.forEach(p => {
      const angle = time * p.speed + p.phase;
      p.mesh.position.x = Math.cos(angle) * p.radius;
      p.mesh.position.z = Math.sin(angle) * p.radius;
      p.mesh.position.y = Math.sin(angle * 2) * p.tiltX * p.radius;
    });
    
    // Stars slow drift
    stars.rotation.y += 0.0001;
    stars.rotation.x += 0.00005;
    
    // Dust drift
    dust.rotation.y += 0.0003;
    dust.rotation.x += 0.0001;
    
    // Camera parallax
    camera.position.x = mouseX * 1.5;
    camera.position.y = 1 - mouseY * 0.8;
    camera.lookAt(0, 0, 0);
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // === RESIZE HANDLER ===
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// === GSAP SCROLL REVEALS ===
const gsapScript = document.createElement('script');
gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
gsapScript.onload = () => {
  const scrollScript = document.createElement('script');
  scrollScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
  scrollScript.onload = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal-cosmic').forEach(el => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
    
    // Staggered domain cards
    gsap.fromTo('.domain-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.domains-grid',
          start: 'top 80%'
        }
      }
    );
    
    // Trajectory cards
    gsap.fromTo('.trajectory-card',
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.trajectory-grid',
          start: 'top 85%'
        }
      }
    );
  };
  document.head.appendChild(scrollScript);
};
document.head.appendChild(gsapScript);
</script>
