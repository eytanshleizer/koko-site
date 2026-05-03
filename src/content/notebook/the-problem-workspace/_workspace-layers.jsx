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

function Pill({ label, variant }) {
  const themes = {
    human:  "text-emerald-400  border-emerald-400/20 bg-emerald-400/5",
    ai:     "text-blue-400   border-blue-400/20 bg-blue-400/5",
    collab: "text-ember-300  border-ember-300/20 bg-ember-300/5",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${themes[variant] || themes.human}`}>
      {label}
    </span>
  );
}

function ArrowDown({ label }) {
  return (
    <div className="flex justify-center my-1.5">
      <div className="flex flex-col items-center">
        <div className="w-px h-3 bg-bone-300/30" />
        {label && (
          <span className="text-[9px] text-bone-300/60 uppercase tracking-widest my-0.5">{label}</span>
        )}
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-bone-300/40">
          <path d="M5 8L0 2h10L5 8z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

const ooda = {
  raw: "Observe",
  frame: "Orient (define)",
  context: "Orient (synthesize)",
  work: "Act",
  review: "Decide",
};

export default function WorkspaceLayers() {
  const [hovered, setHovered] = useState(null);
  const [showOODA, setShowOODA] = useState(false);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnter(true), 30);
    return () => clearTimeout(t);
  }, []);

  const layers = [
    {
      key: "raw",
      num: "00",
      name: "Raw",
      desc: "Unfiltered inputs: transcripts, screenshots, bookmarks, field notes.",
      example: "user-interview-sarah-chen.md, mixpanel-export-q1.csv, slack-thread-redesign-rationale.md",
      pills: [{ label: "Human writes", variant: "human" }],
      subs: ["interviews/", "research/", "screenshots/", "bookmarks/", "notes/"],
      border: "border-emerald-400/25",
      glow:   "shadow-[0_0_40px_rgba(61,213,152,0.06)]",
      topBar: "bg-emerald-400/10",
    },
    {
      key: "frame",
      num: "01",
      name: "Frame",
      desc: "Define the problem, constraints, success criteria, and stakeholders. Holds multiple framings simultaneously.",
      example: "frame-01-ux-friction/problem.md — \"Conversion dropped 40% due to integration discoverability\"",
      pills: [{ label: "Human leads", variant: "human" }, { label: "AI critiques", variant: "ai" }],
      subs: ["frame-01-[name]/", "active-frame/", "archived-frames/", "problem.md", "constraints.md"],
      border: "border-blue-400/25",
      glow:   "shadow-[0_0_40px_rgba(91,157,227,0.06)]",
      topBar: "bg-blue-400/10",
    },
    {
      key: "context",
      num: "02",
      name: "Context",
      desc: "Living glossary, verified facts, decisions log, and pattern library. Minimum viable orientation.",
      example: "facts.md — \"Heatmap: 73% fewer clicks on Integrations in new UI (source: Hotjar)\"",
      pills: [{ label: "AI maintains", variant: "ai" }, { label: "Human reviews", variant: "human" }],
      subs: ["glossary.md", "facts.md", "decisions.md", "patterns.md", "summary.md"],
      border: "border-ember-300/25",
      glow:   "shadow-[0_0_40px_rgba(232,140,93,0.06)]",
      topBar: "bg-ember-300/10",
    },
    {
      key: "work",
      num: "03",
      name: "Work",
      desc: "Iterative solutions: designs, prototypes, analyses. Each iteration is a committed attempt, not a draft.",
      example: "iteration-01/analysis.md — UX audit comparing old vs. new integration path (3 clicks → 5 clicks)",
      pills: [{ label: "AI generates", variant: "ai" }, { label: "Human edits", variant: "human" }],
      subs: ["iterations/", "iteration-01/", "design/", "prototype/", "analysis.md"],
      border: "border-bone-100/15",
      glow:   "shadow-[0_0_40px_rgba(220,214,207,0.03)]",
      topBar: "bg-bone-100/5",
    },
    {
      key: "review",
      num: "04",
      name: "Review",
      desc: "Critique, compare, approve — or loop back to re-frame. Feedback gradient determines restart point.",
      example: "iteration-01-critique.md — \"Change #1 APPROVED for A/B test. Request iteration-02 for audience analysis.\"",
      pills: [{ label: "Human judges", variant: "human" }, { label: "AI evaluates", variant: "ai" }],
      subs: ["critiques/", "comparisons/", "approved/", "meta/"],
      border: "border-emerald-400/25",
      glow:   "shadow-[0_0_40px_rgba(61,213,152,0.06)]",
      topBar: "bg-emerald-400/10",
    },
  ];

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="WorkspaceLayers — The Five-Layer Architecture" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle,#dcd6cf 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* OODA toggle */}
        <div className="relative z-10 flex justify-center mb-5">
          <button
            onClick={() => setShowOODA(!showOODA)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
              showOODA
                ? "border-ember-300/30 text-ember-300 bg-ember-300/5"
                : "border-bone-300/15 text-bone-300 hover:text-bone-200"
            }`}
          >
            {showOODA ? "Hide" : "Show"} OODA mapping
          </button>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          {layers.map((ly, i) => {
            const isHover = hovered === ly.key;
            return (
              <div key={ly.key} className="w-full">
                {i > 0 && <ArrowDown label={i === 1 ? "curate" : i === 2 ? "synthesize" : i === 3 ? "generate" : "evaluate"} />}
                <div
                  className={`
                    rounded-xl border ${ly.border} bg-ink-150 ${ly.glow}
                    transition-all duration-300 ease-out cursor-default
                    ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    ${isHover ? "scale-[1.015]" : "scale-100"}
                  `}
                  style={{ transitionDelay: enter ? `${i * 90}ms` : "0ms" }}
                  onMouseEnter={() => setHovered(ly.key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={`h-1 w-full rounded-t-xl ${ly.topBar}`} />

                  <div className="px-5 py-4 md:px-7 md:py-5">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold text-bone-0 tracking-tight">
                          <span className="text-bone-300 font-normal mr-2">{ly.num}</span>
                          {ly.name}
                        </h3>
                        {showOODA && (
                          <span className="text-[10px] uppercase tracking-wider text-ember-300 bg-ember-300/5 border border-ember-300/15 rounded px-2 py-0.5">
                            {ooda[ly.key]}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {ly.pills.map((p) => (
                          <Pill key={p.label} label={p.label} variant={p.variant} />
                        ))}
                      </div>
                    </div>
                    <p className="text-bone-200 text-sm leading-relaxed">{ly.desc}</p>

                    <div className={`transition-all duration-300 ease-out overflow-hidden ${isHover ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}>
                      {/* Example from the conversion problem */}
                      <div className="rounded-lg bg-ink-100 border border-bone-300/8 px-4 py-3 mb-3">
                        <div className="text-[10px] uppercase tracking-wider text-bone-300/60 mb-1">Example from conversion investigation</div>
                        <p className="text-xs text-bone-200 leading-relaxed font-mono">{ly.example}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {ly.subs.map((s) => (
                          <span key={s} className="text-xs text-bone-300 bg-ink-100 border border-bone-300/10 rounded px-2 py-1">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Loop arrow */}
          <div className="relative w-full h-20 mt-2">
            <svg className="absolute left-1/2 -translate-x-1/2 w-56 h-20 text-bone-300/25" viewBox="0 0 224 80" fill="none">
              <path
                d="M112 0 C 180 0, 210 25, 210 45 C 210 65, 180 80, 112 80 C 44 80, 14 65, 14 45"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                fill="none"
              />
              <polygon points="10,45 18,40 18,50" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] text-bone-300 bg-ink-100 border border-bone-300/10 rounded-full px-3 py-1">
                feedback gradient
              </span>
            </div>
          </div>

          <p className="text-center text-bone-300 text-xs mt-1">
            Error severity determines loop size: small failures → Work, framing failures → Frame, fundamental failures → Raw.
          </p>
        </div>
      </div>
    </figure>
  );
}
