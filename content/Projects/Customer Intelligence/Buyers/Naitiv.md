# Naitiv (Naitiv Partners)

#buyer #project #servicenow #insurance #ai-native #early-stage

> **First AI-native ServiceNow consultancy.** Founded by former Thirdera executives who saw the gap left by Cognizant's acquisition — and decided to fill it by building something faster, smarter, and vertically focused on insurance.

---

## 📌 At a Glance

| Field | Value |
|---|---|
| **Company** | Naitiv / Naitiv Partners |
| **Founded** | 2025/2026 |
| **Stage** | Early-stage / newly launched |
| **Focus** | AI-native ServiceNow consulting, insurance vertical |
| **Initial Market** | Property & Casualty (P&C) insurance carriers |
| **Platform** | ServiceNow |
| **Origin** | Spin-off by ex-Thirdera executives post-Cognizant acquisition |
| **Key Contacts** | Reynolds (co-founder), Bill Devine (insurance expert) |
| **Priority** | ⭐⭐⭐ High |
| **Status** | 🟢 Active — early outreach phase |
| **CIG Deal Range** | $0.5M – $1.5M |
| **Design Partner?** | Strong candidate — evaluate immediately |

---

## 🏢 Company Profile

### Founding Story

Naitiv was born from a gap. When **Thirdera** — one of the most respected boutique ServiceNow consultancies — was acquired by **Cognizant**, it became something different: larger, slower, less agile. The partners who built Thirdera's reputation knew what boutique excellence looked like, and they saw the void.

Three former Thirdera executives, joined by a seasoned **insurance industry expert**, co-founded Naitiv with a clear thesis: the ServiceNow ecosystem needs an **AI-native partner** that understands vertical workloads deeply enough to actually operationalize AI — not just implement the platform.

Their bet: start with insurance, where the pain is specific, the regulation is crushing, the workflows are trapped in people's heads, and ServiceNow is already deeply embedded.

### The "AI-Native" Distinction

Most ServiceNow partners sell implementation. They lift and shift processes onto the platform, train teams, and move on. Naitiv's pitch is different:

- They don't just deploy ServiceNow — they **make data and workflows AI-ready**
- They understand that insurance work is *"very bespoke and based in the minds of one or two people"* — and their job is to extract that tacit knowledge and bring it into AI-enabled platforms
- They work both sides of the problem: **technical** (ServiceNow tooling, integrations, data pipelines) and **human** (change management, workflow documentation, adoption signals)

This is not a "we'll turn on ServiceNow AI features" shop. It's a consultancy that thinks about AI operationalization as an outcome, not a feature.

### Platform: ServiceNow

ServiceNow is the center of gravity. Key facts:

- **ServiceNow is deployed in over 95% of all insurance companies** as a core application asset
- The partner ecosystem is evolving toward AI-native delivery models and vertical specialization
- Thirdera's departure into Cognizant's orbit left a boutique gap that Naitiv is designed to fill
- Naitiv operates inside the ServiceNow partner ecosystem — elite partner status is a likely goal

### Initial Service Lines

Based on the founding focus, Naitiv's early offerings likely include:

1. **AI Readiness Assessment** — documenting current workflows, identifying manual process inventory, scoring AI readiness
2. **Workflow Digitization** — extracting tacit insurance knowledge into structured, automatable flows on ServiceNow
3. **Claims Workflow Transformation** — FNOL through settlement, with AI assist at each stage
4. **Underwriting Enablement** — data normalization, risk model integration, policy issuance automation
5. **Compliance Overlay** — mapping state-by-state regulatory requirements onto ServiceNow processes
6. **Change Management** — the "human side" that most technical shops ignore

### Geographic / Vertical Expansion Plan

- **Phase 1:** P&C insurance (current)
- **Phase 2:** Life & annuity, health insurance, specialty lines
- **Phase 3:** Adjacent financial services verticals (banking, asset management) where ServiceNow + AI operationalization have similar dynamics

---

## 🔍 What CIG Would Look Like For Naitiv

### The Scenario

A **Naitiv consultant** is preparing for an engagement with a **mid-size P&C insurance carrier** — let's call them Meridian Mutual. Meridian has ~$800M GWP, operates in 12 states, runs a legacy claims system (Guidewire ClaimCenter), and has a ServiceNow instance used primarily for IT helpdesk. They want to operationalize AI in their claims workflow. The CEO has mandated "AI in claims by Q4."

The Naitiv team has 3 weeks before their first workshop. They need to understand Meridian's org, their systems, their workflows, their regulatory exposure, and whether the org is actually capable of absorbing AI change. Without CIG, they spend the first 2-3 workshops just gathering this information manually.

**With CIG's Profile Engine, here's what changes:**

---

### Layer 1: Org Mapping

The Profile Engine builds Meridian's organizational structure from intake data, filings, and any connected sources:

- **Enterprise node:** `[[Meridian Mutual Insurance]]` — $800M GWP, P&C, 12-state footprint
- **Departments mapped:**
  - `[[Claims Department]]` — ~120 staff, avg tenure 8 years, high institutional knowledge concentration
  - `[[Underwriting Department]]` — 45 staff, split between personal and commercial lines
  - `[[Policy Administration]]` — 30 staff, heavily dependent on legacy batch processes
  - `[[Compliance & Regulatory]]` — 8 staff, covers all 12 states
- **Key roles surfaced:**
  - Chief Claims Officer — decision authority on workflow changes
  - VP of Operations — owns the ServiceNow instance and IT alignment
  - Director of Compliance — gatekeeper for any process touching regulatory requirements
  - Two senior adjusters who "hold the institutional memory" of complex claims handling

The org map immediately tells Naitiv: **don't skip the senior adjusters**. If they don't buy in, the workflow documentation phase will fail. This insight — which would normally emerge in week 3 — appears in week 0.

---

### Layer 2: Technology Mapping

The Profile Engine maps Meridian's technology stack, integration topology, and AI readiness signals:

- **ServiceNow Instance:** `[[Meridian - ServiceNow Instance]]`
  - Currently: ITSM only (helpdesk, asset management)
  - Opportunity: Claims management module, App Engine, Now Assist
  - Integration readiness: REST API capable, MID server deployed
- **Claims System:** `[[Guidewire ClaimCenter]]` — legacy claims platform, on-prem, v9.x
  - Key risk: ClaimCenter data model is complex; AI ingestion requires significant normalization
  - Integration path: Guidewire Integration Framework → ServiceNow via MID server
- **Policy Admin System:** `[[Duck Creek Policy]]` — mid-generation, some API exposure
- **Legacy Systems flagged:** Two batch-processing systems from the 1990s handling specific state filings
- **Data Readiness Score:** `AI Readiness Score: 38/100` — significant manual data cleanup required before any model training

The technology map tells Naitiv: **sequence matters**. They need to fix the data pipeline before they promise AI outputs. The carrier's CEO doesn't know this yet. Naitiv walks in knowing it.

---

### Layer 3: Process Intelligence

The Profile Engine generates a claims workflow map based on Meridian's state filings, adjuster data, and any available process documentation:

**Claims Lifecycle at Meridian Mutual:**

```
FNOL (phone/web) 
  → Initial Coverage Validation (manual, 2-4 hours)
  → Assignment to Adjuster (rules-based, some manual override)
  → Field Investigation (P&C specific: site visits, photos, estimates)
  → Reserve Setting (manual, high variance between adjusters)
  → Coverage Determination (compliance check required in 7 states)
  → Settlement Negotiation (unstructured, email-heavy)
  → Payment Authorization (3-level approval for >$50K)
  → Closure & Subrogation Evaluation (frequently skipped)
```

**Manual Process Inventory surfaced:**
- Reserve setting: fully manual, no model guidance, 40% variance between adjusters
- Coverage determination: partially automated in 5 states, manual in 7
- Settlement documentation: email threads, no structured system
- Subrogation evaluation: skipped >60% of the time due to workload

**AI Opportunity Scoring by step:**
- FNOL: Medium (automation ROI, but not highest pain)
- Reserve Setting: **HIGH** — this is where Naitiv should anchor their first AI use case
- Coverage Determination: **HIGH** — compliance automation with high ROI
- Settlement: Medium
- Subrogation: High (latent value recovery — often surprises clients)

The process map hands Naitiv a **sequenced implementation roadmap** before the engagement kickoff. They walk in as experts, not as interviewers.

---

### Layer 4: Regulatory Overlay

The Profile Engine cross-references Meridian's 12-state footprint against regulatory requirements:

- **States with 30-day claim acknowledgment requirements:** CA, NY, IL, TX, FL (all in Meridian's footprint)
- **States with prompt payment mandates:** 9 of 12 states — non-compliance exposure flagged
- **Rate filing status:** 3 states have open filings; 1 has a pending compliance inquiry
- **Audit trail gaps:** Current ServiceNow instance has no claims-specific audit logging — regulatory risk HIGH in CA and NY

This layer tells Naitiv: **lead with compliance**. The compliance overlay will resonate with the Director of Compliance and create a budget justification that doesn't require the CEO to believe in AI — it just requires them to not want regulatory fines.

---

### Layer 5: Change Readiness Signal

The Profile Engine generates change adoption signals based on org characteristics:

- **Institutional knowledge concentration:** HIGH (2 senior adjusters hold critical process knowledge)
- **Technology adoption history:** MODERATE (ServiceNow ITSM adoption was slow, 18-month rollout)
- **Workforce tenure distribution:** High average tenure = potential resistance to workflow changes
- **Leadership alignment:** CEO mandate exists but VP Operations and CCO have not publicly aligned
- **Recommended approach:** Document-first, automate-second; start with tools that assist adjusters, not replace them

**Change Adoption Signal: 52/100** — proceed with caution; invest in change management as a primary workstream, not an afterthought.

---

## 🗂️ Full Ontology Schema

### 🏛️ Org Layer

| Node Type | Description | Example Instances |
|---|---|---|
| `InsuranceCompany` | Top-level enterprise node | `[[Meridian Mutual Insurance]]`, `[[State Farm]]` |
| `Department` | Functional unit within carrier | `[[Claims Department]]`, `[[Underwriting]]`, `[[Policy Admin]]`, `[[Compliance]]` |
| `Role` | Named function within department | `Chief Claims Officer`, `Senior Adjuster`, `Compliance Director` |
| `AgentBroker` | External distribution partner | Independent Agent, Captive Agent, Wholesale Broker, MGA |
| `Policyholder` | End customer | Individual, Commercial, Government entity |
| `Reinsurer` | Risk transfer partner | Treaty reinsurer, Facultative reinsurer |

---

### 💻 Technology Layer

| Node Type | Description | Key Relationships |
|---|---|---|
| `ServiceNowInstance` | Carrier's ServiceNow deployment | `→ Modules`, `→ Integrations`, `→ AIReadinessScore` |
| `CoreInsuranceSystem` | Legacy or modern insurance platform | Guidewire, Duck Creek, Applied Epic, Majesco |
| `ClaimsSystem` | Claims-specific platform | `[[Guidewire ClaimCenter]]`, `[[One Inc]]`, `[[Snapsheet]]` |
| `PolicyAdminSystem` | Policy lifecycle management | `[[Duck Creek Policy]]`, `[[Majesco]]`, `[[Sapiens]]` |
| `Integration` | Connection between systems | MID Server, REST API, ETL pipeline, ESB |
| `LegacySystem` | Pre-API era systems | Batch processors, COBOL mainframes, flat-file exporters |
| `DataWarehouse` | Analytics / reporting layer | Snowflake, Redshift, on-prem DW |
| `AIModel` | Deployed or planned AI capability | Reserve predictor, fraud detector, FNOL classifier |

---

### ⚙️ Process Layer

| Node Type | Description | Sub-steps |
|---|---|---|
| `ClaimsWorkflow` | FNOL → Settlement | FNOL, Validation, Assignment, Investigation, Reserve, Coverage, Negotiation, Payment, Closure |
| `UnderwritingPipeline` | Submission → Policy Issuance | Submission intake, Risk assessment, Pricing, Approval, Policy issuance |
| `PolicyLifecycle` | New business through cancellation | New Business, Endorsement, Renewal, Non-Renewal, Cancellation |
| `ComplianceCheck` | Regulatory validation step | State-specific rule eval, Filing verification, Deadline tracking |
| `AuditTrail` | Regulatory audit log | Event log, Timestamp, Actor, Decision rationale, State |
| `SubrogationEvaluation` | Recovery opportunity assessment | Liability review, Recovery calculation, Pursuit decision |
| `FNOLCapture` | First Notice of Loss | Channel (phone/web/app), Structured data capture, Initial triage |
| `ReserveSettingProcess` | Financial reserve estimation | Initial reserve, Reserve adequacy review, Actuarial alignment |

---

### 📋 Regulatory Layer (Insurance-Specific)

| Node Type | Description | Key Attributes |
|---|---|---|
| `StateRegulation` | Insurance regulation by state | State, Regulation type, Effective date, Penalty exposure |
| `FilingRequirement` | Required regulatory filing | Form type, Filing window, State, Status, Last filed |
| `ComplianceStatus` | Current standing per requirement | Compliant / At-risk / Non-compliant, Remediation plan |
| `AuditHistory` | Past regulatory audits | Audit date, Findings, Remediation, Regulator |
| `RateFiling` | Filed insurance rates | State, Line of business, Base rate, Approval status, Effective date |
| `PromptPaymentMandate` | State-specific claim payment deadline | State, Trigger event, Deadline, Penalty per day |
| `ReserveAdequacyRequirement` | State reserve reporting mandate | State, Reporting frequency, Formula, Actuarial requirement |

---

### 🔗 Relationship Layer

| Relationship | From → To | Intelligence Value |
|---|---|---|
| `AgentPolicyholder` | Agent → Policyholder | Distribution channel analysis, churn risk, service quality signals |
| `BrokerCarrier` | Broker → Carrier | Commission structure, submission volume, preferred placement patterns |
| `ReinsurerCarrier` | Reinsurer → Carrier | Treaty terms, retrocession exposure, cat aggregate tracking |
| `VendorDepartment` | Vendor → Department | Vendor concentration risk, contract renewal signals, capability overlap |
| `AdjusterClaim` | Adjuster → Claim | Caseload distribution, performance benchmarking, institutional knowledge mapping |
| `CarrierRegulator` | Carrier → State Regulator | Compliance history, open inquiries, relationship quality |
| `MGACarrier` | MGA → Carrier | Delegated authority scope, underwriting guidelines, performance data |

---

### 🧠 Intelligence Layer

| Node Type | Description | Scoring Method |
|---|---|---|
| `AIReadinessScore` | 0-100 score for AI operationalization readiness | Data quality + workflow digitization + tech stack modernity + org change capacity |
| `WorkflowDigitizationStatus` | % of workflows documented and structured | Documented / Partially documented / Tacit knowledge only |
| `ManualProcessInventory` | Catalog of manual steps within workflows | Step name, owner, frequency, error rate, automation potential |
| `ChangeAdoptionSignal` | Org's historical and predicted change absorption | Tech adoption history + tenure distribution + leadership alignment + past project outcomes |
| `InstitutionalKnowledgeRisk` | Risk from key-person dependency on tacit knowledge | Named roles, knowledge type, succession gap, documentation status |
| `DataReadinessScore` | Quality and structure of data available for AI training | Completeness, consistency, accessibility, labeling quality |
| `SubrogationRecoveryOpportunity` | Estimated latent value in unevaluated recovery cases | Case volume × estimated recovery rate × avg settlement size |
| `ComplianceExposureScore` | Regulatory risk across state footprint | Open filings + prompt payment violations + audit findings |

---

## 📄 Artifact Generation

When a Naitiv consultant runs the Profile Engine against a carrier engagement, CIG generates the following artifacts:

---

### Artifact 1: Claims Workflow Automation Blueprint

A structured document showing:
- Current state claims workflow (as-discovered, step by step)
- Manual process inventory with automation potential scores
- Recommended AI insertion points (reserve setting, fraud triage, coverage determination)
- ServiceNow module mapping for each workflow step
- Data requirements per AI use case
- Sequenced implementation roadmap (quick wins first)

> **Format:** Obsidian-linked map view + exportable PDF for carrier stakeholder review

---

### Artifact 2: Underwriting AI Readiness Assessment

A scored evaluation covering:
- Data quality across submission data, loss history, external enrichment sources
- Current underwriting workflow digitization status
- AI use cases ranked by ROI and feasibility (pricing model assist, appetite screening, clearance automation)
- Integration requirements between policy admin system and ServiceNow
- Model governance requirements (explainability, state approval considerations)

> **Format:** Scorecard + narrative + recommended workstreams

---

### Artifact 3: Compliance Overlay Map

A state-by-state regulatory view showing:
- All applicable mandates across the carrier's licensed states
- Current compliance status per mandate
- ServiceNow workflow gaps that create compliance risk
- Recommended automation controls (acknowledgment tracking, prompt payment timers, audit logging)
- Open regulatory inquiries and remediation status

> **Format:** State-by-state grid + ServiceNow control recommendations + risk prioritization matrix

---

### Artifact 4: Policyholder Experience Redesign

A customer journey map showing:
- Current touchpoints (FNOL through closure) from policyholder perspective
- Pain points correlated with workflow gaps (delays, communication failures, documentation requests)
- AI-enhanced experience design (proactive status updates, digital self-service, faster settlements)
- ServiceNow CSM/portal integration requirements
- Experience KPIs and measurement framework

> **Format:** Journey map + ServiceNow feature requirements + KPI dashboard design

---

### Artifact 5: Institutional Knowledge Extraction Plan

A structured program for capturing tacit knowledge:
- Named individuals with critical knowledge dependencies
- Knowledge types mapped (claims handling judgment, state-specific nuances, carrier appetite rules)
- Extraction methodology (structured interviews, decision tree workshops, case-based learning)
- Digitization targets (ServiceNow knowledge base, AI training data, runbooks)
- Risk mitigation timeline (prioritized by retirement/attrition risk)

> **Format:** Named role inventory + extraction plan + timeline + ServiceNow knowledge base architecture

---

### Artifact 6: AI Implementation Sequencing Roadmap

The master sequencing document:
- Phase 0: Data foundation (normalization, integration, audit logging)
- Phase 1: Workflow documentation and AI-readiness uplift
- Phase 2: First AI use case deployment (typically reserve setting or FNOL triage)
- Phase 3: Expansion to underwriting and compliance
- Phase 4: Continuous improvement loop with model monitoring
- Change management milestones woven throughout

> **Format:** Gantt-style roadmap + dependency map + change management overlay

---

## 🎯 Pitch Angle: How a 10-Person Firm Beats Deloitte

This is Naitiv's story — and it's also CIG's story for them.

When Meridian Mutual is evaluating partners, they'll get proposals from Deloitte, KPMG, maybe a regional SI. Those proposals will be polished. They'll have slide decks with Gartner quadrants and partner logos. They'll promise everything.

**What Deloitte can't do:**

- Walk into week 1 already understanding the org structure, key personnel, regulatory exposure, and technology gaps
- Sequence the roadmap based on actual process intelligence rather than generic insurance methodology
- Adapt in real time as new information surfaces without a 3-week internal review cycle
- Commit a senior partner to the engagement rather than a junior team they'll barely see

**What Naitiv + CIG enables:**

> *"We spent the week before our kickoff running your organization through our Profile Engine. Here's what we already know about your claims workflow, your compliance exposure in California and New York, your reserve-setting variance problem, and the two people in your claims department this entire program will succeed or fail on."*

That's not a slide deck. That's a demonstration of intelligence before the engagement even starts. It wins deals. It builds trust. It makes the 10-person firm look like they've been inside the building for months.

**The design partner play:**

Naitiv is early-stage. They're building their methodology and their client stories simultaneously. CIG can accelerate both — and in exchange, Naitiv gives CIG deep access to real insurance engagement data, workflow patterns, and outcome feedback loops. The partnership makes both companies better.

---

## 👥 Key Contacts

### Reynolds
- **Title:** Co-founder, Naitiv
- **Background:** Former Thirdera executive
- **Focus:** ServiceNow partner ecosystem strategy; overall firm direction
- **Relevance:** Primary decision-maker for tools and partnerships; understands the SI world deeply
- **Approach:** Lead with the "how a boutique beats the big firms" narrative; he's lived this story and will recognize it immediately
- **LinkedIn:** *[to be verified]*
- **Notes:** Ex-Thirdera network is trust-dense; a warm intro from a ServiceNow ecosystem contact would carry significant weight

### Bill Devine
- **Title:** Insurance Industry Expert, Co-founder / Advisor
- **Background:** Deep insurance domain expertise; insurance industry career prior to Naitiv
- **Focus:** Ensuring Naitiv's offerings are grounded in real insurance workflows, not just ServiceNow theory
- **Relevance:** Will validate whether CIG's insurance ontology is accurate and useful; speaking at ServiceNow events on insurance topics
- **Approach:** Lead with ontology depth and the compliance overlay artifact; this is his world
- **Notes:** Speaking engagements create visibility — track ServiceNow event schedule for session appearances

---

## ⚠️ Open Questions

- [ ] What is Reynolds' first name? Only last name known currently.
- [ ] Who are the other two co-founders beyond Reynolds and Bill Devine?
- [ ] Is Naitiv formally enrolled in the ServiceNow partner program, and at what tier?
- [ ] What is their first named client (or are they pre-revenue/pre-launch)?
- [ ] Do they have a proprietary methodology framework, or are they borrowing from Thirdera's playbook?
- [ ] What's their pricing model — fixed-fee project, T&M, or outcome-based?
- [ ] Are they VC-backed, bootstrapped, or self-funded by the founders?
- [ ] What's the geographic footprint — US-only, or eyeing Lloyd's market / European carriers?
- [ ] Is Bill Devine a full co-founder or an advisory board member?
- [ ] What ServiceNow sales motion are they working through — direct to carrier, through ServiceNow channel, or both?
- [ ] Have they had any prior conversations with ServiceNow's industry team about formal alignment?
- [ ] Are there other insurance-focused ServiceNow partners competing for this positioning?

---

## 🔗 Related

- [[Customer Intelligence Graph]]
- [[Profile Engine]]
- [[ServiceNow Ecosystem]]
- [[Insurance Vertical Strategy]]
- [[Thirdera]]
- [[Cognizant]]
- [[Guidewire]]
- [[Duck Creek]]
- [[P&C Insurance Workflows]]
- [[Buyers/Deloitte]]
- [[Buyers/Accenture]]
- [[Ontology Design - Insurance]]

---

## 📅 Activity Log

| Date | Action | Notes |
|---|---|---|
| 2026-04-24 | Profile created | Based on pre-gathered research; no direct contact yet |
| — | First outreach | *Pending* |
| — | Discovery call | *Pending* |
| — | Design partner conversation | *Pending* |

---

## 💡 Strategic Notes

**Why this matters beyond the deal:**

Naitiv's success in insurance is a proof-of-concept for CIG's broader thesis: that vertical AI consultancies need organizational intelligence infrastructure to compete at the highest level. If CIG can show that a 10-person ServiceNow shop won a $3M engagement against Deloitte because they walked in knowing more about the carrier than Deloitte learned in the first two months — that story travels.

Insurance is also uniquely well-suited to the CIG ontology because:
1. The regulatory layer is explicit, public, and state-specific — perfect for structured graph representation
2. The workflows are standardized enough to compare across carriers, but differentiated enough that understanding the nuances is a genuine moat
3. The "tacit knowledge" problem is acute — senior adjusters and underwriters carry decades of judgment that is nowhere documented
4. The compliance exposure creates urgency that doesn't require belief in AI — it just requires fear of regulators

**The expansion opportunity:**

If Naitiv grows beyond P&C into life/health/specialty, every new vertical adds a new regulatory layer and a new ontology extension. CIG grows with them. This is a compounding relationship, not a one-time sale.

**Risk factors:**
- They're early-stage: deal timeline could be long if they're still seeking first clients
- Small firm: deal size ceiling exists even at $1.5M
- If a large SI acquires them (as Cognizant did Thirdera), the relationship dynamic changes

**Bottom line:**
Treat Naitiv as a design partner candidate first, a revenue deal second. The co-creation value outweighs the immediate contract size.

---

*Last updated: 2026-04-24 | Owner: [[Koko]] | Source: CIG Buyer Intelligence*
