import { useState, useEffect } from "react";

function TitleBar({ title }) {
  return (
    <figcaption className="diagram-frame__titlebar">
      <span className="diagram-frame__title">{title}</span>
      <button className="diagram-frame__btn" data-diagram-action="open" aria-label="Open fullscreen">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </button>
    </figcaption>
  );
}

function ChatBubble({ from, text, delay, visible, variant }) {
  const isUser = from === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
        isUser
          ? "bg-blue-500/20 text-blue-200 border border-blue-400/20"
          : variant === "bad"
            ? "bg-red-500/10 text-bone-200 border border-red-400/15"
            : "bg-emerald-500/10 text-bone-200 border border-emerald-400/15"
      }`}>
        <div className={`text-[10px] uppercase tracking-wider mb-1 font-semibold ${
          isUser ? "text-blue-400" : variant === "bad" ? "text-red-400/70" : "text-emerald-400/70"
        }`}>
          {from === "user" ? "You" : "AI"}
        </div>
        {text}
      </div>
    </div>
  );
}

function FailureTag({ label, delay, visible }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-red-500/10 text-red-400 border border-red-400/15 transition-all duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6Z" opacity=".6" /></svg>
      {label}
    </span>
  );
}

function SuccessTag({ label, delay, visible }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-400/15 transition-all duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="3" /></svg>
      {label}
    </span>
  );
}

export default function BeforeAfter() {
  const [mode, setMode] = useState("before");
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(false);
    const t = setTimeout(() => setEnter(true), 80);
    return () => clearTimeout(t);
  }, [mode]);

  const beforeChat = [
    { from: "user", text: "I pasted 3 interviews, a Mixpanel export, a competitive analysis, and screenshots. Why did our trial-to-paid conversion drop 40% after the redesign?" },
    { from: "ai", text: "Based on the materials provided, here are 5 possible reasons for the conversion drop: 1) UI confusion, 2) Feature discoverability, 3) Pricing perception, 4) Onboarding friction, 5) Competitive pressure...", variant: "bad" },
    { from: "user", text: "Can you go deeper on #2? One user specifically mentioned Stripe integration being hard to find." },
    { from: "ai", text: "You're right — the Stripe integration issue is significant. I recommend moving the Integrations panel to the main sidebar and adding a tooltip for new users...", variant: "bad" },
    { from: "user", text: "Wait, but we also changed our ad campaigns around the same time. Could it be an audience issue instead?" },
    { from: "ai", text: "That's an excellent point! The audience shift could indeed be the primary driver. I'd suggest segmenting your trial cohorts by acquisition channel to isolate the variables...", variant: "bad" },
  ];

  const beforeFailures = [
    "Contamination — treats speculative Slack thread same as verified data",
    "Frame lock — adopted your first framing, then pivoted without justification",
    "No memory — tomorrow's session starts from zero",
    "No governance — can't distinguish human evidence from AI suggestion",
    "Shallow — fluent recombination, not real analysis",
  ];

  const afterSteps = [
    { from: "system", text: "Session start: Agent reads meta/project-brief.md → context/facts.md → context/decisions.md → 01-frames/active-frame/problem.md" },
    { from: "user", text: "Run iteration-02: audience cohort analysis. Use Frame 02 (wrong audience hypothesis) and verified facts from context. Segment trial cohorts by acquisition channel and compare activation rates." },
    { from: "ai", text: "Iteration 02 generated. Key finding: organic trial users activate at 34% vs. paid social at 11%. However, even among organic-only users post-redesign, conversion dropped from 12.1% to 9.8% — suggesting both audience AND UX contribute. Wrote analysis to iterations/iteration-02/analysis.md. Updated context/facts.md with cohort data. Flagged for review.", variant: "good" },
    { from: "user", text: "Good. The 9.8% vs 12.1% for organic users confirms UX is a factor independent of audience. Log this decision: both frames are validated. Update the active frame to a combined Frame 03." },
    { from: "ai", text: "Done. Created frame-03-combined/ with updated problem statement reflecting dual causation. Updated context/decisions.md with today's decision and rationale. Updated meta/agent-notes.md: 'Frame 03 active — address UX fix (approved A/B) AND audience strategy in parallel.'", variant: "good" },
  ];

  const afterSuccesses = [
    "Oriented — agent read prior decisions before starting",
    "Frame-aware — explicitly solving for a stated hypothesis",
    "Accumulating — iteration-02 builds on iteration-01 findings",
    "Governed — facts verified, decisions logged, updates traceable",
    "Persistent — meta folder carries context across sessions",
  ];

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="Before / After — Same Problem, Different Structure" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setMode("before")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                mode === "before"
                  ? "bg-red-500/15 text-red-400 border border-red-400/30"
                  : "text-bone-300 border border-bone-300/10 hover:text-bone-100"
              }`}
            >
              Without Structure
            </button>
            <button
              onClick={() => setMode("after")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                mode === "after"
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-400/30"
                  : "text-bone-300 border border-bone-300/10 hover:text-bone-100"
              }`}
            >
              With Workspace
            </button>
          </div>

          {/* Chat area */}
          <div className="rounded-xl border border-bone-300/10 bg-ink-150 p-5 mb-5">
            <div className="flex flex-col gap-3">
              {mode === "before"
                ? beforeChat.map((msg, i) => (
                    <ChatBubble key={i} from={msg.from} text={msg.text} delay={i * 120} visible={enter} variant={msg.variant} />
                  ))
                : afterSteps.map((msg, i) => (
                    <ChatBubble
                      key={i}
                      from={msg.from === "system" ? "ai" : msg.from}
                      text={msg.from === "system" ? <span className="italic text-bone-300">{msg.text}</span> : msg.text}
                      delay={i * 120}
                      visible={enter}
                      variant={msg.variant || (msg.from === "system" ? "good" : undefined)}
                    />
                  ))
              }
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {mode === "before"
              ? beforeFailures.map((f, i) => (
                  <FailureTag key={f} label={f} delay={600 + i * 80} visible={enter} />
                ))
              : afterSuccesses.map((s, i) => (
                  <SuccessTag key={s} label={s} delay={600 + i * 80} visible={enter} />
                ))
            }
          </div>
        </div>
      </div>
    </figure>
  );
}
