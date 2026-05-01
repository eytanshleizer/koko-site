# Ontology Design for Enterprise Sales
#research

*Research by Koko — 2026-04-24*

→ Related: [[Projects/Customer Intelligence Graph/Product Architecture]] | [[Sales Engineering Workflows]] | [[AI Agents in Consulting]]

---

## What Is an Ontology?

An ontology is a formal, structured representation of a domain — its objects, their properties, and the relationships between them.

In plain language: **a map of what exists, what it is, and how things connect.**

In enterprise sales:
- A customer's org structure is an ontology (who reports to whom, what they own)
- A system landscape is an ontology (which systems exist, what they do, how they talk)
- A business process is an ontology (steps, decision points, actors, handoffs)

The Customer Intelligence Graph is fundamentally an **ontology engine** — it builds a formal model of a customer, per solution type, and links everything together.

---

## Why Ontologies Matter for AI Agents

Without a structured ontology:
- AI agents operate on raw, unstructured context (documents, emails, notes)
- Answers are probabilistic guesses from text
- Agents can't reason about relationships or navigate hierarchies
- Outputs contradict each other because there's no shared truth

With a structured ontology:
- Agents navigate a graph of typed objects and relationships
- Queries are precise: "What are all the pain points linked to the Finance org?"
- Artifacts stay consistent — they all reference the same objects
- Agents can infer: "If this department uses Workday and their pain is reporting, the gap is probably BI integration"

**The ontology is the operating system for AI-agent-powered consulting.**

---

## Core Schema Patterns

### Pattern 1: Org Structure Graph

```
Organization
├── Division (name, headcount, geography)
│   ├── Department (name, function, budget owner)
│   │   ├── Team (name, headcount)
│   │   │   └── Role (title, count, key person)
│   │   └── Pain Points (linked)
│   └── Systems Used (linked)
└── Executive Layer
    ├── C-Suite (title, name, domain)
    └── Sponsor / Champion / Blocker flags
```

### Pattern 2: Systems Landscape Graph

```
System
├── Name, vendor, category (CRM/ERP/HRIS/etc.)
├── Version / edition
├── Deployment (cloud / on-prem / hybrid)
├── Integrations → [other Systems]
├── Users → [Departments / Roles]
├── Pain Points (linked)
├── Technical debt signals
└── Contract / renewal signals
```

### Pattern 3: Workflow Graph

```
Workflow
├── Name, department owner
├── Trigger (event or schedule)
├── Steps → [Step]
│   ├── Name, actor (Role)
│   ├── System Used (linked)
│   ├── Decision Point (Y/N, condition)
│   └── Handoff → [next Step or Department]
├── Pain Points (linked)
├── Automation Candidates (linked)
└── KPIs (cycle time, error rate, volume)
```

### Pattern 4: Relationship / Political Graph

```
Stakeholder
├── Name, title, department
├── Influence level (decision-maker / influencer / end-user / blocker)
├── Alignment to project (champion / neutral / skeptic / blocker)
├── Relationships → [other Stakeholders]
├── Communication style / preferences (notes)
└── Key concerns / motivations (linked to Pain Points)
```

### Pattern 5: Solution Fit Map

```
Solution Component
├── Name (e.g. Agentforce Service Agent)
├── Problems it solves → [Pain Points]
├── Workflows it affects → [Workflows]
├── Prerequisites → [Systems / Integrations]
├── Deployment complexity
└── ROI signals → [KPIs it improves]
```

---

## Ontology Design Principles

| Principle | Why it matters |
|-----------|---------------|
| **Type everything** | Objects should have a type (person, system, workflow, pain point) — not just free-form text |
| **Separate objects from views** | The data model is the ontology; the display layer is a view. Don't conflate them. |
| **Relationships are first-class** | The edges between objects matter as much as the objects themselves |
| **Link artifacts to objects** | Every artifact claim traces back to an ontology object — nothing made up |
| **Design for query** | Ask: "What questions will agents and humans ask?" Build the schema to answer them |
| **Allow uncertainty** | Not every field is known — allow null, allow confidence levels |
| **Version the model** | Ontologies evolve as you learn more. Keep history. |

---

## Ontology Schema Per Solution Type

The schema needs to be purpose-built per solution type. What a hiring automation engagement needs to map is fundamentally different from an ERP migration.

See [[Projects/Customer Intelligence Graph/Product Architecture]] for the full breakdown of schemas per solution type.

**Key principle:** The engine's value scales with how tightly the schema is designed for the buyer's solution area. This is why vertical-specialist buyers (Ascendix for CRE, Naitiv for insurance) benefit disproportionately — their schema is highly repeatable.

---

## Graph View Implications

When the ontology is properly structured, Obsidian's Graph View (or any graph visualization tool) reveals:
- Clusters: which departments have the most pain?
- Hubs: which systems touch the most workflows?
- Gaps: what's in the workflow that isn't in the systems?
- Bridges: which roles are connecting multiple systems (and are probably overloaded)?

This is exactly the kind of insight that makes a customer say: *"You understand us better than we understand ourselves."*

---

## The Data Model Refactor (Build Context)

The current prototype stores everything as "objects" in a single table. This violates the principle of separating objects from views.

The refactor (see [[Projects/Customer Intelligence Graph/Build Roadmap]] Item 1) should create:
- `ontology_objects` — typed nodes in the customer model
- `ontology_relationships` — edges between objects
- `views` — rendered representations of subgraphs
- `context_files` — source material, research inputs
- `artifacts` — generated outputs (docs, decks, BPMNs)

---

## Related
- [[Projects/Customer Intelligence Graph/Product Architecture]]
- [[Projects/Customer Intelligence Graph/Build Roadmap]]
- [[Sales Engineering Workflows]]
- [[AI Agents in Consulting]]
