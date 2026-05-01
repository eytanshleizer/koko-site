# 03 — Agent Loops: The Operating Cycles

An AI-native consultancy does not run on one-shot agent invocations. It runs on continuous, interconnected loops—operating cycles where agents execute, reflect, and improve. Each loop serves a distinct purpose in the engagement lifecycle. Together, they create a self-improving system that gets smarter with every deal.

This document defines the five core loops, how they work, and how they interact.

## Loop 1: The Discovery Loop

### Purpose
Understand the prospect's problem deeply—deeper than a human SE could achieve in the same timeframe, and certainly deeper than a generic discovery deck.

### Trigger
A new prospect enters the pipeline. This could be an inbound lead, a target account flagged by marketing, or a named account the firm wants to penetrate.

### Steps

1. **Signal Ingestion**
   - The Discovery Agent (see [01-Agent-Architecture.md](01-Agent-Architecture.md)) scans all available data sources: CIG company profiles, LinkedIn, 10-Ks, earnings transcripts, tech stack signals, job postings, news, patents, and competitive intel.
   - The agent also queries organizational memory (see [02-Data-Model.md](02-Data-Model.md)) for similar past engagements.

2. **Hypothesis Generation**
   - The agent generates 3–5 hypotheses about the prospect's primary business problem. For example:
     - Hypothesis A: "They are struggling with data silos after a recent acquisition."
     - Hypothesis B: "Their current analytics platform cannot scale to support a new real-time personalization initiative."
     - Hypothesis C: "They face regulatory pressure to improve data governance and lineage."
   - Each hypothesis is scored by confidence and supported by evidence snippets.

3. **Stakeholder Mapping**
   - The agent maps the buying committee: economic buyer, technical buyer, user buyer, coach, and blockers.
   - For each stakeholder, it infers priorities, biases, and relationship history with the firm.

4. **Context Brief Synthesis**
   - The agent merges hypotheses, stakeholder maps, and evidence into a Deal Context Brief.
   - It flags high-confidence findings, low-confidence areas, and gaps that require human discovery.

5. **Human Review & Calibration**
   - The human SE reviews the brief, adds personal knowledge ("I know their CTO from a previous role; she's skeptical of vendor claims"), and prioritizes hypotheses.
   - The SE may instruct the agent to dig deeper on specific topics.

6. **Discovery Call Preparation**
   - The agent generates a tailored discovery call agenda, with questions mapped to each hypothesis and stakeholder.
   - It suggests "proof points" from organizational memory: "When you speak to their CDO, mention how we solved a similar data governance challenge for [Similar Company X]."

### Output
- Deal Context Brief
- Stakeholder map with influence analysis
- Ranked hypotheses with evidence
- Discovery call agenda
- Gap list for human follow-up

### Loop Characteristics
- **Frequency:** Once per deal, but iteratively refined as new data arrives.
- **Duration:** 15–60 minutes of agent runtime (asynchronous).
- **Human time:** 20–30 minutes of review.

## Loop 2: The Solution Loop

### Purpose
Architect and validate the right technical approach for the prospect's problem.

### Trigger
The Discovery Loop produces a validated problem statement, or the human SE confirms the prospect's needs after discovery calls.

### Steps

1. **Requirement Formalization**
   - The Architecture Agent parses the Discovery Loop output into structured requirements: functional, non-functional, security, compliance, and integration constraints.
   - It resolves ambiguities by querying the human SE (e.g., "Discovery brief mentions 'real-time,' but does this mean sub-second or sub-minute?").

2. **Pattern Matching**
   - The agent queries the solution pattern library in CIG (see [02-Data-Model.md](02-Data-Model.md)).
   - It retrieves the top N patterns that match the prospect's industry, tech stack, and requirements.

3. **Architecture Generation**
   - The agent generates 2–3 architecture options:
     - **Option A (MVP):** Fastest time-to-value, limited scope.
     - **Option B (Standard):** Balanced scope and investment.
     - **Option C (Enterprise):** Full-featured, maximum scalability.
   - Each option includes: component diagram, data flow, integration points, estimated effort, and risk assessment.

4. **Validation & Simulation**
   - The agent runs "what-if" simulations where possible:
     - "If the prospect's current data volume grows 3x, does this architecture still perform?"
     - "What happens if the CRM integration fails during peak load?"
   - It flags assumptions that need validation (e.g., "Assumes prospect has API access to their legacy ERP; verify with their IT team").

5. **Human Review & Selection**
   - The Solutions Architect reviews options, sanity-checks technical feasibility, and selects or hybridizes.
   - The human may override based on non-technical factors: "Option B is technically correct, but the prospect's CFO is risk-averse. Let's lead with Option A and position Option B as Phase 2."

6. **Architecture Lock**
   - The selected architecture is stored in CIG, linked to the deal record, and passed to the Demo Agent and Proposal Agent.

### Output
- Formalized requirements document
- 2–3 architecture options with trade-off analysis
- Risk register and assumption list
- Selected architecture with human sign-off

### Loop Characteristics
- **Frequency:** Once per deal, with possible iterations if requirements change.
- **Duration:** 30–90 minutes of agent runtime.
- **Human time:** 1–2 hours of review and decision-making.

## Loop 3: The Delivery Loop

### Purpose
Build demonstrations, proof-of-concept environments, and proposal artifacts that bring the solution to life.

### Trigger
The Solution Loop produces a validated architecture.

### Steps

1. **Demo Environment Provisioning**
   - The Demo Agent reads the architecture plan and clones a base environment.
   - It personalizes the environment with prospect-specific data and branding.
   - It configures integrations using the prospect's actual tech stack (where safe and permitted).

2. **Demo Script Generation**
   - The agent maps each demo feature to a specific prospect pain point from the Discovery Loop.
   - It generates a narrative: "Start with the CEO's stated priority of reducing time-to-insight. Show how the data pipeline automation cuts reporting latency from days to hours."

3. **PoC Scoping**
   - If a PoC is required, the agent generates a scoped PoC plan: objectives, success criteria, timeline, data requirements, and resource needs.
   - It identifies the minimal viable scope that proves value without over-investing.

4. **Proposal Drafting**
   - The Proposal Agent consumes the architecture, demo scope, and historical pricing data.
   - It drafts the SOW, pricing, and commercial terms.
   - It flags risks and suggests mitigations (e.g., "Scope includes a legacy ERP integration; recommend a paid discovery phase to de-risk").

5. **Human Review & Polish**
   - The SE rehearses the demo, adds storytelling, and adjusts the narrative.
   - The AE reviews the proposal with legal/commercial.
   - The Solutions Architect validates the PoC scope.

6. **Artifact Packaging**
   - All artifacts (demo URL, script, proposal, PoC plan) are packaged and linked in the deal record.

### Output
- Live demo environment
- Demo script with prospect-specific narrative
- PoC plan (if applicable)
- Draft proposal (SOW, pricing, terms)

### Loop Characteristics
- **Frequency:** Once per deal, but demo iterations may occur after feedback.
- **Duration:** 1–3 hours of agent runtime.
- **Human time:** 2–4 hours of review, rehearsal, and approval.

## Loop 4: The Learning Loop

### Purpose
Capture, structure, and reflect on every engagement to improve future performance.

### Trigger
A deal reaches a terminal state (won, lost, no-decision) OR an implementation milestone is completed.

### Steps

1. **Artifact Collection**
   - The Learning Agent gathers all artifacts from the engagement: discovery briefs, architecture plans, demos, proposals, emails, call transcripts, and human notes.

2. **Retro Interview**
   - The agent interviews the human team via structured prompts:
     - "What surprised you about this engagement?"
     - "What did the Discovery Agent miss?"
     - "Which architecture decision turned out to be wrong?"
     - "Why did we win/lose?"
   - The agent compares human answers against its own analysis of the artifacts.

3. **Pattern Extraction**
   - The agent identifies new or modified solution patterns.
   - It extracts competitive intelligence: "We lost to Competitor X because they offered a managed service model."
   - It identifies buyer behavior signals: "When the CFO joins the call in week 3, close rates drop 30%."

4. **Knowledge Base Update Proposal**
   - The agent proposes updates to CIG: new entities, new relationships, updated patterns, deprecated assumptions.
   - It generates a structured diff: "Add: Solution Pattern #47. Modify: Retail pricing benchmark from $400K to $450K. Deprecate: Kafka-first recommendation for sub-1TB workloads."

5. **Human Curation**
   - The engagement lead reviews the proposed updates.
   - They approve, modify, or reject each proposal.
   - Approved updates are committed to the organizational memory.

6. **Agent Improvement**
   - The Learning Agent generates training signals for other agents:
     - "Discovery Agent should weight Glassdoor sentiment more heavily in financial services."
     - "Architecture Agent should suggest cloud-agnostic options when the prospect's 10-K mentions multi-cloud strategy."
   - These signals are queued for agent prompt updates or fine-tuning.

### Output
- Structured retro report
- Proposed knowledge base updates
- Agent improvement recommendations
- Curated and committed organizational memory updates

### Loop Characteristics
- **Frequency:** Once per engagement outcome.
- **Duration:** 30–60 minutes of agent runtime.
- **Human time:** 30–60 minutes of curation.

## Loop 5: The Feedback Loop

### Purpose
Drive continuous improvement from aggregate outcomes across all engagements.

### Trigger
Periodically (weekly/monthly/quarterly) OR when aggregate data crosses a significance threshold.

### Steps

1. **Outcome Aggregation**
   - The system aggregates data across all deals in a time period:
     - Win/loss rates by industry, deal size, and agent involvement.
     - Time-to-close by stage.
     - Margin realization vs. proposal estimates.
     - Customer satisfaction scores post-implementation.

2. **Anomaly Detection**
   - The system flags anomalies:
     - "Win rate for healthcare deals dropped 15% this quarter."
     - "Architecture Agent's Option A recommendations have 20% higher implementation overrun than Option B."
     - "Demo environments with Salesforce integrations have a 40% higher close rate."

3. **Root Cause Analysis**
   - The agent attempts automated root cause analysis:
     - "Healthcare win rate drop correlates with a new competitor entering the market."
     - "Option A overruns correlate with underestimated data migration complexity."
   - It presents hypotheses with evidence for human review.

4. **Strategic Recommendation**
   - The agent generates recommendations:
     - "Update healthcare battlecard to address new competitor."
     - "Add data migration complexity estimator to Architecture Agent."
     - "Prioritize Salesforce integration demos for all CRM-related deals."

5. **Human Decision & Action**
   - Leadership reviews recommendations and decides on actions.
   - Approved actions are implemented: agent prompt updates, new solution patterns, training programs for human SEs.

### Output
- Quarterly performance dashboard
- Anomaly alerts with root cause hypotheses
- Strategic recommendations
- Approved action items

### Loop Characteristics
- **Frequency:** Weekly (anomaly detection), monthly (performance review), quarterly (strategic review).
- **Duration:** Minutes to hours of agent runtime.
- **Human time:** 1–4 hours of review and decision-making.

## How Loops Interact and Feed Each Other

The five loops are not isolated. They form a continuously improving system:

```
Discovery Loop → Solution Loop → Delivery Loop
       ↑                              ↓
       └──────── Learning Loop ←──────┘
              ↑
              └──── Feedback Loop ────┘
```

**Sequential flow:** Discovery → Solution → Delivery is the primary pipeline for each deal.

**Learning capture:** The Learning Loop captures everything that happened in Discovery, Solution, and Delivery, feeding it back into organizational memory.

**Feedback optimization:** The Feedback Loop monitors aggregate outcomes and identifies systemic improvements, which are implemented as changes to agent behavior, solution patterns, or human training.

**Compounding effect:** As the Learning Loop and Feedback Loop improve the knowledge base and agent behavior, the Discovery, Solution, and Delivery loops become more accurate, faster, and higher-quality. This is the virtuous cycle that makes the AI-native consultancy a compounding asset.

### Example: The Compounding Cycle in Action

**Month 1:** A deal with a fintech prospect enters the pipeline.
- Discovery Loop generates a brief. The human SE notes that the agent missed a key regulatory constraint.
- Solution Loop proposes an architecture. The Solutions Architect approves with modifications.
- Delivery Loop builds a demo and proposal. The deal is won.
- Learning Loop captures the engagement. The human SE approves an update: "Add: Fintech regulatory constraint checklist to Discovery Agent prompts."

**Month 2:** Another fintech prospect enters.
- Discovery Loop now includes the regulatory constraint checklist. The brief is more accurate.
- Solution Loop benefits from the Month 1 architecture pattern. It proposes a better-fit option faster.
- Delivery Loop reuses the Month 1 demo template. The proposal is drafted with a fintech-specific pricing benchmark.
- The deal closes 30% faster than Month 1.
- Learning Loop extracts additional refinements.

**Month 6:** The Feedback Loop analyzes six months of fintech deals.
- It identifies that fintech deals with regulatory complexity scores above 7/10 have a 50% longer sales cycle.
- It recommends: "For high-regulatory-complexity fintech deals, lead with a compliance-focused discovery workshop."
- This recommendation is implemented.

**Month 12:** The firm's fintech win rate has improved 25%. The average time-to-close has dropped 20%. The human SEs spend less time on research and more time on relationship-building. This is the operating model of an AI-native consultancy.

## Summary

The loops are the heartbeat of the system. They transform isolated agent capabilities into a continuously improving operating model. The Discovery Loop understands. The Solution Loop architects. The Delivery Loop demonstrates. The Learning Loop remembers. The Feedback Loop optimizes. Together, they create a consultancy that gets smarter, faster, and more effective with every engagement.
