# Product Specs — Customer Intelligence Graph
#product #project

*Last updated: 2026-04-24 | Maintained by Koko*

→ Back to [[README]] | [[Product Architecture]] | [[Sales Strategy]] | [[Build Roadmap]]

---

## What This Folder Is

Deep feature specs for each major capability of the Customer Intelligence Graph. The [[Product Architecture]] file covers the 4-part structure at a high level. This folder goes deeper — each capability gets its own file with mechanics, user stories, value propositions, and open questions.

---

## The Product in One Paragraph

The Customer Intelligence Graph is an AI-powered operating layer for consulting and SI firms. It researches an end-customer using public and semi-public signals, builds a structured, interactive, visual model of who that customer is (their org, systems, workflows, pain points, politics), and generates the entire engagement package from that profile — proposals, BPMNs, business cases, decks, demos, handoff packages. The profile and all artifacts stay linked, so nothing contradicts. Every engagement feeds a proprietary learning layer that compounds over time, becoming a balance sheet asset unique to the buying firm.

---

## Capability Map

| Capability | Primary Users | Value Delivered |
|---|---|---|
| [[Customer Profile Engine]] | SEs, SCs, Account Executives, Sales leadership | Build a complete customer model in 90 min instead of 40+ hours |
| [[Ontology & Schema System]] | Head of Pre-Sales, Solutions Director, RevOps | Structure customer intelligence per solution type and vertical |
| [[Artifact Generation Engine]] | SEs, delivery leads, proposal writers | Generate full engagement packages linked to the profile — no contradictions |
| [[Global Learning Layer]] | Firm leadership, RevOps, M&A strategic buyers | Compounding intelligence asset that improves every deal and raises exit multiple |
| [[Setup & Configuration Module]] | Head of Pre-Sales, RevOps | Configure the system for the firm's specific solution stack and brand |
| [[Value Proposition]] | Eytan, sales agent, Hanan (for pitch prep) | Full "why buy this" document — ROI model, objections, strategic angles |
| [[Demo Scenarios]] | Eytan, sales agent, anyone doing a demo | Concrete walkthrough scripts for CloudMasonry, Ascendix, and generic SE workflow |

---

## Feature Dependency Map

```
[Setup & Configuration Module]
          ↓ (optional)
[Ontology & Schema System] ←──────────────────────────────┐
          ↓                                                │
[Customer Profile Engine] ←── AI agents + human review    │
          ↓                                                │
[Artifact Generation Engine] ←── all artifacts link back  │
          ↓                                                │
[Global Learning Layer] ──────── feeds back to schema ────┘
```

---

## Reading Order

1. Start with [[Product Architecture]] for the high-level 4-part overview
2. Read [[Customer Profile Engine]] — this is the core value prop
3. Read [[Ontology & Schema System]] — this is what makes it configurable per buyer
4. Read [[Artifact Generation Engine]] — this is the output that seals the deal
5. Read [[Global Learning Layer]] — this is what makes it a $5M asset, not a $50K tool
6. Read [[Value Proposition]] before any pitch
7. Read [[Demo Scenarios]] before any demo

---

## Related

- [[Sales Strategy]]
- [[Build Roadmap]]
- [[Buyers/CloudMasonry]]
- [[Buyers/Ascendix Technologies]]
- [[Research/Ontology Design for Enterprise Sales]]
- [[Research/Sales Engineering Workflows]]

---

*Last updated: 2026-04-24 | Maintained by Koko*
