# Customer Intelligence Graph (CIG) — Project Plan
#project

*Last updated: 2026-04-25 | Koko manages this file*

---

## 🎯 Outcome
**$5M IP transfer/sale** of an AI-powered customer intelligence + artifact generation platform to a Salesforce/Agentforce consulting firm. Any buyer on the target list — not tied to one firm.

Buyer gets: a proprietary operating layer that lets them walk into any customer already understanding them, and leave with the full engagement packaged and ready.

---

## 🎯 Target Buyers (ranked)

| Priority | Buyer | Pitch Angle | Status |
|----------|-------|-------------|--------|
| 🔴 P1 | CloudMasonry (Chicago) | Exit multiple uplift + proprietary intelligence asset on balance sheet | Profile written, no outreach |
| 🔴 P2 | Plative (NYC) | Competitive depth + AI-agent differentiation before acquisition window closes | Profile written, no outreach |
| 🟡 P3 | Accelirate | Replace 40h manual customer research with 90 minutes | Profile written |
| 🟡 P4 | Ascendix Technologies (CRE) | Vertical-specific intelligence layer that compounds in CRE | Profile written |
| 🟢 P5 | Naitiv (Insurance) | Show up to every insurance prospect already knowing their workflow gaps | Profile written |
| 🟢 P6 | VRP Consulting | 500 people, all starting from scratch — make research compound across every deal | Profile written |

---

## 🗺️ Milestones & Steps

> Format: **Milestone → Steps to complete → Who owns → Status**

---

### MS1: Product ready for demo
**Goal:** A fully functional demo that can be configured per buyer

| # | Step | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 1.1 | Data model refactor — separate views/artifacts/context/objects into distinct tables | Dev team | 🔴 Not started | Blocks everything. Schema migration + query updates |
| 1.2 | Artifact system — parent + sub-file (blocks) architecture | Eytan (direction) + Dev team | 🔴 Not started | Multi-section artifacts: decks with slides, proposals with chapters |
| 1.3 | Configure first-buyer ontology schema (Agentforce/SF consulting vertical) | Eytan | 🔴 Not started | Start with general Agentforce consulting schema; adapt per-buyer later |
| 1.4 | Research + populate demo customer profile | Eytan + AI agents | 🔴 Not started | One representative hypothetical customer, profile fully populated |
| 1.5 | Generate full artifact package (discovery deck, analysis, roadmap, BPMNs, proposal) | Eytan | 🔴 Not started | All linked to demo profile |
| 1.6 | Brand style matching (per-buyer configurable) | Dev team | 🔴 Not started | Brand colors, fonts, logo applied. Nice-to-have, can run parallel |

**Milestone status: 🔴 Not started | ETA: ~4-5 weeks from dev team engagement**

---

### MS2: Sales motion ready
**Goal:** Everything needed to approach buyers

| # | Step | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 2.1 | Find and brief sales agent | Eytan | 🔴 Not started | Agent pitches buyers for % cut; Eytan to share contact |
| 2.2 | Hanan arranges intros to buyers (starting with top priorities) | Hanan | 🔴 Not started | Social intros, not cold outreach |
| 2.3 | Prepare pitch narrative + demo script (adaptable per buyer) | Eytan | 🔴 Not started | C-suite narrative, live walkthrough, closing angle per buyer |
| 2.4 | Package sales materials (deck, one-pager, ROI model) | Eytan | 🔴 Not started | What agent uses to pitch, what Eytan references in-room |

**Milestone status: 🔴 Not started | Depends on: MS1**

---

### MS3: Pitch & Close
**Goal:** Pitch buyers → negotiation → due diligence → close with one

| # | Step | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 3.1 | Pitch to first buyer (priority order, whoever bites) | Eytan + Sales agent | 🔴 Blocked | Warm intro via Hanan |
| 3.2 | Handle objections, follow-ups | Eytan | 🔴 Blocked | |
| 3.3 | If no/unanswered: move to next buyer on list | Eytan + Sales agent | 🔴 Blocked | Sequential, not shotgun |
| 3.4 | Due diligence prep — code cleanup, docs, IP clarity | Dev team + Eytan | 🔴 Blocked | Dev team cleans prototype for inspection |
| 3.5 | Negotiate deal structure (IP transfer vs license vs investment) | Eytan | 🔴 Blocked | |

**Milestone status: 🔴 Blocked on MS1 + MS2**

---

## ✅ What's Already Done

| Item | When | Detail |
|------|------|--------|
| Prototype built | Pre-Apr 2026 | Bolt + Supabase + Claude. Core flows work. Vibe-coded, needs structural cleanup |
| Product architecture defined | 2026-03/04 | 4-part design: Setup → Profile Engine → Artifacts → Learning Layer |
| Ontology schemas designed | 2026-03/04 | 6 schemas: Agentforce, Hiring, Procurement, ERP Migration, GTM, AI/Agent |
| Sales strategy written | 2026-03/04 | Pricing, ICP, deployment model, pitch angles per buyer |
| Buyer profiles researched | 2026-04-24 | 6/6 profiles written with detailed firm intel |
| Market research complete | 2026-04-24 | Salesforce partner ecosystem mapped, acquisition window documented |
| Build roadmap documented | 2026-04-24 | 4 structural issues identified, milestone targets set |

---

## 👥 People

| Person | Role | Status |
|--------|------|--------|
| Eytan | Product owner, leads pitch in-room | Active |
| Hanan | PM — organizing meetings, intros, developer coordination | Active (informal?) |
| Sales agent | Pitches to buyers for % deal cut | ❌ TBD (Eytan has contact?) |
| Offshore dev team | Cleans up product for due diligence | ❌ Not yet engaged (Hungary/Ukraine) |

---

## ⚠️ Open Questions
- [ ] Actual product name? (CIG is a working name)
- [ ] Who is the sales agent? (Eytan to share)
- [ ] Minimum deal floor Eytan would accept?
- [ ] Is a design partner being pursued separately?
- [ ] Hanan's role — formal or informal/friendship?
- [ ] IP ownership — Eytan sole owner? Any co-founders?
- [ ] Code repo — where is the current prototype?
- [ ] Realistic timeline given dev team size (once engaged)?
- [ ] Has the offshore dev team been contacted at all yet?
- [ ] Pitch order: stick to the priority list or pitch whoever Hanan can intro first?
- [ ] If multiple buyers are interested simultaneously — exclusivity or shop around?

---

## 🔗 Links
- [[Build Roadmap]] — detailed technical step breakdown
- [[Product Architecture]] — full product design with schemas
- [[Sales Strategy]] — pricing, ICP, market context, pitch angles by buyer
- [[Product/README]] — deep feature specs for every capability
- [[../Buyers/CloudMasonry|Buyer: CloudMasonry]] | [[../Buyers/Plative|Plative]] | [[../Buyers/Accelirate|Accelirate]] | [[../Buyers/Ascendix Technologies|Ascendix]] | [[../Buyers/Naitiv|Naitiv]] | [[../Buyers/VRP Consulting|VRP]]
- [[../../Research/Salesforce Partner Ecosystem]] | [[../../Research/AI Agents in Consulting]] | [[../../Research/Solution Consulting Pain Points]]

---

*Koko updates this file when milestones advance, steps complete, or open questions get answered.*