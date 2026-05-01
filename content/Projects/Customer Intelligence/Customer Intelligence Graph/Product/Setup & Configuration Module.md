# Setup & Configuration Module
#product #feature #project

*Last updated: 2026-04-24 | Maintained by Koko*

→ Back to [[Product/README]] | [[Product Architecture]] | [[Ontology & Schema System]] | [[Customer Profile Engine]] | [[Artifact Generation Engine]]

---

## What It Is

The optional onboarding layer. Before the [[Customer Profile Engine]] can research customers effectively, the system needs to know *what kind of firm is doing the selling* and *what they sell*.

The Setup Module is where a buying firm configures:
1. Their solution types (what they sell)
2. Their ontology schemas (how customers should be profiled)
3. Their artifact templates (what the output looks like)
4. Their brand guidelines (how artifacts are rendered)

**Key point: it's optional.** Firms that skip it get sensible defaults. Firms that run it get a tighter, more accurate product from day one.

---

## What Gets Configured

### 1. Solution Types
- Which solution types does this firm sell? (Agentforce, Hiring Automation, ERP Migration, etc.)
- For each: what's the firm's practice name? (e.g., "Agentforce Accelerator" vs. just "Salesforce")
- This drives which [[Ontology & Schema System]] templates are loaded

### 2. Ontology Schema Customization
- For each solution type: review and customize the base schema template
- Add entities specific to the firm's practice (e.g., a cloud-only firm might remove on-prem ERP entities)
- Add vertical overlays (e.g., "we only sell to financial services" → add FSI-specific entities)
- Weight entities by importance: what do you always care about? What's rarely relevant?

### 3. Artifact Templates
- Which artifacts does this firm produce? (Some firms don't do BPMNs; others always do)
- For each artifact: customize the structure (which sections, in what order)
- Add firm-specific boilerplate (methodology sections, guarantees, standard terms)
- Set the default tone (consultative vs. technical vs. executive)

### 4. Brand Guidelines
- Upload: logo, color palette, font stack
- Define tone of voice: formal/casual, US/UK English, industry terminology preferences
- Reference documents: upload 2–3 sample artifacts in the firm's style → system learns the pattern
- Brand is applied as a style layer over generated artifacts

### 5. Engagement Outcome Configuration
- Define what a "closed engagement" means for this firm (signed SOW? kickoff meeting scheduled?)
- Configure which data feeds back into the [[Global Learning Layer]]
- Set data retention preferences

---

## Why It's Optional

The product works without it. Firms that skip Setup get:
- Default schema templates (matching their declared solution types)
- Generic artifact structure (standard proposal, business case, etc.)
- No brand customization (artifacts render in a clean neutral style)
- Default data retention and learning layer settings

This is intentional. The Setup Module adds polish and accuracy, but the core value — a profiled customer in 90 minutes — works on defaults.

**When to skip it:**
- First-time trial / design partner phase — get to the "mirror moment" fast, configure later
- Firm with a very standard solution type (Agentforce is well-templated)
- Time-sensitive: a firm wants to demo the product in 48 hours — run on defaults

**When to run it:**
- Before the first real customer-facing use
- When a vertical-specific schema would significantly improve accuracy
- When brand consistency is important for the firm's positioning

---

## How It Integrates with the Profile Engine

```
[Setup Module] → [Ontology Schema] → [Research Pipeline Config]
                ↓                              ↓
         [Artifact Templates]      [Customer Profile Engine]
                ↓                              ↓
         [Brand Style Layer]        [Artifact Generation Engine]
```

- The schema output from Setup flows directly into the [[Ontology & Schema System]]
- The artifact templates flow into the [[Artifact Generation Engine]] as structure config
- The brand style layer is a rendering config applied at generation time
- None of this is per-customer — it's per-firm, applied to all customer profiles

---

## Who Runs It

Typically one of:
- **Head of Pre-Sales** — understands what information matters in discovery
- **Solutions Director** — understands the firm's methodology and solution structure
- **RevOps Lead** — understands the data and how it feeds into the sales process
- **Eytan's team** — for initial setup, as part of the IP transfer / deployment

### Time investment
| Task | Estimated time |
|---|---|
| Declare solution types | 30 minutes |
| Schema customization (per solution type) | 2–4 hours each |
| Artifact template customization | 1–2 hours each |
| Brand guidelines upload + calibration | 2–3 hours |
| Reference document upload + review | 1–2 hours |
| **Total for a 2-solution-type firm** | **~1–2 days** |

### Time to value
- After 1–2 days of configuration: the product is calibrated for the firm
- First customer profile can run immediately after
- Brand-matched artifacts on first run
- Typical expectation: configure once, iterate quarterly as schemas improve

---

## Maintenance Over Time

The Setup Module isn't a one-time thing. It should be revisited:

### When to update:
- Firm adds a new practice area → add a new solution type + schema
- Firm enters a new vertical → add vertical overlay
- Artifact templates feel stale → refine structure or tone
- Rebranding → update brand guidelines
- [[Global Learning Layer]] surfacing that certain entities are irrelevant → prune schema

### Who owns it:
- Assign a "schema owner" — typically the Head of Pre-Sales or RevOps
- Low maintenance burden: a quarterly 2-hour review is sufficient for most firms

---

## ⚠️ Open Questions

- Is the Setup Module UI built in the prototype? Or is it currently a manual configuration step?
- Is brand style matching done in the Setup Module or handled separately? (See [[Build Roadmap]] item #4)
- Can multiple users collaborate on schema configuration? Or is it a single-user admin interface?
- What happens to existing profiles if the schema is significantly updated? (Stale profiles?)
- Is there an import/export format for schemas? (So Eytan's team can pre-configure before delivery)
- Is there a "test mode" — configure a schema, run a test profile, see what comes out, iterate?

---

## Related

- [[Ontology & Schema System]]
- [[Customer Profile Engine]]
- [[Artifact Generation Engine]]
- [[Product Architecture]]
- [[Build Roadmap]]
- [[Research/Sales Engineering Workflows]]
- [[Buyers/CloudMasonry]]

---

*Last updated: 2026-04-24 | Maintained by Koko*
