# Ascendix Technologies

#buyer #project #cre #salesforce #crm

> **Salesforce Summit Partner + CRE product company.** They build the intelligence layer for commercial real estate brokerages — CRM customization, AI workflows, and their own AppExchange product (AscendixRE). CIG maps exactly what they build for clients, but at a meta level: the firms, brokers, properties, deals, and relationships their platform tracks.

---

## 🏢 Company Profile

| Field | Detail |
|---|---|
| **Company** | Ascendix Technologies |
| **HQ** | Dallas, TX |
| **Founded** | 2004 (20+ years) |
| **Salesforce Status** | Summit Consulting Partner (highest tier) |
| **CRE Specialization** | 15+ years |
| **Co-Founder / CEO** | Wes Snow |
| **Named Clients** | JLL, Transwestern, Highwoods Properties |
| **Key Result** | Up to 45% improvement in deal conversion rates |

### What They Do

Ascendix Technologies sits at the intersection of CRE brokerage operations and Salesforce technology. Their core value proposition: help commercial real estate teams spend less time managing systems and more time closing deals. They do this through three interlocking offerings:

1. **Consulting** — Salesforce implementation, customization, and optimization for CRE brokerages, capital markets firms, and property owners
2. **Product IP** — AscendixRE CRM (AppExchange) and Ascendix Search, built on top of Salesforce and tailored to CRE data models
3. **Custom Development** — Bespoke CRE applications, integrations, listing portals, and AI-powered workflows

They are not a generic Salesforce SI. Ascendix has built genuine domain expertise in commercial real estate — they understand the difference between a lease abstract and a deal comp, between a capital markets waterfall and a brokerage pipeline. That vertical depth is their moat.

---

### Revenue Model

Ascendix makes money in two ways:

**Services revenue** — Project-based consulting engagements (Salesforce implementations, custom dev, AI deployments, integrations). Likely the majority of revenue. Engagements range from mid-size brokerage rollouts (~tens of thousands) to enterprise implementations at firms like JLL (potentially $500K+).

**Product revenue** — AscendixRE CRM sold on AppExchange as a SaaS subscription layer on top of Salesforce. Recurring revenue from existing CRE customers. Ascendix Search is likely bundled or sold as an add-on.

The product leg creates compounding value: every AscendixRE customer is also a potential upsell into managed services, customization, or AI features. It also validates their CRE expertise to new prospects.

---

### Platform Stack

**Salesforce Clouds Deployed:**
- Sales Cloud — core CRM for broker pipeline and contact management
- Experience Cloud — client-facing portals (listing portals, investor dashboards)
- Marketing Cloud Account Engagement (Pardot) — CRE marketing automation, property campaigns
- Service Cloud — tenant services, internal helpdesk
- Einstein Analytics / CRM Analytics — deal performance dashboards, market analysis
- Agentforce — AI agent workflows (newer capability, cutting edge for CRE)

**Owned Products:**
- **AscendixRE CRM** — AppExchange installed product. Manages properties, leases, listings, deals, and contacts in one unified Salesforce org. Standard CRE data model out of the box.
- **Ascendix Search** — Advanced filtering and record discovery layer. Parcel research, fast filtering across large CRE datasets, map-based search.
- **Custom Listing Portals** — Salesforce Experience Cloud-powered portals for property marketing and tenant/investor outreach.

---

### Key CRE Use Cases Covered

Ascendix's platform footprint spans the full CRE operating cycle:

**Portfolio & Asset Management**
- Property portfolio management across asset types (office, industrial, multifamily, retail, land)
- Lease management and tracking (terms, expirations, rent escalations, options)
- Tenant management and relationship tracking

**Brokerage Operations**
- Deal pipeline tracking — acquisitions, dispositions, leasing
- Listing management — from pitch to execution
- Broker contact and relationship management (landlords, tenants, investors, co-brokers)
- Commission calculation and tracking

**Capital Markets**
- Investor relations workflows
- Capital markets deal structuring and pipeline
- Comparable sales analysis

**Intelligence & Analytics**
- Market analysis and comp tracking
- Einstein Analytics dashboards for deal performance
- AI-powered workflows (Agentforce integration)

---

### Named Clients & Cases

| Client | Type | What Ascendix Likely Did |
|---|---|---|
| **JLL** | Global CRE brokerage (enterprise) | Large-scale Salesforce customization, possibly multi-region rollout of AscendixRE |
| **Transwestern** | Full-service CRE firm (national) | Brokerage CRM, deal pipeline, property management integration |
| **Highwoods Properties** | REIT / Office landlord | Tenant management, lease tracking, possibly investor relations portal |

JLL is a marquee reference — one of the largest CRE firms in the world. Closing JLL signals Ascendix can operate at enterprise scale, not just mid-market.

---

### Competitive Positioning

Ascendix competes with:
- Generic Salesforce SIs (Accenture, Slalom, Deloitte Digital) — outcompeted on CRE domain depth
- CRE-specific CRMs (ClientLook, Rethink CRM, REthink) — outcompeted on Salesforce platform depth and AI capability
- Internal IT teams at large brokerages — Ascendix offers pre-built CRE data models vs build-from-scratch

Their differentiator is the intersection: Salesforce expertise + CRE domain knowledge + owned IP (AscendixRE). Hard to replicate.

---

## 🧠 What CIG Would Look Like For Ascendix

### The Scenario

An Ascendix consultant is onboarding **Meridian Commercial** — a mid-size CRE brokerage with 200 brokers, three regional offices (Dallas, Houston, Atlanta), and a mixed portfolio of office, industrial, and retail properties. Meridian runs on a legacy CRM (Rethink) and spreadsheets. Ascendix is migrating them to AscendixRE on Salesforce.

Before touching a single Salesforce object, the Ascendix consultant needs to understand:
- What does Meridian's property universe look like?
- Who are the brokers, what are their specialties, and how do they overlap?
- Where is the deal pipeline? What stage is what?
- What's their tech stack and what needs to be integrated?
- Who are their competitors and how is Meridian positioned in each submarket?

This is exactly the work the **Customer Intelligence Graph (CIG) Profile Engine** was built to do.

---

### How CIG Maps Meridian for Ascendix

**Step 1 — Org Layer Mapping**

The Profile Engine ingests Meridian's org chart, office locations, and team structures. It identifies:
- 3 Brokerage Offices (Dallas HQ, Houston, Atlanta)
- 12 Teams organized by asset type (Office Leasing, Industrial Sales, Retail Tenant Rep)
- 200 Brokers with specialization tags, years of experience, deal history
- Department-level groupings (Brokerage, Property Management, Capital Markets, Research)

Each entity becomes a node. Relationships between them — who reports to whom, who co-brokers with whom, which teams compete for the same listings — become edges.

**Step 2 — Asset Layer Mapping**

The Profile Engine pulls in Meridian's property data from their legacy system export:
- 450+ Properties across TX and GA, tagged by type (office, industrial, retail), submarket, and ownership status
- 1,200+ active and historical Leases linked to properties and tenants
- 85 active Deals (listings, acquisitions, dispositions) at various pipeline stages
- 320 Listings in various states (active, under contract, completed)
- 800+ Tenants — companies occupying Meridian-managed properties
- 40 active Investors with capital markets relationships

Every asset gets a node with typed attributes. Leases link to Properties (parent), Tenants (occupant), and Brokers (rep). Deals link to Properties, Investors or Buyers, and the Deal Team.

**Step 3 — Process Layer Mapping**

The Profile Engine identifies Meridian's active workflow patterns:
- **Deal Pipeline stages**: Prospect → Qualified → LOI → Under Contract → Closed
- **Lease Lifecycle stages**: Inquiry → Tour → Proposal → Negotiation → Executed → Active → Renewal Risk → Expired
- **Listing Process**: Pitch → Executed Listing Agreement → Active Marketing → Offers → Under Contract → Closed
- **Commission Calculation**: Deal size × commission rate, split by team and co-broker agreements

These process maps become flow nodes — linked to the brokers, properties, and deals they govern.

**Step 4 — Technology Layer Mapping**

The Profile Engine catalogs Meridian's existing tech stack:
- **Current CRM**: Rethink (to be replaced by AscendixRE)
- **Listing Platform**: CoStar (external data source, feeds to listings)
- **Property Database**: internal spreadsheets + Rethink exports
- **Email**: Microsoft 365
- **DocuSign**: for lease and listing agreement execution
- **MRI Software**: property accounting back-end

Integration requirements emerge automatically: Ascendix needs to plan CoStar data sync, DocuSign workflow triggers, and MRI financial data feeds into Salesforce.

**Step 5 — Relationship Layer Mapping**

The Profile Engine maps all external relationships:
- Broker ↔ Tenant: which brokers represent which tenants, history of deals
- Broker ↔ Investor: capital markets relationships, repeat deal history
- Landlord ↔ Tenant: lease agreements, relationship health
- Competitor Brokerage nodes: CBRE, Cushman & Wakefield, Avison Young — mapped by submarket overlap with Meridian's active listings

**Step 6 — Market Intelligence Layer**

The Profile Engine surfaces submarket-level signals:
- Office submarkets in Dallas (Uptown, Preston Center, Las Colinas) with Meridian's footprint vs competitors
- Industrial submarkets in Houston (Greenspoint, Sugar Land) with cap rate signals and vacancy data
- Comparable transaction data linked to closed Meridian deals

---

### What Ascendix Gets Out of CIG

Before the first Salesforce object is created, Ascendix has:

1. A complete entity map of Meridian's business — who, what, where, how
2. Pre-built data migration blueprint (what to import into AscendixRE and in what order)
3. Integration dependency graph (CoStar → Salesforce, DocuSign triggers, MRI accounting bridge)
4. Relationship context that informs custom object design (co-broker splits, investor deal history)
5. Process gap analysis — where Meridian's current workflow breaks vs. where AscendixRE fills the gap
6. Competitive landscape view — which submarkets Meridian should prioritize based on market position

This compresses a 4-6 week discovery phase into days. For a brokerage onboarding at Ascendix's scale, that's a massive efficiency gain — and a defensible differentiator for Ascendix to offer clients.

---

## 🗂️ Full Ontology Schema

### Layer 1 — Org Layer

```
BrokerageOffice
  ├── office_id: UUID
  ├── name: str
  ├── city: str
  ├── region: enum [Southwest, Southeast, Midwest, Northeast, West]
  ├── broker_count: int
  ├── managing_director: → Broker
  └── teams: → [Team]

Team
  ├── team_id: UUID
  ├── name: str
  ├── asset_type_focus: enum [Office, Industrial, Retail, Multifamily, Land, Mixed]
  ├── transaction_type: enum [Leasing, Sales, TenantRep, LandlordRep, CapitalMarkets]
  ├── office: → BrokerageOffice
  ├── team_lead: → Broker
  └── members: → [Broker]

Broker
  ├── broker_id: UUID
  ├── name: str
  ├── title: str
  ├── email: str
  ├── phone: str
  ├── office: → BrokerageOffice
  ├── team: → Team
  ├── specializations: [str]  # e.g. ["Office Leasing", "Tenant Rep", "Investment Sales"]
  ├── license_state: [str]
  ├── years_experience: int
  ├── active_deals: → [Deal]
  ├── active_listings: → [Listing]
  ├── tenant_relationships: → [Tenant]
  ├── investor_relationships: → [Investor]
  └── ytd_volume: float

Department
  ├── department_id: UUID
  ├── name: str  # Brokerage, Property Management, Capital Markets, Research, Admin
  ├── head: → Broker | Person
  └── teams: → [Team]
```

---

### Layer 2 — Technology Layer

```
CRMSystem
  ├── system_id: UUID
  ├── vendor: str  # Salesforce / Rethink / ClientLook / etc.
  ├── product: str  # AscendixRE / Sales Cloud / etc.
  ├── version: str
  ├── deployment_type: enum [Cloud, OnPrem, Hybrid]
  ├── modules_active: [str]
  ├── custom_objects: [str]
  ├── integrations: → [Integration]
  └── data_owner: → Broker | Person

ListingPlatform
  ├── platform_id: UUID
  ├── name: str  # CoStar / LoopNet / Crexi / CREXi / Buildout
  ├── subscription_tier: str
  ├── data_sync: bool
  ├── sync_frequency: str
  └── linked_listings: → [Listing]

PropertyDatabase
  ├── db_id: UUID
  ├── type: enum [Internal, ThirdParty, Mixed]
  ├── source: str  # CoStar data, internal records, etc.
  ├── property_count: int
  └── last_updated: date

Integration
  ├── integration_id: UUID
  ├── source_system: → CRMSystem | ListingPlatform | PropertyDatabase
  ├── target_system: → CRMSystem | ListingPlatform | PropertyDatabase
  ├── type: enum [DataSync, Webhook, API, ETL, Manual]
  ├── frequency: str
  ├── data_objects_synced: [str]
  └── status: enum [Active, Planned, Broken, Deprecated]
```

---

### Layer 3 — Asset Layer (CRE-Specific)

```
Property
  ├── property_id: UUID
  ├── name: str
  ├── address: str
  ├── city: str
  ├── state: str
  ├── zip: str
  ├── submarket: → Submarket
  ├── asset_type: enum [Office, Industrial, Retail, Multifamily, Land, MixedUse, Hotel]
  ├── class: enum [A, B, C]
  ├── total_sqft: float
  ├── available_sqft: float
  ├── year_built: int
  ├── year_renovated: int
  ├── ownership: → Investor | Company
  ├── property_manager: → Broker | Person
  ├── active_leases: → [Lease]
  ├── active_listings: → [Listing]
  ├── deals: → [Deal]
  └── parcel_id: str  # for Ascendix Search parcel lookup

Lease
  ├── lease_id: UUID
  ├── property: → Property
  ├── tenant: → Tenant
  ├── landlord: → Investor | Company
  ├── broker_landlord_rep: → Broker
  ├── broker_tenant_rep: → Broker
  ├── lease_type: enum [DirectLease, Sublease, GroundLease, NNN, Modified Gross, FullService]
  ├── suite: str
  ├── sqft_leased: float
  ├── lease_start: date
  ├── lease_end: date
  ├── base_rent_psf: float
  ├── rent_escalation: str
  ├── free_rent_months: int
  ├── tenant_improvement_allowance: float
  ├── renewal_options: str
  ├── renewal_risk_flag: bool
  ├── stage: enum [Active, Renewal, Expired, Terminated]
  └── commission_total: float

Deal
  ├── deal_id: UUID
  ├── deal_name: str
  ├── deal_type: enum [Leasing, Acquisition, Disposition, CapitalMarkets, Refinance]
  ├── property: → Property
  ├── deal_team: → [Broker]
  ├── lead_broker: → Broker
  ├── counterparty: → Tenant | Investor | Company
  ├── total_value: float
  ├── sqft_or_units: float
  ├── stage: enum [Prospect, Qualified, LOI, UnderContract, DueDiligence, Closed, Dead]
  ├── probability: float
  ├── expected_close: date
  ├── actual_close: date
  ├── commission_rate: float
  ├── commission_total: float
  ├── co_broker: → Broker | BrokerageOffice
  ├── co_broker_split: float
  └── notes: str

Listing
  ├── listing_id: UUID
  ├── property: → Property
  ├── listing_type: enum [ForLease, ForSale, SubleaseAvailable]
  ├── listing_broker: → Broker
  ├── co_listing_broker: → Broker
  ├── available_sqft: float
  ├── asking_rate: float  # PSF for lease, total for sale
  ├── listing_date: date
  ├── expiration_date: date
  ├── status: enum [Active, UnderContract, Expired, Withdrawn, Closed]
  ├── platforms: → [ListingPlatform]
  └── marketing_materials: [str]  # URLs or file refs

Tenant
  ├── tenant_id: UUID
  ├── company_name: str
  ├── industry: str
  ├── size_employees: int
  ├── creditworthiness: enum [Excellent, Good, Fair, Poor, Unknown]
  ├── current_leases: → [Lease]
  ├── historical_leases: → [Lease]
  ├── primary_contact: → Person
  ├── broker_relationships: → [Broker]
  └── expansion_risk: bool  # flag if tenant known to be growing/shrinking

Investor
  ├── investor_id: UUID
  ├── name: str
  ├── type: enum [REIT, PrivateEquity, FamilyOffice, Institutional, Individual, JV]
  ├── aum_estimate: float
  ├── target_asset_types: [str]
  ├── target_markets: [str]
  ├── active_deals: → [Deal]
  ├── owned_properties: → [Property]
  ├── broker_relationships: → [Broker]
  └── return_requirements: str  # cap rate, IRR targets
```

---

### Layer 4 — Process Layer

```
DealPipeline
  ├── pipeline_id: UUID
  ├── name: str
  ├── office: → BrokerageOffice
  ├── team: → Team
  ├── stages: [DealStage]
  ├── deals: → [Deal]
  ├── total_pipeline_value: float
  ├── weighted_pipeline: float  # probability-adjusted
  └── reporting_period: str

DealStage
  ├── stage_name: str  # Prospect → Qualified → LOI → Under Contract → Closed
  ├── stage_order: int
  ├── avg_days_in_stage: float
  ├── conversion_rate: float
  └── deals: → [Deal]

LeaseLifecycle
  ├── lifecycle_id: UUID
  ├── lease: → Lease
  ├── current_stage: enum [Inquiry, Tour, Proposal, Negotiation, Executed, Active, RenewalRisk, Expired]
  ├── stage_history: [LeaseStageEvent]
  ├── renewal_probability: float
  └── days_to_expiry: int

LeaseStageEvent
  ├── stage: str
  ├── date: date
  ├── actor: → Broker | Person
  └── notes: str

ListingProcess
  ├── process_id: UUID
  ├── listing: → Listing
  ├── current_stage: enum [Pitch, ExecutedAgreement, ActiveMarketing, OffersReceived, UnderContract, Closed]
  ├── pitch_date: date
  ├── agreement_date: date
  ├── days_on_market: int
  └── offer_count: int

CommissionCalculation
  ├── calc_id: UUID
  ├── deal: → Deal
  ├── gross_commission: float
  ├── firm_split: float
  ├── broker_split: float
  ├── co_broker_amount: float
  ├── referral_fee: float
  ├── net_to_broker: float
  └── payment_schedule: [CommissionPayment]

CommissionPayment
  ├── payment_date: date
  ├── amount: float
  └── milestone: str  # e.g. "Lease execution", "Occupancy"
```

---

### Layer 5 — Relationship Layer

```
BrokerTenantRelationship
  ├── broker: → Broker
  ├── tenant: → Tenant
  ├── relationship_type: enum [ActiveRep, HistoricalRep, Prospect, Referral]
  ├── deals_closed: int
  ├── total_sqft_placed: float
  ├── relationship_strength: enum [Strong, Moderate, Weak, Cold]
  └── last_interaction: date

BrokerInvestorRelationship
  ├── broker: → Broker
  ├── investor: → Investor
  ├── deals_closed: int
  ├── total_deal_volume: float
  ├── preferred_asset_types: [str]
  └── relationship_strength: enum [Strong, Moderate, Weak, Cold]

LandlordTenantRelationship
  ├── landlord: → Investor | Company
  ├── tenant: → Tenant
  ├── property: → Property
  ├── current_lease: → Lease
  ├── lease_health: enum [Healthy, AtRisk, Distressed]
  └── renewal_probability: float

CompetitorBrokerage
  ├── competitor_id: UUID
  ├── name: str  # CBRE, Cushman & Wakefield, Avison Young, Colliers, etc.
  ├── office_locations: [str]
  ├── active_submission_submarkets: → [Submarket]
  ├── known_listing_count: int
  ├── key_brokers: [str]
  └── competitive_overlap_score: float  # overlap with subject brokerage's submarkets
```

---

### Layer 6 — Market Intelligence Layer

```
Submarket
  ├── submarket_id: UUID
  ├── name: str  # e.g. "Dallas Uptown", "Houston Greenspoint"
  ├── metro: str
  ├── asset_types: [str]
  ├── total_inventory_sqft: float
  ├── vacancy_rate: float
  ├── avg_asking_rent_psf: float
  ├── net_absorption_ytd: float
  ├── properties: → [Property]
  └── competitors_active: → [CompetitorBrokerage]

MarketComparable
  ├── comp_id: UUID
  ├── comp_type: enum [LeasComp, SaleComp]
  ├── property: → Property
  ├── submarket: → Submarket
  ├── transaction_date: date
  ├── sqft: float
  ├── rate_or_price: float
  ├── tenant_or_buyer: str
  ├── landlord_or_seller: str
  ├── source: str  # CoStar, internal, broker-verified
  └── verified: bool

CapRateSignal
  ├── signal_id: UUID
  ├── submarket: → Submarket
  ├── asset_type: str
  ├── cap_rate: float
  ├── trend: enum [Compressing, Stable, Expanding]
  ├── date: date
  └── source: str

VacancySignal
  ├── signal_id: UUID
  ├── submarket: → Submarket
  ├── asset_type: str
  ├── vacancy_rate: float
  ├── trend: enum [Improving, Stable, Deteriorating]
  ├── date: date
  └── source: str
```

---

## 📦 Artifact Generation

When CIG runs on a CRE brokerage client for Ascendix, it generates these outputs:

### 1. Property Portfolio Analysis
- Full inventory map: all properties by asset type, submarket, class, and availability
- Vacancy dashboard: available sqft by submarket with trend indicators
- Lease expiration calendar: properties by lease rollover risk (30/60/90/180 days)
- Geographic heatmap: property concentration by zip code or submarket

### 2. Deal Pipeline Visualization
- Kanban-style pipeline: deals by stage, value, and expected close date
- Weighted pipeline value by team and office
- Conversion rate analysis: stage-to-stage conversion vs. industry benchmarks
- Stalled deal flagging: deals that haven't moved in 30+ days

### 3. Lease Renewal Risk Map
- All active leases sorted by expiration date
- Renewal probability scores (based on tenant credit, market conditions, relationship strength)
- Early warning alerts: leases expiring in <180 days with no renewal conversation logged
- Revenue impact model: projected income at risk from non-renewals

### 4. Broker Coverage Gap Analysis
- Submarket coverage map: which brokers cover which submarkets
- Coverage gaps: submarkets with active competitor listings but no firm presence
- Relationship overlap: brokers sharing tenant or investor relationships (coordination opportunity)
- Productivity ranking: deal volume, listings executed, pipeline value by broker

### 5. Tenant Intelligence Report
- Tenant roster by property: who occupies what, lease terms, contact info
- Expansion/contraction signals: tenants growing or shrinking (cross-reference with news/industry data)
- Credit risk flags: tenants with known financial stress
- Tenant relationship network: which brokers know which tenants and how well

### 6. Investor Relationship Map
- Capital markets deal history: investor → property → deal flow
- Investor appetite profile: asset type preferences, deal size thresholds, return requirements
- Relationship warmth: recency and frequency of broker-investor interactions
- Pipeline-matched opportunities: active deals that match investor criteria

### 7. Competitive Landscape Report
- Competitor presence by submarket: CBRE, Cushman, Avison Young listing density
- Market share estimate: subject firm's listings vs. total submarket inventory
- Competitive overlap score: where the firm is head-to-head vs. where they have blue ocean
- Key broker intel: competitor brokers active in the firm's core submarkets

### 8. Tech Stack Integration Map
- Visual diagram of all systems connected to Salesforce/AscendixRE
- Integration health status: active, broken, or missing connections
- Data flow report: what data moves where, how often, and what gaps exist
- Migration readiness score: how complete the data is for Salesforce cutover

---

## 🎯 Pitch Angle

### Why CIG Is a Natural Fit for Ascendix

Ascendix is a **product company that understands IP value**. They built AscendixRE because they recognized that generic Salesforce wasn't enough — CRE needed its own data model, its own objects, its own workflows. That's exactly the CIG thesis: generic knowledge graphs aren't enough for CRE, you need a domain-specific ontology.

**The pitch is peer-to-peer, not vendor-to-customer:**

> "You built AscendixRE because you knew the CRE data model had to be owned, not borrowed. We built CIG for the same reason — the intelligence layer for CRE clients shouldn't be generic. It should speak the language of deals, leases, and submarkets natively. Together, we can offer Ascendix clients a full-stack intelligence capability they can't get anywhere else."

**Three concrete angles:**

1. **Accelerate their discovery phase** — Ascendix consultants spend weeks on client discovery before touching Salesforce. CIG compresses that to days. That's margin, velocity, and client satisfaction.

2. **Differentiate AscendixRE** — Embed CIG as an intelligence layer inside AscendixRE. Clients get a live, evolving knowledge graph of their brokerage — relationships, market position, renewal risk — not just a CRM.

3. **New revenue stream** — Ascendix can resell CIG as a premium analytics add-on to their existing client base. JLL, Transwestern, Highwoods are already paying customers. CIG is an upsell, not a new sale.

**The IP angle specifically:** Ascendix understands what it means to build a defensible product layer. When they see CIG's ontology — six layers, CRE-specific, typed relationships — they'll recognize it as genuine IP, not a dashboard wrapper.

---

## 👤 Contact

| Field | Detail |
|---|---|
| **Name** | Wes Snow |
| **Title** | Co-Founder / CEO |
| **Company** | Ascendix Technologies |
| **Location** | Dallas, TX |
| **LinkedIn** | Search: "Wes Snow Ascendix" |
| **Approach** | Peer founder conversation — product IP angle, not vendor pitch |
| **Warm Path** | Check for mutual connections via JLL or Transwestern network |

**Suggested first message angle:**
Reference AscendixRE as a signal of product thinking, then bridge to CIG as complementary IP — "you built the CRE data model for Salesforce; we built the CRE intelligence graph that lives alongside it."

---

## 📊 Priority & Sizing

| Field | Detail |
|---|---|
| **Priority** | ⭐⭐⭐⭐ |
| **Status** | 🟡 Qualified — High fit, not yet contacted |
| **Estimated Deal Size** | $2M – $4M |
| **Deal Type** | Partnership + embedded licensing (CIG inside AscendixRE) + services co-sell |
| **Timeline** | Medium-term (6-12 months to close) |

**Why $2-4M:**
- AscendixRE has an existing installed base — embedding CIG creates a per-seat or per-client licensing stream
- Ascendix's services engagements run $50K–$500K+ each — CIG as a discovery accelerator adds margin to every client
- JLL alone could justify a pilot at significant scale
- Partnership framing (co-sell, white-label, embedded) creates larger TAM than a single client sale

---

## ⚠️ Open Questions

1. **AscendixRE architecture** — Is AscendixRE a managed package or unmanaged? How extensible is its data model for CIG integration?
2. **Agentforce maturity** — How far along is Ascendix's Agentforce practice? CIG could be the knowledge layer that grounds Agentforce agents in real CRE data.
3. **Partner appetite** — Are they actively looking for ISV/technology partners, or focused on organic product expansion?
4. **Client data access** — In a CIG integration, would Ascendix clients share data through AscendixRE APIs, or would CIG operate on exports?
5. **Wes Snow's product roadmap** — What is AscendixRE's 2025-2026 product strategy? Market intelligence? AI features? Knowing the roadmap clarifies where CIG fits vs. potentially conflicts.
6. **Revenue split model** — If Ascendix resells CIG to clients, what's the right rev-share structure given their Summit Partner pricing power?
7. **JLL relationship** — Is JLL on AscendixRE or a custom Salesforce build? Their org would be the ideal CIG pilot.
8. **Competitive CRE graph players** — Is anyone else pitching Ascendix a knowledge graph or market intelligence layer?

---

## 🔗 Related

- [[Customer Intelligence Graph]]
- [[CRE Buyer Map]]
- [[JLL]]
- [[Transwestern]]
- [[Salesforce CRE Ecosystem]]
- [[AscendixRE CRM]]
- [[Commercial Real Estate Ontology]]
- [[Wes Snow]]

---

*Profile created: 2026-04-24*
*Source: Pre-gathered research — Ascendix Technologies website, AppExchange listing, client references*
*Next action: Research Wes Snow's LinkedIn, identify warm intro path, draft outreach*
