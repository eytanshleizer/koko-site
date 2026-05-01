# VRP Consulting

#buyer #project #salesforce-si #pdo #enterprise

> **Status:** 🟢 Active Prospect
> **Priority:** ⭐⭐⭐ High
> **Revenue Potential:** $5M+
> **Sales Cycle:** Long (12–24 months)
> **Last Updated:** 2026-04-24

---

## 📌 Quick Facts

| Field | Value |
|---|---|
| **Company** | VRP Consulting |
| **HQ** | London, United Kingdom |
| **Founded** | 1998 |
| **Size** | 500–1,000 employees |
| **Revenue (est.)** | $89M–$127M |
| **Type** | Salesforce Consulting Partner / PDO Expert |
| **Certifications** | 600+ Salesforce expert certifications |
| **Clients** | 350+ |
| **Projects Delivered** | 2,000+ |
| **CSAT** | 4.8 / 5.0 |
| **Industry** | IT Services / Salesforce Ecosystem |
| **Website** | vrpconsulting.com |
| **Primary Contact** | TBD |

---

## 🏢 Company Profile

VRP Consulting is one of the oldest and largest independent Salesforce System Integrators (SIs) in the world. Founded in 1998 — before Salesforce itself was even a year old — VRP has spent more than 26 years building deep expertise across the full Salesforce product suite. They are a Certified Salesforce Consulting Partner and a recognized leader in PDO (Product Development Outsourcing), helping ISVs build and launch AppExchange products.

Unlike many SIs that grew by acquisition or pivoted from broad consulting, VRP is a Salesforce-pure-play. This gives them unusual depth: their consultants think in Salesforce-first patterns, and their institutional knowledge spans everything from legacy Salesforce Classic migrations to modern Data Cloud architectures.

### Business Model

VRP operates across three primary revenue streams:

1. **Implementation & Consulting** — The core. They take clients from discovery through go-live on Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, MuleSoft, and Tableau / CRM Analytics. Engagements range from SMB quick-starts to multi-year enterprise transformation programs.

2. **Managed Services** — Post-go-live support, optimization, and ongoing development. Many clients retain VRP as a long-term Salesforce operations partner rather than keeping the expertise in-house.

3. **PDO (Product Development Outsourcing)** — A significant differentiator. VRP acts as the engineering arm for ISVs who want to build AppExchange products but lack Salesforce-native development capacity. This puts them inside the product lifecycle of third-party vendors, not just end-customer implementations.

### Geographic Footprint

- **London** (HQ)
- Additional global offices spanning North America, Eastern Europe, and APAC
- Delivery model blends onshore client-facing teams with offshore/nearshore delivery centers — enabling mid-market price points with enterprise-grade output

### Platforms & Clouds Served

- **Sales Cloud** — Core competency. Territory management, pipeline, forecasting, CPQ integration
- **Service Cloud** — Case management, omni-channel routing, field service
- **Marketing Cloud / Account Engagement (Pardot)** — Campaign automation, lead nurturing
- **Commerce Cloud** — B2B and B2C storefronts
- **Experience Cloud** — Partner portals, customer communities, self-service
- **MuleSoft** — Integration layer; middleware and API management
- **Tableau / CRM Analytics** — BI and embedded analytics inside the Salesforce platform
- **Data Cloud** — Emerging capability; likely growing as Salesforce pushes the platform
- **AppExchange / PDO** — As both a builder (for ISV clients) and a user (internal tools)

### Client Profile

VRP serves mid-market to enterprise clients across:
- **Financial Services** (wealth management, insurance, banking)
- **Manufacturing** (complex sales cycles, dealer networks, field service)
- **Retail & Commerce** (D2C and B2B commerce transformation)
- **Technology** (SaaS companies, ISVs who need PDO)
- **Professional Services** (consulting firms, staffing, law firms)

Average engagement size is likely $250K–$2M for implementations; managed services retainers stack on top. At 350+ clients and 2,000+ projects, the portfolio is broad and deep.

---

## 🧠 What CIG Would Look Like for VRP

> **Scenario:** A VRP engagement lead is preparing for discovery with a mid-market UK manufacturer (~1,200 employees) pursuing a combined Sales Cloud + Service Cloud overhaul. They're currently on Microsoft Dynamics. The manufacturer has 4 sales regions, 3 product lines, a dealer channel, and a 40-person field service team.

### The Problem VRP Faces Today

Without [[Customer Intelligence Graph]], a VRP consultant preparing for this engagement does this:
- Reviews the SOW from presales
- Digs through shared Confluence or SharePoint for past manufacturing engagements (often poorly tagged)
- Asks around internally: "Has anyone done a Dynamics-to-SFDC migration with dealer channels before?"
- Relies on individual memory and tribal knowledge
- Starts fresh with their solution design, reinventing patterns that VRP has already solved

**The result:** Inconsistent discovery quality, slower scoping, missed risks, and a delivery that doesn't fully leverage 26 years of institutional knowledge.

### What CIG Unlocks

With CIG, VRP gets a **Global Learning Layer** — a structured, queryable knowledge graph that spans all 2,000+ past projects. The engagement lead can ask:

- *"Show me all manufacturing clients where we migrated from Dynamics. What were the top 3 data quality issues?"*
- *"What's the median time-to-go-live for Sales Cloud + Service Cloud dual-track implementations at 1,000–5,000 employee companies?"*
- *"Which custom objects consistently appear in dealer-network implementations? What integrations do they typically need?"*
- *"What adoption intervention worked best when Sales reps resisted CRM logging discipline in similar engagements?"*

CIG surfaces the answer — not from one person's memory, but from the cumulative pattern across every relevant past engagement.

### Why Scale Makes This Exceptional

VRP's 2,000+ project count is the key. Most SIs using CIG at 50–100 projects get good results. At 2,000, the **statistical confidence** of every pattern is orders of magnitude stronger. The learning layer stops being "informed guesses" and becomes genuine predictive intelligence. That's a different product category.

For VRP specifically:
- **PDO clients** create a second data layer — product builds, AppExchange patterns, ISV failure modes — that no pure-SI CIG deployment has
- **Managed services tail** means CIG can track long-term outcomes: did adoption hold 18 months post-go-live? Did the forecast accuracy improve?
- **Multi-cloud patterns** (Sales + Service + MuleSoft together) are where VRP wins big deals — and where the complexity of CIG's ontology pays off most

---

## 🗂️ Full Ontology Schema

> CIG ontology for a Salesforce SI focused on Sales Cloud / Service Cloud implementations. Designed for VRP's delivery model.

---

### 🏗️ Org Layer

Captures the internal structure of both VRP's clients and VRP's own delivery teams.

```
OrgLayer {
  SalesTeam {
    id: string
    name: string
    size: integer              // headcount
    structure: enum            // [pod, geographic, vertical, hybrid]
    managementLevels: integer
    quotaModel: enum           // [individual, team, blended]
    sfRoles: string[]          // Salesforce role hierarchy mapping
  }

  ServiceTeam {
    id: string
    name: string
    size: integer
    caseVolume: integer        // monthly average
    channelMix: string[]       // [phone, email, chat, portal, field]
    shiftModel: enum           // [follow-the-sun, single-timezone, on-call]
    sfQueues: string[]
  }

  Territory {
    id: string
    name: string
    type: enum                 // [geographic, vertical, named-account, product]
    assignmentLogic: string    // free text — rule description
    parentTerritory: ref       // → Territory
    ownerCount: integer
  }

  BusinessUnit {
    id: string
    name: string
    pnlOwner: string
    primaryCloud: string       // which Salesforce cloud dominates
    childOrgs: ref[]           // → BusinessUnit
    sfOrgStrategy: enum        // [single-org, multi-org, sandbox-per-BU]
  }
}
```

---

### 💻 Technology Layer

Maps the technical landscape before, during, and after CRM implementation.

```
TechnologyLayer {
  CRMInstance {
    id: string
    platform: enum             // [salesforce, dynamics, hubspot, sugarcrm, sap, oracle, custom]
    edition: string            // e.g. "Enterprise", "Professional"
    version: string
    dataVolume: enum           // [small <50k, medium 50-500k, large 500k+]
    customizationDepth: enum   // [light, moderate, heavy]
    goLiveDate: date
    phase: enum                // [legacy, current, target]
  }

  IntegrationEndpoint {
    id: string
    system: string             // ERP name, marketing tool, etc.
    direction: enum            // [inbound, outbound, bidirectional]
    method: enum               // [mulesoft, middleware, native-connector, custom-api, batch]
    dataEntities: string[]     // what objects flow through
    syncFrequency: enum        // [real-time, hourly, daily, manual]
    knownIssues: string[]
  }

  BILayer {
    id: string
    tool: enum                 // [tableau, crm-analytics, power-bi, looker, custom]
    embeddedInSalesforce: boolean
    primaryConsumers: string[] // which teams use it
    refreshFrequency: enum
    keyReports: string[]
  }

  LegacyCRM {
    id: string
    platform: string
    yearsInUse: integer
    dataQualityRating: enum    // [poor, fair, good, excellent]
    migrationApproach: enum    // [big-bang, phased, parallel-run]
    retirementDate: date
    postMigrationRetained: boolean
  }
}
```

---

### ⚙️ Process Layer

Captures the business processes being redesigned or digitized inside Salesforce.

```
ProcessLayer {
  LeadToClose {
    id: string
    stages: string[]           // opportunity stage names
    avgCycleLength: integer    // days
    qualificationModel: string // MEDDIC, BANT, SPICED, custom
    forecastCategories: string[]
    gateRules: string[]        // stage-entry criteria
    CPQRequired: boolean
  }

  CaseManagement {
    id: string
    caseTypes: string[]
    priorityModel: string
    escalationRules: string[]
    SLATargets: object         // { P1: "4h", P2: "8h", ... }
    omniChannelEnabled: boolean
    knowledgeBaseLinked: boolean
    fieldServiceLinked: boolean
  }

  TerritoryAssignment {
    id: string
    model: enum                // [manual, rule-based, Salesforce-TM, hybrid]
    triggerEvent: string       // what fires reassignment
    conflictResolution: string
    reviewCadence: enum        // [quarterly, annual, ad-hoc]
  }

  QuoteToCash {
    id: string
    CPQTool: enum              // [salesforce-cpq, steelbrick, conga, custom, none]
    approvalWorkflow: string[]
    contractManagement: enum   // [salesforce-contracts, docusign, external]
    revenueRecognition: string
    ERPHandoff: string         // how quote syncs to ERP for invoicing
  }

  Forecasting {
    id: string
    model: enum                // [collaborative, overlay, AI-generated, manual]
    rollupMethod: string
    cadence: enum              // [weekly, monthly, quarterly]
    AIEnabled: boolean         // Einstein Forecasting
    accuracyTarget: float      // %
  }
}
```

---

### 📊 Data Layer

Tracks data quality, migration planning, and custom schema decisions.

```
DataLayer {
  DataQualityScore {
    id: string
    entity: string             // Account, Contact, Opportunity, etc.
    completeness: float        // 0.0 – 1.0
    accuracy: float
    duplicateRate: float
    lastAuditDate: date
    remediationPlan: string
  }

  MigrationSource {
    id: string
    sourcePlatform: string
    recordCounts: object       // { Account: 45000, Contact: 180000 }
    transformationRules: string[]
    deduplicationStrategy: string
    pilotMigrationDate: date
    fullCutoverDate: date
  }

  FieldMapping {
    id: string
    sourceField: string
    targetField: string        // Salesforce API name
    transformationType: enum   // [direct, lookup, formula, enriched, dropped]
    validationRule: string
    migrationNotes: string
  }

  CustomObjectInventory {
    id: string
    apiName: string
    purpose: string
    recordCount: integer
    relationships: string[]    // parent/child object names
    externallyReferenced: boolean // does an integration depend on it
    retentionDecision: enum    // [keep, merge, sunset, rebuild]
  }
}
```

---

### 🔗 Relationship Layer

Maps the key human and system relationships that CIG tracks for pattern detection.

```
RelationshipLayer {
  SalesRepToAccount {
    repId: ref                 // → SalesTeam member
    accountId: ref             // → Account
    relationshipType: enum     // [owner, overlay, backup, partner-managed]
    tenureMonths: integer
    lastActivityDate: date
    engagementScore: float
  }

  ServiceAgentToCaseQueue {
    agentId: ref
    queueId: ref
    specializations: string[]
    caseLoadAvg: integer
    resolutionRateAvg: float
    SLAAdherence: float
  }

  PartnerChannel {
    id: string
    partnerName: string
    partnerType: enum          // [reseller, referral, dealer, distributor, ISV]
    portalEnabled: boolean     // Experience Cloud portal
    dealRegistrationModel: string
    tierLevel: string          // Gold, Silver, etc.
    revenueContribution: float // % of total
  }
}
```

---

### 🧠 Intelligence Layer

The layer that makes CIG a learning system, not just a data store.

```
IntelligenceLayer {
  CRMAdoptionMetric {
    id: string
    engagementRef: ref
    measurementDate: date
    loginRateMonthly: float    // % of licensed users logging in
    dataEntryCompleteness: float
    mobileUsageRate: float
    adoptionInterventions: string[]   // what VRP did to improve it
    outcomeDelta: float        // improvement after intervention
  }

  PipelineSignal {
    id: string
    signalType: enum           // [velocity-drop, stage-skip, stale-opportunity, coverage-gap]
    detectedAt: date
    affectedTeam: string
    rootCause: string
    recommendedAction: string
    resolved: boolean
  }

  ForecastAccuracy {
    id: string
    period: string             // Q1-2025, etc.
    predictedRevenue: float
    actualRevenue: float
    accuracyDelta: float       // (actual - predicted) / predicted
    modelVersion: string
    contributingFactors: string[]
  }

  RepProductivity {
    id: string
    repId: ref
    measurementPeriod: string
    activitiesLogged: integer
    opportunitiesWorked: integer
    winRate: float
    avgDealSize: float
    rampTimeIfNew: integer     // days from hire to first close
    sfUsageScore: float
  }
}
```

---

## 📄 Artifact Generation

> CIG for VRP would generate the following artifacts automatically or on-demand.

### Pre-Engagement Artifacts

| Artifact | Description | Powered By |
|---|---|---|
| **Discovery Primer** | Pre-built questions tailored to client's industry, size, and cloud scope, drawing from past similar engagements | ProcessLayer + OrgLayer patterns |
| **Risk Register (Draft)** | Known risks from comparable implementations, pre-populated before first client call | IntelligenceLayer signals across all past projects |
| **Tech Stack Dependency Map** | Expected integrations based on client's ERP, legacy CRM, and industry vertical | TechnologyLayer |
| **Data Migration Complexity Score** | Predictive score based on source platform, record volume, and historical dedup rates | DataLayer |

### Mid-Engagement Artifacts

| Artifact | Description |
|---|---|
| **Custom Object Recommendation Set** | Which custom objects typically appear in this client type — pre-proposed, with rationale |
| **Process Flow Templates** | Lead-to-Close, Case Management, Territory flows pre-drafted from patterns |
| **Field Mapping Workbook** | Pre-seeded with common field mappings for the source CRM platform |
| **Adoption Playbook** | Intervention tactics ranked by effectiveness for this team type and geography |

### Post-Go-Live Artifacts

| Artifact | Description |
|---|---|
| **Forecast Accuracy Report** | 30/60/90 day comparison of predicted vs actual for newly live clients |
| **Pipeline Health Dashboard** | Pipeline signals flagged from IntelligenceLayer, surfaced in managed services reviews |
| **Rep Productivity Benchmark** | How this client's reps compare to VRP's cross-portfolio baseline at 90 days, 6 months, 12 months |
| **Renewal Intelligence Brief** | Pre-compiled insights for QBR or contract renewal: what improved, what's at risk |

---

## 💡 Pitch Angle

### The Compounding Advantage

VRP's 2,000+ projects don't just make them experienced — they make them a **statistical powerhouse**. But right now, the vast majority of that knowledge lives in people's heads and scattered documents. Every engagement starts close to zero instead of starting on the shoulders of everything that came before.

**CIG's core pitch to VRP:** *What if every one of your 500+ consultants had access to the institutional knowledge of all 2,000 projects, structured and queryable in real time?*

The economics are compelling:
- If CIG saves 20 hours of discovery and scoping per engagement, across 150+ engagements/year, that's **3,000 hours recaptured annually**
- If reduced rework and better risk prediction improves gross margin by 3 points, on $100M revenue, that's **$3M/year**
- If faster, more confident delivery improves CSAT from 4.8 to 4.9 (net promoter uplift), at VRP's client retention economics, that compounds further

### The PDO Angle

No generic SI pitch covers this. VRP's PDO practice means CIG would accumulate a **second knowledge graph** — one about building Salesforce products, not just deploying them. AppExchange architecture patterns, ISV-specific failure modes, AppExchange security review gotchas, package versioning complexity. That's a unique dataset that VRP could potentially monetize externally (benchmarks, research) in addition to using internally.

### The Managed Services Angle

Managed services clients create longitudinal data almost no SI has: what happens to adoption, forecast accuracy, and pipeline health 12, 18, 24 months post-go-live? CIG can track this systematically for VRP's managed services portfolio and generate genuinely novel benchmarks — "what does good look like at 18 months?" — that become a competitive selling tool.

### Framing Options

- **Operational:** "Turn 26 years of experience into a system your newest consultant can access on day one."
- **Competitive:** "Your competitors have the same year count. They don't have the structured learning layer."
- **Financial:** "Your margin is in the repeatability. CIG makes everything repeatable."
- **PDO-specific:** "You're the only SI in this conversation with a product-build practice. That knowledge layer is worth something."

---

## 👤 Contacts

| Name | Title | Status | Notes |
|---|---|---|---|
| TBD | — | — | Need intro path via Salesforce AE or event |

> 📌 **Action:** Identify VRP's Chief Delivery Officer, VP of Consulting, or Head of Delivery Excellence. Conference circuit (Dreamforce, WEF Connections, local Salesforce events in London) is the likely intro path.

---

## 📅 Engagement Timeline (Hypothetical)

| Phase | Milestone | Est. Timing |
|---|---|---|
| **Awareness** | First touch — event or warm intro | Month 0 |
| **Discovery** | Exec conversation about delivery challenges | Month 1–2 |
| **Proof of Concept** | CIG demo tailored to VRP's ontology and one live engagement type | Month 3–4 |
| **Pilot** | Single practice (Sales Cloud or PDO) as pilot cohort | Month 5–8 |
| **Expansion** | Roll out to full delivery organization | Month 9–18 |
| **Enterprise Agreement** | Multi-year platform contract | Month 18–24 |

---

## 🔗 Related Nodes

- [[Customer Intelligence Graph]]
- [[CIG Ontology Spec]]
- [[Salesforce SI Landscape]]
- [[PDO Partner Segment]]
- [[Managed Services Intelligence]]
- [[Dreamforce 2026 Targets]]
- [[Salesforce Ecosystem Map]]
- [[Competitive Intel — SI Segment]]
- [[CIG Pitch Deck — SI Version]]

---

## ⚠️ Open Questions

1. **Who owns delivery excellence at VRP?** Is there a formal CoE, a Chief Delivery Officer, or is delivery quality owned distributed across practice leads?

2. **How does VRP currently capture project learnings?** Confluence, SharePoint, Notion, or informal? What's the adoption rate of whatever system they use?

3. **What's their PDO practice revenue share?** Is PDO a strategic bet or a side practice? This affects the weight of the PDO angle in the pitch.

4. **Do they have a data team?** Would CIG be championed by a delivery leader, a data/analytics team, or a CTO equivalent? Finding the right internal champion is non-trivial.

5. **What's their current managed services retention rate?** High retention = rich longitudinal data set. Low retention = different pitch angle (CIG helps them *improve* retention).

6. **Are they growing, flat, or consolidating headcount?** 500–1,000 employees is a wide range. Growth mode vs. efficiency mode changes whether the pitch is "scale faster" or "do more with what you have."

7. **What's their relationship with Salesforce directly?** Very tight partners often have Salesforce-funded resources (AEs, solution engineers, ISV funds) that could facilitate a CIG intro or co-sell.

8. **Multi-org or single-org clients?** VRP's delivery complexity scales significantly with multi-org clients. CIG's value in multi-org scenarios is even higher — worth flagging if confirmed.

9. **Any prior data initiatives?** Have they built internal dashboards, tried delivery analytics, or explored ML-based project risk scoring before? This reveals sophistication level and potential adoption friction.

10. **Geographic delivery model specifics?** Onshore vs. offshore ratio affects how knowledge distribution works. If discovery is London-based but delivery is Eastern Europe-based, CIG's role in bridging that knowledge gap becomes a concrete use case.

---

## 📝 Notes & Activity Log

### 2026-04-24
- Profile created from initial research sweep
- No direct outreach initiated
- Identified as Tier 1 priority prospect in [[Salesforce SI Landscape]] review
- Next step: identify warm intro path via Salesforce ecosystem events or mutual contacts
- PDO angle flagged as unique differentiator — no other SI prospect in current pipeline has this

---

*Profile maintained by [[Koko]]. Last updated automatically on session close.*
