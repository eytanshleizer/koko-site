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

const scenarios = [
  {
    key: "technical",
    severity: "Low",
    label: "Technical Failure",
    example: "The A/B test design has insufficient statistical power — sample size calculation is wrong.",
    target: "Work",
    targetColor: "text-bone-100",
    loopSize: "Small — tight iteration",
    action: "Redo the calculation within the same iteration. No upstream changes needed.",
    path: [4, 3],
  },
  {
    key: "context",
    severity: "Medium",
    label: "Context Failure",
    example: "The analysis assumed Stripe setup flow is unchanged, but engineering shipped a new version two weeks ago.",
    target: "Context",
    targetColor: "text-ember-300",
    loopSize: "Medium — update facts, then rework",
    action: "Update facts.md with the correct Stripe flow. Then re-run the analysis with accurate information.",
    path: [4, 2, 3],
  },
  {
    key: "framing",
    severity: "High",
    label: "Framing Failure",
    example: "We optimized for click depth, but users say they don't understand what Integrations ARE — it's a comprehension problem, not navigation.",
    target: "Frame",
    targetColor: "text-blue-400",
    loopSize: "Large — redefine the problem",
    action: "Create a new frame (Frame 03: Comprehension Gap). The problem definition itself was wrong. Prior work iterations may be invalidated.",
    path: [4, 1, 2, 3],
  },
  {
    key: "fundamental",
    severity: "Critical",
    label: "Fundamental Failure",
    example: "New support tickets reveal a billing API error silently blocking the payment step. The conversion drop may not be UX or audience — it's a bug.",
    target: "Raw",
    targetColor: "text-emerald-400",
    loopSize: "Full reset — new observations needed",
    action: "Collect new raw data: support tickets, error logs, payment gateway records. Both existing frames may be wrong. Start the investigation over with new evidence.",
    path: [4, 0, 1, 2, 3],
  },
];

const layerNames = ["Raw", "Frame", "Context", "Work", "Review"];
const layerColors = ["emerald-400", "blue-400", "ember-300", "bone-200", "emerald-400"];

function LayerPill({ index, isActive, isTarget, isOrigin }) {
  const colors = {
    "emerald-400": { active: "bg-emerald-400/20 text-emerald-400 border-emerald-400/30", muted: "bg-ink-150 text-bone-300 border-bone-300/10" },
    "blue-400": { active: "bg-blue-400/20 text-blue-400 border-blue-400/30", muted: "bg-ink-150 text-bone-300 border-bone-300/10" },
    "ember-300": { active: "bg-ember-300/20 text-ember-300 border-ember-300/30", muted: "bg-ink-150 text-bone-300 border-bone-300/10" },
    "bone-200": { active: "bg-bone-200/10 text-bone-200 border-bone-200/20", muted: "bg-ink-150 text-bone-300 border-bone-300/10" },
  };
  const c = colors[layerColors[index]];
  const style = isActive ? c.active : c.muted;

  return (
    <div className={`
      relative flex items-center justify-center px-3 py-2 rounded-lg border text-xs font-medium
      transition-all duration-300
      ${style}
      ${isTarget ? "ring-2 ring-offset-1 ring-offset-ink-100 ring-current scale-110" : ""}
      ${isOrigin ? "ring-1 ring-red-400/40" : ""}
    `}>
      {layerNames[index]}
      {isOrigin && (
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400 flex items-center justify-center">
          <svg width="6" height="6" viewBox="0 0 8 8" fill="white"><path d="M4 0L5 3H8L5.5 5L6.5 8L4 6L1.5 8L2.5 5L0 3H3Z" /></svg>
        </span>
      )}
    </div>
  );
}

function Arrow({ highlight }) {
  return (
    <div className="flex items-center justify-center w-5">
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path
          d="M1 4h10M8 1l3 3-3 3"
          stroke={highlight ? "#dcd6cf" : "#a39e9840"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function FeedbackGradient() {
  const [active, setActive] = useState(null);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnter(true), 40);
    return () => clearTimeout(t);
  }, []);

  const scenario = active !== null ? scenarios[active] : null;
  const activePath = scenario ? scenario.path : [];

  const severityColors = {
    Low: "border-bone-200/20 bg-bone-200/5",
    Medium: "border-ember-300/20 bg-ember-300/5",
    High: "border-blue-400/20 bg-blue-400/5",
    Critical: "border-red-400/20 bg-red-400/5",
  };
  const severityTextColors = {
    Low: "text-bone-200",
    Medium: "text-ember-300",
    High: "text-blue-400",
    Critical: "text-red-400",
  };

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="Feedback Gradient — Where Review Sends You Back" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          {/* Layer bar */}
          <div
            className={`flex items-center justify-center gap-1 md:gap-2 mb-8 transition-all duration-500 ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          >
            {layerNames.map((_, i) => (
              <div key={i} className="flex items-center gap-1 md:gap-2">
                <LayerPill
                  index={i}
                  isActive={activePath.includes(i)}
                  isTarget={activePath.length > 0 && activePath[1] === i}
                  isOrigin={activePath.length > 0 && activePath[0] === i}
                />
                {i < layerNames.length - 1 && (
                  <Arrow highlight={activePath.includes(i) && activePath.includes(i + 1)} />
                )}
              </div>
            ))}
          </div>

          {/* Feedback arc when scenario is active */}
          {scenario && (
            <div className="flex justify-center mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${severityColors[scenario.severity]}`}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={severityTextColors[scenario.severity]}>
                  <path d="M14 8A6 6 0 114 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 1v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={`text-xs font-medium ${severityTextColors[scenario.severity]}`}>
                  {scenario.loopSize}
                </span>
              </div>
            </div>
          )}

          {/* Scenario cards */}
          <div className="grid gap-3 md:grid-cols-2">
            {scenarios.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(isActive ? null : i)}
                  className={`
                    w-full text-left rounded-xl border p-4 transition-all duration-300
                    ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    ${isActive
                      ? `${severityColors[s.severity]} ring-1 ring-bone-200/10`
                      : "border-bone-300/10 bg-ink-150 hover:bg-bone-0/3"
                    }
                  `}
                  style={{ transitionDelay: enter ? `${i * 80 + 100}ms` : "0ms" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold ${isActive ? severityTextColors[s.severity] : "text-bone-100"}`}>
                      {s.label}
                    </span>
                    <span className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded ${severityColors[s.severity]} ${severityTextColors[s.severity]}`}>
                      {s.severity}
                    </span>
                  </div>

                  <p className="text-xs text-bone-300 leading-relaxed mb-2">
                    <span className="font-medium text-bone-200">Example:</span> "{s.example}"
                  </p>

                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-bone-300/10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-bone-300">Loops back to:</span>
                        <span className={`text-sm font-semibold ${s.targetColor}`}>{s.target}</span>
                      </div>
                      <p className="text-xs text-bone-200 leading-relaxed">{s.action}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <p
            className={`text-center text-bone-300 text-sm mt-6 transition-all duration-500 ${enter ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "500ms" }}
          >
            The gradient of the error determines the size of the loop. Most teams default to small loops — cycling between Work and Review — even when the real problem is upstream.
          </p>
        </div>
      </div>
    </figure>
  );
}
