---
title: Eytan Shleizer
---

<style>
  /* Hero Canvas */
  .hero-canvas-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }
  
  #hero-canvas {
    width: 100%;
    height: 100%;
  }
  
  /* Hero Container */
  .hero-container {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 4rem;
    position: relative;
  }
  
  /* Gradient Animated Text */
  .gradient-text {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(48px, 12vw, 96px);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
    margin: 0;
    padding-bottom: 0 !important;
    border-bottom: none !important;
    background: linear-gradient(135deg, #00d4aa 0%, #a855f7 50%, #00e5ff 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 8s ease infinite;
  }
  
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  /* Tagline */
  .hero-tagline-new {
    font-family: "JetBrains Mono", monospace;
    font-size: clamp(14px, 2vw, 18px);
    color: #a8a8a8;
    margin: 1rem 0 2.5rem;
    letter-spacing: 0.02em;
  }
  
  .hero-tagline-new span {
    color: #6a6a6a;
  }
  
  /* CTA Buttons */
  .hero-cta-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    background: #00d4aa;
    color: #000 !important;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none !important;
    border-radius: 999px;
    border: none;
    transition: all 0.25s ease;
    box-shadow: 0 0 0 rgba(0, 212, 170, 0);
  }
  
  .btn-primary:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(0, 212, 170, 0.4);
    color: #000 !important;
  }
  
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    background: transparent;
    color: #f5f5f5 !important;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none !important;
    border-radius: 999px;
    border: 1px solid #2a2a2a;
    transition: all 0.25s ease;
  }
  
  .btn-secondary:hover {
    border-color: #00d4aa;
    color: #00d4aa !important;
    transform: scale(1.02);
  }
  
  /* Section Styling */
  .section-heading {
    font-family: "Space Grotesk", sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #6a6a6a;
    margin: 0 0 2rem 0;
  }
  
  /* What I Do Grid */
  .what-i-do-section {
    padding: 4rem 0;
    border-top: 1px solid #2a2a2a;
  }
  
  .what-i-do-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  
  .wid-card {
    background: #141414;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
  }
  
  .wid-card:hover {
    border-color: #00d4aa;
  }
  
  .wid-card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .wid-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #f5f5f5;
    margin: 0 0 0.75rem 0;
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }
  
  .wid-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #a8a8a8;
    margin: 0;
  }
  
  /* Explore Grid */
  .explore-section {
    padding: 4rem 0;
    border-top: 1px solid #2a2a2a;
  }
  
  .explore-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .explore-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #141414;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 1.5rem;
    text-decoration: none !important;
    transition: all 0.3s ease;
  }
  
  .explore-card:hover {
    border-color: #00d4aa;
    transform: translateY(-2px);
  }
  
  .explore-card-icon {
    font-size: 1.5rem;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 170, 0.1);
    border-radius: 10px;
  }
  
  .explore-card-text h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #f5f5f5;
    margin: 0 0 0.25rem 0;
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }
  
  .explore-card-text p {
    font-family: "Inter", sans-serif;
    font-size: 0.85rem;
    color: #6a6a6a;
    margin: 0;
  }
  
  /* GSAP scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
  }
  
  /* Mobile */
  @media (max-width: 600px) {
    .hero-container {
      min-height: 70vh;
      padding: 1rem 0 3rem;
    }
    .hero-cta-row {
      flex-direction: column;
    }
    .btn-primary, .btn-secondary {
      justify-content: center;
    }
  }
</style>

<div class="hero-canvas-wrapper">
  <canvas id="hero-canvas"></canvas>
</div>

<div class="hero-container">
  <h1 class="gradient-text">Eytan Shleizer</h1>
  <p class="hero-tagline-new">Solutions Engineer <span>·</span> AI Builder <span>·</span> Thinker</p>
  <div class="hero-cta-row">
    <a href="./posts" class="btn-primary">Read the Blog →</a>
    <a href="./skills" class="btn-secondary">View Skills</a>
  </div>
</div>

<div class="what-i-do-section reveal">
  <p class="section-heading">What I Do</p>
  <div class="what-i-do-grid">
    <div class="wid-card">
      <div class="wid-card-icon">🏗️</div>
      <h3>Solutions Engineering</h3>
      <p>Bridging business problems and technical architecture. Discovery, demos, proofs-of-concept, and designs that actually ship.</p>
    </div>
    <div class="wid-card">
      <div class="wid-card-icon">🤖</div>
      <h3>AI Deployment</h3>
      <p>Helping enterprises move from AI curiosity to production systems. LLMs, RAG pipelines, agents, and the glue that holds it together.</p>
    </div>
    <div class="wid-card">
      <div class="wid-card-icon">🔨</div>
      <h3>Building Products</h3>
      <p>Internal tools, automation, and AI-native workflows. I build things when the off-the-shelf options don't cut it.</p>
    </div>
  </div>
</div>

<div class="explore-section reveal">
  <p class="section-heading">Explore</p>
  <div class="explore-grid">
    <a href="./about" class="explore-card">
      <div class="explore-card-icon">👤</div>
      <div class="explore-card-text">
        <h3>About</h3>
        <p>Who I am</p>
      </div>
    </a>
    <a href="./skills" class="explore-card">
      <div class="explore-card-icon">⚡</div>
      <div class="explore-card-text">
        <h3>Skills</h3>
        <p>What I work with</p>
      </div>
    </a>
    <a href="./posts" class="explore-card">
      <div class="explore-card-icon">📝</div>
      <div class="explore-card-text">
        <h3>Blog</h3>
        <p>Thoughts & writing</p>
      </div>
    </a>
  </div>
</div>

<script type="module">
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

// Three.js Particle System
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Particles
  const particleCount = 120;
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    velocities.push({
      x: (Math.random() - 0.5) * 0.005,
      y: (Math.random() - 0.5) * 0.005,
      z: (Math.random() - 0.5) * 0.005
    });
  }
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const material = new THREE.PointsMaterial({
    color: 0x00d4aa,
    size: 0.05,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);
  
  // Lines between nearby particles
  const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0x00d4aa, 
    transparent: true, 
    opacity: 0.15 
  });
  
  camera.position.z = 5;
  
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  
  function animate() {
    requestAnimationFrame(animate);
    
    const posAttr = geometry.attributes.position;
    for (let i = 0; i < particleCount; i++) {
      posAttr.array[i * 3] += velocities[i].x;
      posAttr.array[i * 3 + 1] += velocities[i].y;
      posAttr.array[i * 3 + 2] += velocities[i].z;
      
      // Wrap around
      for (let j = 0; j < 3; j++) {
        if (posAttr.array[i * 3 + j] > 5) posAttr.array[i * 3 + j] = -5;
        if (posAttr.array[i * 3 + j] < -5) posAttr.array[i * 3 + j] = 5;
      }
    }
    posAttr.needsUpdate = true;
    
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0002;
    
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// GSAP Scroll Reveals
const gsapScript = document.createElement('script');
gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
gsapScript.onload = () => {
  const scrollScript = document.createElement('script');
  scrollScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
  scrollScript.onload = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  };
  document.head.appendChild(scrollScript);
};
document.head.appendChild(gsapScript);
</script>
