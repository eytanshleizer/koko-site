# Solution Consulting Pain Points
#research #salesengineering

*Research by Koko — 2026-04-24*

→ Related: [[Projects/Customer Intelligence Graph/README]] | [[Sales Engineering Workflows]] | [[AI Agents in Consulting]]

---

## The Core Problem

Solution engineers and consultants in SIs are highly skilled people doing low-leverage work. The research, the documentation, the context-building — they do it manually, from scratch, for every deal. When the deal closes, most of that context evaporates.

---

## Pain Point 1: Starting From Scratch on Every Deal

**What happens:**
- A new enterprise opportunity arrives. The SE opens a blank document.
- They spend hours researching: the company's website, LinkedIn org chart, Glassdoor reviews, earnings call transcripts, G2 reviews, past news.
- None of this is structured. None of it links to the firm's solution portfolio. None of it persists after the deal.

**The frustration (synthesized from common SE experiences):**
> "I've worked on 12 financial services deals this year. I know what every CFO at a mid-market bank cares about. But when the next deal comes in, I start over."

**The cost:**
- Estimated 8–20 hours of research per qualified opportunity
- Research quality varies by who does it — the best SEs have it in their head; junior SEs don't
- No institutional learning — firm doesn't get smarter with each deal

---

## Pain Point 2: Context Loss at Handoff

**What happens:**
- Deal closes. SE spends 4–8 hours briefing the delivery team.
- Delivery team reads the proposal. Misses the nuances.
- Week 2 of the project: "We didn't know they had that legacy system issue."
- Week 4: Customer frustration. "We already told you about this in the sales process."

**The frustration:**
> "I spent 6 months getting to know this customer. I know their politics, their priorities, their blockers. Then I hand off and watch the delivery team rediscover everything from scratch."

**The cost:**
- Rework and relationship damage early in the engagement
- SE time wasted on re-briefing
- Customer perception: "Do these people even talk to each other?"
- In professional services, a bad start rarely recovers — churn risk goes up

**Research context:**
- Forrester data (pre-2024) suggests knowledge transfer gaps cost professional services firms 15–25% of project profitability in avoidable rework
- Gartner research on presales found that 65% of AEs say poor context transfer between sales and delivery is a top reason for customer dissatisfaction in year one

---

## Pain Point 3: Demo Customization Overhead

**What happens:**
- Customer expects to see "their" problem solved in the demo, not a generic walkthrough
- SE spends 10–30 hours configuring a custom demo environment
- Half of that work is renaming fields, swapping logos, adjusting data

**The frustration:**
> "I spent three days building a custom demo for a prospect who cancelled the meeting. That's 30 hours I'll never get back."

**The cost:**
- Demo prep is the biggest time sink in pre-sales — often 40–50% of SE hours
- High-variance: great SEs produce great demos; junior SEs produce generic ones
- Opportunity cost: every hour on demo prep is an hour not on pipeline building
- When deals don't close, that time is pure loss

---

## Pain Point 4: Winning Deals But Losing at Delivery

**What happens:**
- The proposal was brilliant. The demo was tailored. The customer said yes.
- Six months later, the customer is frustrated. The project didn't match what was sold.
- Not because of bad delivery — because the scoping was wrong, based on incomplete discovery.

**The frustration:**
> "We win on the quality of our pitch and lose on the quality of our delivery. The gap is always discovery depth — we didn't know enough about the customer when we scoped it."

**The cost:**
- Churn, NPS damage, reference loss
- In SIs, the margin on implementation projects is already thin — rework destroys it
- Discovery failures don't show up until 3–6 months after the deal closes, making them hard to trace back

---

## Pain Point 5: Knowledge Doesn't Compound

**What happens:**
- The firm closes its 50th financial services engagement.
- It knows more about financial services firms than almost anyone.
- But that knowledge lives in individual consultants' heads, scattered Confluence pages, and old proposals.
- A new hire starts their first FS deal and starts from scratch.

**The frustration:**
> "We have 10 years of institutional knowledge about this vertical. It might as well be on post-it notes."

**The cost:**
- Onboarding new SEs takes 6–12 months to reach full productivity
- Senior SE leaving = knowledge leaves with them
- The firm doesn't compound — it plateaus

---

## What Fixes This

**Structured customer profiles** that:
- Pre-populate from agent research before the first meeting
- Persist and link to every artifact generated
- Transfer cleanly at handoff (the package IS the context)
- Compound across engagements (the learning layer)

→ See [[Projects/Customer Intelligence Graph/Product Architecture]] for how this works

---

## Related
- [[Sales Engineering Workflows]] — the full workflow context
- [[Projects/Customer Intelligence Graph/README]]
- [[Projects/Customer Intelligence Graph/Buyers/Accelirate]] — this pain point IS their pitch
- [[Projects/Customer Intelligence Graph/Buyers/VRP Consulting]] — scale makes this worse
- [[AI Agents in Consulting]] — what's changing in the landscape
