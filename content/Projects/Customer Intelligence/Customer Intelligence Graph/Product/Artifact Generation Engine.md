# Artifact Generation Engine
#product #feature #project

*Last updated: 2026-04-24 | Maintained by Koko*

→ Back to [[Product/README]] | [[Product Architecture]] | [[Customer Profile Engine]] | [[Build Roadmap]]

---

## What It Is

The output layer of the Customer Intelligence Graph. Once the [[Customer Profile Engine]] has built a complete, human-ratified customer model, the Artifact Generation Engine produces the full engagement package — automatically, all at once, all linked to the same source of truth.

**The key insight:** Every artifact is generated *from the profile*. Not from a template with blanks filled in. From the structured intelligence about this specific customer. That means:
- Nothing contradicts (proposal and business case use the same revenue numbers)
- Everything is specific (BPMN reflects their actual systems, not "System A" and "System B")
- Updating the profile updates all artifacts downstream

---

## Artifact Types

### 1. Business Process Maps (BPMNs)

**What it contains:**
- Current-state process maps for each relevant workflow (e.g., lead-to-close, order-to-cash, ticket-to-resolution)
- Swimlane format: departments and roles as lanes, systems as annotated steps
- Pain points annotated inline: where the friction is, what workarounds exist
- Optional: future-state map showing post-solution workflow

**Who it's for:** Technical stakeholders, project sponsors, process owners — people who need to see *exactly* what changes

**How it links to the profile:** Every system referenced in the BPMN is a profile entity. Every department is a profile org node. Pain annotations link to the profile's pain signals.

**Example use case:** Showing a Direct Energy process owner exactly where in their current meter-to-cash workflow a Salesforce Agentforce agent would replace manual steps

---

### 2. Current-State Analysis

**What it contains:**
- Structured written assessment of where the customer is today
- Sections: org structure, systems landscape, workflow maturity, key pain points, strategic context
- Maturity ratings per domain (system coverage, process standardization, data quality)
- Comparative context: where they sit vs. industry norms or similar firms

**Who it's for:** Internal SE/delivery team, executive sponsors who need an honest starting-point assessment

**How it links to the profile:** Pulled directly from profile schema — every claim cites a profile entity with confidence score and source

**Example use case:** Pre-meeting brief the Account Executive reads to understand the customer before walking in

---

### 3. Proposal

**What it contains:**
- Scoped engagement proposal: what we'll do, how we'll do it, who's involved, how long it takes
- Problem statement drawn directly from the customer's profiled pain points
- Solution narrative: how the buying firm's capabilities map to identified gaps
- Engagement structure: phases, milestones, team composition
- Pricing placeholder (firm fills in)

**Who it's for:** Economic buyer — the person signing the check

**How it links to the profile:** Problem statement uses the customer's own language (from their job postings, G2 reviews, etc.). Solution fit overlay from the schema maps capabilities to gaps.

**Example use case:** CloudMasonry SE finishes discovery with Direct Energy, generates proposal in 10 minutes using the ratified profile

---

### 4. Business Case

**What it contains:**
- ROI model specific to this customer's situation
- Baseline metrics: current cost of manual processes, current time-to-hire / cycle time / support resolution time (sourced from profile signals)
- Projected improvements: based on buying firm's historical delivery outcomes
- Financial model: NPV, payback period, 3-year ROI
- Risk section: what happens if they *don't* act (using the competitive urgency signals from the profile)

**Who it's for:** CFO, Finance sponsor, economic buyer who needs numbers

**How it links to the profile:** Baseline metrics pulled from profile pain signals and industry benchmarks. Org headcount signals used for productivity estimates.

**Example use case:** VP of Pre-Sales needs to justify a $2M Agentforce implementation to the CFO — business case auto-generates with customer-specific assumptions

---

### 5. Transformation Roadmap

**What it contains:**
- Phased delivery plan: what happens in Phase 1 / Phase 2 / Phase 3
- Phase rationale: why this sequence, based on the customer's systems dependencies and org readiness
- Milestones and decision points
- Risk and change management considerations drawn from the profile (e.g., previous failed projects from the profile's failure history)

**Who it's for:** Project sponsor, transformation lead, COO/CTO

**How it links to the profile:** Phase sequencing informed by integration dependencies in the systems landscape. Change management flags derived from Glassdoor/culture signals.

**Example use case:** Ascendix showing a CRE firm a 3-phase CRM transformation that respects their current Yardi integration and their small IT org

---

### 6. Executive Deck

**What it contains:**
- C-suite narrative: problem → solution → expected outcomes → why now → why us
- 8–12 slides, visually polished
- Uses the customer's own strategic language (from earnings calls and annual reports)
- Competitive urgency: why acting now matters vs. in 12 months
- Outcome slides: quantified impact, timeline to value

**Who it's for:** CEO, COO, CTO — the room you get 30 minutes with

**How it links to the profile:** Every claim is grounded in profile intelligence. "You told investors you're prioritizing digital efficiency" → sourced from earnings call transcript in profile.

**Example use case:** CloudMasonry gets a board-level meeting with a target customer — exec deck is generated and branded before they walk in

---

### 7. Department Decks

**What it contains:**
- Per-audience slides: Sales deck, Service deck, IT deck, Finance deck
- Each tailored to that department's pain points and success metrics from the profile
- Uses the department's language, not generic corporate speak
- Shows specifically how the solution touches their day-to-day work

**Who it's for:** Department heads and team leads — the people who will actually live with the change

**How it links to the profile:** Department entities from the org schema drive the content. Pain signals for each department populate the "current problem" slides.

**Example use case:** After the exec meeting, the SE needs to do 3 follow-up sessions with Sales, Service, and IT — each gets their own tailored deck auto-generated

---

### 8. Discovery Guides

**What it contains:**
- Stakeholder-specific interview question sets
- For each key persona identified in the profile: tailored questions that probe the gaps
- Gap-driven: questions are generated based on what the profile *doesn't* know yet
- Prioritized by strategic importance

**Who it's for:** SEs, consultants running discovery sessions

**How it links to the profile:** Gap detector output from the [[Customer Profile Engine]] drives question generation. High-uncertainty profile fields → targeted questions for that stakeholder.

**Example use case:** SE hasn't been able to confirm the customer's current ATS vendor — Discovery Guide includes specific probing questions for the HRBP

---

### 9. Customer-Specific Demo

**What it contains:**
- A demo of the buying firm's product using the customer's own terminology, use cases, and system names
- Not a generic sandbox — a demo that says "Acme Corp" and references "your Yardi integration"
- Configured from profile data

**Who it's for:** Technical evaluators, skeptical stakeholders who need to see it in their context

**How it links to the profile:** Demo configuration pulled from the profile's systems landscape and process maps. Terminology matches what the customer actually calls things.

**Example use case:** Ascendix running a Salesforce demo for a CRE firm where every screen says "property portfolio" and references their actual property types and deal stages

---

### 10. Handoff Package

**What it contains:**
- Everything the delivery team needs to start working
- Profile summary, current-state analysis, BPMN maps, transformation roadmap, key stakeholder contacts, risk flags
- Structured for handoff — not a summary of the sales process, a starting kit for delivery

**Who it's for:** Delivery PM, engagement lead, implementation team — the people who inherit the deal after it closes

**How it links to the profile:** Every element links back to the live profile. Delivery team can navigate the full profile, not just a static export.

**Example use case:** Day 1 of a CloudMasonry Agentforce implementation — the offshore delivery team gets the handoff package and already knows the customer's org, systems, pain points, and agreed roadmap

---

## Multi-File Artifact Architecture

### Current State (prototype)
- Single file per artifact
- Artifacts are generated as standalone documents
- Linkage to profile is loose — changes require manual updates
- Brand is generic

### Target State
| Dimension | Target |
|---|---|
| **Structure** | Parent file per artifact + child blocks for each section |
| **Linkage** | Each block links to specific profile entities — changes propagate |
| **Brand** | Artifacts rendered in buyer brand style (fonts, colors, tone) |
| **Demo quality** | Full functional demo, not POC |

### Why parent + blocks matters
- A proposal has sections: problem statement, solution, engagement structure, commercial
- Each section links to different profile entities
- When the profile updates (e.g., new decision maker identified), the relevant proposal section can flag for review or auto-update
- A block-based structure also enables: remix (reassemble blocks into new artifact formats), audit (trace every claim to its profile source), version comparison

→ This is Build Roadmap item #2: [[Build Roadmap]]

---

## Brand Style Matching

### What it means
- Artifacts generated in the *buyer's* visual identity, not the selling firm's
- Colors, fonts, logo placement, tone of voice, terminology preferences
- Goal: hand a prospect an executive deck that looks like they designed it

### How it works
- During [[Setup & Configuration Module]]: firm uploads brand guidelines, sample docs, terminology preferences
- Generation engine applies brand as a style layer on top of structured content
- Tone calibration: formal vs. casual, technical vs. executive, aggressive vs. consultative

### Why this matters for the sale
- "This looks like something we would have made ourselves" is a powerful psychological trigger
- Reduces cognitive friction for the customer evaluating the output
- Signals that the selling firm has done the work to understand them — not just their business, but their identity

→ This is Build Roadmap item #4 — brand style matching not yet fully implemented

---

## One-Click Handoff

### What "ships to delivery team" means
- Single action: "Close sale, initiate handoff"
- System packages: full profile + all generated artifacts + ratification notes + discovery session notes
- Package is structured for the delivery PM's workflow, not the sales workflow
- Delivery team has access to the live profile — not a PDF export

### What it replaces
- Emailing a folder of decks and hoping nothing is stale
- Verbal handoff calls where sales "tells the story" to delivery
- The delivery team asking the customer the same questions the SE already asked

### What it enables
- Delivery team starts with a complete picture — no ramp-up research needed
- Continuity: what was promised in the proposal matches what delivery is starting with
- Trust: customer doesn't feel like they're starting over with a new team

---

## Quality Guarantees

Because everything links to the same profile:
- Revenue figures in the business case match the ones in the proposal
- The BPMN uses the same system names as the current-state analysis
- The executive deck cites the same pain points as the department decks
- The roadmap phases align with what was scoped in the proposal

Traditional artifact generation breaks here: each document is written independently, by different people, at different times. Inconsistencies are inevitable. Here they're impossible by design.

---

## Value Proposition

| Dimension | Without this | With this |
|---|---|---|
| Hours to produce full engagement package | 20–60 hours (proposal alone: 5–10 hrs) | ~2–4 hours (review + adjust) |
| Consistency across artifacts | Varies — best-guess coordination | Guaranteed — same source of truth |
| Relevance to this customer | Partially personalized | Fully specific to profiled reality |
| Handoff quality | Email thread + folder of docs | Structured, linked, live |
| Brand presentation | Generic template | Buyer brand style |
| Time from discovery to proposal delivery | 3–7 days | Same day or next day |

---

## ⚠️ Open Questions

- How many artifact types are in the prototype today?
- Is BPMN generation functional? (These are complex — mermaid? custom renderer?)
- What format do the artifacts render to? (HTML? PDF? Markdown? Slides?)
- How does "brand style matching" work technically — is it CSS/templates, or LLM-based tone adjustment?
- Does the handoff package include live profile access, or is it an export?
- What's the versioning model — can the customer request revisions and get V2 of all artifacts?
- How does the discovery guide handle personas that don't match the schema (e.g., unusual org structures)?

---

## Related

- [[Customer Profile Engine]]
- [[Ontology & Schema System]]
- [[Global Learning Layer]]
- [[Setup & Configuration Module]]
- [[Product Architecture]]
- [[Build Roadmap]]
- [[Research/Sales Engineering Workflows]]
- [[Buyers/CloudMasonry]]

---

*Last updated: 2026-04-24 | Maintained by Koko*
