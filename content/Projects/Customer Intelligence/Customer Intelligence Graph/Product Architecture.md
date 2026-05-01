# Product Architecture — Customer Intelligence Graph
#project

*Last updated: 2026-04-24 | Status: 🔴 Prototype built, refactor in progress*

→ Back to [[README]] | See also: [[Build Roadmap]] | [[Sales Strategy]]

> 📁 **Detailed feature specs** are in the [[Product/README|Product/]] folder. Each capability has its own deep-dive file: [[Product/Customer Profile Engine]], [[Product/Ontology & Schema System]], [[Product/Artifact Generation Engine]], [[Product/Global Learning Layer]], [[Product/Setup & Configuration Module]].

---

## Overview

The product has 4 interlocking parts. Parts 2 and 3 are the core. Parts 1 and 4 are the moat.

```
[Setup Module] → [Customer Profile Engine] → [Artifact Package] → [Global Learning Layer]
  (optional)         (crown jewel)            (output layer)         (compounding moat)
```

---

## Part 1: Setup / Refinement Module *(optional)*

- Helps the **buying firm** refine their own customer model and configure artifact templates
- Some firms want this to tighten their operations; others skip it
- Optional by design — doesn't block Parts 2–4
- Outputs: configured ontology schema, artifact template library, firm brand style guide

**Who uses it:** Head of Pre-Sales, Solutions Director, RevOps lead

---

## Part 2: The Customer Profile Engine *(the crown jewel)*

The core value proposition. Builds a **deeply detailed, structured, visual, interactive model** of a specific end-customer — purpose-built per solution type.

### What it captures:
- Org structure (departments, hierarchy, key decision-makers)
- Systems landscape (what software they run, how it's integrated)
- Workflows (current-state process maps, who does what)
- Pain points (by department, by role, by system)
- Politics (where the blockers are, who champions what)
- Links to the buying firm's products/solutions

### How it's populated:
- Agents research: public filings, job postings, earnings calls, LinkedIn signals, news, Salesforce AppExchange reviews, G2/Capterra, Glassdoor
- Human review and refinement during discovery session
- Customer can react and refine live (key demo moment)

### Key experience:
> *Customer sees themselves rendered accurately on screen — sometimes more accurately than their own internal view. They can react and refine it live.*

Visual, navigable, projectable in executive rooms. Not a PDF. Not a database.

---

### Ontology Schemas by Solution Type

| Solution Focus | Org Structure | Systems Landscape | Workflow Focus | Pain Points | Signals |
|---|---|---|---|---|---|
| **Hiring / Talent Automation** | Role taxonomy, recruiting team, HRBP coverage | ATS, HRIS, LinkedIn Recruiter, assessment tools | Hiring funnel, interview loops, offer process | Time-to-hire, quality-of-hire, recruiter burnout | Job posting volume, Glassdoor ratings, turnover signals |
| **Procurement Transformation** | Procurement org, category ownership, approval hierarchy | ERP, P2P system, supplier portals | Req-to-PO, invoice processing, supplier onboarding | Maverick spend, cycle time, supplier fragmentation | Spend data, supplier count, ERP age |
| **ERP / Systems Migration** | IT org, business system owners, data stewards | Current ERP, integrations, data warehouse, BI layer | Core business processes by module | Technical debt, data quality, integration failures | System age, support contracts expiring, M&A history |
| **Sales / GTM Transformation** | Sales org, RevOps, marketing alignment | CRM stack, sales engagement, CPQ, data enrichment | Lead-to-close, territory management, forecast process | Pipeline visibility, rep productivity, data hygiene | Revenue growth, headcount signals, CRM adoption |
| **AI / Agent Deployment** | Ops org, automation CoE, IT governance | Workflow tools, RPA, existing AI/ML, integration layer | Decision points, approval gates, repetitive task inventory | Change adoption history, failed automation projects | Automation maturity signals, AI job postings |
| **Agentforce / Salesforce** | Sales, Service, RevOps, IT | Salesforce org (which clouds), integrations, data quality | Salesforce-adjacent workflows, manual work around SF | CRM adoption, process gaps, customization debt | Cert count, AppExchange reviews, release cadence |

---

## Part 3: The Artifact Package

Once the profile is built, the full engagement package **generates itself** — all linked to the profile so nothing contradicts.

### Artifact types:

| Artifact | Format | Purpose |
|---|---|---|
| **BPMNs** | Interactive diagram | Current-state and future-state process maps |
| **Current-state analysis** | Document | Structured assessment of where they are today |
| **Proposal** | Document | Scoped engagement proposal, linked to profile |
| **Business case** | Document | ROI model, tied to their specific pain points |
| **Transformation roadmap** | Document | Phased plan, linked to their systems and org |
| **Executive deck** | Slides | C-suite narrative, on-brand, in firm's voice |
| **Department decks** | Slides | Per-audience, tailored to their role and pain |
| **Discovery guides** | Document | Stakeholder-specific interview questions, based on profile gaps |
| **Demos** | Interactive | Customer-specific walkthrough using their terminology |
| **Handoff package** | Bundle | Everything delivery needs, linked and consistent |

### Artifact system architecture (current vs. target):

| | Current state | Target state |
|---|---|---|
| Structure | Single file per artifact | Parent file + sub-files (blocks) |
| Brand | Generic | Buyer brand style matching |
| Linkage | Loose | All artifacts link to profile objects |
| Demo quality | POC | Full functional demo |

→ See [[Build Roadmap]] item #2 for refactor plan

---

## Part 4: The Global Learning Layer

- Every customer engagement **refines shared intelligence** within that firm
- Patterns: what do customers in this industry typically ask? Where does this customer sit vs. the 15 others we've engaged?
- The compounding asset — makes year 3 sharper than year 1
- **Proprietary to the buying firm** — this is their moat, not ours

### Why this matters for the sale:
- This is what makes the product a **strategic acquisition** vs. a software tool
- It's the reason the buyer's exit multiple goes up: they have a proprietary intelligence asset on their balance sheet
- The learning layer compounds **fastest** in single-vertical firms (Ascendix, Naitiv)

---

## Technical Stack

- **Frontend / Builder:** Bolt
- **Database:** Supabase (PostgreSQL)
- **AI layer:** Claude (Anthropic)
- **Status:** Vibe-coded but unique — needs structural cleanup before due diligence

→ See [[Build Roadmap]] for what needs cleanup

---

## Deployment Model

- **Not SaaS.** One buyer. One learning layer. One strategic asset.
- Sold as: IP transfer, outright license, or strategic capability investment
- Pricing: six-figure to low-seven-figure
- The buyer owns it — including the compounding layer

→ See [[Sales Strategy]] for pricing model and ICP

---

## Related
- [[Build Roadmap]]
- [[Sales Strategy]]
- [[Buyers/CloudMasonry]]
- [[Buyers/Plative]]
- [[Buyers/Accelirate]]
- [[Buyers/Ascendix Technologies]]
- [[Buyers/Naitiv]]
- [[Buyers/VRP Consulting]]
- [[Research/Ontology Design for Enterprise Sales]]
- [[Research/Sales Engineering Workflows]]
