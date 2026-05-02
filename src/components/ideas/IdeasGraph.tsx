import { useEffect, useRef, useState } from "react"
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
  select,
  drag,
  zoom,
  zoomIdentity,
  type Simulation,
  type ZoomBehavior,
  type ForceX,
  type ForceY,
} from "d3"

// Node kinds — auto-derived from notebook posts:
//   "post"    → a real notebook entry (filled-bone stroke)
//   "concept" → a wiki-link target with no post yet (dashed gray stroke)
type Kind = "post" | "concept"

export interface IdeaNodeInput {
  id: string
  title: string
  kind: Kind
}

export interface IdeaLinkInput {
  source: string
  target: string
}

interface SimNode extends IdeaNodeInput {
  size: number
  x?: number
  y?: number
  fx?: number | null
  fy?: number | null
}

type SimLink = { source: string | SimNode; target: string | SimNode }

interface Props {
  nodes: IdeaNodeInput[]
  links: IdeaLinkInput[]
  initialSelected: string
}

// All nodes the same size — kind is signalled by stroke color/style.
const NODE_SIZE = 11
const KIND_SIZE: Record<Kind, number> = {
  post: NODE_SIZE,
  concept: NODE_SIZE,
}

const KIND_FILL: Record<Kind, string> = {
  post: "#000000",
  concept: "#000000",
}
const KIND_STROKE: Record<Kind, string> = {
  post: "#fafafa", // bright stroke — a real post
  concept: "#737373", // dimmer stroke — a stub waiting for a post
}
// Concept stubs render with a dashed stroke to make their "unresolved"
// nature visible at a glance, à la Obsidian's unresolved-link style.
const KIND_DASH: Record<Kind, string | null> = {
  post: null,
  concept: "3 3",
}

const FADED_OPACITY = 0.18

export default function IdeasGraph({ nodes, links, initialSelected }: Props) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const simRef = useRef<Simulation<SimNode, SimLink> | null>(null)
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null)
  const selectedRef = useRef<string>(initialSelected)
  // Hover + label state cross effects: the simulation effect builds the
  // d3 scene (and the only place that knows neighbors/nodeSel), but the
  // [selected] effect needs to repaint labels too. Refs let both call
  // the same updater.
  const hoveredRef = useRef<string | null>(null)
  const updateLabelsRef = useRef<() => void>(() => {})
  const [selected, setSelected] = useState<string>(initialSelected)

  // External selection events (related-slug chip clicks, programmatic
  // dispatches) sync the graph's selected state.
  useEffect(() => {
    function onSelect(e: Event) {
      const slug = (e as CustomEvent).detail?.slug
      if (typeof slug === "string") setSelected(slug)
    }
    document.addEventListener("idea:select", onSelect as EventListener)
    return () => {
      document.removeEventListener("idea:select", onSelect as EventListener)
    }
  }, [])

  useEffect(() => {
    selectedRef.current = selected
    if (typeof document !== "undefined") {
      document.dispatchEvent(
        new CustomEvent("idea:select", { detail: { slug: selected } }),
      )
    }
    if (svgRef.current) {
      select(svgRef.current)
        .selectAll<SVGGElement, SimNode>("g.idea-node")
        .each(function (d) {
          const isSel = d.id === selected
          select(this)
            .select<SVGCircleElement>("circle")
            .attr("fill", isSel ? "#ff8a4c" : KIND_FILL[d.kind])
            .attr("stroke", isSel ? "#ff8a4c" : KIND_STROKE[d.kind])
            .attr("stroke-width", isSel ? 2 : 1.25)
          select(this)
            .select<SVGTextElement>("text")
            .attr("fill", isSel ? "#fafafa" : "#d4d4d4")
            .attr("font-weight", isSel ? "600" : "400")
        })
      // Repaint label visibility — selected label always visible, plus
      // whatever the current hover demands.
      updateLabelsRef.current()
    }
  }, [selected])

  useEffect(() => {
    const svg = svgRef.current
    const container = containerRef.current
    if (!svg || !container) return

    // Per-mount sim state.
    const simNodes: SimNode[] = nodes.map((n) => ({
      ...n,
      size: KIND_SIZE[n.kind],
    }))
    const simLinks: SimLink[] = links.map((l) => ({ ...l }))

    // Adjacency map for hover highlighting. neighbor[id] is a Set of
    // adjacent node ids; lookup is O(1) per render of a hover frame.
    const neighbors = new Map<string, Set<string>>()
    simNodes.forEach((n) => neighbors.set(n.id, new Set([n.id])))
    for (const l of simLinks) {
      const s = typeof l.source === "string" ? l.source : l.source.id
      const t = typeof l.target === "string" ? l.target : l.target.id
      neighbors.get(s)?.add(t)
      neighbors.get(t)?.add(s)
    }

    const root = select(svg)
    root.selectAll("*").remove()

    // Everything inside `viewport` is what zoom/pan transforms.
    const viewport = root.append("g").attr("class", "viewport")
    const linkGroup = viewport.append("g").attr("class", "links")
    const nodeGroup = viewport.append("g").attr("class", "nodes")

    const linkSel = linkGroup
      .selectAll("line")
      .data(simLinks)
      .enter()
      .append("line")
      .attr("stroke", "#fafafa")
      .attr("stroke-opacity", 0.25)
      .attr("stroke-width", 1)

    const nodeSel = nodeGroup
      .selectAll<SVGGElement, SimNode>("g")
      .data(simNodes)
      .enter()
      .append<SVGGElement>("g")
      .attr("class", "idea-node")
      .style("cursor", "pointer")

    nodeSel
      .append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) =>
        d.id === selectedRef.current ? "#ff8a4c" : KIND_FILL[d.kind],
      )
      .attr("stroke", (d) =>
        d.id === selectedRef.current ? "#ff8a4c" : KIND_STROKE[d.kind],
      )
      .attr("stroke-width", (d) => (d.id === selectedRef.current ? 2 : 1.25))
      .attr("stroke-dasharray", (d) => KIND_DASH[d.kind] ?? "")

    nodeSel
      .append("text")
      .text((d) => d.title)
      .attr("dy", (d) => -d.size - 6)
      .attr("text-anchor", "middle")
      .attr("fill", (d) =>
        d.id === selectedRef.current ? "#fafafa" : "#d4d4d4",
      )
      .attr("font-size", 11)
      .attr("font-family", "Inter Tight, ui-sans-serif, system-ui")
      .attr("font-weight", (d) =>
        d.id === selectedRef.current ? "600" : "400",
      )
      .attr("pointer-events", "none")
      // Labels start hidden; they appear only for the hovered node +
      // its neighbors, plus whatever's selected.
      .attr("opacity", 0)

    // Single source of truth for label visibility. Labels appear for:
    //   - the selected node and its neighbors (sticky)
    //   - the hovered node and its neighbors (transient)
    // Read both from refs so we always paint against the latest state.
    function updateLabels() {
      const sel = selectedRef.current
      const hov = hoveredRef.current
      const hovNs = hov ? neighbors.get(hov) : null
      const selNs = sel ? neighbors.get(sel) : null
      nodeSel
        .select<SVGTextElement>("text")
        .attr("opacity", (d) => {
          if (selNs && selNs.has(d.id)) return 1
          if (hovNs && hovNs.has(d.id)) return 1
          return 0
        })
    }
    updateLabelsRef.current = updateLabels

    // Hover highlight: emphasize the hovered node + its neighbors, fade
    // everything else. Restores on mouseleave.
    function applyHover(hoveredId: string | null) {
      hoveredRef.current = hoveredId
      if (!hoveredId) {
        nodeSel.attr("opacity", 1)
        linkSel.attr("stroke-opacity", 0.25)
      } else {
        const ns = neighbors.get(hoveredId) ?? new Set([hoveredId])
        nodeSel.attr("opacity", (d) => (ns.has(d.id) ? 1 : FADED_OPACITY))
        linkSel.attr("stroke-opacity", (l: any) => {
          const s = typeof l.source === "string" ? l.source : l.source.id
          const t = typeof l.target === "string" ? l.target : l.target.id
          return s === hoveredId || t === hoveredId ? 0.7 : 0.05
        })
      }
      updateLabels()
    }

    nodeSel
      .on("mouseenter", function (_event, d) {
        applyHover(d.id)
      })
      .on("mouseleave", function () {
        applyHover(null)
      })

    // Initial paint: makes sure the selected node's label (if any)
    // shows up before any hover happens.
    updateLabels()

    let width = 0
    let height = 0

    const linkForce = forceLink<SimNode, SimLink>(simLinks)
      .id((d) => d.id)
      .strength(0.6)
    const chargeForce = forceManyBody<SimNode>()
    const collideForce = forceCollide<SimNode>().radius((d) => d.size + 16)
    // Positional forces — pull every node *individually* toward the
    // viewport center on each axis. forceCenter only translates the
    // cluster's centroid; without forceX/forceY, disconnected
    // components drift apart because nothing reels them back. This is
    // what Obsidian's graph view does to keep orphans in frame.
    // Strength 0.12 is firm enough to clamp orphans near the main
    // cluster without flattening connected nodes onto each other.
    const xForce: ForceX<SimNode> = forceX<SimNode>().strength(0.12)
    const yForce: ForceY<SimNode> = forceY<SimNode>().strength(0.12)

    const sim = forceSimulation<SimNode>(simNodes)
      .force("link", linkForce)
      .force("charge", chargeForce)
      .force("collide", collideForce)
      .force("x", xForce)
      .force("y", yForce)
    simRef.current = sim

    const updateLayout = () => {
      const rect = svg.getBoundingClientRect()
      const w = Math.max(200, Math.round(rect.width))
      const h = Math.max(200, Math.round(rect.height))
      if (w === width && h === height) return

      // Recenter via the cluster's actual centroid (not by width/height
      // delta). The simulation's tick clamp keeps nodes inside the
      // viewport, which can deform the cluster between resizes — using
      // the centroid is robust to that. Translates the centroid to the
      // new viewport center so the graph appears centered immediately,
      // regardless of how it ended up before resize.
      if (simNodes.length > 0 && width > 0 && height > 0) {
        let cx = 0
        let cy = 0
        let n = 0
        for (const node of simNodes) {
          if (typeof node.x === "number" && typeof node.y === "number") {
            cx += node.x
            cy += node.y
            n++
          }
        }
        if (n > 0) {
          cx /= n
          cy /= n
          const dx = w / 2 - cx
          const dy = h / 2 - cy
          if (dx !== 0 || dy !== 0) {
            for (const node of simNodes) {
              if (typeof node.x === "number") node.x += dx
              if (typeof node.y === "number") node.y += dy
              if (typeof node.fx === "number") node.fx += dx
              if (typeof node.fy === "number") node.fy += dy
            }
          }
        }
      }
      width = w
      height = h
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`)

      const minDim = Math.min(w, h)
      const linkDist = Math.max(60, minDim * 0.14)
      // Softer charge so the positional forces (forceX/forceY) can
      // dominate for orphans without leaving connected nodes glued
      // together. Tuned together with xForce/yForce strength=0.12.
      const chargeStrength = -Math.max(180, minDim * 0.45)
      linkForce.distance(linkDist)
      chargeForce.strength(chargeStrength)

      // Update x/y target positions so the per-node pull always points
      // at the new viewport center.
      xForce.x(w / 2)
      yForce.y(h / 2)

      sim.force("center", forceCenter(w / 2, h / 2))
      // Bigger alpha kick than initial so the layout re-settles quickly
      // around the new center after a resize.
      sim.alpha(0.9).restart()
    }

    sim.on("tick", () => {
      // Soft clamp so labels don't escape the canvas. Note: if the user
      // pans/zooms, transformed positions can go outside the viewBox —
      // that's intentional, the clamp only constrains simulation coords.
      for (const n of simNodes) {
        const r = n.size
        const padTop = r + 22
        n.x = Math.max(r + 6, Math.min(width - r - 6, n.x ?? width / 2))
        n.y = Math.max(padTop, Math.min(height - r - 6, n.y ?? height / 2))
      }
      linkSel
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y)
      nodeSel.attr("transform", (d) => `translate(${d.x},${d.y})`)
    })

    // Zoom + pan. Wheel zooms, drag-on-empty pans. Drag-on-node still
    // routes to the node-drag handler below because of `.filter(...)`
    // — we only allow the zoom/pan gesture when the event target is
    // the SVG itself (not a node).
    const zoomBehavior = zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 4])
      .filter((event) => {
        // Block zoom-pan on right-click & on pointer events that started
        // on a node (we want those to drag-the-node, not pan).
        if (event.button) return false
        const target = event.target as Element | null
        if (!target) return true
        return !target.closest(".idea-node")
      })
      .on("zoom", (event) => {
        viewport.attr("transform", event.transform.toString())
      })
    zoomRef.current = zoomBehavior
    select(svg).call(zoomBehavior)
    // Initialize at identity (no zoom).
    select(svg).call(zoomBehavior.transform, zoomIdentity)

    // Node drag — start a slow alpha while dragging so the layout settles.
    // Use the captured zoom transform to translate clientX/Y into the
    // simulation's coordinate space.
    nodeSel.call(
      drag<SVGGElement, SimNode>()
        .on("start", function (event, d) {
          if (!event.active) sim.alphaTarget(0.25).restart()
          d.fx = d.x ?? 0
          d.fy = d.y ?? 0
          ;(this as any).__dragMoved = false
        })
        .on("drag", function (event, d) {
          d.fx = event.x
          d.fy = event.y
          ;(this as any).__dragMoved = true
        })
        .on("end", function (event, d) {
          if (!event.active) sim.alphaTarget(0)
          d.fx = null
          d.fy = null
          if (!(this as any).__dragMoved) setSelected(d.id)
        }) as any,
    )

    updateLayout()
    const ro = new ResizeObserver(updateLayout)
    ro.observe(svg)

    return () => {
      ro.disconnect()
      sim.stop()
      simRef.current = null
      zoomRef.current = null
    }
  }, [nodes, links])

  function resetView() {
    if (!svgRef.current || !zoomRef.current) return
    select(svgRef.current)
      .transition()
      .duration(350)
      .call(zoomRef.current.transform as any, zoomIdentity)
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <svg
        ref={svgRef}
        className="block h-full w-full touch-none select-none"
        aria-label="Force-directed graph of ideas"
      ></svg>

      {/* Legend */}
      <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full border border-[#fafafa]"></span>
          Post
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full border border-dashed border-[#737373]"
            style={{ borderStyle: "dashed" }}
          ></span>
          Concept stub
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#ff8a4c]"></span>
          Selected
        </div>
      </div>

      {/* Controls hint + reset */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone-300">
        <span>Scroll · Pan · Drag</span>
        <button
          type="button"
          onClick={resetView}
          className="rounded-full border border-bone-500/25 px-3 py-1 text-bone-200 transition hover:border-bone-200/40 hover:text-bone-0"
        >
          Reset view
        </button>
      </div>
    </div>
  )
}
