# Demo Scenarios — Customer Intelligence Graph
#product #feature #project

*Last updated: 2026-04-24 | Maintained by Koko*

→ Back to [[Product/README]] | [[Sales Strategy]] | [[Value Proposition]] | [[Product Architecture]] | [[Build Roadmap]]

---

## Purpose of This File

Concrete, detailed walkthrough scripts for the 3 primary demo scenarios. Use these to:
- Prepare for a live demo with a buyer
- Train a sales agent
- Build the demo environment in the product
- Write the demo script for Eytan to practice

Each scenario: setup, step-by-step walkthrough, key moments to land, expected buyer reactions, and what to do when it goes sideways.

---

## Scenario 1: CloudMasonry + Agentforce

**Context:**
- [[Buyers/CloudMasonry]] — Chicago-based, Agentforce-first boutique SI
- Decision maker: Brian Perdue (VP of Sales or similar — confirm title)
- Demo customer (hypothetical): Direct Energy — large utility firm, publicly traded, likely runs Salesforce, complex customer service and field operations

**Goal of this demo:** Show Brian what his SE team would experience when using this product for a target like Direct Energy. Land the "mirror moment" and the time savings argument.

---

### Setup
- Pre-built profile for "Direct Energy" (or similarly sized utility) loaded and ready
- Agentforce schema activated
- Artifact package pre-generated (so artifacts can be shown without waiting)
- Recommend: have a second browser tab open with a relevant AppExchange review to show source material

---

### Step-by-Step Walkthrough

**Step 1: The problem setup (2 minutes)**
> "Brian, before I show you the product, I want to ask you one question: when one of your SEs is preparing for a discovery call with a new prospect — like let's say Direct Energy, a company you've been trying to get in front of — how long does that prep take?"

Wait for answer. It'll be somewhere between "a few hours" and "way too long."

> "Right. We've heard 40 hours for a serious enterprise account. Some of that is research, some is building the prep materials, some is the proposal. All of it is your most expensive people doing work that doesn't scale. Let me show you what 90 minutes looks like instead."

---

**Step 2: Opening the profile (3 minutes)**

Open the Direct Energy profile.

> "This is what your SE would see when they open the product the morning before their discovery call with Direct Energy. The profile took 90 minutes to build. Let's look at what's in it."

Navigate to the **Org Map**:
> "Here's their org structure — sales org, service org, IT, and the key decision-makers we've identified. Notice these roles: [VP of Customer Operations, CTO, Salesforce Admin lead]. These are the people your SE needs to build relationships with."

Navigate to the **Systems Landscape**:
> "Here's their technology stack. They're running Salesforce Sales Cloud and Service Cloud — we can see that from AppExchange reviews and job postings. They've got SAP on the back end, which integrates into their service workflows. And there's a legacy billing system that appears to have integration issues — see this signal? It's from a Glassdoor review. An employee mentioned 'our billing system never syncs cleanly with Salesforce.'"

**[Key moment #1: the detail that surprises them]**
> "Your SE would have found this manually — eventually. Or they wouldn't have found it at all. Either way: the discovery session starts with your SE already knowing this is a pain point, and asking about it directly."

---

**Step 3: The pain heatmap (2 minutes)**

Navigate to the **Pain Heatmap**:
> "This is where it gets interesting. Here's how we've mapped their pain against your solution footprint. Red = significant friction we've confirmed. Yellow = suspected, needs validation."

Point out the high-friction areas:
- Customer service case routing (manual steps around Salesforce)
- Field service coordination (disconnected from service cloud)
- Sales forecast process (manual spreadsheet signals)

> "Your Agentforce practice covers all three of these. Your SE goes in knowing exactly where to probe."

---

**Step 4: The mirror moment setup (3 minutes)**

> "Now here's the moment that changes deals. This is what you show the customer."

Switch perspective — imagine Brian is now a customer executive:
> "Imagine you're the VP of Customer Operations at Direct Energy, and I'm your CloudMasonry SE. I show you this screen. You see your own org. You see your own systems. You see the billing integration issue you've been quietly fighting with for 18 months. How do you feel?"

Wait for Brian's reaction.

Common reactions:
- "How did you know about that?" → "From a Glassdoor review — your own employee mentioned it."
- "That's not quite right — it's actually X" → "Perfect — let's update it now. That's the point. You're telling me what the research couldn't find."
- "That's impressive" → "And this took 90 minutes. Not 40 hours."

**[Key moment #2: the demo within the demo]**

Show the live edit:
> "Watch this. The customer says the billing system isn't SAP — it's Oracle Fusion. I update it here [live edit]. Now look at these two artifacts."

Navigate to the proposal and business case — show that the updated system name appears in both automatically.

> "Nothing gets out of sync. Because everything traces back to the profile."

---

**Step 5: The artifact package (3 minutes)**

Navigate to the **Generated Artifacts**:

> "Once the profile is ratified — which takes a 45-minute discovery session instead of your usual 3 meetings — the system generates the full engagement package."

Walk through:
- **Executive deck** — "This is ready to present to their C-suite. Uses their own strategic language from their last earnings call."
- **Business case** — "The ROI model is pre-populated with their headcount signals and our historical delivery benchmarks. Your SE finishes the discovery call and sends this same day."
- **BPMN maps** — "Current-state process maps for their customer service and field service workflows. These aren't generic — they reference their actual systems and team structure."
- **Handoff package** — "When you close — and you will close — this goes to your delivery team. They start already knowing everything the SE knows. No repeated questions. No context loss."

---

**Step 6: The strategic close (2 minutes)**

> "Brian, TCS paid $700M for Coastal Cloud. Accenture bought NeuraFlash. Every firm in your market is in a 12–24 month acquisition window. What gets you top of range? Proof that your people think deeper than everyone else. This is how you prove it — and put it on your balance sheet before the window closes."

> "Your SEs stop doing 40-hour research sprints. Every customer engagement is a CloudMasonry-caliber engagement. And the more you use it, the better it gets — because it's learning from every deal."

---

### Expected Reactions and Responses

| Reaction | Response |
|---|---|
| "How do we know the research is accurate?" | Show confidence scores + source citations. Point to the mirror moment as the human ratification step. |
| "What if our customer data is sensitive?" | All research is from public/semi-public sources. Customer data never leaves your system. |
| "Could our competitors buy this?" | No — each deployment is exclusive. Once you have it, the learning layer is yours alone and it compounds away from competitors. |
| "How long to deploy?" | Initial configuration: 1–2 days. First profile: 90 minutes after that. See [[Setup & Configuration Module]]. |
| "What does it cost?" | See [[Sales Strategy]] — $5M IP transfer. But let's talk about the ROI model first. |

---

## Scenario 2: Ascendix + CRE (Commercial Real Estate)

**Context:**
- [[Buyers/Ascendix Technologies]] — CRE vertical, Salesforce SI, Dallas-based
- Decision maker: TBD (CEO or VP Sales level — Eytan to confirm contact)
- Demo customer (hypothetical): Marcus & Millichap, or a mid-size regional CRE brokerage

**Goal of this demo:** Show how the product handles a specialized vertical. The Ascendix pitch is about the compounding moat — after 50 CRE profiles, the system knows CRE better than any competitor.

---

### Setup
- CRE vertical schema active (Agentforce base + CRE overlay)
- Profile for a CRE brokerage pre-built (e.g., "Meridian Capital" or similar)
- Schema should include: property portfolio entities, deal pipeline structure, Yardi/MRI integration signals, brokerage hierarchy

---

### Step-by-Step Walkthrough

**Step 1: The vertical hook (1 minute)**
> "You're the only Salesforce SI in the room when a commercial real estate firm is evaluating. The question is whether you walk in having done your homework — or whether you walk in and ask them what a cap rate is."

Land the laugh. Then:
> "The product knows CRE. Let me show you what your SE sees before they meet with a brokerage."

---

**Step 2: CRE-specific profile elements (4 minutes)**

Open the brokerage profile.

Navigate to **Property Portfolio** (CRE vertical entity):
> "This entity doesn't appear in a generic Salesforce profile. It's specific to CRE — we've mapped their asset classes, deal volume signals, and geographic concentration from job postings and press releases."

Navigate to **Systems Landscape**:
> "They're running Yardi for property management. Salesforce for deal pipeline. The integration between the two is manual — we see this from a job posting looking for a 'Yardi-Salesforce data analyst.' That's a pain point before you even walk in."

Navigate to **Brokerage Org**:
> "Senior brokers, junior associates, back-office support. Salesforce ownership is with IT, not the brokers — which means any change management plan has to bridge that gap."

---

**Step 3: The compounding argument (3 minutes)**

> "Here's what makes this different from a one-time research tool. You're going to sell to 5 CRE firms this year. Then 10. Then 20. Every one of those profiles feeds the learning layer."

Show the [[Global Learning Layer]] view:

> "After 20 CRE profiles, the system knows: every CRE firm at this size has a Yardi integration problem. Every one has a mismatch between how brokers think about deals and how Salesforce structures them. Every one has a back-office team that's afraid of the new system."

> "Your competitor walks in with a generic Salesforce pitch. You walk in already knowing their specific version of these problems. That's not a product — that's a moat."

---

**Step 4: CRE-specific artifacts (2 minutes)**

Show the **Executive Deck** — terminology is CRE-native: "cap rate," "NOI," "deal pipeline," "lease lifecycle."

Show the **Discovery Guide** — CRE-specific questions about their current Yardi setup, their broker adoption challenges, their reporting needs.

> "Every artifact uses their language. Not 'accounts' and 'opportunities' — 'properties' and 'deals.' Your deck lands differently."

---

**Step 5: The Ascendix-specific close (1 minute)**
> "You're a product company, not just an SI. You already think about proprietary IP. This is proprietary IP that compounds — and that you can point to in an M&A conversation as a demonstrable intelligence asset specific to CRE. No one else has that."

---

## Scenario 3: Generic SE Workflow — Before / After

**Context:** Used when demoing to a non-specific buyer, or when introducing the product to an SE audience. Shows the day-in-the-life difference.

**Goal:** Make the SE in the audience feel the pain of today, then see the relief of the alternative.

---

### Before: A Day in the Life of an SE (Today)

**Scene:** Sarah, SE at a mid-size Salesforce SI. Has a discovery call with TechCorp tomorrow at 10am.

**Timeline (today, 5pm):**
- Opens Google. Searches "TechCorp Salesforce." Finds a case study. 10 min.
- Searches LinkedIn. Finds the VP of IT and the Salesforce Admin. 20 min.
- Looks for AppExchange reviews — nothing useful. 15 min.
- Reads their 2023 annual report. Finds a vague mention of "digital transformation." 30 min.
- Googles "TechCorp ERP." Finds they're on SAP, maybe. Not sure. 15 min.
- Opens a blank Word doc. Starts writing prep notes. Stops. Feels like she doesn't know enough. 30 min.
- Closes the laptop. Decides to wing it tomorrow. 0 min.
- Tomorrow: walks in and asks "so tell me about your current Salesforce setup?"
- Customer: sighs internally.

**Total research time: ~2 hours. Quality: low. Context retained: lives in Sarah's head. Transferable to next SE: no.**

---

### After: A Day in the Life of an SE (With the Product)

**Scene:** Sarah, same SI, same TechCorp call tomorrow.

**Timeline (today, 9am):**
- Opens the product. Types "TechCorp." Hits generate. 5 min.
- Gets a notification at 10:30am: "TechCorp profile ready." 
- Opens profile. Sees: org chart, systems landscape (SAP + Salesforce Sales Cloud + custom service portal), pain heatmap (service portal is the biggest friction point), decision-maker map, 3 discovery questions auto-generated for the gaps. 30 min review.
- Adds two notes from a conversation she had with the account manager last week. 10 min.
- Downloads the discovery guide. Prints it. 5 min.

**Discovery call (tomorrow, 10am):**
- Opens with: "We did some research ahead of today — we noticed you have a custom service portal sitting between your SAP and Salesforce environments. We've seen this pattern create some friction in service case routing. Is that something you've felt?"
- Customer: "...yes, actually. That's been a problem for 18 months. How did you know that?"
- Sarah: "We do our homework. Let's talk about it."

**Total SE prep time: 50 minutes. Quality: high. Context retained in the profile. Transferable: yes, immediately.**

---

### Key Moments to Land in This Scenario

1. **The contrast moment** — the "sighs internally" from the customer when the SE asks a generic opening question. That's the pain.
2. **"How did you know that?"** — the mirror moment, even in a narrative form.
3. **The transferability point** — when Sarah leaves the company, the profile doesn't. The next SE picks it up immediately.

---

## Demo Environment Notes

- **For Scenario 1:** Build Direct Energy profile in the product. Pre-generate all artifacts. Test the live edit and artifact propagation. See [[Build Roadmap]].
- **For Scenario 2:** Build CRE vertical schema. Build a CRE brokerage profile. Terminology must be CRE-native.
- **For Scenario 3:** This is a narrative demo — can be done without a live product if needed. Use screenshots or a scripted walkthrough.

---

## ⚠️ Open Questions

- Is a live demo possible yet? (See [[Build Roadmap]] for what's blocking demo-readiness)
- Which scenario does Eytan want to lead with for the CloudMasonry pitch?
- Does Brian Perdue know the product is being built? Or is the pitch a cold reveal?
- Who demos: Eytan alone, or with Hanan present?
- Is the Direct Energy profile fictional enough to avoid any sensitivity? (It's a real company — make sure profile is clearly marked as illustrative)
- What's the fallback if the live product glitches mid-demo? (Screenshot deck backup?)

---

## Related

- [[Sales Strategy]]
- [[Value Proposition]]
- [[Customer Profile Engine]]
- [[Artifact Generation Engine]]
- [[Buyers/CloudMasonry]]
- [[Buyers/Ascendix Technologies]]
- [[Build Roadmap]]
- [[Research/Sales Engineering Workflows]]

---

*Last updated: 2026-04-24 | Maintained by Koko*
