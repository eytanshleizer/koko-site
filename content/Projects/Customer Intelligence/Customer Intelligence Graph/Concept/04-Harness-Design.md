# 04 — Harness Design: The Agent Harness

Agents need a body. In the physical world, a robot needs a chassis, motors, and sensors. In the digital world, an AI agent needs a harness: an execution environment that provides tools, safety rails, context management, and observability. Without a harness, an agent is a brain in a jar—intelligent but powerless and dangerous.

This document defines the harness architecture for an AI-native consultancy, drawing heavily from the OpenClaw execution model (ACP, sub-agents, tool policies) as a proven reference implementation.

## What Is an Agent Harness?

An agent harness is the runtime environment that encapsulates an AI agent and mediates all its interactions with the outside world. It is not the agent itself. It is the container, the sandbox, the operating system, and the accountability layer.

In the context of an AI-native consultancy, the harness serves six functions:

1. **Execution isolation:** Each agent runs in a defined scope with limited permissions.
2. **Tool access:** The harness provides agents with callable tools (APIs, code execution, file system, databases) and controls which tools each agent can use.
3. **Safety rails:** The harness enforces policies that prevent agents from taking harmful, expensive, or unauthorized actions.
4. **Context management:** The harness maintains the agent's working memory, conversation history, and retrieved knowledge.
5. **Observability:** The harness logs every action, decision, and tool call for debugging, auditing, and learning.
6. **Human interface:** The harness provides the channels through which humans interact with agents: approval gates, messaging, and dashboards.

## Harness Requirements

### Requirement 1: Sandboxing

Every agent must run in a sandboxed environment with clearly defined boundaries.

| Sandbox Layer | Control | Example |
|--------------|---------|---------|
| **Network** | Egress filtering | The Discovery Agent can reach LinkedIn and Crunchbase APIs. It cannot reach the production database. |
| **File system** | Scoped access | The Demo Agent can read from `/templates/demos/` and write to `/sandboxes/deal-1234/`. It cannot read `/proposals/other-client/`. |
| **Compute** | Resource limits | The Integration Agent is capped at 4 CPU cores and 8GB RAM. It times out after 30 minutes. |
| **Identity** | Scoped credentials | The Proposal Agent authenticates to the CPQ system with a read-only API key. It cannot create invoices. |

Sandboxes must be per-agent-instance, not just per-agent-type. If two Discovery Agents are running for two different deals simultaneously, they must be fully isolated. This prevents data leakage between clients and deals.

### Requirement 2: Tool Calling & MCP Integration

Agents need tools to act. The harness must support a standardized tool-calling protocol. The Model Context Protocol (MCP) is the emerging standard and should be the default.

Each agent has a tool manifest—a list of tools it is permitted to call, with parameter schemas and rate limits.

**Example: Discovery Agent Tool Manifest**

| Tool | Purpose | Rate Limit | Approval Required |
|------|---------|------------|-------------------|
| `cig_query_company` | Query CIG for company profiles | 100/min | No |
| `linkedin_lookup_person` | Fetch LinkedIn profile | 50/min | No |
| `builtwith_scan` | Analyze tech stack | 20/min | No |
| `web_search` | General web search | 100/min | No |
| `crm_create_note` | Write discovery notes to CRM | 20/min | No |
| `email_send_external` | Send email to prospect | 5/min | **Yes** |

Tools that mutate external state or communicate outside the firm (e.g., sending emails, creating calendar invites, provisioning cloud resources) should require human approval by default. Read-only tools can operate autonomously.

The harness must also handle tool failures gracefully:
- **Retry:** Exponential backoff for transient API failures.
- **Escalation:** If a tool fails permanently, the agent is informed and can escalate to a human.
- **Circuit breaker:** If a tool fails repeatedly, the harness disables it temporarily to prevent cascading failures.

### Requirement 3: Observability

The harness must provide three layers of observability:

**Execution logs:** Every agent invocation, every thought, every tool call, every output. These are structured logs (JSON) stored in a queryable system.

**Decision traces:** For every agent decision, the harness captures:
- What was the input (prompt + retrieved context)?
- What was the reasoning chain?
- What tools were called, with what parameters, and what were the results?
- What was the final output?
- What was the confidence score?

**Performance metrics:**
- Agent latency (time from invocation to output)
- Tool call success/failure rates
- Token consumption and cost per agent run
- Human override rate (how often humans reject agent outputs)
- Escalation rate

These logs are not just for debugging. They are the primary input to the Learning Loop (see [03-Agent-Loops.md](03-Agent-Loops.md)) and the Feedback Loop.

### Requirement 4: Context Management

Agents have limited context windows. The harness must manage what goes into the window intelligently.

**Strategies:**
- **Retrieval-augmented generation (RAG):** The harness queries CIG (see [02-Data-Model.md](02-Data-Model.md)) for relevant context and injects it into the prompt.
- **Conversation summarization:** For long-running agent sessions, the harness maintains a rolling summary of earlier parts of the conversation.
- **Working memory:** The harness maintains a key-value store of facts the agent has established (e.g., "Prospect's current data warehouse: Snowflake"), reducing the need to repeat information in every prompt.
- **Multi-turn state:** The harness tracks the state of multi-step workflows (e.g., "Step 3 of 5 in architecture generation").

### Requirement 5: Human-in-the-Loop Interface

The harness must provide clear channels for human interaction:

**Approval gates:** When an agent attempts an action that requires approval, the harness pauses execution and notifies the relevant human via their preferred channel (Slack, email, in-app notification). The human can approve, reject, or modify the action.

**Override:** At any point, a human can halt an agent, correct its course, or take over manually.

**Messaging:** Humans can send messages to agents (e.g., "Focus on their compliance requirements; the CEO mentioned SOC 2 last quarter") and agents can send messages to humans (e.g., "I need clarification: when they say 'real-time,' do they mean sub-second or sub-minute?").

**Dashboard:** A real-time view of all active agents, their status, their recent actions, and any pending approvals.

## Why OpenClaw-Style Harnesses Are Relevant

OpenClaw's architecture—specifically the Agent Communication Protocol (ACP), sub-agents, and tool policies—provides a proven model for building these harnesses.

### ACP (Agent Communication Protocol)

ACP defines how agents communicate with each other and with the harness. In an AI-native consultancy, this enables:
- **Sub-agent spawning:** A Discovery Agent can spawn a "Financial Analysis Sub-Agent" to deep-dive into a prospect's 10-K, then consume its output.
- **Cross-agent messaging:** The Architecture Agent can send a message to the Demo Agent: "I've selected Pattern B; please build a demo using the Fivetran integration template."
- **Structured handoffs:** Each agent's output is structured (JSON schema) so the next agent can parse it reliably.

### Sub-Agents

Complex tasks should be decomposed into sub-agents rather than handled by a single monolithic prompt. This improves reliability, debuggability, and reuse.

Example: The Architecture Agent's task of generating an integration plan is delegated to an "Integration Planning Sub-Agent" that specializes in API compatibility analysis. The sub-agent runs in its own harness with tools scoped to API documentation and integration templates.

### Tool Policies

OpenClaw's tool policy system—where each agent has an explicit allowlist of tools with parameter constraints—directly maps to the sandboxing and safety requirements above. It prevents agents from accessing tools they should not use and from passing dangerous parameters.

## Multi-Model Orchestration

Different agent tasks require different models. The harness must support multi-model orchestration: routing each task to the most appropriate model based on capability, cost, and latency requirements.

| Task Type | Recommended Model Class | Rationale |
|-----------|------------------------|-----------|
| **Discovery & research** | Large reasoning model (e.g., GPT-4o, Claude 3.5 Sonnet, Kimi K2) | Requires broad knowledge, reasoning over unstructured data, synthesis |
| **Architecture generation** | Large reasoning model + code-capable model | Requires technical depth, ability to generate structured diagrams and configuration |
| **Code generation (integrations, demos)** | Code-optimized model (e.g., Claude 3.5 Sonnet, o3-mini, Codex) | Requires precise, executable output |
| **Document drafting (proposals, SOWs)** | Large language model with long context | Requires coherent, well-structured long-form text |
| **Sentiment analysis, classification** | Small/fast model (e.g., GPT-4o-mini, Claude Haiku) | Low latency, low cost, sufficient for narrow tasks |
| **Retrieval & embedding** | Embedding model (e.g., text-embedding-3-large, voyage-3) | Optimized for semantic search |
| **Image generation (diagrams, mockups)** | Multimodal model (e.g., DALL-E 3, Midjourney, GPT-4o) | For generating visual assets |

The harness should support model fallback: if the primary model is unavailable or rate-limited, the task is routed to a secondary model with acceptable quality degradation.

## Security and Compliance Considerations

### Data Security
- **Encryption:** All data at rest (AES-256) and in transit (TLS 1.3).
- **Secret management:** API keys, database credentials, and other secrets are stored in a dedicated secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager). Agents never receive plaintext secrets; the harness injects them at runtime.
- **Data residency:** For clients with geographic constraints, the harness must support region-specific deployment.

### Access Control
- **Authentication:** All human users and agent-to-agent communication must be authenticated.
- **Authorization:** Role-based access control (RBAC) and attribute-based access control (ABAC). A junior SE's agents should not access pricing data from deals they are not assigned to.
- **Audit logging:** Every data access, every tool call, every human override is logged immutably.

### Compliance
- **GDPR/CCPA:** The harness must support data subject access requests, right to deletion, and data portability.
- **SOC 2 / ISO 27001:** The harness must generate evidence for security audits.
- **Industry-specific:** For healthcare clients, HIPAA Business Associate Agreements. For financial services, FINRA/SEC requirements.

### AI-Specific Risks
- **Hallucination containment:** The harness should require evidence chains for factual claims. If the Discovery Agent states "Prospect X is planning a cloud migration," it must cite the source (e.g., earnings call transcript, job posting).
- **Prompt injection:** The harness must sanitize inputs to prevent prompt injection attacks from malicious external data.
- **Adversarial tool use:** The harness must prevent agents from using tools in ways that violate policy (e.g., scraping personal data, sending unsolicited emails).

## Harness Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     HARNESS MANAGER                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Agent     │  │   Agent     │  │        Sub-Agent        │  │
│  │  Registry   │  │  Scheduler  │  │       Orchestrator      │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  AGENT RUNTIME│   │  AGENT RUNTIME  │   │  AGENT RUNTIME  │
│  (Discovery)  │   │  (Architecture) │   │   (Integration) │
│               │   │                 │   │                 │
│ ┌───────────┐ │   │ ┌───────────┐   │   │ ┌───────────┐   │
│ │  Sandbox  │ │   │ │  Sandbox  │   │   │ │  Sandbox  │   │
│ │  Network  │ │   │ │  Network  │   │   │ │  Network  │   │
│ │  File Sys │ │   │ │  File Sys │   │   │ │  File Sys │   │
│ │  Compute  │ │   │ │  Compute  │   │   │ │  Compute  │   │
│ └───────────┘ │   │ └───────────┘   │   │ └───────────┘   │
│               │   │                 │   │                 │
│ ┌───────────┐ │   │ ┌───────────┐   │   │ ┌───────────┐   │
│ │   Tool    │ │   │ │   Tool    │   │   │ │   Tool    │   │
│ │  Manifest │ │   │ │  Manifest │   │   │ │  Manifest │   │
│ └───────────┘ │   │ └───────────┘   │   │ └───────────┘   │
│               │   │                 │   │                 │
│ ┌───────────┐ │   │ ┌───────────┐   │   │ ┌───────────┐   │
│ │   MCP     │ │   │ │   MCP     │   │   │ │   MCP     │   │
│ │  Client   │ │   │ │  Client   │   │   │ │  Client   │   │
│ └───────────┘ │   │ └───────────┘   │   │ └───────────┘   │
└───────────────┘   └─────────────────┘   └─────────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌─────────────────┐   ┌─────────────────┐
│   TOOL GATE   │   │   OBSERVABILITY │   │   HUMAN UI      │
│  (Policy Enf) │   │   (Logs/Traces) │   │  (Approval/Dash)│
└───────────────┘   └─────────────────┘   └─────────────────┘
```

## Summary

The harness is the critical infrastructure layer that makes agent autonomy safe, observable, and controllable. Without it, agents are dangerous wildcards. With it, they become reliable, accountable, and scalable operators. The harness design must prioritize security, observability, and human oversight—not as afterthoughts, but as first-class requirements.

For Eytan's CIG project, the harness is both a technical requirement and a product differentiator. A consulting firm evaluating CIG is not just buying a knowledge graph. It is buying the confidence that AI agents can operate safely and effectively within its business. The harness is the proof of that confidence.
