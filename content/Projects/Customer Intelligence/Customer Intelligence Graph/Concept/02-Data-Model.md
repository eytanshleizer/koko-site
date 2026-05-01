# 02 — Data Model: The Knowledge & Data Foundation

An AI-native consultancy is only as good as the data it can reason over. Without a rich, structured, and continuously evolving knowledge foundation, agents are amnesiac interns. With it, they become institutional veterans. This document defines the datasets, data flows, and the concept of "organizational memory" that powers the agent ecosystem described in [01-Agent-Architecture.md](01-Agent-Architecture.md).

## The Data Taxonomy

The system requires seven categories of data, each serving a distinct purpose in the agent reasoning chain.

### 1. Customer & Prospect Data (The Context Layer)

This is the heart of CIG. It includes structured and unstructured data about every company, person, and relationship the firm has ever encountered.

| Data Type | Source | Example | Agent Consumer |
|-----------|--------|---------|----------------|
| **Company profiles** | LinkedIn, Crunchbase, 10-Ks, manual entry | Revenue, headcount, industry, growth rate, strategic priorities | Discovery Agent, Architecture Agent |
| **People profiles** | LinkedIn, email signatures, conference rosters, CRM | Role, tenure, background, stated interests, social activity | Discovery Agent |
| **Relationship graphs** | CRM, email metadata, meeting transcripts, manual logs | "Sarah (CTO) reports to Mike (CEO); Mike was previously at Competitor X" | Discovery Agent, Proposal Agent |
| **Interaction history** | CRM, email, calendars, call transcripts | Every touchpoint with timestamps, outcomes, sentiment | All agents |
| **Tech stack signals** | BuiltWith, StackShare, job postings, GitHub | "Uses Snowflake, dbt, Kubernetes; hiring for MLOps engineers" | Architecture Agent, Demo Agent |
| **Buying signals** | Earnings calls, press releases, job postings, patent filings | "Announced a digital transformation initiative; opened 3 new data engineering roles" | Discovery Agent |

This layer must be queryable as a graph, not just a collection of tables. The power of CIG is in the relationships: *"Which of our successful engagements involved a CTO who previously worked at a company that uses the same tech stack as this prospect?"*

### 2. Firm Knowledge & Solution Patterns (The Asset Layer)

This is the firm's proprietary intellectual property—the accumulated wisdom of every engagement.

| Data Type | Source | Example | Agent Consumer |
|-----------|--------|---------|----------------|
| **Solution patterns** | Human-authored, agent-extracted from retros | "Retail customer 360 on Snowflake + dbt + Hightouch" | Architecture Agent, Demo Agent |
| **Architecture decisions** | Engineering docs, retros | "Why we chose Kafka over Kinesis for real-time inventory" | Architecture Agent |
| **Integration playbooks** | Technical documentation, runbooks | "Step-by-step Salesforce-to-Snowflake CDC setup" | Integration Agent, Demo Agent |
| **Proposal templates** | Legal/commercial, historical deals | "Standard SOW for data platform migration, 6-month timeline" | Proposal Agent |
| **Pricing benchmarks** | Historical deals, win/loss data | "Average ACV for healthcare data mesh engagements: $450K" | Proposal Agent |
| **Competitive battlecards** | Human-authored, agent-extracted | "How to position against Palantir in public sector" | Discovery Agent, Proposal Agent |

### 3. Industry & Market Intelligence (The External Layer)

This provides the broader context that makes agents sound informed and credible.

| Data Type | Source | Example | Agent Consumer |
|-----------|--------|---------|----------------|
| **Industry benchmarks** | Gartner, McKinsey, public datasets | "Average time-to-insight for retail: 14 days; best-in-class: 2 days" | Discovery Agent, Proposal Agent |
| **Regulatory landscape** | Government portals, compliance frameworks | "HIPAA requirements for data residency in healthcare cloud migrations" | Architecture Agent, Proposal Agent |
| **Competitive intelligence** | Public filings, product announcements, reviews | "Competitor X just launched a feature that overlaps with our offering" | Discovery Agent, Proposal Agent |
| **Technology trends** | Research papers, GitHub trends, Stack Overflow surveys | "Rust adoption in data infrastructure up 40% YoY" | Architecture Agent |

### 4. Telemetry & Behavioral Data (The Behavioral Layer)

This captures how buyers interact with the firm's outputs.

| Data Type | Source | Example | Agent Consumer |
|-----------|--------|---------|----------------|
| **Demo engagement** | Product analytics, session recordings | "Prospect spent 8 minutes on the data lineage feature; skipped the governance demo" | Discovery Agent, Learning Agent |
| **Proposal interaction** | Document tracking (DocSend, PandaDoc) | "CTO opened the proposal 3 times; lingered on the architecture diagram" | Proposal Agent, Learning Agent |
| **Email/call engagement** | Outreach, Gong, Chorus | "Prospect's tone shifted from curious to skeptical when pricing was discussed" | Discovery Agent, Learning Agent |
| **Website/content engagement** | GA4, HubSpot, Contentful | "Prospect downloaded the "Data Mesh Playbook" before the discovery call" | Discovery Agent |

### 5. Vendor & Product Data (The Capability Layer)

This maps what the firm (and its partners) can actually deliver.

| Data Type | Source | Example | Agent Consumer |
|-----------|--------|---------|----------------|
| **Product capability matrices** | Vendor documentation, certification programs | "Snowflake supports HIPAA, has native Python UDFs, does not support real-time streaming" | Architecture Agent, Demo Agent |
| **Partner ecosystem** | Partner portals, certification records | "We are a Snowflake Premier Partner; 3 engineers are certified" | Proposal Agent |
| **Pricing & licensing** | Vendor portals, procurement records | "Snowflake credit pricing for enterprise: $4/credit; minimum commit 50K credits" | Proposal Agent |

### 6. Engagement Outcomes (The Feedback Layer)

This closes the loop. Every deal—win, loss, or no-decision—feeds back into the system.

| Data Type | Source | Example | Agent Consumer |
|-----------|--------|---------|----------------|
| **Win/loss data** | CRM, human retro interviews | "Lost to Accenture because they offered a fixed-price guarantee" | Learning Agent, Proposal Agent |
| **Implementation outcomes** | Project management tools, customer success | "Migration took 4 months, not 6; customer satisfaction: 8/10" | Learning Agent, Architecture Agent |
| **Post-sale support tickets** | Zendesk, ServiceNow | "Most common issue: SSO configuration complexity" | Architecture Agent, Integration Agent |

### 7. Agent Execution Logs (The Operational Layer)

This is meta-data about how the agents themselves are performing.

| Data Type | Source | Example | Agent Consumer |
|-----------|--------|---------|----------------|
| **Agent decisions** | Harness logs | "Architecture Agent chose Pattern A over Pattern B with confidence 0.82" | Learning Agent, Harness Manager |
| **Tool call results** | MCP server logs | "Discovery Agent queried LinkedIn API; rate limit hit after 47 calls" | Integration Agent, Harness Manager |
| **Human overrides** | Human interface logs | "SE rejected Architecture Agent's recommendation; chose Pattern C instead" | Learning Agent |
| **Escalation records** | Ticketing system | "Integration Agent escalated to human at step 14 due to undocumented API behavior" | Learning Agent, Harness Manager |

## Data Flow: Ingestion → Enrichment → Embedding → Retrieval

Data does not sit static. It flows through a pipeline that transforms raw inputs into agent-ready knowledge.

### Stage 1: Ingestion

Raw data enters the system through multiple channels:
- **API connectors:** LinkedIn, Salesforce, HubSpot, Gong, BuiltWith, StackShare, vendor portals.
- **Document parsers:** PDFs, Word docs, slides, emails, call transcripts.
- **Web scrapers:** Public company pages, press releases, regulatory filings.
- **Human input:** Direct entry, retro interviews, annotations.
- **Agent generation:** Artifacts produced by other agents (architecture plans, proposals).

Each source has a defined schema mapping and a data quality score. Low-quality or ambiguous data is flagged for human review.

### Stage 2: Enrichment

Raw data is enriched with derived attributes and cross-references:
- **Entity resolution:** "Acme Inc." and "Acme Incorporated" and "acme.com" are resolved to a single canonical entity.
- **Relationship inference:** "John (CTO) attended the same university as Sarah (our VP Sales)" is extracted and scored.
- **Sentiment analysis:** Call transcripts and emails are scored for buyer sentiment.
- **Event extraction:** "Announced Q3 earnings; revenue up 12%" is structured as a timestamped event on the company entity.
- **Anomaly detection:** Unusual patterns (e.g., a company suddenly hiring 50 data engineers) are flagged as buying signals.

### Stage 3: Embedding

Structured and unstructured data is converted into vector embeddings for semantic retrieval:
- **Entity embeddings:** Every company, person, and solution pattern is embedded.
- **Document embeddings:** Proposals, architecture docs, call transcripts are chunked and embedded.
- **Query embeddings:** Agent queries are embedded to retrieve relevant context.

The embedding model must be chosen for domain relevance. A generic embedding model may miss the semantic nuance of technical architecture descriptions. Fine-tuning or domain-specific embeddings (e.g., using sales engineering corpus) is likely required for production quality.

### Stage 4: Retrieval

Agents query the knowledge base through multiple retrieval strategies:
- **Graph traversal:** "Find all companies in our portfolio where the CTO previously worked at a Snowflake partner."
- **Vector similarity:** "Find the three most similar past engagements to this prospect's context."
- **Hybrid search:** Combine structured filters (industry = healthcare) with semantic similarity ("data mesh implementation").
- **Temporal retrieval:** "What was the last interaction with this company, and what was the outcome?"

Retrieval must be fast (sub-second for interactive agent reasoning) and precise (high recall for relevant context, high precision to avoid noise).

## Organizational Memory: The System That Learns

The most powerful concept in this data model is **organizational memory**—the idea that the consultancy accumulates knowledge compounding over time, not just a series of isolated engagements.

### What Is Organizational Memory?

In a traditional consultancy, knowledge lives in consultants' heads, in shared drives that nobody searches, and in decks that are recreated for every pitch. When a consultant leaves, the knowledge walks out the door. When a new consultant joins, they spend months becoming productive.

Organizational memory is the deliberate encoding of everything the firm learns—about customers, solutions, markets, and itself—into a queryable, evolving knowledge graph. It has three properties:

1. **Persistence:** Knowledge is not ephemeral. It survives personnel changes, reorgs, and system migrations.
2. **Connectivity:** Knowledge is not siloed. The connection between "what we learned about retail data platforms in 2023" and "this new retail prospect in 2025" is explicit and navigable.
3. **Evolvability:** Knowledge is not static. Old assumptions are deprecated when disproven. New patterns are elevated when validated.

### How Organizational Memory Is Built

Every engagement contributes to organizational memory through the Learning Loop (see [03-Agent-Loops.md](03-Agent-Loops.md)):

1. **Pre-engagement:** The Discovery Agent queries organizational memory to find relevant precedents.
2. **During engagement:** Agents read from and write to the memory in real time. The Architecture Agent pulls solution patterns; the Demo Agent pulls demo templates.
3. **Post-engagement:** The Learning Agent processes the engagement, extracts new knowledge, and proposes updates to the memory.
4. **Curation:** A human approves or modifies the proposed updates.
5. **Compounding:** Future engagements benefit from the updated memory.

### Example: The Compounding Effect

**Year 1:** The firm engages with a mid-sized retailer on a data platform migration. The engagement succeeds. The Learning Agent extracts a solution pattern: "Retail Data Platform on Snowflake + dbt + Hightouch." It captures the architecture, the timeline, the pricing, and the key success factors. A human curates this into the organizational memory.

**Year 2:** A new prospect, a different retailer, enters the pipeline. The Discovery Agent queries organizational memory and finds the Year 1 pattern. It pulls the architecture, the stakeholder map, and the pricing benchmark. The Architecture Agent adapts the pattern to the new prospect's tech stack (they use Fivetran instead of Hightouch). The Proposal Agent prices based on the Year 1 benchmark, adjusted for scope.

**Year 3:** A third retailer engages. The system now has two precedents. It can compare outcomes, identify common failure modes, and recommend the best-fit pattern with confidence. The human SE spends their time on relationship and trust-building, not on recreating the wheel.

This is the compounding effect. Every deal makes the next deal easier, faster, and higher-quality. This is the fundamental economic advantage of an AI-native consultancy.

## Data Freshness, Privacy, and Segmentation

### Freshness

Data has a defined TTL (time-to-live) based on its volatility:

| Data Category | Freshness Requirement | Update Mechanism |
|---------------|----------------------|------------------|
| Company financials | Quarterly | API polling after earnings releases |
| Tech stack signals | Weekly | Continuous monitoring via BuiltWith/StackShare |
| People profiles | Monthly | LinkedIn API + manual updates |
| Interaction history | Real-time | CRM/event streaming |
| Agent execution logs | Real-time | Harness telemetry |

Stale data is worse than no data. The system must flag when an agent is reasoning over data that exceeds its freshness threshold.

### Privacy

The system handles sensitive data: prospect financials, employee profiles, proprietary architecture plans, pricing.

- **Encryption at rest and in transit:** Non-negotiable.
- **Access control:** Role-based and attribute-based. A junior SE should not see pricing from deals they are not on.
- **Audit logging:** Every data access is logged. Who queried what, when, and why.
- **Data minimization:** Agents should only access data relevant to their task. The Discovery Agent does not need access to past pricing unless it is explicitly scoped.
- **Compliance:** GDPR, CCPA, and industry-specific requirements (HIPAA, SOX) must be mapped to data handling policies.

### Per-Client Isolation

In a multi-tenant deployment, each client (the consulting firm using the platform) must have data isolation. However, there is a tension: organizational memory is most valuable when it is shared across all engagements of the firm. A client should not see another client's data, but the firm should benefit from patterns learned across all clients.

The solution is **tenant-scoped memory**:
- **Private layer:** Data specific to a client engagement (prospect names, pricing, architecture details) is isolated to that tenant.
- **Shared layer:** Anonymized and generalized patterns ("retail data platform pattern," "pricing benchmark for healthcare") are shared across tenants.
- **Hybrid queries:** Agents query both layers, with the shared layer providing general patterns and the private layer providing specific context.

This requires a robust data governance model to ensure that shared patterns do not inadvertently leak private information. Techniques include:
- Differential privacy for aggregated benchmarks.
- Human curation before pattern promotion to the shared layer.
- Automated PII scrubbing for shared artifacts.

## Summary

The data model is not a sidecar to the agent architecture. It is the foundation. Agents without data are clever but blind. Agents with a rich, structured, and evolving knowledge base are capable of reasoning at a level that rivals experienced consultants—at machine speed and machine scale.

CIG, at its core, is the implementation of this data model. It is the graph database, the vector store, the event pipeline, and the curation interface that makes organizational memory real. The agents described in [01-Agent-Architecture.md](01-Agent-Architecture.md) are the consumers and producers of this memory. The loops described in [03-Agent-Loops.md](03-Agent-Loops.md) are the processes that keep it alive.
