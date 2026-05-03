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

function PhaseBlock({ label, time, color, active, onClick, enter, delay }) {
  const bgMap = {
    emerald: "bg-emerald-400",
    blue: "bg-blue-400",
    ember: "bg-ember-300",
    bone: "bg-bone-200",
  };
  return (
    <button
      onClick={onClick}
      className={`
        relative flex-1 rounded-lg border transition-all duration-300 cursor-pointer
        ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        ${active
          ? `border-${color === "bone" ? "bone-200" : color === "ember" ? "ember-300" : color === "emerald" ? "emerald-400" : "blue-400"}/30 bg-${color === "bone" ? "bone-200" : color === "ember" ? "ember-300" : color === "emerald" ? "emerald-400" : "blue-400"}/10`
          : "border-bone-300/10 bg-ink-150 hover:bg-bone-0/3"
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`h-0.5 rounded-t-lg ${bgMap[color]} ${active ? "opacity-60" : "opacity-20"}`} />
      <div className="px-3 py-3 text-center">
        <div className="text-sm font-semibold text-bone-0 mb-1">{label}</div>
        <div className="text-[10px] text-bone-300">{time}</div>
      </div>
    </button>
  );
}

const phases = [
  {
    key: "speed1",
    layers: [
      { label: "Raw", time: "~2 weeks", color: "emerald" },
      { label: "Frame", time: "~1 week", color: "blue" },
      { label: "Context", time: "~3 days", color: "ember" },
    ],
    title: "Speed 1: Structure Building",
    duration: "First pass: 3-4 weeks",
    description: "Slow, deliberate, foundational. Collecting evidence, defining the problem, curating knowledge. This is the investment phase — it feels expensive because it is. Skip it and you pay 10x later.",
    activities: [
      "Conduct and transcribe user interviews",
      "Export and organize data from analytics tools",
      "Write multiple problem frames with constraints",
      "AI critiques frames, surfaces missing assumptions",
      "Build initial context: glossary, facts, decisions",
      "Human reviews AI-generated context for accuracy",
    ],
  },
  {
    key: "speed2",
    layers: [
      { label: "Work", time: "hours", color: "bone" },
      { label: "Review", time: "30 min", color: "emerald" },
      { label: "Context ↻", time: "5 min", color: "ember" },
    ],
    title: "Speed 2: Tight Iteration",
    duration: "Subsequent passes: hours per cycle",
    description: "Fast, focused, precise. The structure exists. Each AI prompt operates within established constraints. Reviews are quick because criteria are explicit. Context updates are surgical.",
    activities: [
      "AI generates iteration based on frame + context",
      "Human reviews in 30 min (criteria are explicit)",
      "Minor context updates (new facts, decisions logged)",
      "Next iteration builds on prior analysis",
      "Tight Work → Review → Work feedback loop",
      "Full re-frame only on major failure",
    ],
  },
];

export default function CadenceFlow() {
  const [activePhase, setActivePhase] = useState(0);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnter(true), 40);
    return () => clearTimeout(t);
  }, []);

  const phase = phases[activePhase];

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="CadenceFlow — The Two Speeds of Problem-Solving" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Phase toggle */}
          <div className="flex gap-3 mb-6">
            {phases.map((p, i) => (
              <button
                key={p.key}
                onClick={() => setActivePhase(i)}
                className={`
                  flex-1 rounded-xl border p-4 text-left transition-all duration-300
                  ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                  ${activePhase === i
                    ? "border-bone-200/20 bg-bone-0/5 ring-1 ring-bone-200/10"
                    : "border-bone-300/10 bg-ink-150 hover:bg-bone-0/3 cursor-pointer"
                  }
                `}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-sm font-semibold text-bone-0 mb-1">{p.title}</div>
                <div className="text-[11px] text-bone-300">{p.duration}</div>
              </button>
            ))}
          </div>

          {/* Layer timeline */}
          <div className="flex gap-3 mb-6">
            {phase.layers.map((ly, i) => (
              <PhaseBlock
                key={ly.label}
                label={ly.label}
                time={ly.time}
                color={ly.color}
                active={true}
                onClick={() => {}}
                enter={enter}
                delay={200 + i * 80}
              />
            ))}
          </div>

          {/* Description */}
          <div
            className={`rounded-xl border border-bone-300/10 bg-ink-150 p-5 mb-5 transition-all duration-500 ${enter ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-sm text-bone-200 leading-relaxed mb-4">{phase.description}</p>
            <div className="grid grid-cols-2 gap-2">
              {phase.activities.map((act, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-bone-300">
                  <span className="text-bone-300/40 mt-0.5 shrink-0">→</span>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transition insight */}
          <div
            className={`rounded-xl border border-ember-300/15 bg-ember-300/5 p-4 transition-all duration-500 ${enter ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ember-300 mt-0.5 shrink-0">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 5v3M8 10v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="text-xs text-ember-300/80 leading-relaxed">
                <span className="font-semibold text-ember-300">The transition is the payoff.</span> Teams that give up during Speed 1 — "this is too much process" — never experience Speed 2. Teams that skip Speed 1 entirely operate in permanent cold-start mode, re-explaining the problem every session, never building the structural capital that enables acceleration.
              </p>
            </div>
          </div>

          {/* OODA mapping */}
          <div
            className={`mt-5 grid grid-cols-4 gap-2 transition-all duration-500 ${enter ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "600ms" }}
          >
            {[
              { label: "Observe", layer: "Raw", color: "emerald-400" },
              { label: "Orient", layer: "Frame + Context", color: "blue-400" },
              { label: "Decide", layer: "Review", color: "emerald-400" },
              { label: "Act", layer: "Work", color: "bone-200" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className={`text-[10px] uppercase tracking-widest text-${item.color} mb-0.5`}>{item.label}</div>
                <div className="text-[11px] text-bone-300">{item.layer}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-bone-300/50 text-[10px] mt-2 uppercase tracking-widest">
            Boyd's OODA Loop → Workspace Mapping
          </p>
        </div>
      </div>
    </figure>
  );
}
