# Build Roadmap — Customer Intelligence Graph
#project

*Last updated: 2026-04-24 | Status: 🔴 4 items before demo-ready*

→ Back to [[README]] | See also: [[Product Architecture]] | [[Sales Strategy]]

---

## Current Build State

The prototype exists. Built with Bolt + Supabase + Claude. Core flows work. But it's not demo-ready for a $5M pitch — 4 structural issues need to be resolved first.

---

## The 4 Build Items

### 🔴 Item 1: Data Model Refactor — Separate views/artifacts/context from objects table

**Problem:**
- Currently, everything (views, context files, artifacts, and ontology objects) is stored in a single "objects" table
- This was the wrong design — it conflates different concepts and makes querying, display, and artifact generation messy

**What needs to happen:**
- Define separate tables/types for:
  - Ontology objects (the customer model nodes)
  - Views (what gets displayed/rendered)
  - Context files (research inputs, source material)
  - Artifacts (generated documents, decks, BPMNs)
- Migrate existing data to new schema
- Update all queries and rendering logic

**Who:** Offshore dev team (Hungary/Ukraine) — structural cleanup
**Effort:** Medium — schema migration + query updates
**Blocks:** Everything else. Do this first.

---

### 🟡 Item 2: Artifact System Evolution — Parent file + sub-file (blocks) structure

**Problem:**
- Currently: single file per artifact
- For a compelling demo, you need full multi-section artifacts: executive decks with proper slides, proposals with multiple sections, BPMNs with linked sub-processes

**What needs to happen:**
- Implement parent artifact + sub-files (blocks) architecture
- Each parent represents the artifact (e.g., "CloudMasonry Discovery Deck")
- Sub-files are sections/slides/chapters
- All linked back to profile objects so content is consistent
- Reference POC/demo that already treats artifacts as multi-file structures

**Who:** Eytan (product direction) + dev team (implementation)
**Effort:** Medium-high — new data model + UI logic
**Blocks:** CloudMasonry demo quality

---

### 🔴 Item 3: Configure for CloudMasonry Vertical + Build Demo

**Why this is critical:**
- CloudMasonry is the #1 pitch target (see [[Buyers/CloudMasonry]])
- Brian Perdue (CEO) needs to see a live end-to-end demo specific to his firm
- A generic demo won't close a $5M deal

**What needs to happen:**

1. **Configure ontology schema for Agentforce/Salesforce consulting:**
   - Org structure for enterprise Salesforce customers
   - Systems landscape (which Salesforce clouds + integrations)
   - Workflow maps (Service, Revenue, CPQ, CLM flows)
   - Pain points specific to Agentforce deployment
   - See [[Product Architecture]] for full schema table

2. **Research a hypothetical target customer:**
   - Direct Energy-style profile (large B2B energy company)
   - Populate full customer profile using agents
   - Generate all ontology views

3. **Generate full artifact package:**
   - Discovery deck (CloudMasonry brand)
   - Current-state analysis
   - Agentforce deployment roadmap
   - BPMN: current vs. future state
   - Executive proposal

4. **Polish the demo experience:**
   - Projectable, navigable, live
   - Walks Brian Perdue through "here's what we built for a customer like yours"

**Who:** Eytan (direction, demo scripting) + dev team (polish) + Hanan (scheduling demo with Brian)
**Effort:** High — but this is THE milestone
**Target:** ASAP after Items 1 + 2

---

### 🟢 Item 4: Brand Style Matching

**Problem:**
- Artifacts are currently generated in a generic style
- For a real pitch, the deck and docs should look like they came from CloudMasonry (or whoever the buyer is)

**What needs to happen:**
- Accept a brand style input: colors, fonts, logo, tone of voice
- Apply to all generated artifacts
- Should be configurable per buyer, not hardcoded

**Who:** Dev team
**Effort:** Low-medium — mostly styling/templating work
**Note:** Can be done in parallel with Item 3, or after. Nice-to-have for first demo, but required before commercial delivery.

---

## Milestones Table

| Milestone | Depends on | Owner | Target | Status |
|-----------|-----------|-------|--------|--------|
| Data model refactor complete | — | Dev team | ~2 weeks | 🔴 Not started |
| Artifact system (blocks) working | Item 1 | Eytan + dev | ~3 weeks | 🔴 Not started |
| CloudMasonry ontology configured | Items 1+2 | Eytan | ~3 weeks | 🔴 Not started |
| Demo customer profile populated | Items 1+2 | Eytan | ~4 weeks | 🔴 Not started |
| Full artifact package generated | Item 3 | Eytan | ~4 weeks | 🔴 Not started |
| Brand style matching | — | Dev team | ~3 weeks | 🟢 Nice-to-have |
| Demo-ready for Brian Perdue | All above | Eytan + Hanan | ~4–5 weeks | 🔴 Blocked |
| First pitch | Demo ready | Sales agent | TBD | 🔴 Blocked |

---

## Dev Team Notes
- **Offshore team:** Hungary or Ukraine
- **Purpose:** Clean up product structure for due diligence, not build from scratch
- **Timeline to engage:** ~2 weeks (Eytan to initiate)
- **Deliverable they need:** Clear spec of what to fix (Items 1 + 2 above)

---

## ⚠️ Open Questions
- Has the offshore dev team been contacted yet?
- Is there a spec/brief for them, or does Eytan need to write one?
- Is there a code repo with the current prototype?
- What's the POC for multi-file artifacts? Where does it live?
- What's the realistic timeline given dev team size and availability?

---

## Related
- [[README]]
- [[Product Architecture]]
- [[Sales Strategy]]
- [[Buyers/CloudMasonry]]
