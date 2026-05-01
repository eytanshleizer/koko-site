---
title: Skills
---

<style>
  .skills-intro {
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #a8a8a8;
    max-width: 640px;
    margin-bottom: 3rem;
  }
  
  .skill-section {
    margin-bottom: 2.5rem;
  }
  
  .skill-section-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  
  .skill-section-icon {
    font-size: 1.5rem;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 170, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(0, 212, 170, 0.2);
  }
  
  .skill-section-title {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: #f5f5f5;
    margin: 0;
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }
  
  .skill-card {
    background: #141414;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 1.5rem;
    transition: border-color 0.3s ease;
  }
  
  .skill-card:hover {
    border-color: #00d4aa;
  }
  
  .skill-card p {
    font-family: "Inter", sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #a8a8a8;
    margin: 0 0 1rem 0;
  }
  
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;
    background: rgba(0, 212, 170, 0.08);
    border: 1px solid rgba(0, 212, 170, 0.2);
    border-radius: 4px;
    color: #00d4aa;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 700px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<p class="skills-intro">
The tools and domains I work in most. My focus is usually on the messy intersection—where cloud infrastructure meets AI, where technical architecture meets business requirements, where prototypes become production systems.
</p>

<div class="skills-grid">

<div class="skill-section">
  <div class="skill-section-header">
    <div class="skill-section-icon">☁️</div>
    <h2 class="skill-section-title">Cloud & Infrastructure</h2>
  </div>
  <div class="skill-card">
    <p>Multi-cloud architecture, containerization, and infrastructure as code. I design systems that scale and actually stay running.</p>
    <div class="skill-tags">
      <span class="skill-tag">AWS</span>
      <span class="skill-tag">Azure</span>
      <span class="skill-tag">GCP</span>
      <span class="skill-tag">Kubernetes</span>
      <span class="skill-tag">Terraform</span>
      <span class="skill-tag">Docker</span>
    </div>
  </div>
</div>

<div class="skill-section">
  <div class="skill-section-header">
    <div class="skill-section-icon">🤖</div>
    <h2 class="skill-section-title">AI & Agents</h2>
  </div>
  <div class="skill-card">
    <p>LLM integration, RAG pipelines, agent frameworks, and the infrastructure to make AI useful in production. Focused on systems that keep humans in control.</p>
    <div class="skill-tags">
      <span class="skill-tag">LLMs</span>
      <span class="skill-tag">RAG</span>
      <span class="skill-tag">Claude</span>
      <span class="skill-tag">OpenAI</span>
      <span class="skill-tag">LangChain</span>
      <span class="skill-tag">OpenClaw</span>
      <span class="skill-tag">Agents</span>
    </div>
  </div>
</div>

<div class="skill-section">
  <div class="skill-section-header">
    <div class="skill-section-icon">🏗️</div>
    <h2 class="skill-section-title">Solution Engineering</h2>
  </div>
  <div class="skill-card">
    <p>The full cycle from discovery to deployment. Understanding what customers actually need, designing solutions that fit, and proving they work.</p>
    <div class="skill-tags">
      <span class="skill-tag">Technical Discovery</span>
      <span class="skill-tag">Architecture</span>
      <span class="skill-tag">POCs</span>
      <span class="skill-tag">Technical Demos</span>
      <span class="skill-tag">RFP Response</span>
    </div>
  </div>
</div>

<div class="skill-section">
  <div class="skill-section-header">
    <div class="skill-section-icon">🔨</div>
    <h2 class="skill-section-title">Building</h2>
  </div>
  <div class="skill-card">
    <p>Products, automation, and internal tools. When the off-the-shelf options don't cut it, I prototype fast and iterate until it works.</p>
    <div class="skill-tags">
      <span class="skill-tag">TypeScript</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">Node.js</span>
      <span class="skill-tag">Automation</span>
      <span class="skill-tag">Internal Tools</span>
      <span class="skill-tag">AI Workflows</span>
    </div>
  </div>
</div>

</div>
