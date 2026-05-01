# 06 — Roadmap and Open Questions: From Concept to Reality

The preceding five documents describe what an AI-native solution consultancy could be. This document translates that vision into a buildable plan. It defines what can be shipped now, what requires 1–2 years of development, and what remains speculative. It also flags the open questions, risks, and strategic choices Eytan must make as he positions CIG for a $5M IP sale.

## Technology Readiness Assessment

Before building a roadmap, we assess the readiness of each major component. Technology Readiness Level (TRL) is borrowed from NASA's scale, adapted for software:

| TRL | Meaning |
|-----|---------|
| 9 | Production-proven at scale |
| 7–8 | Production-ready, limited scale |
| 5–6 | Prototype working in realistic conditions |
| 3–4 | Proof-of-concept in lab conditions |
| 1–2 | Basic principles observed |

| Component | Current TRL | Rationale | Gap to Production |
|-----------|-------------|-----------|-------------------|
| **LLM reasoning (discovery, synthesis)** | 7–8 | GPT-4o, Claude 3.5 Sonnet, Kimi K2 perform well at research and synthesis | Cost control, reproducibility, and domain-specific fine-tuning |
| **Graph databases (entity relationships)** | 8–9 | Neo4j, Neptune mature; used in fraud detection, supply chain | Schema design for consulting domain, entity resolution at scale |
| **Vector search / RAG** | 7–8 | Pinecone, Weaviate, pgvector production-ready; RAG is standard | Hybrid retrieval (graph + vector), freshness guarantees |
| **Agent orchestration frameworks** | 5–6 | LangChain, CrewAI, AutoGen usable but immature; OpenClaw's ACP is promising | Reliable state management, error recovery, cross-agent handoffs |
| **Tool calling / MCP** | 5–6 | MCP spec emerging; implementations fragmented | Standardized tool manifests, secure credential injection, circuit breakers |
| **Sandbox isolation for agents** | 4–5 | gVisor, Firecracker proven for serverless; agent-specific harnesses nascent | Per-agent-instance sandboxing, network egress policies, audit logging |
| **Multi-model routing** | 4–5 | Routing logic is custom; no dominant open-source solution | Cost-aware fallbacks, latency SLAs, quality degradation thresholds |
| **Human-in-the-loop approval flows** | 6–7 | Workflow engines (Temporal, Camunda) exist; agent-specific UIs less so | Tight integration with Slack/email, batch approval, mobile-responsive UI |
| **Entity resolution at scale** | 5–6 | Zingg, Splink, enterprise MDM tools available; consulting-domain accuracy unproven | Record linkage across LinkedIn, CRM, and unstructured text with high precision |
| **Automated demo environment provisioning** | 4–5 | IaC (Terraform, Pulumi) mature; auto-personalization by agent is new | Safe scoped credential usage, rollback on failure, cost controls |
| **Learning loop (auto-extraction + human curation)** | 3–4 | LLMs can summarize; structured pattern extraction and curation pipelines are manual-heavy | Reliable extraction of solution patterns, automated diff generation for knowledge base |
| **Feedback loop (aggregate analytics → agent improvement)** | 3–4 | BI tools exist; causal inference from agent behavior to outcomes is research-grade | Attribution of win/loss to specific agent decisions, not just correlation |

The pattern is clear: **data infrastructure and LLM reasoning are ready. Agent orchestration, safety harnesses, and self-improvement loops are not.** The 1–2 year horizon should focus on the middle layer: making agents reliable, observable, and safely autonomous.

## Phased Roadmap

### Phase 0: Foundation (Now — 6 months)

**Goal:** Build the minimal viable platform that proves the concept to a single design partner.

**Deliverables:**
- Deploy a graph database (Neo4j or Neptune) with the CIG ontology described in [02-Data-Model.md](02-Data-Model.md): companies, people, deals, technologies, and relationships.
- Build ingestion connectors for Salesforce and LinkedIn Sales Navigator. These two sources alone provide 70% of the signal value for discovery.
- Implement a single agent—the Discovery Agent—with a basic harness: tool manifest (CIG query, web search, LinkedIn lookup), sandbox isolation, and execution logging.
- Build a Deal Dashboard where a human SE can review the Discovery Agent's output (Deal Context Brief) before the first call.
- Integrate with Slack for approval notifications and human override.

**What is intentionally out of scope:**
- Multi-tenancy (single tenant only)
- The full six-agent ecosystem (only Discovery)
- Automated demo provisioning
- Learning loop automation (manual curation only)
- Bi-directional CRM writeback

**Success criteria:**
- The Discovery Agent generates a Deal Context Brief in under 30 minutes that a human SE judges as "better than what I would have produced in 4 hours of manual research" for 80% of deals.
- The human SE reviews and approves the brief in under 10 minutes.
- One design partner (a mid-tier SI with 20–50 SEs) uses the platform for 10+ deals and provides structured feedback.

**Cost estimate:** $150K–$250K in engineering and infrastructure for the 6-month phase.

### Phase 1: Core Platform (6–18 months)

**Goal:** Expand from a discovery tool to a full pre-sales operating system.

**Deliverables:**
- Add the Architecture Agent and Demo Agent, operating in the Discovery → Architecture → Demo pipeline described in [03-Agent-Loops.md](03-Agent-Loops.md).
- Implement the full harness manager: sandbox orchestration, MCP tool gateway, policy enforcer, and secret injection (see [04-Harness-Design.md](04-Harness-Design.md)).
- Add vector search (Pinecone or Weaviate) for semantic retrieval of solution patterns and past engagements.
- Build the Proposal Agent with human approval gates for all external-facing documents.
- Implement multi-tenancy with the hybrid model (shared infrastructure, isolated data) described in [05-Product-Components.md](05-Product-Components.md).
- Launch the Knowledge Curation UI for engagement leads to review and approve Learning Agent outputs.
- Add the Integration Agent for well-trodden integration patterns (e.g., Salesforce → Snowflake CDC).

**Success criteria:**
- A complete deal can flow from discovery to proposal with agent assistance at every stage, requiring human approval at 3–5 defined gates.
- Time-to-proposal is reduced by 50% compared to the design partner's historical baseline.
- Platform supports 3–5 tenants with full data isolation.
- Agent hallucination rate on factual claims is below 5% (measured via human review sampling).

**Cost estimate:** $800K–$1.2M in engineering, infrastructure, and a small customer success team.

### Phase 2: Self-Improvement (18–36 months)

**Goal:** Close the feedback loops so the platform gets smarter with every engagement.

**Deliverables:**
- Automate the Learning Loop: structured extraction of solution patterns, competitive intelligence, and buyer behavior signals from engagement artifacts, with human curation as a quality gate rather than a manual rewrite.
- Build the Feedback Loop: aggregate outcome analytics, anomaly detection, and root-cause analysis that generates actionable recommendations for agent improvement (see [03-Agent-Loops.md](03-Agent-Loops.md)).
- Implement multi-model routing with cost-aware fallbacks and quality degradation thresholds.
- Add advanced entity resolution: automated deduplication across 10+ data sources with human-in-the-loop exception handling.
- Support 20+ bi-directional integrations (HubSpot, Gong, Jira, GitHub, etc.).
- Launch the Analytics & Feedback Engine with executive dashboards showing win-rate attribution, agent ROI, and knowledge base growth metrics.

**Success criteria:**
- Win rates improve measurably (≥10%) for tenants that have been on the platform for >12 months, attributable to compounding organizational memory.
- New solution patterns are extracted and curated within 48 hours of engagement close.
- Platform supports 20+ tenants, including one global SI.

**Cost estimate:** $2M–$3M cumulative by end of Phase 2.

### Phase 3: Scale & Ecosystem (36+ months)

**Goal:** Transform from a product into a platform ecosystem.

**Deliverables (speculative):**
- **App marketplace:** Third-party vendors can publish connectors, agent extensions, and solution pattern packs. A Snowflake partner publishes a "Retail Analytics Pattern Pack." An AWS partner publishes a "Healthcare Compliance Agent Extension."
- **Agent-to-agent marketplace:** Tenants can share anonymized patterns and benchmarks in a governed marketplace, with differential privacy guarantees.
- **Vertical specialization:** Pre-trained agent configurations for specific industries (healthcare, fintech, public sector) sold as add-ons.
- **Autonomous delivery:** The Integration Agent handles 80%+ of standard integration deployments without human intervention, with automatic rollback and self-healing.

**Success criteria:**
- 50+ active tenants across boutique SIs, mid-tier firms, and at least two global SIs.
- Platform generates more revenue from marketplace fees and vertical packs than from base subscriptions.
- The consultancy model itself evolves: some tenants operate with 1 human SE per 50 agent-assisted deals, a 10x improvement over traditional staffing ratios.

## Open Questions

### Technical Open Questions

1. **Can we make agents reliably autonomous without exponential cost growth?** Current LLM costs scale with token usage. A Discovery Agent that runs a 30-minute research session may consume $5–$15 in tokens. At 500 deals/quarter, that's $7.5K–$22.5K just for discovery. The full six-agent ecosystem could push per-deal costs to $50–$150. Can routing to smaller models, caching, and batching bring this below $20/deal consistently?

2. **What is the right balance between graph and vector retrieval?** Graph queries are precise but brittle (schema-dependent). Vector search is flexible but noisy. Hybrid retrieval is theoretically optimal but operationally complex. How do we benchmark and tune this for the consulting domain?

3. **How do we prevent knowledge base pollution?** The Learning Agent will occasionally extract wrong patterns or false correlations. If these are committed to organizational memory, they poison future agent reasoning. What is the right curation latency? Can we build automated "sanity checks" (e.g., cross-validation against historical outcomes) before human review?

4. **How do we handle LLM provider lock-in and availability?** If OpenAI changes terms, raises prices, or experiences an outage, the platform must failover to Anthropic, Google, or self-hosted models without re-architecting prompts. How much abstraction is too much abstraction?

### Market Open Questions

5. **Who is the buyer, and what is the buying process?** Is this a CTO/CDO purchase (data platform), a CRO purchase (sales efficiency), or a CEO purchase (strategic transformation)? Each has different evaluation criteria, budget cycles, and risk tolerance. Eytan must pick a primary buyer persona and build the sales narrative around their pain.

6. **Is the buyer ready for agent autonomy?** Many firms are still in "AI copilot" mode—helping humans work faster. Autonomous agents that draft proposals and provision demos without human co-piloting may trigger organizational resistance. Does Eytan position this as "copilot now, autopilot later," or lead with autonomy?

7. **What is the competitive landscape?** Salesforce Einstein, HubSpot AI, and Gong AI are all investing in sales intelligence. Vertical AI startups (e.g., Docket for legal, Harvey for law) are proving domain-specific agent models. Does CIG compete head-on, differentiate via the knowledge graph, or partner with these platforms?

8. **What is the right pricing model?** Per-seat SaaS is familiar but misaligned with value (agents replace seats). Per-deal pricing aligns with outcome but is harder to forecast. Outcome-based pricing (percentage of margin improvement) is compelling but requires trust and measurement infrastructure.

### Ethical and Risk Open Questions

9. **What happens when an agent makes a high-stakes mistake?** If the Architecture Agent recommends an integration that later fails during production, causing a $2M service credit, who is liable? The platform vendor (Eytan), the consultancy using the platform, or the LLM provider? This affects insurance, terms of service, and harness design (see [04-Harness-Design.md](04-Harness-Design.md)).

10. **How do we prevent the platform from amplifying bias?** If historical organizational memory encodes biased patterns (e.g., "we avoid pitching to female CTOs because our win rate is lower"), agents will learn and amplify this. Bias detection and correction must be built into the Learning Loop, not bolted on later.

11. **What is the human impact on consulting jobs?** If a 100-person SI can serve 2,000 deals with 20 humans and agents, what happens to the other 80? Retraining into "agent shepherds" is the optimistic narrative, but displacement is real. How does Eytan message this to buyers who are also employers?

## How This Relates to CIG's Current Trajectory

### Convergence Points

- **CIG as the memory layer:** The knowledge graph described in [02-Data-Model.md](02-Data-Model.md) is the core IP. All other components are enablers that make the graph queryable and actionable at machine speed. Eytan's existing CIG work—entity models, relationship schemas, ingestion pipelines—directly feeds Phase 0 and Phase 1.
- **Buyer alignment:** The three buyer segments (global SI, mid-tier boutique, ISV SE team) identified in [00-Vision.md](00-Vision.md) map cleanly to Eytan's target market for a $5M IP sale.
- **Composable value:** Even if a buyer does not adopt the full AI-native consultancy vision immediately, they can extract value from CIG as a customer intelligence platform, then layer on agents over time.

### Divergence Points

- **Scope expansion:** CIG was likely conceived as a data platform. The AI-native consultancy vision expands it into an operating system with runtime, harnesses, and human interfaces. This is 3–5x the engineering effort and may require Eytan to raise capital or partner rather than bootstrap.
- **Go-to-market complexity:** Selling a data platform to a CIO is a known motion. Selling an agent ecosystem to a CRO or CEO is a consultative sale that requires proof-of-value deployments. Eytan may need a professional services arm or design partner program to de-risk early adoption.
- **Technical risk profile:** A data platform has predictable technical risks (scale, schema evolution). An agent platform has emergent risks (hallucination, adversarial behavior, LLM provider volatility) that are harder to bound and harder to explain to enterprise buyers.

## Suggested Next Steps for Eytan

### Immediate (Next 30 Days)

1. **Validate the buyer hypothesis.** Schedule 5–10 conversations with target buyers: one global SI digital transformation lead, one mid-tier SI founder, one ISV VP of Sales Engineering. Ask: "If you could reduce time-to-proposal by 50% with AI agents, what would you pay? What would stop you from adopting?"
2. **Lock the design partner.** Identify one firm willing to run a 3-month paid pilot. The ideal partner is a mid-tier SI (20–100 SEs) with high deal volume, technical sophistication, and a forward-thinking leadership team. Offer the pilot at cost in exchange for case study rights and co-development input.
3. **Scope Phase 0 ruthlessly.** The Discovery Agent + CIG graph + Salesforce/LinkedIn ingestion is the only scope for the first 6 months. Nothing else. Write the PRD, freeze the feature set, and resist scope creep.

### Short-Term (3–6 Months)

4. **Build the Discovery Agent MVP.** Use existing LLM APIs, a managed graph database, and serverless functions. Do not build custom infrastructure. Prove the 30-minute brief / 10-minute review cycle before investing in harnesses or orchestration.
5. **Establish the data quality baseline.** Measure entity resolution precision, data freshness SLAs, and retrieval relevance scores from day one. These metrics determine whether agents can be trusted or whether they amplify garbage.
6. **Document the IP package.** As the pilot runs, document the CIG schema, agent prompts, harness policies, and integration patterns as licensable IP. The $5M sale is not of a product—it is of a playbook plus a codebase.

### Medium-Term (6–18 Months)

7. **Decide: build vs. partner vs. sell.** If the pilot proves value and the design partner wants to expand, Eytan faces a strategic choice:
   - **Build:** Raise capital, hire engineers, and build the full platform. Highest upside, highest risk.
   - **Partner:** License CIG IP to an existing platform vendor (e.g., a CRM AI startup) that builds the agent layer. Lower upside, faster path to revenue.
   - **Sell:** Package the IP and pilot results for acquisition by a global SI or a PE-backed platform rollup. Lowest risk, cleanest exit.
8. **Invest in harness R&D.** If building, dedicate 30–40% of engineering resources to the harness layer. It is the difference between a demo and a deployable product.

### Long-Term (18+ Months)

9. **Drive toward the compounding effect.** The platform's value is not in any single agent. It is in the loop: deal → learn → improve → next deal. Measure and publish the compounding metrics: win-rate improvement over time, time-to-close reduction, knowledge base growth. These are the proof points that justify enterprise pricing.
10. **Build the ecosystem.** Once 10+ tenants are active, open the pattern marketplace. The network effect—more tenants contributing anonymized patterns—becomes the moat that prevents commoditization.

## Summary

The AI-native consultancy is buildable, but not all at once. The roadmap prioritizes prove-it-first milestones: a single agent, a single design partner, a single measurable outcome. From there, the platform expands in layers—agents, harnesses, feedback loops, ecosystem—each layer justified by the last. The open questions are real, but they are answerable with focused experimentation and buyer proximity. The risk is not that the vision is wrong. The risk is trying to build the 36-month vision in 6 months and shipping nothing.

As described in [00-Vision.md](00-Vision.md), the question is not *whether* solution consulting becomes AI-native. The question is who builds the operating system first. Eytan has the conceptual foundation. The next move is to make it concrete, one deal at a time.
