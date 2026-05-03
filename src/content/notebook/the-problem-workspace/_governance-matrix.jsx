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

const layers = [
  {
    key: "raw",
    name: "Raw",
    num: "00",
    writes: "human",
    reads: "human",
    decides: "human",
    gravity: 1,
    velocity: 5,
    cadence: "Continuous",
    risk: "Contamination — AI text mixed with human observations",
    color: "emerald",
    description: "Unprocessed inputs — interviews, notes, screenshots",
  },
  {
    key: "frame",
    name: "Frame",
    num: "01",
    writes: "human",
    reads: "both",
    decides: "human",
    gravity: 2,
    velocity: 2,
    cadence: "Infrequent, deliberate",
    risk: "Premature convergence — committing to one framing too early",
    color: "blue",
    description: "Problem definition — boundaries, rules, win conditions",
  },
  {
    key: "context",
    name: "Context",
    num: "02",
    writes: "ai",
    reads: "both",
    decides: "human",
    gravity: 4,
    velocity: 3,
    cadence: "After each significant input",
    risk: "Unreviewed drift — AI updates go unchecked",
    color: "ember",
    description: "Curated knowledge — glossary, facts, decisions, patterns",
  },
  {
    key: "work",
    name: "Work",
    num: "03",
    writes: "ai",
    reads: "both",
    decides: "human",
    gravity: 3,
    velocity: 4,
    cadence: "On explicit request",
    risk: "Premature build — generating before Frame/Context are stable",
    color: "bone",
    description: "Iterations — designs, prototypes, analyses",
  },
  {
    key: "review",
    name: "Review",
    num: "04",
    writes: "both",
    reads: "both",
    decides: "human",
    gravity: 5,
    velocity: 1,
    cadence: "After every iteration",
    risk: "Rubber-stamping — approving everything, reviewing nothing",
    color: "emerald",
    description: "Judgment — critiques, comparisons, approved decisions",
  },
];

function RoleIcon({ role, size = 14 }) {
  if (role === "human") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className="text-emerald-400">
        <circle cx="8" cy="5" r="3" />
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    );
  }
  if (role === "ai") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className="text-blue-400">
        <rect x="3" y="3" width="10" height="10" rx="2" />
        <circle cx="6.5" cy="7" r="1" />
        <circle cx="9.5" cy="7" r="1" />
        <path d="M6 10h4" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    );
  }
  return (
    <div className="flex gap-0.5">
      <svg width={size - 2} height={size - 2} viewBox="0 0 16 16" fill="currentColor" className="text-emerald-400">
        <circle cx="8" cy="5" r="3" />
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
      <svg width={size - 2} height={size - 2} viewBox="0 0 16 16" fill="currentColor" className="text-blue-400">
        <rect x="3" y="3" width="10" height="10" rx="2" />
        <circle cx="6.5" cy="7" r="1" />
        <circle cx="9.5" cy="7" r="1" />
      </svg>
    </div>
  );
}

function RoleLabel({ role }) {
  const labels = { human: "Human", ai: "AI", both: "Both" };
  const colors = { human: "text-emerald-400", ai: "text-blue-400", both: "text-bone-200" };
  return (
    <span className={`text-xs ${colors[role]} font-medium flex items-center gap-1.5`}>
      <RoleIcon role={role} size={12} />
      {labels[role]}
    </span>
  );
}

function MeterBar({ value, max, color }) {
  const percentage = (value / max) * 100;
  const colorMap = {
    emerald: "bg-emerald-400",
    blue: "bg-blue-400",
    ember: "bg-ember-300",
    bone: "bg-bone-200",
  };
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-bone-300/10 overflow-hidden">
        <div
          className={`h-full rounded-full ${colorMap[color]} transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-[10px] text-bone-300 w-4 text-right">{value}</span>
    </div>
  );
}

export default function GovernanceMatrix() {
  const [selected, setSelected] = useState(null);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnter(true), 40);
    return () => clearTimeout(t);
  }, []);

  const sel = selected !== null ? layers[selected] : null;

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="Governance Matrix — Who Writes, Reads, and Decides" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400"><RoleIcon role="human" size={12} /> Human</span>
            <span className="flex items-center gap-1.5 text-blue-400"><RoleIcon role="ai" size={12} /> AI</span>
            <span className="flex items-center gap-1.5 text-bone-300">
              <span className="w-2 h-2 rounded-full bg-bone-200/60 inline-block" /> Gravity = stability of information</span>
            <span className="flex items-center gap-1.5 text-bone-300">
              <span className="w-2 h-2 rounded-full bg-bone-200/40 inline-block" /> Velocity = frequency of change</span>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-bone-300/10 bg-ink-150 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_80px_80px_80px_100px_100px] gap-0 text-[11px] uppercase tracking-wider text-bone-300 font-semibold border-b border-bone-300/10">
              <div className="px-4 py-3">Layer</div>
              <div className="px-3 py-3 text-center">Writes</div>
              <div className="px-3 py-3 text-center">Reads</div>
              <div className="px-3 py-3 text-center">Decides</div>
              <div className="px-3 py-3 text-center">Gravity</div>
              <div className="px-3 py-3 text-center">Velocity</div>
            </div>

            {/* Rows */}
            {layers.map((ly, i) => {
              const isSelected = selected === i;
              const colorMap = {
                emerald: "border-emerald-400/20",
                blue: "border-blue-400/20",
                ember: "border-ember-300/20",
                bone: "border-bone-200/15",
              };
              return (
                <div key={ly.key}>
                  <button
                    onClick={() => setSelected(isSelected ? null : i)}
                    className={`
                      w-full grid grid-cols-[1fr_80px_80px_80px_100px_100px] gap-0 items-center
                      transition-all duration-300 ease-out
                      ${enter ? "opacity-100" : "opacity-0"}
                      ${isSelected ? "bg-bone-0/5" : "hover:bg-bone-0/3"}
                      ${i < layers.length - 1 ? `border-b ${colorMap[ly.color]}` : ""}
                    `}
                    style={{ transitionDelay: enter ? `${i * 60}ms` : "0ms" }}
                  >
                    <div className="px-4 py-4 text-left">
                      <span className="text-bone-300 text-xs font-normal mr-1.5">{ly.num}</span>
                      <span className="text-bone-0 text-sm font-semibold">{ly.name}</span>
                    </div>
                    <div className="flex justify-center"><RoleLabel role={ly.writes} /></div>
                    <div className="flex justify-center"><RoleLabel role={ly.reads} /></div>
                    <div className="flex justify-center"><RoleLabel role={ly.decides} /></div>
                    <div className="px-3"><MeterBar value={ly.gravity} max={5} color={ly.color} /></div>
                    <div className="px-3"><MeterBar value={ly.velocity} max={5} color={ly.color} /></div>
                  </button>

                  {isSelected && (
                    <div className="px-5 py-4 bg-bone-0/3 border-b border-bone-300/10">
                      <p className="text-sm text-bone-200 mb-3">{ly.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="rounded-lg border border-bone-300/10 bg-ink-100 px-4 py-3">
                          <div className="text-[10px] uppercase tracking-wider text-bone-300 mb-1">Cadence</div>
                          <div className="text-sm text-bone-100">{ly.cadence}</div>
                        </div>
                        <div className="rounded-lg border border-red-400/10 bg-red-500/5 px-4 py-3">
                          <div className="text-[10px] uppercase tracking-wider text-red-400/70 mb-1">Primary Risk</div>
                          <div className="text-sm text-bone-200">{ly.risk}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Key insight */}
          <div
            className={`mt-5 text-center text-sm text-bone-300 transition-all duration-500 ${enter ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            Notice: <span className="text-emerald-400 font-medium">Human always decides.</span> The AI writes in Context and Work, but governance — the authority to approve, reject, or promote — never leaves human hands.
          </div>
        </div>
      </div>
    </figure>
  );
}
