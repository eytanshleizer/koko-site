# Customer Intelligence Graph (working title)

*Last updated: 2026-04-24 | Status: Built (prototype), actively pitching for sale*

## One-line pitch
The operating layer that lets a firm selling complex solutions walk into any customer already understanding them better than the customer understands themselves — and leave with the entire engagement packaged, ready to hand off, already shipping.

## The big idea
In the AI-agent era, every consulting/services firm faces commoditization. The firms that survive — and exit at premium valuations — will be those that deliver demonstrably more depth in customer discovery, solution design, and change management. This product makes that happen and makes it *compounding and proprietary*.

---

## Product architecture (4 parts)

### 1. Setup / Refinement Module *(optional)*
- Helps firms refine their customer model and configure artifact templates
- Some firms want this to tighten their operations; others skip it
- Optional by design

### 2. The Customer Profile Engine *(the crown jewel)*
- Builds a deeply detailed, **structured, visual, interactive** model of a specific customer
- Purpose-built per solution type — e.g. hiring automation needs a different model than ERP migration
- Captures: org structure, systems, workflows, pain points, politics, and links everything to the firm's products
- **Key experience:** Customer sees themselves rendered accurately on screen — sometimes more accurately than their own internal view. They can react and refine it live
- Visual, navigable, projectable in executive rooms — not a PDF, not a database
- Populated by agents researching public filings, job postings, earnings calls, LinkedIn signals, etc.

#### Sample structure per solution type:
| Solution focus | What the model emphasizes |
|---|---|
| Hiring / talent automation | Org structure, role taxonomy, hiring funnel, recruiter workflows, ATS/HRIS, compensation bands |
| Procurement transformation | Supplier relationships, spend categories, ERP landscape, approval hierarchies |
| ERP / systems migration | Current system landscape, data models, integration surface, process maps, technical debt |
| Sales / GTM transformation | Revenue architecture, CRM stack, pipeline signals, deal cycle pain |
| AI / agent deployment | Workflow inventory, decision points, automation surface, change adoption history |

### 3. The Artifact Package
Once the profile is built, the full engagement package generates itself — all linked to the profile so nothing contradicts:
- **BPMNs** — current-state and future-state process maps
- **Documents** — current-state analysis, proposals, business cases, transformation roadmaps
- **Decks** — executive, department-level, discovery sessions. On-brand, in the firm's voice
- **Discovery & interview guides** — tailored per stakeholder, based on gaps in the profile
- **Demos** — customer-specific interactive mockups or walkthroughs using the customer's own terminology
- **One-click handoff** — full package ships to delivery team with everything linked

### 4. The Global Learning Layer
- Every customer engagement refines shared intelligence *within that firm*
- Patterns: what do customers in this industry typically ask? Where does this customer sit vs. the 15 others we've engaged?
- The compounding asset — makes year 3 sharper than year 1
- Proprietary to the buying firm — this is their moat

---

## Deployment model
- **Not SaaS.** Sold to a single large firm as a strategic capability investment
- The learning layer runs across that firm's customers — not across multiple product buyers
- **Pricing:** Six-figure to low-seven-figure deals, or outright IP purchase/license
- **ICP:** 30–100 firms globally for whom "win bigger contracts and stay relevant in the AI-agent era" is existential

**Target buyer types:**
- Consulting practices
- Systems integrators
- Transformation practices inside enterprises
- Platform vendors' services arms (e.g. Salesforce consulting partners)

---

## Active pitch targets

### Buyer 1: CloudMasonry (Chicago, IL)
- 300+ Salesforce certifications, 85% client retention, 4.9 CSAT
- Clients: JPMorgan Chase, Direct Energy, NRG, Mercer Advisors
- Multiple Agentforce practices: Service, Revenue Management (CPQ/Billing/CLM), custom
- Ranked #1 Salesforce consulting firm in Chicago, top 10 globally
- **Pitch angle:** Adding the tool = demonstrably better customer depth = higher exit multiple when acquired
- **Ask:** $5M for outright IP transfer, preloaded for their Agentforce practices
- **Contact:** Brian Perdue, CEO & Founder

### Buyer 2: Plative (New York, NY)
- 200+ global professionals, Salesforce + Oracle NetSuite (cross-cloud)
- Verticalized: Financial Services, Nonprofits, Tech, Consumer
- Built own IP: Plative Grant Management Agent (Agentforce-powered)
- Already publicly invested in Agentforce positioning
- **Pitch angle:** Competitive depth + AI-agent differentiation before acquisition window closes

### Market context
- TCS acquired Coastal Cloud for ~$700M
- Accenture acquired NeuraFlash (510 professionals, 2,000+ certs)
- Every independent Salesforce firm knows they're in a 12–24 month acquisition window
- The firms that get top-of-range multiples will be those that prove *thinking depth*, not just implementation

---

## Built with
- Bolt + Supabase + Claude
- Vibe-coded but unique

## Connection to Eytan's goals
- [[Goals]] — selling projects is a near-term goal; this is the primary candidate
- [[Career]] — demonstrates systems thinking, AI-native product building, and strategic positioning capability

## Current status (as of 2026-04-24)
- Product is **still being built** — not yet ready to pitch
- No outreach made yet to CloudMasonry, Plative, or any buyer
- Design partner mentioned in pitch script is **aspirational** — not real yet
- Target: get product demo-ready, then pitch. Goal: $5M sale

## What's left to build

### 1. Separate views/artifacts/context from objects table
- Currently everything is stored as an "object" in the ontology DB
- Decision: this was wrong. Views, context files, and artifacts need their own tables/types
- Action: refactor data model to separate concerns

### 2. Evolve the artifact system
- Currently: single file per artifact
- Need: parent file + sub-files (blocks) to support full functional demos
- Has a POC/demo elsewhere that treats artifacts as multi-file structures
- Rationale: buyers will want to see full working demos, not just one-pagers

### 3. Configure for CloudMasonry vertical + build demo
- Configure the ontology schema for what CloudMasonry sells (Agentforce)
- Research hypothetical customers (e.g. Direct Energy-style)
- Have agent populate full customer profiles, ontology views, artifacts
- Build polished artifacts: demo, deck, BPMN — matching CloudMasonry's brand style
- Goal: walk Brian Perdue through a live end-to-end demo specific to his firm

### 4. Brand style matching
- Artifacts should be generated in the buyer's brand voice/style
- Needs to be added eventually (before serious demos)

## Upcoming milestones

| What | When | Who |
|---|---|---|
| Review product with Hanan (friend) | This week | Eytan + Hanan |
| Meet sales agent (found via email outreach) | TBD | Eytan — will share details later |
| Engage offshore dev team (Hungary/Ukraine) | ~2 weeks | Eytan — to tighten product for due diligence |
| First pitch to buyer | After demo is ready | Via sales agent |

## People involved
- **Hanan** — friend and project manager on this. Organizing meetings, coordinating with developers, arranging introductions. Social/people-facing role so Eytan doesn't have to initiate. Eytan leads once in the room.
- **Sales agent** (name TBD) — found via email, will pitch to buyers for a percentage cut
- **Offshore dev team** — Hungary or Ukraine, to clean up product structure for due diligence

## ⚠️ Open Questions
- What is the actual product name?
- Who is the sales agent? (email contact — Eytan to share)
- Are there other pitch targets beyond CloudMasonry and Plative?
- What's the minimum viable deal Eytan would accept?
- Design partner: is this being pursued separately from the $5M sale?
