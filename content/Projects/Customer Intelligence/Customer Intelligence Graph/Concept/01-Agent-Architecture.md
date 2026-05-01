# 01 — Agent Architecture: The Agent Ecosystem

An AI-native consultancy does not run on a single monolithic agent. It runs on a purpose-built ecosystem of agents, each with a defined role, autonomy level, and communication protocol. This document defines the agent types, their responsibilities, and how they orchestrate together.

## Agent Taxonomy

We define six core agent types, organized by the phase of the sales engineering lifecycle they serve. Each agent is described by its inputs, outputs, autonomy level, and human touchpoints.

### 1. The Discovery Agent

**Purpose:** Understand the prospect's problem, context, constraints, and buying committee before a human ever joins the first call.

**What it does:**
- Ingests public and licensed data sources: 10-Ks, earnings calls, tech stack signals (BuiltWith, StackShare, job postings), Glassdoor sentiment, patent filings, competitive moves.
- Maps the buyer's organizational structure using LinkedIn, press releases, and conference speaker rosters.
- Synthesizes a "Deal Context Brief" that includes: business problem hypothesis, technical constraints, probable evaluation criteria, politically relevant stakeholders, and competitive threats.
- Generates a discovery call agenda ranked by importance, with suggested questions tailored to each stakeholder persona.
- Flags missing information that the human SE should acquire during live conversation.

**Inputs:**
- Prospect domain name / company identifier
- CIG entity graph (company, people, relationships, technologies)
- Industry templates from prior engagements
- Human-provided context (e.g., "This came from a warm intro via their CTO")

**Outputs:**
- Deal Context Brief (structured JSON + natural language)
- Stakeholder map with influence analysis
- Discovery agenda with ranked questions
- Gap list: what the agent could not determine from data

**Autonomy level:** HIGH. The Discovery Agent operates independently and asynchronously. It requires no human approval to run or to generate its brief. However, its output is always human-reviewed before it is presented externally.

**Human touchpoint:** The SE reviews the brief, adds color from personal relationships, and decides which questions to emphasize or deprioritize.

### 2. The Architecture Agent

**Purpose:** Translate discovered requirements into a viable technical architecture and integration plan.

**What it does:**
- Matches prospect requirements against known solution patterns in the firm's library.
- Maps the prospect's existing tech stack to integration points, flagging incompatibilities or gaps.
- Produces multiple architecture options (e.g., "lightweight MVP" vs. "enterprise-grade") with trade-off analysis.
- Identifies third-party dependencies, licensing requirements, and security/compliance implications.
- Generates architecture diagrams (Mermaid or similar) and integration sequence descriptions.

**Inputs:**
- Discovery Agent output (requirements, constraints, tech stack)
- Solution pattern library from CIG
- Vendor product capability matrices
- Historical architecture decisions from similar engagements

**Outputs:**
- Architecture options with pros/cons/risks
- Integration plan with dependency graph
- Gap analysis: what the prospect has vs. what the solution needs
- Resource estimation (compute, licenses, implementation time)

**Autonomy level:** MEDIUM. The Architecture Agent can generate and iterate on architectures without human approval, but its outputs should be human-validated before being presented to a prospect. Architectural decisions often carry multi-million-dollar implications.

**Human touchpoint:** The Solutions Architect (human) reviews options, sanity-checks trade-offs, and selects or modifies the recommendation. The agent serves as a "first draft" generator, not an authority.

### 3. The Demo Agent

**Purpose:** Build and configure tailored demonstrations, proof-of-concept environments, and sandbox experiences.

**What it does:**
- Reads the Architecture Agent's plan and the Discovery Agent's context brief.
- Clones a base demo environment (e.g., a containerized sandbox, a pre-configured SaaS tenant, a synthetic dataset).
- Personalizes the environment: renames dummy companies to the prospect's name, loads industry-relevant sample data, pre-configures integrations using the prospect's actual tech stack (where APIs permit safe read-only access).
- Generates a demo script that maps each feature to a specific prospect pain point.
- Records a "self-guided demo" video walkthrough as a fallback.
- Produces a deployment checklist for converting the demo into a PoC.

**Inputs:**
- Architecture plan
- Prospect identity and industry context
- Demo template library
- API credentials (scoped and temporary) for integration demonstrations

**Outputs:**
- Live demo environment URL
- Demo script with prospect-specific talking points
- Self-guided video
- PoC deployment checklist

**Autonomy level:** MEDIUM. The Demo Agent can spin up environments and generate scripts autonomously, but all demos should pass a human quality gate before being shared externally. The agent may hallucinate a feature capability or misconfigure an integration.

**Human touchpoint:** The SE or sales engineer reviews the demo, runs through the script themselves, and adds storytelling flair. The agent provides the scaffold; the human provides the performance.

### 4. The Proposal Agent

**Purpose:** Draft statements of work, pricing models, and commercial proposals.

**What it does:**
- Consumes the full engagement context: discovery findings, architecture plan, demo scope, and estimated effort.
- Retrieves comparable past proposals from the firm's deal history (anonymized).
- Generates a draft SOW with scope, assumptions, exclusions, milestones, and deliverables.
- Suggests pricing based on historical win rates, margin targets, and competitive positioning.
- Produces risk disclosures and contractual guardrails based on the firm's legal templates.
- Assembles everything into a formatted proposal document (or fills a proposal template in a CPQ system).

**Inputs:**
- Discovery + Architecture + Demo outputs
- Historical proposal library
- Firm pricing guidelines and margin targets
- Legal template library

**Outputs:**
- Draft SOW / proposal document
- Pricing recommendation with justification
- Risk register for the engagement
- Commercial options (e.g., fixed fee vs. time-and-materials)

**Autonomy level:** LOW. The Proposal Agent is a powerful drafting assistant, but all proposals must be human-approved. Pricing, scope, and legal language are business-critical. The agent reduces drafting time from days to hours; it does not eliminate accountability.

**Human touchpoint:** The account executive, solutions architect, and legal/commercial team review and approve every proposal. The agent's role is "draft 1.0," not "send."

### 5. The Integration Agent

**Purpose:** Execute technical integrations, data migrations, and environment configurations during the delivery phase.

**What it does:**
- Reads the integration plan from the Architecture Agent.
- Authenticates to prospect and vendor APIs using scoped credentials.
- Implements the integration step-by-step: mapping fields, handling errors, retrying failures, logging outcomes.
- Runs smoke tests and generates a validation report.
- Escalates to human engineers when it encounters unrecoverable errors or ambiguous requirements.
- Documents everything it does in a structured log for audit and handoff.

**Inputs:**
- Architecture/integration plan
- API credentials (scoped)
- Integration templates and code libraries
- Monitoring and alerting endpoints

**Outputs:**
- Integration implementation log
- Validation test results
- Escalation tickets (if needed)
- Updated architecture documentation

**Autonomy level:** MEDIUM-HIGH for well-trodden integration paths; LOW for novel or complex integrations. The Integration Agent should have a known-success rate threshold. If its historical success rate for a given integration pattern is below 95%, it should require human co-piloting.

**Human touchpoint:** Technical delivery engineers monitor the agent's work, handle escalations, and perform final sign-off before production handoff.

### 6. The Learning Agent

**Purpose:** Capture, structure, and reflect on every engagement to improve future agent performance and the organizational knowledge base.

**What it does:**
- After an engagement (win, loss, or no-decision), interviews the human team via structured prompts.
- Reads all artifacts produced during the engagement: discovery briefs, architecture plans, demos, proposals, emails, Slack threads.
- Identifies what worked, what failed, and what was unexpected.
- Extracts new solution patterns, competitive intelligence, and buyer behavior signals.
- Updates the CIG knowledge graph with enriched entities and relationships.
- Generates an "Engagement Retro" report with actionable insights.
- Fine-tunes or prompts future agent versions based on lessons learned.

**Inputs:**
- All engagement artifacts
- Human retro interviews
- Outcome data (Won/Lost/No-decision, margin, implementation success)
- Feedback from the buyer (if available)

**Outputs:**
- Structured retro report
- Updates to CIG (new entities, relationships, patterns)
- Agent improvement recommendations
- Training data for future fine-tuning

**Autonomy level:** MEDIUM. The Learning Agent can process artifacts and generate retros autonomously, but its conclusions should be human-validated before they are written into the permanent knowledge base. Humans catch nuance that agents miss.

**Human touchpoint:** The engagement lead reviews the retro and approves knowledge base updates. This is the most critical human touchpoint: it is where institutional judgment is preserved.

## Agent Communication Patterns

Agents do not operate in isolation. They communicate via three patterns, chosen based on the task complexity and coordination needs.

### Pattern 1: Pipeline (Sequential)
The output of Agent A is the input to Agent B. This is the default for well-understood, linear processes.

Example: Discovery → Architecture → Demo → Proposal

Each agent waits for the previous agent to complete. This is predictable and debuggable but slower.

### Pattern 2: Swarm (Parallel Coordination)
Multiple agents work on different aspects of the same problem simultaneously and synthesize their outputs.

Example: The Discovery Agent, a Competitive Intelligence Agent, and a Financial Analysis Agent all run in parallel when a new prospect is identified. Their outputs are merged into a unified Deal Context Brief by a lightweight "Synthesis Agent."

This is faster but requires a shared context and resolution protocol for conflicting findings.

### Pattern 3: Orchestration (Directed Graph)
A central orchestrator (itself an agent or a state machine) decides which agents to invoke, in what order, and when to loop back based on intermediate results.

Example: The Architecture Agent produces an initial plan. The Demo Agent tries to build it and fails because an integration is not supported. The orchestrator loops back to the Architecture Agent with the constraint, requesting a revised plan. This cycle repeats until a viable architecture is found or a human is escalated.

This is the most flexible pattern and is used for non-linear, iterative problem-solving.

## Human-in-the-Loop: Where Humans MUST Stay Involved

There are five non-negotiable human touchpoints in the agent ecosystem:

| Touchpoint | Why Human? | Who? |
|------------|-----------|------|
| **Initial strategy & prioritization** | Deciding which deals to pursue and how to position | Account Executive, Practice Lead |
| **External facing communication** | Building trust, reading the room, political navigation | Sales Engineer, Account Executive |
| **Commitments & contracts** | Legal and commercial accountability | Legal, Commercial, Exec Sponsor |
| **Novel problem-solving** | Agents excel at pattern-matching; humans excel at first-principles reasoning | Solutions Architect, Domain Expert |
| **Knowledge curation** | Approving what goes into the permanent organizational memory | Engagement Lead, Chief Knowledge Officer |

The design principle is: **agents handle scale; humans handle stakes.** If a decision is reversible and low-cost, let the agent decide. If it is irreversible, high-cost, or relationship-critical, require human approval.

## Failover and Escalation Paths

Every agent must have a defined failure mode:

1. **Confidence threshold:** If an agent's internal confidence score falls below a defined threshold (e.g., 0.7), it auto-escalates to a human.
2. **Timeout:** If an agent does not complete within a defined window, it escalates.
3. **Error cascade:** If an upstream agent's output is flagged as unreliable, downstream agents halt and escalate.
4. **Human override:** Any human stakeholder can halt an agent sequence at any time.

The escalation target is defined per agent and per scenario:

| Scenario | Escalation Target |
|----------|-------------------|
| Discovery Agent produces contradictory findings | Human SE for that deal |
| Architecture Agent proposes unsupported integration | Solutions Architect |
| Demo Agent fails to build environment | Technical Delivery Lead |
| Proposal Agent generates non-compliant legal language | Legal/Commercial team |
| Integration Agent hits unrecoverable API error | Technical engineer |
| Any agent exhibits anomalous behavior | System operator / harness administrator (see [04-Harness-Design.md](04-Harness-Design.md)) |

Escalations are not failures of the system. They are intentional design features. The goal is not zero human involvement. The goal is optimal allocation of human attention.

## Summary Table

| Agent | Phase | Autonomy | Key Human Touchpoint |
|-------|-------|----------|----------------------|
| Discovery | Pre-engagement | HIGH | SE reviews brief |
| Architecture | Solution design | MEDIUM | Solutions Architect validates |
| Demo | Demonstration | MEDIUM | SE performs final review |
| Proposal | Commercialization | LOW | AE/Legal approves all |
| Integration | Delivery | MEDIUM-HIGH | Engineers handle escalations |
| Learning | Post-engagement | MEDIUM | Engagement lead approves retro |

This architecture is not static. It evolves. The Learning Agent (see [03-Agent-Loops.md](03-Agent-Loops.md)) continuously feeds back into the others, making the entire ecosystem more capable over time.
