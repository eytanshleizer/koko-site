# Sales Engineering Workflows
#research #salesengineering

*Research by Koko — 2026-04-24*

→ Related: [[Projects/Customer Intelligence Graph/README]] | [[Solution Consulting Pain Points]] | [[Salesforce Partner Ecosystem]]

---

## What Sales Engineers and Solution Consultants Actually Do

Sales engineers (SEs) and solution consultants (SCs) are the technical and strategic bridge between sales and delivery. They turn customer problems into scoped solutions — and they do it before the deal is signed.

---

## The Pre-Sales Lifecycle

### Stage 1: Discovery
**What happens:**
- Initial call with prospect — understand their problem, size the opportunity
- Research the customer: org structure, systems landscape, business model
- Map pain points to the firm's solution portfolio
- Qualify: is this a real opportunity? Can we actually solve it?

**What this looks like in practice:**
- Pulling 10–15 browser tabs: company website, LinkedIn org chart, Glassdoor, G2 reviews, earnings call transcripts
- Piecing together a mental model of the customer's IT landscape
- Asking questions in discovery calls to fill gaps in that model
- Taking notes that live in a personal doc, not a system

**Time spent:** 8–20 hours per qualified opportunity

---

### Stage 2: Demo Preparation
**What happens:**
- Build or configure a demo environment tailored to the customer
- Map customer terminology into demo scripts
- Prepare customized slides or walkthrough
- Align with AE on narrative

**What this looks like in practice:**
- Cloning a generic demo environment and renaming fields
- Writing a discovery-to-demo narrative: "you told us X, so we built Y"
- Coordinating with product team if custom scenarios needed
- Rehearsing with sales lead

**Time spent:** 10–30 hours per demo (enterprise = upper end)

---

### Stage 3: Proposal / Business Case Writing
**What happens:**
- Translate discovery + demo into a formal proposal
- Build ROI model: what does the customer gain/save?
- Write scope: what are we delivering, in what phases?
- Executive summary: why this firm, why now, why this solution

**What this looks like in practice:**
- Starting from a previous proposal template and editing manually
- Pulling data from discovery notes into a ROI model
- "Copying from the Acme deal because it was a similar industry"
- Writing the same executive summary sections with names changed

**Time spent:** 8–15 hours per proposal

---

### Stage 4: POC / Proof of Concept Management
**What happens:**
- Scoped technical evaluation: prove the solution works for this customer
- Set up POC environment with customer data or simulated data
- Define success criteria upfront (this often gets skipped)
- Run the POC, report results, address objections

**Time spent:** 20–80 hours (varies wildly by complexity)

---

### Stage 5: Handoff to Delivery
**What happens:**
- Deal closes → hand off to implementation team
- SE/SC explains what was promised, what was demoed, what the customer expects
- Delivery team re-discovers everything the SE already knew

**What this looks like in practice:**
- A Zoom call where the SE talks for 45 minutes
- Delivery team reading through proposal and guessing at customer context
- Key context from informal conversations never gets transferred
- "We didn't know they had a legacy system issue until week 3 of the project"

**Time spent:** 4–8 hours of SE time, plus weeks of delivery ramp-up

---

## Common Tools

| Tool | Used For |
|------|---------|
| **Salesforce CRM** | Opportunity management, activity logging |
| **Gong / Chorus** | Call recording and analysis |
| **Outreach / Salesloft** | Sequencing and follow-up |
| **Miro / Lucidchart** | Process mapping, architecture diagrams |
| **Confluence / Notion** | Internal documentation, proposal drafts |
| **Google Slides / PowerPoint** | Customer-facing decks |
| **Excel / Google Sheets** | ROI models, pricing calculators |
| **LinkedIn Sales Navigator** | Org chart research |
| **ZoomInfo / Clearbit** | Company and contact data enrichment |
| **Slack** | Coordination with AE, product, delivery |

---

## Time Sinks (Where Hours Disappear)

| Activity | Est. Hours / Deal | Why It's Painful |
|----------|-------------------|-----------------|
| Customer research (manual) | 8–20h | No structured starting point, scattered sources |
| Demo customization | 10–30h | Every customer wants their logo, their terminology |
| Proposal writing | 8–15h | Repetitive structure, manual copy-paste from past deals |
| Internal handoff | 4–8h | Same story told 3 different times to 3 different teams |
| POC setup | 20–80h | Often re-builds from scratch despite past POCs |
| **Total per deal** | **50–150h** | Before the deal even closes |

---

## What Good Looks Like

A top-tier SE at a leading SI:
- Walks into the first customer meeting having already mapped their org and systems
- Demo is 80% pre-built from agent research before the discovery call
- Proposal section 1 (current-state analysis) is auto-populated from the profile
- Handoff package: a structured, linked document set — not a 45-minute Zoom call
- When deal closes, delivery team inherits context, not just slides

**That's the gap the Customer Intelligence Graph fills.**

---

## Related
- [[Solution Consulting Pain Points]] — the frustrations this creates
- [[Projects/Customer Intelligence Graph/Product Architecture]] — how the product addresses this
- [[Projects/Customer Intelligence Graph/Buyers/CloudMasonry]]
- [[Projects/Customer Intelligence Graph/Buyers/Accelirate]]
- [[Projects/Customer Intelligence Graph/README]]
