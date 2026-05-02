// D3 force-directed graph of problem-intelligence concepts. Wraps itself
// in the standard .diagram-frame chrome (topbar with title + fullscreen
// button); Base.astro's global handler picks up the data-diagram-action
// to handle fullscreen.
//
// Ported from a former Astro component to a React island so all blog
// embeds can be plain .jsx — no .astro inside posts.

import { useEffect, useRef } from "react"
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
  forceCollide,
  select,
  drag,
} from "d3"

const NODES = [
  { id: "Problem", group: 0, size: 13 },
  { id: "Conductor", group: 0, size: 16 },
  { id: "Frame", group: 1, size: 12 },
  { id: "Survey", group: 1, size: 12 },
  { id: "Solve", group: 1, size: 12 },
  { id: "Critic", group: 1, size: 12 },
  { id: "Goal", group: 2, size: 8 },
  { id: "Constraints", group: 2, size: 8 },
  { id: "Success criteria", group: 2, size: 9 },
  { id: "Episodic memory", group: 3, size: 9 },
  { id: "Semantic memory", group: 3, size: 9 },
  { id: "Tools", group: 3, size: 9 },
  { id: "Candidates", group: 4, size: 8 },
  { id: "Gap analysis", group: 4, size: 8 },
  { id: "Decision", group: 0, size: 11 },
]

const LINKS = [
  { source: "Problem", target: "Conductor" },
  { source: "Conductor", target: "Frame" },
  { source: "Conductor", target: "Survey" },
  { source: "Conductor", target: "Solve" },
  { source: "Conductor", target: "Critic" },
  { source: "Conductor", target: "Decision" },
  { source: "Frame", target: "Goal" },
  { source: "Frame", target: "Constraints" },
  { source: "Frame", target: "Success criteria" },
  { source: "Survey", target: "Episodic memory" },
  { source: "Survey", target: "Semantic memory" },
  { source: "Survey", target: "Tools" },
  { source: "Solve", target: "Candidates" },
  { source: "Critic", target: "Gap analysis" },
  { source: "Critic", target: "Success criteria" },
  { source: "Gap analysis", target: "Decision" },
]

export default function ConceptGraph() {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Per-mount sim state so multiple instances on a page don't share.
    const nodes = NODES.map((n) => ({ ...n }))
    const links = LINKS.map((l) => ({ ...l }))

    const root = select(svg)
    root.selectAll("*").remove()
    const linkGroup = root.append("g").attr("class", "links")
    const nodeGroup = root.append("g").attr("class", "nodes")

    const linkSel = linkGroup
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#fafafa")
      .attr("stroke-opacity", 0.55)
      .attr("stroke-width", 1)

    const nodeSel = nodeGroup
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .style("cursor", "grab")

    nodeSel
      .append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", "#000")
      .attr("stroke", "#fafafa")
      .attr("stroke-width", 1.25)

    nodeSel
      .append("text")
      .text((d) => d.id)
      .attr("dy", (d) => -d.size - 6)
      .attr("text-anchor", "middle")
      .attr("fill", "#fafafa")
      .attr("font-size", 11)
      .attr("font-family", "Inter Tight, ui-sans-serif, system-ui")
      .attr("pointer-events", "none")

    let width = 0
    let height = 0

    const linkForce = forceLink(links).id((d) => d.id).strength(0.8)
    const chargeForce = forceManyBody()
    const collideForce = forceCollide().radius((d) => d.size + 12)

    const sim = forceSimulation(nodes)
      .force("link", linkForce)
      .force("charge", chargeForce)
      .force("collide", collideForce)

    const updateLayout = () => {
      const rect = svg.getBoundingClientRect()
      const w = Math.max(200, Math.round(rect.width))
      const h = Math.max(200, Math.round(rect.height))
      if (w === width && h === height) return
      width = w
      height = h
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`)

      const minDim = Math.min(w, h)
      const linkDist = Math.max(55, minDim * 0.18)
      const chargeStrength = -Math.max(160, minDim * 0.6)
      linkForce.distance(linkDist)
      chargeForce.strength(chargeStrength)

      sim.force("center", forceCenter(w / 2, h / 2))
      sim.alpha(0.6).restart()
    }

    sim.on("tick", () => {
      for (const n of nodes) {
        const r = n.size
        const padTop = r + 18
        n.x = Math.max(r + 4, Math.min(width - r - 4, n.x ?? width / 2))
        n.y = Math.max(padTop, Math.min(height - r - 4, n.y ?? height / 2))
      }
      linkSel
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y)
      nodeSel.attr("transform", (d) => `translate(${d.x},${d.y})`)
    })

    nodeSel.call(
      drag()
        .on("start", (event, d) => {
          if (!event.active) sim.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        })
        .on("drag", (event, d) => {
          d.fx = event.x
          d.fy = event.y
        })
        .on("end", (event, d) => {
          if (!event.active) sim.alphaTarget(0)
          d.fx = null
          d.fy = null
        }),
    )

    updateLayout()
    const ro = new ResizeObserver(updateLayout)
    ro.observe(svg)

    return () => {
      ro.disconnect()
      sim.stop()
    }
  }, [])

  return (
    <figure className="diagram-frame not-prose">
      <header className="diagram-topbar">
        <span className="diagram-title">Concept map · drag the nodes</span>
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
        <div className="relative h-full w-full">
          <svg
            ref={svgRef}
            className="block h-full w-full"
            aria-label="Force-directed graph of problem-intelligence concepts"
          />
        </div>
      </div>
    </figure>
  )
}
