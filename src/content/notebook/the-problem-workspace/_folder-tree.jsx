import { useState } from "react";

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

function FolderIcon({ open, tint }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 16 16" className={tint} fill="currentColor">
      <path d="M2 3a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 019.414 4H13a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" className={tint} fill="currentColor">
      <path d="M2 3a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 019.414 4H13a1 1 0 011 1v1H6.414a1 1 0 00-.707.293l-1.414 1.414A1 1 0 013.586 8H2V3z" />
      <path d="M2 7h1.586a1 1 0 01.707.293l1.414 1.414A1 1 0 006.414 9H13a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V8a1 1 0 011-1z" opacity=".6" />
    </svg>
  );
}

function FileIcon({ tint }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" className={tint} fill="currentColor">
      <path d="M4 1a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5l-4-4H4z" opacity=".5" />
      <path d="M10 1v4h4" />
    </svg>
  );
}

const COL = {
  raw:     { num: "text-emerald-400",  folder: "text-emerald-400/80" },
  frame:   { num: "text-blue-400",     folder: "text-blue-400/80" },
  context: { num: "text-ember-300",    folder: "text-ember-300/80" },
  work:    { num: "text-bone-100",     folder: "text-bone-100/70" },
  review:  { num: "text-emerald-400",  folder: "text-emerald-400/80" },
  meta:    { num: "text-bone-300",     folder: "text-bone-300/60" },
};

const tree = [
  {
    key: "00-raw", kind: "folder", layer: "raw", label: "00-raw", children: [
      { key: "interviews",  kind: "folder", layer: "raw", label: "interviews" },
      { key: "research",    kind: "folder", layer: "raw", label: "research" },
      { key: "screenshots", kind: "folder", layer: "raw", label: "screenshots" },
      { key: "bookmarks",   kind: "folder", layer: "raw", label: "bookmarks" },
      { key: "notes",       kind: "folder", layer: "raw", label: "notes" },
    ],
  },
  {
    key: "01-frames", kind: "folder", layer: "frame", label: "01-frames", children: [
      {
        key: "frame-01-retention", kind: "folder", layer: "frame", label: "frame-01-retention", children: [
          { key: "problem.md",      kind: "file", layer: "frame", label: "problem.md" },
          { key: "constraints.md",  kind: "file", layer: "frame", label: "constraints.md" },
          { key: "stakeholders.md", kind: "file", layer: "frame", label: "stakeholders.md" },
        ],
      },
      { key: "active-frame",    kind: "folder", layer: "frame", label: "active-frame" },
      { key: "archived-frames", kind: "folder", layer: "frame", label: "archived-frames" },
    ],
  },
  {
    key: "02-context", kind: "folder", layer: "context", label: "02-context", children: [
      { key: "glossary.md",  kind: "file", layer: "context", label: "glossary.md" },
      { key: "facts.md",     kind: "file", layer: "context", label: "facts.md" },
      { key: "decisions.md", kind: "file", layer: "context", label: "decisions.md" },
      { key: "patterns.md",  kind: "file", layer: "context", label: "patterns.md" },
    ],
  },
  {
    key: "03-work", kind: "folder", layer: "work", label: "03-work", children: [
      {
        key: "iterations", kind: "folder", layer: "work", label: "iterations", children: [
          {
            key: "iteration-01", kind: "folder", layer: "work", label: "iteration-01", children: [
              { key: "design",    kind: "folder", layer: "work", label: "design" },
              { key: "prototype", kind: "folder", layer: "work", label: "prototype" },
              { key: "analysis.md", kind: "file", layer: "work", label: "analysis.md" },
            ],
          },
          { key: "iteration-02", kind: "folder", layer: "work", label: "iteration-02" },
        ],
      },
    ],
  },
  {
    key: "04-review", kind: "folder", layer: "review", label: "04-review", children: [
      { key: "critiques",   kind: "folder", layer: "review", label: "critiques" },
      { key: "comparisons", kind: "folder", layer: "review", label: "comparisons" },
      { key: "approved",    kind: "folder", layer: "review", label: "approved" },
    ],
  },
  {
    key: "meta", kind: "folder", layer: "meta", label: "meta", children: [
      { key: "project-brief.md", kind: "file", layer: "meta", label: "project-brief.md" },
      { key: "changelog.md",     kind: "file", layer: "meta", label: "changelog.md" },
      { key: "agent-notes.md",   kind: "file", layer: "meta", label: "agent-notes.md" },
    ],
  },
];

function TreeLegend() {
  const items = [
    { label: "00 Raw",      cls: "text-emerald-400" },
    { label: "01 Frame",    cls: "text-blue-400" },
    { label: "02 Context",  cls: "text-ember-300" },
    { label: "03 Work",     cls: "text-bone-100" },
    { label: "04 Review",   cls: "text-emerald-400" },
    { label: "Meta",        cls: "text-bone-300" },
  ];
  return (
    <div className="flex flex-wrap gap-3 mb-5">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-1.5 text-xs">
          <span className={`w-2.5 h-2.5 rounded-sm ${it.cls.replace("text-", "bg-")} opacity-60`} />
          <span className={`${it.cls} font-medium`}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

function NodeRow({ node, depth, openSet, toggle }) {
  const c = COL[node.layer] || COL.meta;
  const isOpen = openSet.has(node.key);
  const hasKids = Array.isArray(node.children) && node.children.length > 0;

  return (
    <div>
      <button
        onClick={() => hasKids && toggle(node.key)}
        className="flex items-center gap-2 text-left w-full rounded-md px-2 py-1.5 transition-colors hover:bg-bone-0/5"
        style={{ paddingLeft: `${depth * 18 + 8}px` }}
      >
        {node.kind === "folder" ? (
          <FolderIcon open={isOpen} tint={c.folder} />
        ) : (
          <FileIcon tint={c.folder} />
        )}
        <span className={`text-sm font-medium ${c.num} ${node.kind === "folder" ? "" : "opacity-80"}`}>
          {node.label}
        </span>
        {hasKids && (
          <span className="ml-auto text-[10px] text-bone-300/50">
            {isOpen ? "−" : "+"}
          </span>
        )}
      </button>

      {hasKids && isOpen && (
        <div>
          {node.children.map((child) => (
            <NodeRow key={child.key} node={child} depth={depth + 1} openSet={openSet} toggle={toggle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FolderTree() {
  const [openSet, setOpenSet] = useState(() => new Set(["root"]));

  const toggle = (key) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <figure className="not-prose diagram-frame">
      <TitleBar title="FolderTree — Workspace Structure" />
      <div className="relative w-full bg-ink-100 rounded-b-xl p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          <TreeLegend />
          <div className="rounded-lg border border-bone-300/10 bg-ink-150 p-4">
            <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
              <FolderIcon open tint="text-bone-200" />
              <span className="text-sm font-semibold text-bone-0">problem-workspace/</span>
            </div>
            {tree.map((node) => (
              <NodeRow key={node.key} node={node} depth={1} openSet={openSet} toggle={toggle} />
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
