---
title: Experiments
---

<style>
  .experiments-intro {
    font-family: "Inter", sans-serif;
    font-size: 1.15rem;
    line-height: 1.7;
    color: #a8a8a8;
    max-width: 640px;
    margin: 0 0 3rem;
  }
  .experiments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.25rem;
  }
  .experiment-card {
    position: relative;
    display: block;
    text-decoration: none !important;
    background: rgba(20, 20, 20, 0.55);
    border: 1px solid rgba(34, 211, 238, 0.18);
    border-radius: 16px;
    padding: 0;
    overflow: hidden;
    transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
  }
  .experiment-card:hover {
    transform: translateY(-3px);
    border-color: rgba(34, 211, 238, 0.55);
    box-shadow: 0 18px 50px rgba(34, 211, 238, 0.12);
  }
  .experiment-thumb {
    aspect-ratio: 16 / 9;
    background:
      radial-gradient(circle at 30% 35%, rgba(168, 85, 247, 0.45), transparent 55%),
      radial-gradient(circle at 75% 70%, rgba(34, 211, 238, 0.4), transparent 60%),
      #06060a;
  }
  .experiment-body {
    padding: 1.25rem 1.5rem 1.4rem;
  }
  .experiment-kind {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #e879f9;
    margin-bottom: 0.6rem;
  }
  .experiment-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #f5f5f5 !important;
    margin: 0 0 0.5rem !important;
    border: none !important;
    padding: 0 !important;
  }
  .experiment-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #8a8a9a;
    margin: 0;
  }
</style>

<p class="experiments-intro">
Live, embedded prototypes. Some are toys, some are tools, all are mine. Each is a small bet on an idea I wanted to feel rather than describe.
</p>

<div class="experiments-grid">

<a href="./signal-pool" class="experiment-card">
  <div class="experiment-thumb"></div>
  <div class="experiment-body">
    <div class="experiment-kind">Interactive · WebGL</div>
    <h3>Signal Pool</h3>
    <p>A reactive field of light particles that respond to attention. A study in ambient interfaces and slow feedback loops.</p>
  </div>
</a>

</div>
