# Global Learning Layer
#product #feature #project

*Last updated: 2026-04-24 | Maintained by Koko*

→ Back to [[Product/README]] | [[Product Architecture]] | [[Customer Profile Engine]] | [[Ontology & Schema System]] | [[Sales Strategy]]

---

## What It Is

The compounding moat. Every customer engagement the buying firm runs through the system feeds a shared intelligence layer that makes every subsequent engagement sharper, faster, and more accurate.

This is what separates the Customer Intelligence Graph from a research tool. Research tools give you a fish. The learning layer teaches you to fish — and gets better at fishing every time you fish.

**Owned entirely by the buying firm.** Not shared. Not aggregated with other product customers. Their moat, not ours.

---

## How It Works Technically

### What feeds into it

Every completed engagement contributes:
- The final ratified profile (what turned out to be true about that customer)
- Corrections made during the mirror moment (what the research got wrong)
- Discovery session additions (what the customer told them that research couldn't find)
- Artifact outcomes (what artifacts were generated, what was modified before delivery)
- Engagement outcome (won/lost, engagement size, timeline, delivery notes)
- Post-delivery feedback (optional: what the delivery team learned)

### How patterns are extracted

- After each engagement, a pattern-extraction pass runs across the full corpus
- Questions it answers:
  - "What signals most reliably predicted this type of pain?"
  - "What research gaps are consistently filled in the same way during discovery?"
  - "Which schema entities were always irrelevant for this vertical?"
  - "Which artifact sections required the most manual editing?"
- Patterns are stored as weighted rules that feed back into the research pipeline and schema templates

### Where it surfaces

- **Research pipeline:** Agent weightings improve — sources that were consistently right get higher trust
- **Schema templates:** Entities that were consistently empty get de-prioritized; entities that were consistently predictive get elevated
- **Discovery guides:** Questions that consistently surfaced important information get promoted
- **Artifact generation:** Sections that were consistently accurate require less review; sections that were consistently edited get flagged

---

## Cross-Customer Intelligence

After 10–20 engagements, patterns begin to emerge across customers.

### What you learn at scale

| Pattern Type | Example |
|---|---|
| **Vertical patterns** | "In CRE firms, the property management system is always the integration bottleneck, not Salesforce" |
| **Size patterns** | "50–200 person firms in this vertical almost always have the same ATS — it's rarely competitive" |
| **Pain correlation patterns** | "When we see X hiring signal, Y operational pain is almost always present — ask about it immediately" |
| **Objection patterns** | "Firms with this profile type always push back on timeline in Phase 2 — pre-empt it in the proposal" |
| **Win patterns** | "Engagements won at this firm type had one thing in common: the CTO was in the discovery room" |
| **Loss patterns** | "Firms with failed automation history need a change management workstream or they churn" |

### The intelligence gap vs. competitors

Without the learning layer:
- Each SE starts from zero with each new prospect
- Tribal knowledge lives in individual heads
- Best practices exist in Slack messages and anecdotes

With the learning layer:
- The system starts from the accumulated patterns of every prior engagement
- The research pipeline already knows what signals to look for in this customer's profile
- The first profile draft is already sharper than an SE's manual research could be

---

## Vertical Compounding

Single-vertical firms benefit most. Here's why.

### The math
- A generalist firm profiles 100 customers across 20 different industries
- Each industry gets ~5 data points — not enough for strong pattern extraction
- A single-vertical firm profiles 100 customers in one industry
- 100 data points in one domain → strong, reliable patterns

### The Ascendix case
[[Buyers/Ascendix Technologies]] sells Salesforce exclusively to commercial real estate firms.
- Every customer is a CRE firm
- Every engagement profiles the same entity types (property portfolio, deal pipeline, brokerage structure)
- After 20 engagements: the system knows exactly which CRE pain signals are predictive, which schema entities matter most, and which artifacts close deals
- After 50 engagements: the system is producing profiles that are more accurate than what the customer's own team could assemble

This is the Ascendix pitch. The learning layer makes their CRE intelligence compound into a moat that no other Salesforce SI can replicate — because they don't have the vertical depth.

---

## The Year 3 vs. Year 1 Story

### Year 1
- Profiles take 90 minutes to produce — good, but still require significant human review
- Discovery guides are generic: "Ask about their ATS" → not very specific
- Artifact sections require 20–30% manual editing before delivery
- Win rate improvement: marginal — mostly speed gains

### Year 2
- Research pipeline has learned which signals are most predictive in this vertical
- Profiles are more accurate out of the box — mirror moment corrections are smaller
- Discovery guides are specific: "They almost certainly have a ServiceNow-Salesforce integration issue — probe the integration team lead directly"
- Artifact accuracy has improved — manual editing down to 10–15%
- Win rate improvement: measurable — sales velocity and proposal quality are both up

### Year 3
- The profile draft on Day 1 is more accurate than most competitors' final proposals
- The discovery session becomes a ratification exercise, not a research exercise
- The firm's SEs look like industry savants — because the system has made them savants
- The firm has something competitors can't buy: 3 years of compounded vertical intelligence
- Exit multiple: potential acquirers see a proprietary intelligence asset, not just headcount

### Concrete example (CRE vertical)
- **Year 1:** System flags "we think they have a Yardi-Salesforce integration issue" (50% confidence)
- **Year 2:** After seeing this pattern 15 times, system flags it at 85% confidence — includes specific questions to ask
- **Year 3:** System says "based on your customer profile, they almost certainly have a failed Yardi-Salesforce sync in their deal pipeline module — we've seen this 23 times in similar-size CRE firms — here's how it usually manifests"

---

## Why It's Proprietary to the Buyer

This is critical for the sale. The buying firm's learning layer is entirely theirs.

### What "proprietary" means:
- The learning layer is not shared across different product customers
- Patterns extracted from Ascendix's engagements stay in Ascendix's system
- CloudMasonry's intelligence is not accessible to Plative — or to us
- The buying firm's data is used only to improve their own system

### Why this matters:
- Any competitor of the buyer *cannot* access this intelligence
- If the buyer is acquired, the acquirer gets the learning layer as part of the deal
- If the buyer spins off a division, the learning layer is a separable asset

### What Eytan's company retains:
- The product architecture and algorithms
- The base schema templates (maintained centrally)
- The research pipeline infrastructure
- The right to sell to other buyers (in different verticals or different geographies)

### Contractual structure needed:
- IP transfer agreement that clearly delineates: buyer owns their learning layer, seller retains the product architecture
- Non-compete: seller cannot sell the same schema template to a direct vertical competitor (TBD — Eytan to define)

---

## How It Affects Exit Valuation

This is the strategic sale argument. See [[Sales Strategy]] for the full pitch framing.

### The argument:
1. The learning layer is a **proprietary intelligence asset** — not replicated elsewhere
2. It sits on the balance sheet as intellectual property with demonstrable value
3. It compounds over time — the longer they have it, the more valuable it becomes
4. A potential acquirer (TCS, Accenture, Deloitte) is not just buying the SI firm's headcount — they're buying the intelligence layer
5. That intelligence layer justifies a **higher exit multiple** — because it's not replicable from scratch

### Concrete comparison:
- Coastal Cloud (acquired by TCS for ~$700M): boutique Salesforce partner, ~500 people
- What made them worth $700M? Not 500 people. Not even their certifications. Their proof of *thinking depth* — methodology, documented approach, defensible IP.
- A firm with a compounding intelligence layer has documented proof of thinking depth that's more defensible than methodology documents

### The balance sheet asset:
- Traditionally, SI firms have no hard assets — revenue is headcount-dependent
- The learning layer is an actual IP asset that retains value even if 10% of the team leaves
- For M&A valuation: proprietary AI/intelligence assets are currently valued at **3–5x revenue multiples above comparable firms without them**

---

## Privacy and Data Governance

### What data is in the learning layer?
- Profile data (about the buying firm's *customers*, not end-users)
- Engagement outcomes
- Research quality signals (what was right/wrong in research)
- No PII of individuals — only firmographic and professional context

### Privacy considerations:
- Profiles are built from **public and semi-public signals** — no private data
- The learning layer stores patterns, not raw profiles
- Customer names may be stored in the profile database — standard data protection applies
- GDPR: if any EU customer data is profiled, standard B2B firmographic data handling applies (generally not subject to GDPR — professional context, not personal data)

### Data governance for the buying firm:
- They own the data — standard IP transfer clause covers this
- They should have a data retention policy for their profile database
- Recommendation: profile data retained for 5 years, then archived

---

## ⚠️ Open Questions

- Is the learning layer actually implemented in the prototype, or is it aspirational?
- What's the technical mechanism for pattern extraction? (LLM-based analysis? Statistical? Explicit rules?)
- How does the system handle cases where the "pattern" is wrong for an unusual customer?
- What's the minimum number of engagements needed before the learning layer provides measurable improvement?
- How are patterns reviewed and validated before being applied to new profiles? (Risk: garbage in, garbage out)
- IP ownership clause: what exactly does Eytan's company retain vs. transfer?
- Can the learning layer be the subject of a separate licensing model? (i.e., buyer pays annual fee to access pattern updates from non-competing verticals)

---

## Related

- [[Customer Profile Engine]]
- [[Ontology & Schema System]]
- [[Artifact Generation Engine]]
- [[Product Architecture]]
- [[Sales Strategy]]
- [[Buyers/Ascendix Technologies]]
- [[Buyers/CloudMasonry]]
- [[Research/AI Agents in Consulting]]

---

*Last updated: 2026-04-24 | Maintained by Koko*
