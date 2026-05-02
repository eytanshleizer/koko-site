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

function ZoneMarker({ label, color, left, width }) {
  return (
    <div className="absolute top-0 h-full flex flex-col items-center" style={{ left: `${left}%`, width: `${width}%` }}>
      <span className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider ${color} mb-2`}>{label}</span>
      <div className="flex-1 w-px bg-bone-300/10 dashed-line" />
    </div>
  );
}

function Bar({ kind, label, sub, color }) {
  const base = "rounded-md transition-all duration-300";
  const styles = {
    solid:  `${base} h-7 md:h-8 flex items-center px-3 ${color} text-ink-50 text-xs md:text-sm font-medium`,
    dashed: `${base} h-7 md:h-8 flex items-center px-3 border-2 border-dashed ${color.replace("bg-", "border-")} ${color.replace("bg-", "text-")} text-xs md:text-sm font-medium`,
    thin:   `${base} h-px ${color} relative`,
    empty:  `${base} h-7 md:h-8 flex items-center px-3 text-bone-300/40 text-xs md:text-sm italic`,
  };

  if (kind === "empty") return <div className={styles.empty}>{label}</div>;
  if (kind === "thin") {
    return (
      <div className="h-7 md:h-8 flex items-center relative">
        <div className={`absolute inset-x-0 ${color} h-px`} />
        <span className="relative z-10 bg-ink-100 px-2 text-bone-200 text-xs md:text-sm">{label}</span>
      </div>
    );
  }
  return <div className={styles[kind] || styles.solid} title={sub}><span>{label}</span></div>;
}

export default function CadenceFlow() {
  const [enter, setEnter] = useState(false);
  useEffect(() => { const t = setTimeout(() => setEnter(true), 40); return () => clearTimeout(t); }, []);

  const zones = [
    { label: "Raw",     color: "text-emerald-400" },
    { label: "Frame",   color: "text-blue-400" },
    { label: "Context", color: "text-ember-300" },
    { label: "Work",    color: "text-bone-100" },
    { label: "Review",  color: "text-emerald-400" },
  ];

  const lane = (items) =>
    items.map((it, i) => (
      <div key={i} className={`transition-all duration-500 ease-out ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        style={{ transitionDelay: enter ? `${i * 100 + 80}ms` : "0ms" }}>
        <Bar kind={it.kind} label={it.label} sub={it.sub} color={it.color} />
      </div>
    ));

  const humanItems = [
    { kind: "solid",  label: "continuous dump",       sub: "Human — Raw",       color: "bg-emerald-400" },
    { kind: "dashed", label: "proposes & approves",  sub: "Human — Frame",     color: "bg-blue-400" },
    { kind: "thin",   label: "reviews only",          sub: "Human — Context",   color: "bg-ember-300" },
    { kind: "thin",   label: "reviews & approves",    sub: "Human — Work",      color: "bg-bone-200" },
    { kind: "solid",  label: "judges & decides",      sub: "Human — Review",    color: "bg-emerald-400" },
  ];

  const aiItems = [
    { kind: "empty",  label: "does not touch",        sub: "AI — Raw",          color: "" },
    { kind: "dashed", label: "critiques & clarifies", sub: "AI — Frame",        color: "bg-blue-400" },
    { kind: "solid",  label: "auto-maintains",        sub: "AI — Context",      color: "bg-ember-300" },
    { kind: "solid",  label: "generates",             sub: "AI — Work",         color: "bg-bone-200" },
    { kind: "dashed", label: "evaluates & compares",  sub: "AI — Review",       color: "bg-emerald-400" },
  ];

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="CadenceFlow — Human / AI Swimlane" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-10 overflow-x-auto">
        <div className="min-w-[640px] max-w-4xl mx-auto relative">
          <div className="relative h-6 mb-1">
            {zones.map((z, i) => (
              <ZoneMarker key={z.label} label={z.label} color={z.color} left={i * 20} width={20} />
            ))}
          </div>

          <div className="relative grid grid-cols-[120px_1fr] gap-4 md:gap-6">
            <div className="flex items-center justify-end pr-3">
              <span className="text-sm font-semibold text-bone-0">Human</span>
            </div>
            <div className="grid grid-cols-5 gap-2 md:gap-3">{lane(humanItems)}</div>

            <div className="flex items-center justify-end pr-3">
              <span className="text-sm font-semibold text-bone-0">AI</span>
            </div>
            <div className="grid grid-cols-5 gap-2 md:gap-3">{lane(aiItems)}</div>
          </div>

          <div className="relative h-16 mt-4">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 64" fill="none" preserveAspectRatio="none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#a39e98" />
                </marker>
              </defs>
              <path
                d="M580 8 C 580 56, 260 56, 260 8"
                stroke="#a39e98"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowhead)"
                opacity=".6"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] md:text-xs text-bone-300 bg-ink-100 border border-bone-300/10 rounded-full px-3 py-1">
                feedback loop
              </span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
