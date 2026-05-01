# Customer Profile Engine
#product #feature #project

*Last updated: 2026-04-24 | Maintained by Koko*

→ Back to [[Product/README]] | [[Product Architecture]] | [[Ontology & Schema System]] | [[Artifact Generation Engine]] | [[Global Learning Layer]]

---

## What It Is

The crown jewel of the Customer Intelligence Graph. The Profile Engine builds a **deeply structured, visual, interactive model** of a specific end-customer — purpose-built for the solution type the buying firm is selling.

Not a CRM record. Not a slide deck. A living model of a company: their org, their systems, their workflows, their pain, their politics — all structured to map against how the buying firm's solution fits in.

The goal: the SE walks into a discovery meeting having already done more research than the customer's own internal team has ever assembled in one place.

---

## How It Builds the Customer Model

### Step 1: Firm configures their schema (via [[Setup & Configuration Module]])
- The buying firm defines which solution types they sell
- For each solution type, the [[Ontology & Schema System]] provides a schema template
- Schema defines what gets researched, what entities matter, what relationships to map

### Step 2: SE inputs a target customer
- Inputs: company name, website, known context (optional)
- System resolves: legal entity, parent company, key subsidiaries, known products/divisions

### Step 3: AI agent research pipeline fires
- Multiple agents run in parallel, each assigned a data source category
- Agents gather, cross-reference, deduplicate, and structure findings
- Output: a populated schema — not raw text, structured entities and relationships
- Duration: target ~60–90 minutes for a complete initial profile

### Step 4: Human review and refinement
- SE reviews the draft profile
- Can add, correct, flag as uncertain, link to their own knowledge
- During live discovery: customer can react and refine in real time (see below)

### Step 5: Profile becomes the source of truth
- All [[Artifact Generation Engine]] outputs link to profile objects
- Changes to the profile propagate into artifacts (no stale data)
- Profile feeds [[Global Learning Layer]] after engagement closes

---

## Data Sources

| Category | Sources | What's Extracted |
|---|---|---|
| **Public filings** | SEC EDGAR, Companies House, regulatory filings | Revenue, headcount, org structure signals, strategic priorities from annual reports |
| **Job postings** | LinkedIn Jobs, Indeed, company careers page | Which systems they're hiring for, team structure, current gaps, growth areas |
| **Earnings calls** | Seeking Alpha, earnings transcripts, IR pages | Executive priorities, pain language, budget signals, strategic initiatives |
| **LinkedIn signals** | Company page, employee profiles, recent hires/departures | Org chart approximation, decision-maker identification, team velocity signals |
| **G2 / Capterra** | Software review sites | Which systems they use and how they feel about them — verbatim pain |
| **Glassdoor** | Employee reviews | Internal culture, operational pain, management style signals |
| **AppExchange (Salesforce)** | App reviews, listing data | Salesforce-specific: which apps they're running, install signals, support issues |
| **News / press** | Google News, press releases, industry trade press | Recent events, M&A, leadership changes, strategic pivots |
| **Social signals** | LinkedIn posts, Twitter/X (executives) | Thought leadership signals, initiatives they're publicly proud of |
| **Web / case studies** | Company website, published case studies, partner listings | Self-reported stack, language they use about themselves |

### Signal quality notes:
- Job postings are the single highest-signal source — they reveal what's actually happening, not what they say publicly
- Glassdoor is underused in sales research but reveals operational pain that prospects won't admit in discovery
- AppExchange reviews reveal Salesforce relationship quality better than any direct question

---

## The AI Agent Research Pipeline

### Architecture
- Not one LLM call. A **pipeline of specialized agents**, each assigned a narrow research task
- Agents run in parallel where sources are independent
- A synthesis agent assembles findings into the schema structure
- A quality-check agent flags contradictions, gaps, and low-confidence fields

### Agent types (illustrative)
| Agent | Job |
|---|---|
| **Org Mapper** | Constructs org chart from LinkedIn + job posting + press signals |
| **Systems Archaeologist** | Identifies tech stack from job postings, G2, AppExchange, web scraping |
| **Pain Miner** | Extracts pain language from reviews, Glassdoor, job posting language |
| **Signal Classifier** | Tags each finding with confidence score + source |
| **Schema Populator** | Maps findings into the ontology schema structure |
| **Gap Detector** | Identifies which schema fields are empty or uncertain — generates discovery questions |
| **Synthesizer** | Merges outputs, resolves conflicts, produces final structured profile |

### Output format
- Structured data: entities (people, systems, departments, processes) and relationships
- Confidence scores per field
- Source citations (SE can drill into where an insight came from)
- Gap report: what wasn't found = targeted discovery questions

---

## The Interactive Visual Experience

What the SE — and the customer — actually sees on screen.

### Visual elements
- **Org map** — navigable org chart with role annotations and influence scoring
- **Systems landscape** — visual map of their tech stack, integrations, and data flows
- **Process maps** — current-state workflow diagrams (BPMN-style) by department
- **Pain heatmap** — where the friction is, by department and system
- **Solution fit overlay** — the buying firm's product mapped against the customer's gaps

### Interaction model
- Clickable: tap a department → see their systems, pain, and workflows
- Navigable: jump between profile sections without losing context
- Projectable: designed to be put on screen in an exec meeting room
- Filterable: filter by department, system, pain severity, solution fit

### Not a PDF, not a spreadsheet
- Traditional research output: a 20-slide deck that goes stale within a week
- This: a live object that updates when the profile updates
- Demo-able: the customer can watch you navigate it in real time

---

## The "Mirror Moment"

The single most powerful moment in the demo.

> *Customer sees themselves rendered accurately on screen — sometimes more accurately than their own internal view.*

### How it happens
1. SE shows the profile to a customer executive during discovery
2. Executive sees their org, their systems, their workflows — already mapped
3. They react: "How did you know that?" or "That's not quite right — actually it's more like this..."
4. The SE adjusts the profile live, and the customer is now **collaborating on their own model**
5. The customer has become a co-author of the intelligence that will drive the proposal

### Why it works
- Changes the dynamic from vendor pitch to collaborative intelligence session
- Customer feels seen, not sold to
- The corrections they make are gold: they're filling in exactly what the research couldn't find
- By the end, the profile is **authoritative** — the customer has ratified it

### Managing it carefully
- Don't project a profile that's obviously wrong — that breaks trust
- Flag low-confidence fields before showing them: "We think this is the case, but we weren't certain — is that right?"
- The mirror moment only works if the first 80% is accurate

---

## Ontology Variations by Solution Type

Different solution types require different schema shapes. The profile for an Agentforce engagement looks different from a hiring automation engagement.

| Solution Focus | What the Profile Emphasizes |
|---|---|
| **Agentforce / Salesforce** | SF org health, cloud adoption, AppExchange stack, CRM process gaps, admin/cert signals |
| **Hiring / Talent Automation** | Recruiting org, ATS/HRIS landscape, hiring funnel metrics, Glassdoor signals, job volume |
| **Procurement Transformation** | Procurement org, P2P stack, supplier fragmentation, spend patterns, ERP age |
| **ERP / Systems Migration** | IT org, current ERP, integration complexity, data quality signals, M&A history |
| **Sales / GTM Transformation** | Sales org structure, CRM + sales engagement stack, pipeline health signals, RevOps maturity |
| **AI / Agent Deployment** | Automation maturity, existing RPA/workflow tools, failure history, change adoption signals |

→ Detailed schema for each: [[Ontology & Schema System]]

---

## Real-Time Refinement Workflow

During a live discovery session, the profile becomes a **shared canvas**.

### Flow
1. SE opens profile on projected screen
2. Walks customer through org map, systems landscape, process maps
3. At each section: "We found this — does this reflect how you actually work?"
4. Customer corrects, adds, removes
5. SE makes changes live — profile updates immediately
6. By end of session: profile has been human-ratified, gaps filled, trust established

### What gets refined most often
- Org chart: titles/reporting structures are often approximated
- Systems landscape: legacy systems often invisible to external research
- Process maps: actual workflow vs. what's described in job postings
- Pain points: real pain often unsaid publicly — customer identifies it when shown adjacent signals

### What never needs refinement
- The existence of known public systems (Salesforce, SAP, etc.)
- Headcount signals (LinkedIn is usually directionally accurate)
- Strategic priorities (from public filings and earnings calls)

---

## User Stories

### Story 1: SE Preparing for a Meeting
> Maria is an SE at CloudMasonry. She has a discovery call with Direct Energy tomorrow. Today: she opens the Profile Engine, inputs Direct Energy, and 90 minutes later has a complete profile — their Salesforce org health, the systems it integrates with, pain signals from AppExchange reviews, and a set of targeted discovery questions for tomorrow's call.
> 
> Without this: Maria spends 4–6 hours doing research across 10 tabs, builds a rough mental model, writes some prep notes, and still walks in without a coherent picture of the systems landscape.

### Story 2: VP of Sales Watching the Demo
> Brian Perdue (VP of Sales, CloudMasonry) is watching Eytan demo the product. Eytan shows a hypothetical customer profile — Direct Energy — with their full org, systems landscape, and pain heatmap.
>
> Brian's first reaction: "We spend 40 hours doing this manually for every major prospect. This would cut that to 90 minutes."
>
> His second reaction: "If our competitors see this, they'll want it too. How do I make sure they can't get it?"

### Story 3: Customer Executive Reacting
> The CTO of a Direct Energy-equivalent firm is in a discovery session with CloudMasonry. The SE shows their profile on screen. The CTO sees their own org chart, their Salesforce org health score, their integration dependencies — including a legacy system the CTO knows is a problem but hasn't told any vendors about.
>
> CTO: "How did you know about our ServiceNow integration issues?"
> SE: "We picked it up from a job posting — you were hiring a 'ServiceNow-Salesforce integration specialist' six months ago."
> CTO: "That... is a very real problem for us."
>
> The tone of the meeting shifts. The SE is no longer a vendor — they're a peer who did their homework.

---

## Competitive Differentiation

### What exists today
| Tool/Approach | What it does | Why it's not this |
|---|---|---|
| **LinkedIn Sales Navigator** | Identifies people, shows connections | No systems, no workflows, no pain, no synthesis |
| **ZoomInfo / Apollo** | Contact data, basic firmographics | No intelligence — just enriched contact records |
| **Gong / Chorus** | Records and transcribes calls | Captures intelligence after the fact, doesn't generate it |
| **Clari / Outreach** | Pipeline management, sales engagement | No customer understanding — just process |
| **Manual SE research** | 40+ hours of tab-hopping per customer | Doesn't scale, doesn't persist, different every time |
| **Generic discovery decks** | Generic frameworks applied generically | Not specific to this customer |

### What this replaces
- The 40-hour manual research process
- The tribal knowledge that lives in one SE's head
- The generic discovery deck that doesn't reference their actual systems
- The proposal that was written without understanding their org politics

### Why it can't be easily copied
- It requires the ontology schemas (which take effort to build per vertical)
- It requires the learning layer (which takes time to compound)
- The interactive profile experience is novel — no one else is doing this
- Network effect: every engagement makes the next one better

---

## Value Proposition

| Metric | Before | After |
|---|---|---|
| Research time per customer | 40+ hours | 90 minutes |
| Research depth | Varies by SE skill | Consistent, structured |
| Customer response in discovery | "That's a good question" | "How did you know that?" |
| Proposal relevance | Generic with some personalization | Fully tailored to profiled reality |
| Context at handoff | Lost in email threads | Packaged, linked, persistent |
| Win rate impact | Baseline | +15–30% (estimated — needs design partner data) |

---

## ⚠️ Open Questions

- What's the actual research time benchmark? 40 hours is the claim — do we have real SE data to back it?
- How many agents run in parallel? Is there a latency issue for large companies?
- How does the profile handle conglomerates / multi-subsidiary companies?
- What's the UX for the SE to flag low-confidence fields before a live show?
- What happens when data sources conflict? (G2 says Salesforce; LinkedIn job posting suggests they're migrating away)
- How do we handle data freshness? (Job posting from 18 months ago is stale)
- Is the "mirror moment" in the prototype? Or still aspirational?

---

## Related
- [[Ontology & Schema System]]
- [[Artifact Generation Engine]]
- [[Global Learning Layer]]
- [[Setup & Configuration Module]]
- [[Product Architecture]]
- [[Research/Sales Engineering Workflows]]
- [[Research/Solution Consulting Pain Points]]
- [[Buyers/CloudMasonry]]
- [[Build Roadmap]]

---

*Last updated: 2026-04-24 | Maintained by Koko*
