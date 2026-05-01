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
    background:
      radial-gradient(ellipse at 28% 18%, rgba(88, 28, 135, 0.22) 0%, transparent 55%),
      radial-gradient(ellipse at 72% 82%, rgba(6, 182, 212, 0.14) 0%, transparent 45%),
      radial-gradient(ellipse at 50% 50%, rgba(219, 39, 119, 0.08) 0%, transparent 60%),
      #000000;
  }
  #cosmic-canvas { width: 100%; height: 100%; display: block; }

  /* ===== HERO SECTION ===== */
  .hero-cosmos {
    min-height: 86vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 4rem 0 6rem;
    position: relative;
  }

  .hero-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: #a855f7;
    margin-bottom: 1.5rem;
    opacity: 0.92;
  }

  .hero-name-cosmic {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(56px, 13vw, 132px);
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
    animation: cosmic-gradient 14s ease infinite;
  }

  @keyframes cosmic-gradient {
    0%, 100% { background-position: 0% 50%; }
    50%      { background-position: 100% 50%; }
  }

  .hero-tagline-cosmic {
    font-family: "Inter", sans-serif;
    font-size: clamp(1.05rem, 2.4vw, 1.35rem);
    color: #b4b4c0;
    margin: 1.75rem 0 2.5rem;
    max-width: 560px;
    line-height: 1.7;
  }
  .hero-tagline-cosmic strong { color: #f5f5f5; font-weight: 600; }

  .hero-cta-cosmos { display: flex; gap: 1rem; flex-wrap: wrap; }

  .btn-cosmic-primary {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.95rem 2.1rem;
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    color: #fff !important;
    font-family: "Inter", sans-serif; font-size: 0.98rem; font-weight: 600;
    text-decoration: none !important;
    border-radius: 999px;
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
    transition: transform 240ms ease, box-shadow 240ms ease;
  }
  .btn-cosmic-primary:hover {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 0 50px rgba(168, 85, 247, 0.5), 0 0 80px rgba(236, 72, 153, 0.3);
    color: #fff !important;
  }

  .btn-cosmic-secondary {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.95rem 2.1rem;
    background: transparent;
    color: #e0e0e0 !important;
    font-family: "Inter", sans-serif; font-size: 0.98rem; font-weight: 500;
    text-decoration: none !important;
    border-radius: 999px;
    border: 1px solid rgba(168, 85, 247, 0.4);
    transition: all 240ms ease;
  }
  .btn-cosmic-secondary:hover {
    border-color: #a855f7;
    color: #a855f7 !important;
    background: rgba(168, 85, 247, 0.08);
  }

  /* ===== PHILOSOPHY ===== */
  .philosophy-section {
    padding: 7rem 0 5rem;
    border-top: 1px solid rgba(168, 85, 247, 0.15);
  }
  .section-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: #22d3ee;
    margin-bottom: 1.25rem;
  }
  .philosophy-headline {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(1.9rem, 4.6vw, 3.2rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: #f5f5f5;
    margin: 0 0 1.75rem 0;
    max-width: 760px;
    border: none !important;
    padding: 0 !important;
  }
  .philosophy-headline .accent-cyan    { color: #22d3ee; }
  .philosophy-headline .accent-magenta { color: #e879f9; }
  .philosophy-text {
    font-family: "Inter", sans-serif;
    font-size: 1.05rem;
    line-height: 1.75;
    color: #a8a8a8;
    max-width: 620px;
    margin-bottom: 2.75rem;
  }

  .domains-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
    margin-top: 2rem;
  }
  .domain-card {
    background: rgba(20, 20, 20, 0.55);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(168, 85, 247, 0.2);
    border-radius: 16px;
    padding: 1.75rem;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .domain-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, #a855f7, #22d3ee, transparent);
    opacity: 0; transition: opacity 0.4s ease;
  }
  .domain-card:hover {
    border-color: rgba(168, 85, 247, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.15);
  }
  .domain-card:hover::before { opacity: 1; }
  .domain-icon { font-size: 1.85rem; margin-bottom: 1rem; display: block; }
  .domain-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.25rem; font-weight: 700;
    color: #f5f5f5; margin: 0 0 0.5rem 0;
    border: none !important; padding: 0 !important;
  }
  .domain-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.93rem; line-height: 1.6; color: #8a8a9a; margin: 0;
  }

  /* ===== TRAJECTORY ===== */
  .trajectory-section {
    padding: 5rem 0 0;
    border-top: 1px solid rgba(34, 211, 238, 0.15);
  }
  .trajectory-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.75rem;
  }
  .trajectory-card {
    display: flex; align-items: center; gap: 1rem;
    background: rgba(20, 20, 20, 0.4);
    border: 1px solid rgba(34, 211, 238, 0.15);
    border-radius: 12px;
    padding: 1.1rem 1.4rem;
    text-decoration: none !important;
    transition: all 0.3s ease;
  }
  .trajectory-card:hover {
    border-color: #22d3ee;
    background: rgba(34, 211, 238, 0.05);
    transform: translateX(4px);
  }
  .trajectory-icon {
    width: 42px; height: 42px;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(34, 211, 238, 0.2));
    border-radius: 10px;
    font-size: 1.2rem; color: #f5f5f5;
  }
  .trajectory-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.98rem; font-weight: 600;
    color: #f5f5f5; margin: 0 0 0.15rem 0;
    border: none !important; padding: 0 !important;
  }
  .trajectory-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.78rem; color: #6a6a6a; margin: 0;
  }
  .trajectory-card {
    background: rgba(12, 12, 18, 0.82) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  /* ===== HIDE AUTOLINK HEADING ICONS ON HOMEPAGE ===== */
  .hero-cosmos a[role=anchor],
  .philosophy-section a[role=anchor],
  .trajectory-section a[role=anchor],
  .domain-card a[role=anchor] { display: none !important; }

  /* ===== REVEAL ===== */
  .reveal-cosmic { opacity: 0; transform: translateY(40px); }

  @media (max-width: 768px) {
    .hero-cosmos { min-height: 78vh; padding: 2rem 0 4rem; }
    .hero-cta-cosmos { flex-direction: column; width: 100%; }
    .btn-cosmic-primary, .btn-cosmic-secondary { justify-content: center; width: 100%; }
    .philosophy-section, .trajectory-section { padding: 4rem 0; }
  }
</style>

<div class="cosmic-canvas-wrapper">
  <canvas id="cosmic-canvas"></canvas>
</div>

<div class="hero-cosmos">
  <span class="hero-label">Explorer · Thinker · Builder</span>
  <h1 class="hero-name-cosmic">Eytan<br/>Shleizer</h1>
  <p class="hero-tagline-cosmic">
    I explore <strong>problems worth solving</strong> — how they emerge, evolve, and resist easy answers.
    Thinking deeply about AI, futures design, and the shape of what's coming.
  </p>
  <div class="hero-cta-cosmos">
    <a href="./posts" class="btn-cosmic-primary">Read the blog →</a>
    <a href="./experiments" class="btn-cosmic-secondary">See experiments</a>
  </div>
</div>

<div class="philosophy-section reveal-cosmic">
  <span class="section-label">What I think about</span>
  <h2 class="philosophy-headline">
    Problems are <span class="accent-cyan">territories</span>, not puzzles.<br/>
    The future is <span class="accent-magenta">designed</span>, not predicted.
  </h2>
  <p class="philosophy-text">
    Most problems worth working on can't be solved — they can only be explored, understood, and navigated.
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
      <h3>AI &amp; Intelligence</h3>
      <p>Beyond the hype cycle — what AI actually enables, where it breaks, and how to build things that work.</p>
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
    <a href="./posts" class="trajectory-card">
      <div class="trajectory-icon">◉</div>
      <div><h3>Blog</h3><p>Essays &amp; explorations</p></div>
    </a>
    <a href="./instruments" class="trajectory-card">
      <div class="trajectory-icon">◇</div>
      <div><h3>Instruments</h3><p>Skills &amp; tools I build</p></div>
    </a>
    <a href="./experiments" class="trajectory-card">
      <div class="trajectory-icon">◈</div>
      <div><h3>Experiments</h3><p>Live, embedded prototypes</p></div>
    </a>
    <a href="./about" class="trajectory-card">
      <div class="trajectory-icon">◐</div>
      <div><h3>About</h3><p>Background &amp; context</p></div>
    </a>
  </div>
</div>


<script type="module" src="static/cosmic-hero.js"></script>
