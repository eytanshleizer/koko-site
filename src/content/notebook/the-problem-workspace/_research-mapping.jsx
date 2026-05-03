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

const traditions = [
  {
    key: "wicked",
    name: "Wicked Problems",
    author: "Rittel & Webber, 1973",
    insight: "The problem cannot be definitively stated. Every framing excludes relevant perspectives. Solutions change the problem.",
    layer: "Frame",
    layerColor: "text-blue-400",
    connection: "The Frame layer holds multiple problem definitions simultaneously because premature convergence on one framing is how teams waste months solving the wrong problem.",
    color: "border-blue-400/25",
    bg: "bg-blue-400/5",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    key: "psm",
    name: "Problem Structuring Methods",
    author: "Rosenhead & Mingers, 2001",
    insight: "Structuring is work, not overhead. Separate what you know from what you assume before attempting solutions.",
    layer: "Raw → Frame → Context",
    layerColor: "text-ember-300",
    connection: "The three-stage progression from unprocessed input (Raw) to problem definition (Frame) to curated knowledge (Context) is a direct application of PSM principles.",
    color: "border-ember-300/25",
    bg: "bg-ember-300/5",
    iconPath: "M4 6h16M4 12h16M4 18h16",
  },
  {
    key: "ooda",
    name: "OODA Loop",
    author: "Col. John Boyd, 1976",
    insight: "Orientation — synthesizing observations through mental models — is the most important and most neglected phase of decision-making.",
    layer: "Context",
    layerColor: "text-ember-300",
    connection: "The Context layer IS orientation. It is where raw observations are processed through the Frame, reconciled with decisions, and distilled into actionable understanding.",
    color: "border-emerald-400/25",
    bg: "bg-emerald-400/5",
    iconPath: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2",
  },
  {
    key: "cynefin",
    name: "Cynefin Framework",
    author: "Dave Snowden, 1999",
    insight: "Complex problems require probe-sense-respond, not analyze-plan-execute. You cannot analyze your way to understanding a complex system.",
    layer: "Work → Review → Frame",
    layerColor: "text-bone-100",
    connection: "The iteration cycle is probe-sense-respond: Work probes, Review senses, and the feedback gradient responds — sometimes adjusting Work, sometimes reframing the entire problem.",
    color: "border-bone-100/20",
    bg: "bg-bone-100/3",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 2a4 4 0 100 8 4 4 0 000-8z",
  },
  {
    key: "sense",
    name: "Sensemaking",
    author: "Karl Weick, 1995",
    insight: "Understanding is constructed retrospectively through action, not discovered through analysis. Meaning requires narrative continuity.",
    layer: "Meta",
    layerColor: "text-bone-300",
    connection: "The Meta folder — changelog, agent notes, project brief — is sensemaking infrastructure. It preserves the narrative across sessions so understanding accumulates instead of resetting.",
    color: "border-bone-300/20",
    bg: "bg-bone-300/5",
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

function TraditionCard({ t, isActive, onClick, enter, index }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left rounded-xl border ${t.color} ${t.bg} p-5
        transition-all duration-300 ease-out cursor-pointer
        ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        ${isActive ? "ring-1 ring-bone-200/20 scale-[1.01]" : "hover:scale-[1.005]"}
      `}
      style={{ transitionDelay: enter ? `${index * 80}ms` : "0ms" }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="mt-0.5 shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={t.layerColor}>
            <path d={t.iconPath} />
          </svg>
        </div>
        <div>
          <h4 className="text-base font-semibold text-bone-0">{t.name}</h4>
          <p className="text-[11px] text-bone-300 mt-0.5">{t.author}</p>
        </div>
      </div>
      <p className="text-sm text-bone-200 leading-relaxed mb-3">{t.insight}</p>
      <div className="flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={t.layerColor}>
          <path d="M1 6h10M8 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={`text-xs font-medium ${t.layerColor}`}>Maps to: {t.layer}</span>
      </div>

      {isActive && (
        <div className="mt-4 pt-4 border-t border-bone-300/10">
          <p className="text-sm text-bone-100 leading-relaxed">{t.connection}</p>
        </div>
      )}
    </button>
  );
}

export default function ResearchMapping() {
  const [active, setActive] = useState(null);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnter(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="Research → Architecture — Five Traditions, One Model" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#dcd6cf 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-center text-bone-300 text-sm mb-6">
            Click a tradition to see how it maps to the workspace architecture.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {traditions.slice(0, 4).map((t, i) => (
              <TraditionCard
                key={t.key}
                t={t}
                isActive={active === t.key}
                onClick={() => setActive(active === t.key ? null : t.key)}
                enter={enter}
                index={i}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <div className="w-full md:w-[calc(50%-0.5rem)]">
              <TraditionCard
                t={traditions[4]}
                isActive={active === traditions[4].key}
                onClick={() => setActive(active === traditions[4].key ? null : traditions[4].key)}
                enter={enter}
                index={4}
              />
            </div>
          </div>

          {/* Synthesis bar */}
          <div
            className={`mt-6 rounded-xl border border-bone-300/15 bg-ink-150 p-5 transition-all duration-500 ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-bone-200/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bone-100">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-bone-0">The Synthesis</h4>
                <p className="text-[11px] text-bone-300">The Problem Workspace, 2026</p>
              </div>
            </div>
            <p className="text-sm text-bone-200 leading-relaxed">
              The Problem Workspace is what emerges when you apply all five insights to human-AI collaboration: hold multiple framings (Rittel), separate structuring from solving (PSMs), make orientation persistent (Boyd), iterate through probe-sense-respond (Snowden), and preserve narrative across sessions (Weick). The result is a layered architecture with explicit governance — five layers, five ownership models, one feedback loop.
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
