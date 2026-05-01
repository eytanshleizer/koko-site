import { useEffect, useRef, useState } from "react"

const STORAGE_KEY = "problem-map-v1"
const CARD_W = 168
const CARD_H = 56

// Quadrant boundaries are at x=0.5, y=0.5 in normalized space.
// y=0 is top (high stakes), y=1 is bottom (low stakes).
function quadrantOf(x, y) {
  const stakes = y < 0.5 ? "High stakes" : "Low stakes"
  const clarity = x < 0.5 ? "Ambiguous" : "Clear"
  return `${stakes} / ${clarity}`
}

function uid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID()
  return String(Date.now()) + Math.random().toString(16).slice(2)
}

export default function ProblemMap() {
  const [problems, setProblems] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [drag, setDrag] = useState(null) // { id, offsetX, offsetY }
  const [hydrated, setHydrated] = useState(false)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef(null)

  // Load once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setProblems(parsed)
      }
    } catch {}
    setHydrated(true)
  }, [])

  // Persist after hydration so we don't clobber existing storage with [] on
  // first render.
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(problems))
    } catch {}
  }, [problems, hydrated])

  function canvasRect() {
    return canvasRef.current?.getBoundingClientRect()
  }

  function clientToNorm(clientX, clientY) {
    const r = canvasRect()
    if (!r) return { x: 0.5, y: 0.5 }
    const x = (clientX - r.left) / r.width
    const y = (clientY - r.top) / r.height
    return {
      x: Math.max(0, Math.min(1, x)),
      y: Math.max(0, Math.min(1, y)),
    }
  }

  function onCanvasClick(e) {
    if (e.target !== canvasRef.current) return
    const { x, y } = clientToNorm(e.clientX, e.clientY)
    const id = uid()
    setProblems((p) => [...p, { id, x, y, text: "" }])
    setEditingId(id)
  }

  function onCardPointerDown(e, p) {
    if (editingId === p.id) return
    e.preventDefault()
    e.stopPropagation()
    e.target.setPointerCapture?.(e.pointerId)
    const r = canvasRect()
    if (!r) return
    const cardLeft = p.x * r.width - CARD_W / 2
    const cardTop = p.y * r.height - CARD_H / 2
    setDrag({
      id: p.id,
      offsetX: e.clientX - r.left - cardLeft,
      offsetY: e.clientY - r.top - cardTop,
      moved: false,
    })
  }

  function onPointerMove(e) {
    if (!drag) return
    const r = canvasRect()
    if (!r) return
    const newLeft = e.clientX - r.left - drag.offsetX
    const newTop = e.clientY - r.top - drag.offsetY
    const cx = newLeft + CARD_W / 2
    const cy = newTop + CARD_H / 2
    const x = Math.max(0, Math.min(1, cx / r.width))
    const y = Math.max(0, Math.min(1, cy / r.height))
    setProblems((arr) =>
      arr.map((p) => (p.id === drag.id ? { ...p, x, y } : p)),
    )
    setDrag((d) => (d ? { ...d, moved: true } : d))
  }

  function onPointerUp() {
    if (drag && !drag.moved) {
      // Treat as click → edit.
      setEditingId(drag.id)
    }
    setDrag(null)
  }

  function updateText(id, text) {
    setProblems((arr) => arr.map((p) => (p.id === id ? { ...p, text } : p)))
  }

  function removeProblem(id) {
    setProblems((arr) => arr.filter((p) => p.id !== id))
    if (editingId === id) setEditingId(null)
  }

  function clearAll() {
    if (problems.length === 0) return
    if (!confirm("Clear all cards on the map?")) return
    setProblems([])
    setEditingId(null)
  }

  function exportMarkdown() {
    const groups = {
      "High stakes / Clear": [],
      "High stakes / Ambiguous": [],
      "Low stakes / Clear": [],
      "Low stakes / Ambiguous": [],
    }
    for (const p of problems) {
      const q = quadrantOf(p.x, p.y)
      if (groups[q]) groups[q].push(p.text || "(untitled)")
    }
    let md = "# Problem map\n\n"
    let any = false
    for (const [q, items] of Object.entries(groups)) {
      if (items.length === 0) continue
      any = true
      md += `## ${q}\n\n`
      for (const t of items) md += `- ${t}\n`
      md += "\n"
    }
    if (!any) md += "_(empty map)_\n"
    return md.trimEnd()
  }

  async function copyMarkdown() {
    const md = exportMarkdown()
    try {
      await navigator.clipboard.writeText(md)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = md
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
      } finally {
        document.body.removeChild(ta)
      }
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="not-prose w-full">
      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-bone-300">
          {problems.length === 0
            ? "Click the grid to add a problem"
            : `${problems.length} problem${problems.length === 1 ? "" : "s"} on the map`}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyMarkdown}
            className="inline-flex items-center gap-2 rounded-full border border-bone-500/25 px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-bone-50 transition hover:border-bone-200/40 hover:text-bone-0"
          >
            {copied ? "Copied ✓" : "Copy markdown"}
          </button>
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-2 rounded-full border border-bone-500/15 px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-bone-300 transition hover:border-bone-500/40 hover:text-bone-100"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Grid + axis labels */}
      <div className="relative">
        {/* Y axis label (left) */}
        <div className="pointer-events-none absolute -left-2 top-0 hidden h-full md:flex">
          <span className="origin-center -rotate-90 self-center font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
            Stakes →
          </span>
        </div>

        <div
          ref={canvasRef}
          onClick={onCanvasClick}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="relative aspect-[4/3] w-full cursor-crosshair overflow-hidden rounded-md border border-bone-500/20 bg-ink-50 md:ml-6"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Quadrant cross */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-bone-500/15" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-bone-500/15" />
          </div>

          {/* Quadrant labels */}
          <div className="pointer-events-none absolute inset-0 select-none">
            <span className="absolute left-3 top-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone-300">
              High · Ambiguous
            </span>
            <span className="absolute right-3 top-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone-100">
              High · Clear
            </span>
            <span className="absolute left-3 bottom-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone-300">
              Low · Ambiguous
            </span>
            <span className="absolute right-3 bottom-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone-300">
              Low · Clear
            </span>
          </div>

          {/* Cards */}
          {problems.map((p) => {
            const r = canvasRect()
            const left = r ? p.x * r.width - CARD_W / 2 : 0
            const top = r ? p.y * r.height - CARD_H / 2 : 0
            const isEditing = editingId === p.id
            const isHi = p.y < 0.5 && p.x >= 0.5
            return (
              <div
                key={p.id}
                onPointerDown={(e) => onCardPointerDown(e, p)}
                style={{
                  left,
                  top,
                  width: CARD_W,
                  minHeight: CARD_H,
                }}
                className={[
                  "group absolute flex select-none items-start rounded-md border px-3 py-2 text-[13px] leading-snug shadow-md transition",
                  isHi
                    ? "border-ember-300/60 bg-ink-100 text-bone-0"
                    : "border-bone-500/30 bg-ink-100 text-bone-100",
                  drag?.id === p.id ? "cursor-grabbing ring-1 ring-bone-200/40" : "cursor-grab",
                ].join(" ")}
              >
                {isEditing ? (
                  <textarea
                    autoFocus
                    value={p.text}
                    onChange={(e) => updateText(p.id, e.target.value)}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        setEditingId(null)
                      }
                      if (e.key === "Escape") setEditingId(null)
                    }}
                    rows={2}
                    className="w-full resize-none border-0 bg-transparent p-0 text-[13px] leading-snug text-bone-0 placeholder:text-bone-300 focus:outline-none focus:ring-0"
                    placeholder="Type the problem…"
                  />
                ) : (
                  <span className="flex-1 break-words">
                    {p.text || (
                      <span className="italic text-bone-300">(empty — click to edit)</span>
                    )}
                  </span>
                )}
                <button
                  type="button"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation()
                    removeProblem(p.id)
                  }}
                  aria-label="Remove"
                  className="ml-2 -mr-1 -mt-1 hidden h-5 w-5 shrink-0 items-center justify-center rounded text-bone-300 hover:bg-bone-0/10 hover:text-bone-0 group-hover:flex"
                >
                  ×
                </button>
              </div>
            )
          })}
        </div>

        {/* X axis label (bottom) */}
        <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300 md:ml-6">
          Clarity →
        </p>
      </div>
    </div>
  )
}
