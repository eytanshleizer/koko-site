# Plative — Buyer Profile

#buyer #project

> **Priority:** ⭐⭐⭐⭐ | **Urgency:** 🔴 | **Deal Size:** $3–5M
> **Status:** Research complete — ready for outreach
> **Last Updated:** 2026-04-24

---

## 📌 Quick Summary

Plative is a rare breed: a **cross-cloud consulting firm** that lives deeply in both Salesforce and Oracle NetSuite — and believes the magic happens when the two platforms are implemented as one coherent strategy. They're a Salesforce Summit Partner (top 5% globally), a Top-10 NetSuite Alliance Partner in North America, and a growing Agentforce investment house. They serve financial services, nonprofits, tech, and consumer/retail. Their differentiator is industry-specific depth + bi-platform fluency — something almost no other SI does at their level.

[[Customer Intelligence Graph]] is purpose-built for exactly this kind of firm. Plative's consultants hold enormous institutional knowledge about client ecosystems spanning two enterprise platforms. CIG turns that knowledge into a structured, queryable intelligence asset that compounds across every engagement.

---

## 🏢 Company Profile

### Identity
- **Full Name:** Plative Inc.
- **HQ:** New York, NY
- **Size:** 200+ global professionals
- **Type:** Private, consulting/SI (Systems Integrator)
- **Website:** plative.com

### Partner Status
| Credential | Level |
|---|---|
| Salesforce Partner | **Summit** (top 5% globally) |
| Salesforce.org | **Premium Partner** |
| Oracle NetSuite | **Top-10 Alliance Partner in North America** |
| Recognition | **NetSuite Alliance Partner Spotlight Winner 2024** |

### What They Do

Plative implements, customizes, and integrates Salesforce and Oracle NetSuite for mid-market and enterprise clients. Their thesis: most companies that need both platforms implement them separately, creating disconnected data, misaligned processes, and duplicated effort. Plative brings a **single implementation strategy** that treats SF + NetSuite as one operating system for the business.

This is not just technical integration — it's a consulting philosophy. They lead with industry-specific perspective before recommending platform architecture, making them a strategic partner rather than a feature-delivery shop.

### Platform Coverage

**Salesforce:**
- [[Sales Cloud]]
- [[Service Cloud]]
- [[Marketing Cloud]]
- [[CPQ]] / [[Revenue Cloud]] / Revenue Cloud Advanced (RCA)
- [[Data Cloud]]
- [[Experience Cloud]]
- [[Financial Services Cloud]]
- [[Nonprofit Cloud]] / [[NPSP]]
- [[Industries Cloud]]
- [[Agentforce]] (heavy and growing investment)
- [[MuleSoft]] (integration layer)

**Oracle:**
- [[Oracle NetSuite]] — full ERP, financials, inventory, procurement, revenue recognition

### Verticals

| Vertical | Key Capabilities |
|---|---|
| **Financial Services** | Wealth/asset management, capital markets, insurance — FSC + NetSuite |
| **Nonprofits** | NPSP, Nonprofit Cloud, grant management, donor journeys |
| **Technology** | SaaS billing, CPQ, revenue ops |
| **Consumer / Retail** | Commerce, service, ERP alignment |

### Own IP & Products

#### 🤖 Plative Grant Management Agent
- Powered by **Agentforce + Salesforce**
- Built for nonprofits and foundations
- Features:
  - Tailored nonprofit recommendations for donors
  - Knowledge hub for donor queries
  - Guides donors through the grant request process
  - Reuses data from previous submissions (reduces friction for repeat applicants)
- This is Plative's most visible proprietary product — live, marketable, and in production

#### 🔀 CPQ → Revenue Cloud Advanced Migration Assistant
- Proprietary migration tooling
- Accelerates the path from Salesforce CPQ to RCA
- Reduces engagement scope and risk for clients modernizing their quote-to-cash stack

### Named Clients

| Client | Platforms | Detail |
|---|---|---|
| **Halo** | Salesforce | Manages $12B+ in transactions on SF |
| **Cohen & Co** | Salesforce + NetSuite | Professional tax services firm, dual-cloud |
| **Joni and Friends** | Salesforce Marketing Cloud | Disability services nonprofit |
| **Pathful** | Salesforce CPQ + NetSuite | Career readiness SaaS platform |

### Team & Positioning

Plative operates at the intersection of **Big 4 consulting rigor** and **boutique partner intimacy**. With 200+ professionals globally, they're large enough to handle complex enterprise programs, but specialized enough that their vertical and platform depth is genuine — not a slide deck. Their Agentforce investment (Grant Management Agent, Agentforce 2.0, 2DX, 3/MCP content) signals they're betting on agentic AI as the next platform cycle.

---

## 🔍 What CIG Would Look Like For Plative

### The Scenario

A Plative consultant — let's call her **Priya**, a Financial Services Cloud lead — is onboarding a new client: **Meridian Capital**, a $4B AUM wealth management firm. Meridian runs Salesforce Financial Services Cloud for advisor relationship management, and Oracle NetSuite for portfolio accounting, billing, and revenue recognition. They want to unify client data, automate compliance workflows, and eventually deploy an AI advisor assistant.

Priya has done 12 similar engagements. The problem: that knowledge lives in her head, in scattered Confluence pages, in a SharePoint folder no one opens, and in the institutional memory of colleagues who've since moved on. Every new engagement starts from scratch.

**CIG changes this.**

---

### The Discovery Phase

Before Priya's first client call, she opens the [[Customer Intelligence Graph]] for Plative's financial services practice. She queries:

- **"Show me all wealth management clients using FSC + NetSuite"**
- **"What integration patterns have we used between FSC and NetSuite for revenue recognition?"**
- **"What compliance workflow templates exist for SEC-regulated advisors?"**

CIG returns a structured graph of prior engagements, the ontology of entities involved (advisors, accounts, portfolios, billing rules, integration endpoints), and artifacts (runbooks, data models, requirements docs) tagged to those engagements.

Priya doesn't start from zero. She starts from Plative's collective intelligence.

---

### The Ontology Built

CIG builds a living ontology specific to Plative's world — not generic CRM objects, but the real entities that matter in cross-cloud wealth management consulting:

- **[[Advisor]]** → SF FSC object, linked to households, accounts, AUM
- **[[Household]]** → FSC grouping, relationships, communication preferences
- **[[Portfolio]]** → NetSuite financial entity, linked to GL accounts, billing schedules
- **[[Billing Schedule]]** → NetSuite object, driven by AUM tiers and fee agreements
- **[[Integration Mapping]]** → MuleSoft flow mapping FSC Advisor → NetSuite Client record
- **[[Compliance Workflow]]** → Process entity: suitability review, disclosure tracking, audit trail
- **[[Data Cloud Segment]]** → SF Data Cloud unified profile entity

The ontology isn't static — it evolves as Plative completes more engagements. Each new client adds new entities, edge cases, and relationship patterns.

---

### The Mirror Moment

Priya shows the CIG graph to the Meridian Capital CTO during the discovery kickoff. He sees his firm's architecture — advisors, households, portfolios, NetSuite billing — reflected back as a structured model Plative clearly already understands deeply. He doesn't have to explain their world from scratch.

**That's the mirror moment.** The CTO sees a partner who already speaks his language. The engagement accelerates. Trust is front-loaded. Scope is cleaner.

---

### Artifacts Generated

From the ontology, CIG generates:

1. **Current-State Architecture Map** — SF + NetSuite topology, integration points, data flows
2. **Gap Analysis Document** — what Meridian has vs. what best-in-class FSC + NetSuite looks like for wealth management
3. **Integration Blueprint** — MuleSoft proposed flows, entity mappings, transformation rules
4. **Data Model Spec** — FSC objects, NetSuite records, unified fields, sync triggers
5. **Compliance Workflow Diagram** — suitability review process, disclosure tracking, audit log design
6. **Engagement Runbook** — sequenced workstreams, team roles, milestone gates, risk flags

Each artifact is linked back to the ontology, so when the engagement ends, every decision and every object gets tagged to the CIG graph — enriching it for the next consultant who works a similar deal.

---

## 🧠 Full Ontology Schema

### Layer 1: Organizational

#### `PlativeEngagement`
> A client engagement managed by Plative — the top-level container for all CIG knowledge about a specific project.

| Attribute | Type | Description |
|---|---|---|
| `engagementId` | String | Unique identifier |
| `clientName` | String | Client company name |
| `vertical` | Enum | financial-services, nonprofit, technology, consumer |
| `primaryPlatform` | Enum | salesforce, netsuite, both |
| `engagementType` | Enum | implementation, migration, optimization, agentic |
| `startDate` | Date | Engagement start |
| `completionDate` | Date | Engagement end (or null if active) |
| `teamLead` | Ref → `PlativePractitioner` | Lead consultant |
| `dealSize` | Currency | Contract value |

**Relationships:**
- `hasClient` → `[[ClientOrganization]]`
- `deploysPlatform` → `[[PlatformInstance]]`
- `producesArtifact` → `[[EngagementArtifact]]`
- `followsPattern` → `[[SolutionPattern]]`

---

#### `PlativePractitioner`
> A Plative consultant, architect, or practice lead — the human node in the knowledge graph.

| Attribute | Type | Description |
|---|---|---|
| `name` | String | Full name |
| `role` | Enum | consultant, architect, practice-lead, delivery-manager |
| `primaryPlatform` | Enum | salesforce, netsuite, both |
| `verticalFocus` | Array | e.g., [financial-services, nonprofit] |
| `certifications` | Array | SF/NetSuite cert list |
| `engagementCount` | Integer | Number of completed engagements |
| `agentforceExperience` | Boolean | Has Agentforce delivery experience |

**Relationships:**
- `leadsEngagement` → `[[PlativeEngagement]]`
- `authoredArtifact` → `[[EngagementArtifact]]`
- `hasExpertiseIn` → `[[SolutionPattern]]`

---

#### `ClientOrganization`
> The client firm — with attributes specific to cross-cloud consulting context.

| Attribute | Type | Description |
|---|---|---|
| `name` | String | Legal/trade name |
| `vertical` | Enum | Plative vertical classification |
| `employeeCount` | Integer | Headcount |
| `revenue` | Currency | Annual revenue |
| `sfOrgId` | String | Salesforce org identifier |
| `netsuiteAccountId` | String | NetSuite account |
| `regulatoryProfile` | Array | e.g., [SEC, FINRA, IRS-501c3] |
| `technicalMaturity` | Enum | early, developing, mature |
| `aum` | Currency | AUM (financial services only) |

**Relationships:**
- `isServedBy` → `[[PlativeEngagement]]`
- `runs` → `[[PlatformInstance]]`
- `operatesIn` → `[[Vertical]]`

---

### Layer 2: Technology

#### `PlatformInstance`
> A specific deployment of Salesforce or NetSuite at a client — the actual production environment.

| Attribute | Type | Description |
|---|---|---|
| `platform` | Enum | salesforce, netsuite |
| `cloud` | String | e.g., Financial Services Cloud, Nonprofit Cloud |
| `edition` | String | Enterprise, Unlimited, etc. |
| `sandboxCount` | Integer | Number of dev/UAT sandboxes |
| `apiVersion` | String | Platform API version |
| `integrationLayer` | Enum | mulesoft, custom, none |
| `dataCloudEnabled` | Boolean | SF Data Cloud active |
| `agentforceEnabled` | Boolean | Agentforce deployed |

**Relationships:**
- `isOwnedBy` → `[[ClientOrganization]]`
- `integrationsWith` → `[[PlatformInstance]]` (cross-cloud link)
- `hostsSolution` → `[[DeployedSolution]]`
- `hasIntegrationFlow` → `[[IntegrationMapping]]`

---

#### `IntegrationMapping`
> A MuleSoft or custom integration flow connecting Salesforce and NetSuite — the critical cross-cloud node.

| Attribute | Type | Description |
|---|---|---|
| `flowName` | String | Integration flow identifier |
| `sourceSystem` | Enum | salesforce, netsuite |
| `targetSystem` | Enum | salesforce, netsuite |
| `triggerType` | Enum | event, scheduled, real-time |
| `sourceObject` | String | e.g., "Opportunity", "Account" |
| `targetObject` | String | e.g., "Customer", "Sales Order" |
| `fieldMappings` | Array | Field-level transformation rules |
| `errorHandling` | String | Retry logic, DLQ configuration |

**Relationships:**
- `connectsPlatforms` → `[[PlatformInstance]]` × 2
- `mapsEntity` → `[[DataEntity]]`
- `isPartOf` → `[[SolutionPattern]]`

---

#### `DataEntity`
> A specific business object (SF or NetSuite) relevant to the engagement — the atomic unit of data model work.

| Attribute | Type | Description |
|---|---|---|
| `entityName` | String | e.g., "Advisor", "Household", "Portfolio" |
| `platform` | Enum | salesforce, netsuite |
| `objectApiName` | String | e.g., "FinServ__FinancialAccount__c" |
| `recordCount` | Integer | Volume at client |
| `customFields` | Array | Plative-added custom fields |
| `syncTarget` | Ref → `DataEntity` | Cross-platform counterpart |
| `dataClassification` | Enum | pii, financial, operational, reference |

**Relationships:**
- `existsIn` → `[[PlatformInstance]]`
- `syncsTo` → `[[DataEntity]]`
- `isPartOf` → `[[IntegrationMapping]]`
- `representedIn` → `[[DeployedSolution]]`

---

### Layer 3: Process

#### `DeployedSolution`
> A functional solution deployed by Plative within a client's platform — e.g., "Advisor 360 view," "Grant Management Agent," "CPQ → RCA migration."

| Attribute | Type | Description |
|---|---|---|
| `solutionName` | String | Descriptive name |
| `type` | Enum | configuration, customization, agentic, integration, migration |
| `platform` | Array | Platforms involved |
| `businessCapability` | String | What business outcome it enables |
| `complexity` | Enum | low, medium, high, enterprise |
| `agentforceComponents` | Array | Agentforce topics, actions, flows |
| `platativeIPUsed` | Array | Plative IP components leveraged |
| `goLiveDate` | Date | When deployed to production |

**Relationships:**
- `deployedIn` → `[[PlatformInstance]]`
- `implementedBy` → `[[PlativeEngagement]]`
- `usesPattern` → `[[SolutionPattern]]`
- `producesArtifact` → `[[EngagementArtifact]]`

---

#### `SolutionPattern`
> A reusable consulting pattern — a proven approach to a class of problems. This is Plative's institutional knowledge made explicit.

| Attribute | Type | Description |
|---|---|---|
| `patternName` | String | e.g., "FSC-NetSuite AUM Billing Sync" |
| `vertical` | Array | Applicable verticals |
| `platforms` | Array | Platforms involved |
| `problemStatement` | Text | What problem this solves |
| `approach` | Text | How Plative approaches it |
| `typicalDuration` | String | Implementation timeline |
| `reuseCount` | Integer | Times used across engagements |
| `agentforceVariant` | Boolean | Has an agentic version |

**Relationships:**
- `appliedIn` → `[[PlativeEngagement]]`
- `producesArtifact` → `[[EngagementArtifact]]`
- `ownedBy` → `[[PlativePractitioner]]` (primary expert)
- `relatesTo` → `[[SolutionPattern]]` (pattern families)

---

#### `ComplianceWorkflow`
> A regulatory or governance process embedded in the platform — critical for financial services and nonprofit verticals.

| Attribute | Type | Description |
|---|---|---|
| `workflowName` | String | e.g., "Suitability Review", "Grant Approval" |
| `regulatoryDriver` | Array | e.g., [SEC, FINRA, IRS] |
| `platform` | Enum | salesforce, netsuite, both |
| `automationLevel` | Enum | manual, semi-automated, fully-automated, agentic |
| `auditCapability` | Boolean | Generates immutable audit trail |
| `approvalStages` | Integer | Number of approval gates |
| `sfFlowComponents` | Array | SF Flow/Process Builder elements |

**Relationships:**
- `governs` → `[[DeployedSolution]]`
- `requiresEntity` → `[[DataEntity]]`
- `triggeredBy` → `[[IntegrationMapping]]`
- `documentedIn` → `[[EngagementArtifact]]`

---

### Layer 4: Relationship

#### `PartnerEcosystem`
> Third-party vendors, ISVs, and platform relationships relevant to a Plative engagement.

| Attribute | Type | Description |
|---|---|---|
| `partnerName` | String | Vendor/ISV name |
| `partnerType` | Enum | platform, isv, integration, data |
| `sfAppExchangeListed` | Boolean | On AppExchange |
| `netsuiteCompatible` | Boolean | NetSuite integration available |
| `platativeRelationship` | Enum | preferred, evaluated, avoided |
| `verticalFit` | Array | Best-fit verticals |

**Relationships:**
- `usedIn` → `[[DeployedSolution]]`
- `integratesWith` → `[[PlatformInstance]]`
- `evaluatedBy` → `[[PlativePractitioner]]`

---

#### `StakeholderMap`
> Key client stakeholders involved in a Plative engagement — the human network at the client.

| Attribute | Type | Description |
|---|---|---|
| `stakeholderName` | String | Person's name |
| `title` | String | Job title |
| `organization` | Ref → `ClientOrganization` | Their employer |
| `platform` | Enum | salesforce-champion, netsuite-champion, both, neutral |
| `influence` | Enum | decision-maker, influencer, user, blocker |
| `agentforceReadiness` | Enum | enthusiast, open, skeptical, opposed |
| `communicationPreference` | String | Email, Slack, executive briefing, etc. |

**Relationships:**
- `stakeholderOf` → `[[PlativeEngagement]]`
- `championsProduct` → `[[PlatformInstance]]`
- `approves` → `[[ComplianceWorkflow]]`

---

### Layer 5: Intelligence

#### `EngagementArtifact`
> A document, model, diagram, or tool produced during or after a Plative engagement.

| Attribute | Type | Description |
|---|---|---|
| `artifactName` | String | Name/title |
| `type` | Enum | architecture-diagram, data-model, runbook, gap-analysis, integration-blueprint, requirements-doc, migration-plan |
| `platform` | Array | Platforms covered |
| `vertical` | Array | Applicable verticals |
| `reusability` | Enum | client-specific, vertical-template, universal |
| `authoredBy` | Ref → `PlativePractitioner` | Primary author |
| `version` | String | Document version |
| `storageLocation` | String | Where it lives (Confluence, SharePoint, CIG) |

**Relationships:**
- `producedBy` → `[[PlativeEngagement]]`
- `refinesPattern` → `[[SolutionPattern]]`
- `documentsWorkflow` → `[[ComplianceWorkflow]]`
- `linkedToEntity` → `[[DataEntity]]`

---

#### `MarketIntelligence`
> External signals — competitive moves, platform releases, regulatory changes — that should influence Plative's strategy and CIG recommendations.

| Attribute | Type | Description |
|---|---|---|
| `signalType` | Enum | platform-release, regulatory-change, competitor-move, client-signal |
| `platform` | Array | Affected platforms |
| `vertical` | Array | Affected verticals |
| `urgency` | Enum | watch, act-soon, act-now |
| `source` | String | Primary source of signal |
| `impliedAction` | Text | What Plative should do |
| `cигRelevance` | Text | How CIG should adapt |

**Relationships:**
- `affects` → `[[SolutionPattern]]`
- `triggers` → `[[EngagementArtifact]]` (new templates needed)
- `trackedBy` → `[[PlativePractitioner]]`

---

## 📄 Artifact Generation

### 1. Cross-Cloud Architecture Map
- **Contents:** Visual diagram of Salesforce and NetSuite instances, integration flows, data sync points, user personas, and data classification overlays
- **Audience:** Client CTO, Plative delivery lead, integration architect
- **Concrete Example:** Meridian Capital's FSC Advisor record → MuleSoft sync → NetSuite Client record, with AUM-triggered billing schedule downstream
- **Ontology Link:** `PlatformInstance` × 2 + `IntegrationMapping` + `DataEntity` nodes

### 2. Gap Analysis Document
- **Contents:** Side-by-side of current state vs. Plative-recommended best-in-class for this vertical; prioritized gaps by business impact
- **Audience:** Client executive sponsor, Plative practice lead
- **Concrete Example:** "Meridian has no unified household view across FSC and NetSuite; this creates $X advisory risk and manual reconciliation overhead"
- **Ontology Link:** `ClientOrganization` attributes + `SolutionPattern` comparison + `ComplianceWorkflow` gaps

### 3. Integration Blueprint
- **Contents:** Proposed MuleSoft flows, entity mappings, transformation logic, error handling, monitoring strategy
- **Audience:** Plative integration architect, client IT lead
- **Concrete Example:** FSC `FinancialAccount` → NetSuite `Revenue Recognition Schedule`, field-by-field mapping with currency normalization rules
- **Ontology Link:** `IntegrationMapping` full schema + `DataEntity` sync pairs

### 4. Data Model Specification
- **Contents:** Object-level data model for both platforms, custom field inventory, relationship diagrams, data governance rules
- **Audience:** Plative data architect, client Salesforce admin, NetSuite admin
- **Concrete Example:** `Advisor__c` (custom SF object), linked to `FinServ__FinancialAccount__c`, syncing `AUM__c` field to NetSuite `custentity_aum`
- **Ontology Link:** `DataEntity` nodes + `PlatformInstance` configuration

### 5. Compliance Workflow Runbook
- **Contents:** Step-by-step process documentation for regulatory workflows, approval stages, audit log requirements, exception handling
- **Audience:** Client compliance team, Plative financial services practice lead
- **Concrete Example:** SEC suitability review workflow — triggered at Opportunity close, 3-stage approval, generates immutable audit record in SF + NetSuite
- **Ontology Link:** `ComplianceWorkflow` full schema + `StakeholderMap` approvers

### 6. Engagement Runbook
- **Contents:** Sequenced workstreams, team roles, milestone gates, risk register, dependency map, go-live checklist
- **Audience:** Plative delivery manager, client project sponsor
- **Concrete Example:** 16-week FSC + NetSuite implementation — weeks 1–3 discovery, 4–6 design, 7–12 build, 13–15 UAT, 16 go-live
- **Ontology Link:** `PlativeEngagement` metadata + `PlativePractitioner` assignments + `DeployedSolution` milestones

### 7. Agentforce Agent Design Document
- **Contents:** Agent persona definition, topic list, action inventory, grounding data sources, escalation paths, evaluation criteria
- **Audience:** Plative Agentforce architect, client innovation/digital lead
- **Concrete Example:** Grant Management Agent — topics: [grant-eligibility-check, application-guidance, submission-status], grounded in Nonprofit Cloud + grant history
- **Ontology Link:** `DeployedSolution` (agentforce type) + `DataEntity` grounding sources + `ComplianceWorkflow` guardrails

---

## 🎯 Pitch Angle

### The Core Argument

Plative's value is cross-cloud depth. But their institutional knowledge is currently **trapped in people** — in the heads of practitioners, scattered across Confluence, lost when consultants move on. Every new engagement reinvents the wheel for the previous dozen wheels Plative has already built.

**[[Customer Intelligence Graph]] is how Plative turns individual expertise into organizational intelligence.**

Specifically:

1. **Faster engagement kickoffs** — CIG surfaces relevant patterns, prior client architectures, and reusable artifacts before the first client call. Priya doesn't spend week one asking "what have we done like this before?"

2. **Consistency at scale** — as Plative grows past 200 professionals, quality variance becomes real. CIG encodes best practices into the graph so junior consultants deliver senior-level context.

3. **The mirror moment** — showing clients a structured model of their own architecture (SF + NetSuite + integration) that Plative already understands is a trust accelerant unlike any deck

4. **Agentforce alignment** — Plative is betting on Agentforce. CIG is the knowledge substrate that makes Agentforce agents at Plative's clients actually smart. You can't ground agents in institutional knowledge that lives in people's heads.

5. **IP amplification** — Plative's Grant Management Agent and CPQ→RCA tools are great. CIG makes them smarter over time by feeding real engagement intelligence back into the product development loop.

### Why Now

Plative is at an inflection point: Agentforce 2.0/2DX/3 adoption is ramping, they're expanding verticals, and they just won the NetSuite Spotlight Award. They're investing in IP and differentiation. CIG is the intelligence infrastructure that makes all of it compound instead of staying flat.

### The Contrast

Without CIG: Each engagement is a local event. Knowledge walks out the door with every consultant who moves on.
With CIG: Every engagement enriches a persistent graph. Plative gets smarter with every client, every deal, every artifact.

---

## 👤 Buyer Contact

| Role | Profile | Likely Title |
|---|---|---|
| **Primary Buyer** | Head of Delivery / VP of Consulting | VP Delivery, Chief Delivery Officer |
| **Economic Buyer** | CEO or COO | CEO, COO, Managing Partner |
| **Champion** | Practice Lead — Financial Services or Nonprofit | Financial Services Practice Lead |
| **Technical Validator** | Architecture lead or Salesforce CTA | Principal Architect, CTA |
| **Agentforce Champion** | Whoever owns the Grant Management Agent | Product Lead, Agentforce Practice Lead |

**Recommended entry point:** The Financial Services or Nonprofit practice lead — they feel the pain of reinventing wheels most acutely. They'll be the internal champion.

**Approach:** Reference Cohen & Co (SF + NetSuite for financial services) and Joni and Friends (nonprofit + Grant Management Agent) as proof points. Show you understand their cross-cloud consulting world before pitching.

---

## 💰 Deal Sizing

| Component | Estimate |
|---|---|
| CIG Platform License | $1.2–1.8M ARR |
| Onboarding & Implementation | $400–600K |
| Custom Ontology Build (cross-cloud) | $300–500K |
| Agentforce Integration Layer | $200–400K |
| Ongoing enrichment & expansion | $500K–1M/yr |
| **Total (Year 1)** | **~$2.5–4M** |
| **Total (3-Year Value)** | **~$4–6M** |

---

## 🔗 Related Nodes

- [[Customer Intelligence Graph]]
- [[Salesforce Financial Services Cloud]]
- [[Oracle NetSuite]]
- [[Agentforce]]
- [[MuleSoft]]
- [[Nonprofit Cloud]]
- [[NPSP]]
- [[Revenue Cloud]]
- [[CPQ]]
- [[Data Cloud]]
- [[Grant Management Agent]]
- [[SI Buyer Archetype]]
- [[Cross-Cloud Consulting Pattern]]
- [[Cohen & Co]]
- [[Joni and Friends]]
- [[Pathful]]
- [[Halo]]

---

## ⚠️ Open Questions

1. **Who specifically leads their Agentforce practice?** — The Grant Management Agent must have an owner. That person is a key champion.
2. **What is their current knowledge management stack?** — Confluence? SharePoint? Notion? Understanding where knowledge lives today tells us how hard the migration/integration story is.
3. **How do they currently package reusable patterns?** — Do they have an internal "solution library"? Or is everything bespoke? This determines the CIG adoption baseline.
4. **What's their growth trajectory?** — Are they adding headcount aggressively? If so, onboarding velocity (new consultant time-to-competence) is an even stronger pain point.
5. **Do they have a dedicated product/IP team?** — Or is IP (Grant Management Agent, RCA tool) built by delivery? This affects how CIG feeds back into product development.
6. **What's their data residency situation?** — With financial services clients, data sovereignty may be a procurement blocker or requirement.
7. **Who approved the RCA migration tool build?** — CPQ→RCA migration tooling suggests someone at Plative is leading platform modernization. That person cares about CIG's ability to reduce migration risk.
8. **How do they handle knowledge transfer when consultants leave?** — Is there a documented offboarding process? Or does knowledge walk? If it walks, that's the opening line.
9. **Are there any active Agentforce 2DX or 3 deployments beyond Grant Management?** — Understanding their agentic pipeline tells us how hungry they are for knowledge infrastructure.
10. **What procurement process would a $3–5M platform deal go through?** — Direct leadership decision? Board approval? Understanding this shapes the sales motion.

---

## 📆 Engagement History

| Date | Action | Outcome |
|---|---|---|
| 2026-04-24 | Profile created, research compiled | Ready for outreach |
| — | First contact | TBD |
| — | Discovery call | TBD |
| — | Demo: cross-cloud ontology scenario | TBD |
| — | Proposal | TBD |

---

*Profile authored by [[Koko]] | Source: Plative.com, Salesforce AppExchange, NetSuite Alliance, Agentforce content*
