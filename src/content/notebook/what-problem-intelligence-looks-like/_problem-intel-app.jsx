// SaaS UI mock for a "problem intelligence" product. Static visual demo
// using Tailwind + inline SVG icons. Wraps itself in the diagram-frame
// chrome so fullscreen + topbar work without an external <Diagram> wrapper.

const problems = [
  {
    title: "Mobile retention dropped 22% in week 2",
    state: "framing",
    detail: "3 hypotheses · support tickets correlated · onboarding regression suspected",
    age: "2h",
  },
  {
    title: "Pricing experiment results are inconclusive",
    state: "surveying",
    detail: "5 cohorts · 3 weeks of data · variance too high to call",
    age: "1d",
  },
  {
    title: "Support tickets up 3.2× on 'can't find X'",
    state: "framed",
    detail: "linked to inbox-1 · UI revert proposed · 5% holdout test ready",
    age: "3d",
  },
  {
    title: "Churn risk score model is drifting",
    state: "solving",
    detail: "feature distribution shift · retraining vs reweighting · cost open",
    age: "5d",
  },
  {
    title: "Onboarding flow has unclear success metric",
    state: "framing",
    detail: "stakeholders disagree · need a frame everyone signs off on",
    age: "1w",
  },
  {
    title: "Repeat visits are flat for the new homepage",
    state: "surveying",
    detail: "intent unclear · 4-week window · need engagement segmentation",
    age: "1w",
  },
  {
    title: "Power users report search feels slower",
    state: "framing",
    detail: "no metric drop · qualitative · maybe perception, maybe real",
    age: "2w",
  },
  {
    title: "Email open rates degraded across segments",
    state: "solving",
    detail: "deliverability check pending · subject-line fatigue suspected",
    age: "2w",
  },
]

const stateColor = {
  framing: "bg-ember-300",
  surveying: "bg-bone-100",
  framed: "bg-blue-400",
  solving: "bg-emerald-400",
}

export default function ProblemIntelApp() {
  return (
    <figure className="diagram-frame not-prose">
      <header className="diagram-topbar">
        <span className="diagram-title">Problem inbox · interactive mock</span>
        <button
          type="button"
          className="diagram-action"
          data-diagram-action="open"
          aria-label="Open fullscreen"
        >
          <svg
            viewBox="0 0 16 16"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4" />
          </svg>
        </button>
      </header>
      <div className="diagram-body">
        <div
          data-embed-natural-width="920"
          className="grid w-full grid-cols-[200px_1fr] overflow-hidden border border-bone-500/15 bg-ink-100 font-sans text-bone-100"
        >
          {/* Sidebar */}
          <aside className="flex flex-col gap-1 border-r border-bone-500/15 bg-ink-50 p-4">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="h-4 w-4 rounded-full bg-gradient-to-br from-bone-50 to-ember-300" />
              <span className="text-[13px] font-semibold tracking-tight text-bone-0">
                Problem Intel
              </span>
            </div>

            <p className="mb-2 mt-2 px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-300">
              Workspace
            </p>

            <a className="flex cursor-pointer items-center gap-2.5 rounded bg-bone-0/[0.06] px-2 py-1.5 text-[13px] text-bone-0">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 9h3l1.5 2h3l1.5-2h3" />
                <path d="M2 13h12V3H2z" />
              </svg>
              Inbox
              <span className="ml-auto font-mono text-[11px] text-bone-300">12</span>
            </a>

            <a className="flex cursor-pointer items-center gap-2.5 rounded px-2 py-1.5 text-[13px] text-bone-200 transition hover:bg-white/[0.03] hover:text-bone-0">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="4" cy="4" r="1.5" />
                <circle cx="12" cy="4" r="1.5" />
                <circle cx="8" cy="12" r="1.5" />
                <line x1="5.4" y1="4" x2="10.6" y2="4" />
                <line x1="4.5" y1="5.3" x2="7.3" y2="10.7" />
                <line x1="11.5" y1="5.3" x2="8.7" y2="10.7" />
              </svg>
              Problem map
            </a>

            <a className="flex cursor-pointer items-center gap-2.5 rounded px-2 py-1.5 text-[13px] text-bone-200 transition hover:bg-white/[0.03] hover:text-bone-0">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="12" height="10" rx="1" />
                <line x1="2" y1="6.5" x2="14" y2="6.5" />
              </svg>
              Frames
              <span className="ml-auto font-mono text-[11px] text-bone-300">7</span>
            </a>

            <a className="flex cursor-pointer items-center gap-2.5 rounded px-2 py-1.5 text-[13px] text-bone-200 transition hover:bg-white/[0.03] hover:text-bone-0">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="5" cy="5" r="2.5" />
                <line x1="6.8" y1="6.8" x2="13" y2="13" />
                <line x1="10.5" y1="10.5" x2="13.5" y2="7.5" />
              </svg>
              Tools
            </a>

            <a className="flex cursor-pointer items-center gap-2.5 rounded px-2 py-1.5 text-[13px] text-bone-200 transition hover:bg-white/[0.03] hover:text-bone-0">
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="2" />
                <path d="M8 1.5v2 M8 12.5v2 M14.5 8h-2 M3.5 8h-2 M12.6 3.4l-1.4 1.4 M4.8 11.2l-1.4 1.4 M12.6 12.6l-1.4-1.4 M4.8 4.8L3.4 3.4" />
              </svg>
              Settings
            </a>

            <p className="mb-2 mt-6 px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-300">
              Recent
            </p>
            <a className="cursor-pointer rounded px-2 py-1 text-[12.5px] text-bone-200 transition hover:bg-white/[0.03] hover:text-bone-0">
              Onboarding regression
            </a>
            <a className="cursor-pointer rounded px-2 py-1 text-[12.5px] text-bone-200 transition hover:bg-white/[0.03] hover:text-bone-0">
              Mobile retention drop
            </a>
            <a className="cursor-pointer rounded px-2 py-1 text-[12.5px] text-bone-200 transition hover:bg-white/[0.03] hover:text-bone-0">
              Pricing experiment
            </a>
          </aside>

          {/* Main */}
          <main className="p-6">
            {/* Top bar */}
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
                  Inbox
                </p>
                <h2 className="mt-1.5 text-[20px] font-semibold tracking-tight text-bone-0">
                  12 open problems
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <svg
                    viewBox="0 0 16 16"
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-bone-300"
                    aria-hidden="true"
                  >
                    <circle cx="6.5" cy="6.5" r="4.5" />
                    <line x1="14" y1="14" x2="10" y2="10" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search problems…"
                    className="rounded border border-bone-500/15 bg-ink-50 py-1.5 pl-8 pr-3 text-[12.5px] text-bone-100 placeholder:text-bone-300 focus:border-bone-500/40 focus:outline-none"
                    style={{ width: 200 }}
                  />
                </div>
                <button
                  type="button"
                  className="rounded bg-bone-0 px-3 py-1.5 text-[12px] font-semibold text-ink-0 transition hover:bg-bone-100"
                >
                  + Add problem
                </button>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="mb-4 flex items-center gap-1 border-b border-bone-500/15 text-[12px]">
              <button type="button" className="border-b-2 border-bone-0 px-3 py-2 font-medium text-bone-0">
                All
              </button>
              <button type="button" className="px-3 py-2 text-bone-300 transition hover:text-bone-0">
                Framing <span className="ml-1 font-mono text-[10px]">3</span>
              </button>
              <button type="button" className="px-3 py-2 text-bone-300 transition hover:text-bone-0">
                Surveying <span className="ml-1 font-mono text-[10px]">2</span>
              </button>
              <button type="button" className="px-3 py-2 text-bone-300 transition hover:text-bone-0">
                Solving <span className="ml-1 font-mono text-[10px]">4</span>
              </button>
              <button type="button" className="px-3 py-2 text-bone-300 transition hover:text-bone-0">
                Done <span className="ml-1 font-mono text-[10px]">3</span>
              </button>
            </div>

            {/* Problem list */}
            <ul className="divide-y divide-bone-500/10">
              {problems.map((p, i) => (
                <li
                  key={i}
                  className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 py-3 transition hover:bg-white/[0.02]"
                >
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      stateColor[p.state] || "bg-bone-300",
                    ].join(" ")}
                  />
                  <div>
                    <h3 className="text-[13.5px] font-medium text-bone-0">{p.title}</h3>
                    <p className="mt-0.5 text-[11.5px] text-bone-300">
                      <span className="font-mono uppercase tracking-[0.1em]">{p.state}</span>
                      <span className="mx-1.5">·</span>
                      {p.detail}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-bone-300">{p.age}</span>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </figure>
  )
}
