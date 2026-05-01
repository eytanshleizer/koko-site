# Ontology & Schema System
#product #feature #project

*Last updated: 2026-04-24 | Maintained by Koko*

→ Back to [[Product/README]] | [[Product Architecture]] | [[Customer Profile Engine]] | [[Research/Ontology Design for Enterprise Sales]]

---

## What "Ontology" Means Here

Not the academic definition. In this product, **ontology** = the structured vocabulary and relationship model the Profile Engine uses to represent a customer.

A schema defines:
- **What entities to look for** (people, systems, processes, departments)
- **What attributes matter** for each entity (for a system: name, category, vendor, integration points, age)
- **What relationships to map** (person X owns system Y, system Y feeds process Z)
- **What signals to look for** in each data source to populate those entities

Different solution types require different schemas. An Agentforce-focused schema cares about Salesforce org health. A procurement schema cares about ERP age and P2P tool coverage. Same architecture, different lenses.

→ Deep background: [[Research/Ontology Design for Enterprise Sales]]

---

## How Schemas Are Configured

### Per Solution Type
- The buying firm declares which solution types they sell (Agentforce, Hiring, ERP, etc.)
- For each solution type, a **base schema template** is loaded
- The firm customizes: add entities, add attributes, adjust weightings, remove irrelevant branches
- Templates are maintained centrally and improved via [[Global Learning Layer]]

### Per Vertical
- A commercial real estate firm needs different signals than a manufacturing firm
- Vertical overlays add/modify entities on top of the solution type schema
- Example: Ascendix (CRE vertical) selling Salesforce → Agentforce base schema + CRE vertical overlay (property portfolio entities, brokerage org structures, lease lifecycle signals)

### Configuration done in [[Setup & Configuration Module]]
- Optional: firms that don't configure get sensible defaults
- Recommended for firms with a specific vertical or non-standard solution types

---

## Schema Templates

### Template 1: Agentforce / Salesforce

**Purpose:** Profile firms running or evaluating Salesforce, with emphasis on Agentforce deployment readiness.

**Entity Types:**

| Entity | Key Attributes | Sources |
|---|---|---|
| Salesforce Org | Clouds deployed (Sales, Service, Marketing, etc.), edition, license count estimate, org age | AppExchange reviews, job postings, LinkedIn |
| AppExchange Apps | App name, category, install signals, review sentiment | AppExchange listing data |
| CRM Processes | Lead-to-close workflow, service case handling, CPQ, forecast cadence | Job postings, case studies |
| SF Admin Team | Admin headcount, cert count, in-house vs. partner managed | LinkedIn, job postings |
| Integration Landscape | Connected systems (ERP, Marketing, Service Desk), integration method | Job postings, web, G2 |
| Decision Makers | CTO, VP of Sales, VP of Service, SF Admin lead | LinkedIn, press |
| Pain Signals | CRM adoption issues, process workarounds, customization debt | Glassdoor, G2, AppExchange reviews |

**Key Relationships:**
- SF Org → has → AppExchange Apps
- SF Admin Team → manages → SF Org
- Integration Landscape → connects → CRM Processes
- Pain Signals → map to → CRM Processes + Admin Team

**Solution fit overlay:** Map buying firm's Agentforce practice capabilities to identified pain signals and readiness gaps

---

### Template 2: Hiring / Talent Automation

**Purpose:** Profile firms with active hiring and talent ops challenges.

**Entity Types:**

| Entity | Key Attributes | Sources |
|---|---|---|
| Recruiting Org | Recruiter count, HRBP structure, TA leadership | LinkedIn, job postings |
| ATS / HRIS Stack | ATS name (Greenhouse, Lever, Workday, etc.), HRIS name, integration quality | G2, job postings, web |
| Hiring Funnel | Open req volume, time-to-hire signals, sourcing channels | Job postings, Glassdoor, LinkedIn |
| Department Hiring Needs | Which teams are scaling fastest, which roles are hardest to fill | Job posting volume analysis |
| Recruiter Pain | Burnout signals, process pain, tool complaints | Glassdoor, G2 reviews |
| Decision Makers | CHRO, VP Talent Acquisition, HR Ops lead | LinkedIn |

**Key Relationships:**
- Recruiting Org → runs → Hiring Funnel
- ATS/HRIS Stack → supports → Hiring Funnel
- Department Hiring Needs → drives → Recruiter Pain

---

### Template 3: Procurement Transformation

**Purpose:** Profile firms with procurement complexity — large spend, fragmented suppliers, or manual P2P processes.

**Entity Types:**

| Entity | Key Attributes | Sources |
|---|---|---|
| Procurement Org | Category managers, CPO structure, approval hierarchy depth | LinkedIn, job postings |
| ERP System | Vendor (SAP, Oracle, NetSuite, etc.), age, modules deployed | Job postings, G2, press |
| P2P Tool | Coupa, Ariba, Oracle Procurement, or manual? | Job postings, G2, web |
| Supplier Landscape | Supplier count signals, fragmentation, preferred vendor programs | Press, job postings |
| Process Maturity | Req-to-PO cycle time estimates, invoice automation level | Job postings, case studies |
| Pain Signals | Maverick spend, approval bottlenecks, supplier onboarding friction | Glassdoor, G2 |
| Decision Makers | CPO, VP Procurement, Finance SVP | LinkedIn, press |

**Key Relationships:**
- Procurement Org → owns → P2P Tool
- ERP System → integrates with → P2P Tool
- Supplier Landscape → creates → Pain Signals (fragmentation)

---

### Template 4: ERP / Systems Migration

**Purpose:** Profile firms running aging ERP or facing integration complexity — candidates for migration or modernization.

**Entity Types:**

| Entity | Key Attributes | Sources |
|---|---|---|
| Current ERP | Vendor, version, age, modules, support contract status | Job postings, press, G2 |
| Integration Map | Connected systems (HRIS, CRM, warehouse, BI), integration method (custom vs. middleware) | Job postings, technical listings |
| Data Landscape | Data warehouse, BI tools, data quality signals | Job postings, case studies |
| IT Org | CIO, ERP team, in-house vs. SI-managed | LinkedIn, press |
| Business Sponsors | CFO, COO, VP Ops — who owns the systems, not just IT | LinkedIn, press |
| Migration Signals | M&A history, sunsetting software, support contract expiry, SAP S/4 HANA deadline | News, press, job postings |
| Pain Signals | Technical debt, data quality issues, failed integrations | Glassdoor, G2, news |

**Key Relationships:**
- Current ERP → integrates with → Integration Map
- Migration Signals → create urgency for → IT Org + Business Sponsors
- IT Org → manages → Current ERP + Data Landscape

---

### Template 5: Sales / GTM Transformation

**Purpose:** Profile firms with RevOps maturity issues, CRM challenges, or sales process gaps.

**Entity Types:**

| Entity | Key Attributes | Sources |
|---|---|---|
| Sales Org | AE count, SDR count, territory structure, quota signals | LinkedIn, job postings |
| RevOps Function | RevOps headcount, tooling ownership, maturity level | LinkedIn, job postings |
| Sales Tech Stack | CRM, sales engagement (Outreach/Salesloft), CPQ, data enrichment | G2, job postings, web |
| Forecast Process | Weekly forecast cadence, pipeline visibility, commit culture | Job postings, Glassdoor |
| Marketing Alignment | SDR/BDR handoff model, MQL definition, ABM signals | Job postings, web |
| Pain Signals | Rep productivity, pipeline hygiene, forecast accuracy, data quality | Glassdoor, G2 |
| Decision Makers | CRO, VP Sales, VP RevOps, VP Marketing | LinkedIn, press |

**Key Relationships:**
- RevOps Function → owns → Sales Tech Stack
- Sales Org → depends on → Forecast Process + Sales Tech Stack
- Marketing Alignment → feeds → Sales Org

---

### Template 6: AI / Agent Deployment

**Purpose:** Profile firms evaluating or beginning AI/automation initiatives — especially where agent deployment is the offering.

**Entity Types:**

| Entity | Key Attributes | Sources |
|---|---|---|
| Automation Maturity | RPA in use? Workflow tools? Previous AI projects? | Job postings, press, LinkedIn |
| Existing AI/ML Stack | Known tools (UIPath, Automation Anywhere, Power Automate, etc.) | Job postings, G2 |
| Automation CoE | Dedicated team? Central or distributed? Governance model? | LinkedIn, job postings |
| Decision Points | High-volume repetitive tasks, approval gates, decision workflows | Job postings, case studies |
| IT Governance | Change management culture, security posture, cloud maturity | Job postings, Glassdoor |
| Failure History | Past RPA/automation projects that stalled or failed | Glassdoor, news |
| Decision Makers | CDO, CIO, COO, Automation CoE lead | LinkedIn, press |

**Key Relationships:**
- Automation Maturity → signals readiness of → Automation CoE
- Failure History → complicates → IT Governance + Change Management
- Decision Points → are candidates for → AI Agent Deployment

---

## Schema Composition (Multi-Solution Firms)

Firms often sell more than one solution type. A firm selling both Salesforce and NetSuite needs entities from both schemas.

### How composition works:
1. Both schema templates are loaded
2. Overlapping entities are merged (e.g., "IT Org" appears in both ERP and Salesforce schemas → merged into one entity with attributes from both)
3. Non-overlapping entities are kept separate
4. Relationships are added between the two schema trees where they intersect
5. Pain Signals and Decision Makers are unified — same exec often owns multiple domains

### Composition example: Agentforce + ERP Migration
- Unified entity: CTO/CIO (decision maker in both)
- Unified entity: Integration Landscape (SF integrations + ERP integrations may be the same systems)
- Added relationship: ERP Migration Signals → create opportunity for → Agentforce / data migration practice
- Combined pain heatmap: shows friction in both CRM and ERP simultaneously

### Risk: schema bloat
- A firm selling 5 solution types gets a very dense schema
- Mitigation: weight entities by solution relevance — not all entities matter equally for every customer
- The [[Global Learning Layer]] helps: over time, it learns which entities are actually predictive for each solution type

---

## Schema Evolution

Schemas are not static. They improve over time.

### How they evolve:
- **Manual updates** — the firm's Head of Pre-Sales refines templates based on what mattered in real engagements
- **Learning Layer feedback** — the [[Global Learning Layer]] surfaces patterns: "Customers with X signal tend to have Y pain — we should always look for Y"
- **Gap analysis** — after each engagement, which fields were always empty? Which were always wrong? Prune or improve sourcing strategy
- **Vertical refinement** — as you build more profiles in a vertical, the schema tightens around what's actually predictive

### Version control:
- Schema versions are tracked
- Profiles store which schema version they were built against
- When schema updates, existing profiles can be flagged for refresh

---

## ⚠️ Open Questions

- Are schema templates pre-built and shipped with the product, or does each buyer build from scratch?
- How many schema templates exist in the current prototype?
- What's the UX for schema configuration? Is it a form? A graph editor? YAML?
- How granular is the vertical overlay system? (e.g., CRE vs. industrial CRE vs. residential?)
- When schemas compose, how is conflict resolution handled (same entity, different attributes)?
- What happens when a customer doesn't fit any template? (e.g., a mining company buying Agentforce)

---

## Related

- [[Customer Profile Engine]]
- [[Setup & Configuration Module]]
- [[Global Learning Layer]]
- [[Product Architecture]]
- [[Research/Ontology Design for Enterprise Sales]]
- [[Buyers/Ascendix Technologies]]
- [[Buyers/CloudMasonry]]
- [[Build Roadmap]]

---

*Last updated: 2026-04-24 | Maintained by Koko*
