---
title: Instruments
---

<style>
  .instruments-intro {
    font-family: "Inter", sans-serif;
    font-size: 1.15rem;
    line-height: 1.7;
    color: #a8a8a8;
    max-width: 640px;
    margin: 0 0 3rem;
  }
  .instruments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.25rem;
  }
  .instrument-card {
    display: block;
    text-decoration: none !important;
    background: rgba(20, 20, 20, 0.55);
    border: 1px solid rgba(168, 85, 247, 0.18);
    border-radius: 16px;
    padding: 1.5rem 1.5rem 1.4rem;
    transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
  }
  .instrument-card:hover {
    transform: translateY(-3px);
    border-color: rgba(168, 85, 247, 0.55);
    box-shadow: 0 18px 50px rgba(168, 85, 247, 0.12);
  }
  .instrument-kind {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #22d3ee;
    margin-bottom: 0.7rem;
  }
  .instrument-card h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #f5f5f5 !important;
    margin: 0 0 0.5rem !important;
    border: none !important;
    padding: 0 !important;
  }
  .instrument-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #8a8a9a;
    margin: 0;
  }
</style>

<p class="instruments-intro">
Things I build. Skills, prompts, agents, and small tools that extend how I think and work. Each is an instrument — sharpened, named, and put back in the case.
</p>

<div class="instruments-grid">

<a href="./problem-cartographer" class="instrument-card">
  <div class="instrument-kind">Claude Skill</div>
  <h3>Problem Cartographer</h3>
  <p>A skill that turns vague problem statements into a navigable map — terrain, edges, unknowns, and the questions worth chasing first.</p>
</a>

</div>
