import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"
import { classNames } from "../util/lang"

interface Column {
  kind: string
  label: string
  title: string
  accent: "magenta" | "cyan" | "violet"
  prefix: string
  more: SimpleSlug
  limit: number
}

interface Options {
  columns?: Column[]
}

const defaults: Required<Options> = {
  columns: [
    {
      kind: "blog",
      label: "Writing",
      title: "From the blog",
      accent: "magenta",
      prefix: "posts/",
      more: "posts" as SimpleSlug,
      limit: 3,
    },
    {
      kind: "instruments",
      label: "Built",
      title: "Instruments",
      accent: "violet",
      prefix: "instruments/",
      more: "instruments" as SimpleSlug,
      limit: 3,
    },
    {
      kind: "experiments",
      label: "Live",
      title: "Experiments",
      accent: "cyan",
      prefix: "experiments/",
      more: "experiments" as SimpleSlug,
      limit: 3,
    },
  ],
}

export default ((opts?: Options) => {
  const options = { ...defaults, ...opts }

  const FeaturedTriptych: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const sort = byDateAndAlphabetical(cfg)
    return (
      <section class={classNames(displayClass, "featured-triptych")}>
        <div class="ft-header">
          <span class="ft-eyebrow">Currents</span>
          <h2 class="ft-title">What's moving in the workshop</h2>
        </div>
        <div class="ft-grid">
          {options.columns.map((col) => {
            const items = allFiles
              .filter(
                (f: QuartzPluginData) =>
                  f.slug !== undefined &&
                  f.slug.startsWith(col.prefix) &&
                  !f.slug.endsWith(`${col.prefix}index`) &&
                  f.slug !== col.prefix.replace(/\/$/, ""),
              )
              .sort(sort)
              .slice(0, col.limit)

            return (
              <div class={`ft-col ft-accent-${col.accent}`}>
                <div class="ft-col-head">
                  <span class="ft-col-label">{col.label}</span>
                  <h3 class="ft-col-title">{col.title}</h3>
                </div>
                {items.length === 0 ? (
                  <div class="ft-empty">More soon.</div>
                ) : (
                  <ul class="ft-list">
                    {items.map((page) => {
                      const title = page.frontmatter?.title ?? "Untitled"
                      const desc =
                        (page.frontmatter as any)?.description ??
                        page.description ??
                        ""
                      return (
                        <li class="ft-item">
                          <a
                            class="ft-item-link"
                            href={resolveRelative(fileData.slug!, page.slug!)}
                          >
                            <div class="ft-item-title">{title}</div>
                            {desc && <div class="ft-item-desc">{desc}</div>}
                            {page.dates && (
                              <div class="ft-item-meta">
                                <Date date={getDate(cfg, page)!} locale={cfg.locale} />
                              </div>
                            )}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
                <a
                  class="ft-more"
                  href={resolveRelative(fileData.slug!, col.more)}
                >
                  All {col.title.toLowerCase()} →
                </a>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  FeaturedTriptych.css = `
.featured-triptych {
  padding: 5rem 0 3rem;
  border-top: 1px solid color-mix(in srgb, var(--secondary) 18%, transparent);
}

.ft-header {
  margin-bottom: 2.5rem;
}

.ft-eyebrow {
  display: block;
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--tertiary);
  margin-bottom: 0.6rem;
}

.ft-title {
  font-family: var(--titleFont);
  font-size: clamp(1.7rem, 3.6vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  border: none !important;
  padding: 0 !important;
  color: var(--dark);
}

.ft-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 900px) {
  .ft-grid { grid-template-columns: 1fr; }
}

.ft-col {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1.5rem 1.4rem;
  background: color-mix(in srgb, var(--lightgray) 70%, transparent);
  border: 1px solid color-mix(in srgb, var(--secondary) 16%, transparent);
  border-radius: 18px;
  overflow: hidden;
  transition: border-color 220ms ease, transform 220ms ease;
}

.ft-col::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  opacity: 0.55;
}

.ft-col:hover {
  border-color: color-mix(in srgb, var(--accent-color) 60%, transparent);
}

.ft-accent-magenta { --accent-color: #e879f9; }
.ft-accent-violet  { --accent-color: var(--secondary); }
.ft-accent-cyan    { --accent-color: var(--tertiary); }

.ft-col-head {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.ft-col-label {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-color);
}

.ft-col-title {
  font-family: var(--titleFont);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  border: none !important;
  padding: 0 !important;
  color: var(--dark);
}

.ft-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ft-item-link {
  display: block;
  padding: 0.85rem 0.95rem;
  border-radius: 12px;
  text-decoration: none !important;
  background: color-mix(in srgb, var(--light) 50%, transparent);
  border: 1px solid transparent;
  transition: background 200ms ease, border-color 200ms ease, transform 200ms ease;
}

.ft-item-link:hover {
  background: color-mix(in srgb, var(--accent-color) 8%, var(--light));
  border-color: color-mix(in srgb, var(--accent-color) 35%, transparent);
  transform: translateX(2px);
}

.ft-item-title {
  font-family: var(--titleFont);
  font-size: 1rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.2rem;
}

.ft-item-desc {
  font-family: var(--bodyFont);
  font-size: 0.85rem;
  line-height: 1.5;
  color: color-mix(in srgb, var(--dark) 70%, transparent);
  margin-bottom: 0.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ft-item-meta {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.7rem;
  color: color-mix(in srgb, var(--dark) 50%, transparent);
}

.ft-empty {
  font-family: var(--bodyFont);
  font-size: 0.9rem;
  color: color-mix(in srgb, var(--dark) 55%, transparent);
  padding: 0.75rem 0;
}

.ft-more {
  margin-top: auto;
  font-family: var(--bodyFont);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--accent-color) !important;
  text-decoration: none !important;
  letter-spacing: 0.01em;
}

.ft-more:hover {
  text-decoration: underline !important;
}
`

  return FeaturedTriptych
}) satisfies QuartzComponentConstructor<Options>
