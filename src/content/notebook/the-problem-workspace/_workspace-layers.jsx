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
    human:  "text-emerald-400  border-emerald-400/20",
    ai:     "text-blue-400   border-blue-400/20",
    collab: "text-ember-300  border-ember-300/20",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${themes[variant] || themes.human}`}>
      {label}
    </span>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center my-2">
      <div className="flex flex-col items-center">
        <div className="w-px h-4 bg-bone-300/40" />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-bone-300/50">
          <path d="M6 10L1 4h10L6 10z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default function WorkspaceLayers() {
  const [hovered, setHovered] = useState(null);
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
      pills: [{ label: "Human", variant: "human" }],
      subs: ["interviews/", "research/", "screenshots/", "bookmarks/", "notes/"],
      border: "border-emerald-400/25",
      glow:   "shadow-[0_0_40px_rgba(61,213,152,0.06)]",
      topBar: "bg-emerald-400/10",
    },
    {
      key: "frame",
      num: "01",
      name: "Frame",
      desc: "Define the problem, constraints, success criteria, and stakeholders.",
      pills: [{ label: "Human", variant: "human" }, { label: "AI", variant: "ai" }, { label: "Collaborative", variant: "collab" }],
      subs: ["active-frame/", "archived-frames/", "problem.md", "constraints.md", "stakeholders.md"],
      border: "border-blue-400/25",
      glow:   "shadow-[0_0_40px_rgba(91,157,227,0.06)]",
      topBar: "bg-blue-400/10",
    },
    {
      key: "context",
      num: "02",
      name: "Context",
      desc: "Living glossary, verified facts, decisions log, and pattern library.",
      pills: [{ label: "AI", variant: "ai" }],
      subs: ["glossary.md", "facts.md", "decisions.md", "patterns.md"],
      border: "border-ember-300/25",
      glow:   "shadow-[0_0_40px_rgba(232,140,93,0.06)]",
      topBar: "bg-ember-300/10",
    },
    {
      key: "work",
      num: "03",
      name: "Work",
      desc: "Iterative design, prototypes, evaluations, and analysis artifacts.",
      pills: [{ label: "AI", variant: "ai" }],
      subs: ["iteration-01/", "iteration-02/", "design/", "prototype/", "analysis.md"],
      border: "border-bone-100/15",
      glow:   "shadow-[0_0_40px_rgba(220,214,207,0.03)]",
      topBar: "bg-bone-100/5",
    },
    {
      key: "review",
      num: "04",
      name: "Review",
      desc: "Critique, compare, approve—or loop back to re-frame.",
      pills: [{ label: "Human", variant: "human" }, { label: "AI", variant: "ai" }, { label: "Collaborative", variant: "collab" }],
      subs: ["critiques/", "comparisons/", "approved/"],
      border: "border-emerald-400/25",
      glow:   "shadow-[0_0_40px_rgba(61,213,152,0.06)]",
      topBar: "bg-emerald-400/10",
    },
  ];

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="WorkspaceLayers — Layer Flow" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle,#dcd6cf 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          {layers.map((ly, i) => {
            const isHover = hovered === ly.key;
            return (
              <div key={ly.key} className="w-full">
                {i > 0 && <ArrowDown />}
                <div
                  className={`
                    rounded-xl border ${ly.border} bg-ink-150 ${ly.glow}
                    transition-all duration-300 ease-out cursor-default
                    ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    ${isHover ? "scale-[1.02]" : "scale-100"}
                  `}
                  style={{ transitionDelay: enter ? `${i * 90}ms` : "0ms" }}
                  onMouseEnter={() => setHovered(ly.key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={`h-1 w-full rounded-t-xl ${ly.topBar}`} />

                  <div className="px-5 py-5 md:px-7 md:py-6">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-semibold text-bone-0 tracking-tight">
                        <span className="text-bone-300 font-normal mr-2">{ly.num}</span>
                        {ly.name}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {ly.pills.map((p) => (
                          <Pill key={p.label} label={p.label} variant={p.variant} />
                        ))}
                      </div>
                    </div>
                    <p className="text-bone-200 text-sm md:text-base leading-relaxed">{ly.desc}</p>

                    <div className={`transition-all duration-300 ease-out overflow-hidden ${isHover ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}>
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

          <div className="relative w-full h-24 mt-2">
            <svg className="absolute left-1/2 -translate-x-1/2 w-64 h-24 text-bone-300/30" viewBox="0 0 256 96" fill="none">
              <path
                d="M128 0 C 200 0, 240 30, 240 56 C 240 82, 200 96, 128 96 C 56 96, 16 82, 16 56"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
              />
              <polygon points="10,56 22,50 22,62" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-bone-300 bg-ink-100 border border-bone-300/10 rounded-full px-3 py-1">
                iterate
              </span>
            </div>
          </div>

          <p className="text-center text-bone-300 text-sm mt-2">
            Early iterations: large jumps. Later iterations: tight loops.
          </p>
        </div>
      </div>
    </figure>
  );
}
