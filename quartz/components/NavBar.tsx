import { pathToRoot, resolveRelative, FullSlug } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface NavLink {
  label: string
  slug: string
}

interface Options {
  links?: NavLink[]
}

const defaults: Required<Options> = {
  links: [
    { label: "Home", slug: "" },
    { label: "Blog", slug: "posts" },
    { label: "Instruments", slug: "instruments" },
    { label: "Experiments", slug: "experiments" },
    { label: "About", slug: "about" },
  ],
}

export default ((opts?: Options) => {
  const options = { ...defaults, ...opts }

  const NavBar: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    const currentSlug = fileData.slug ?? ""
    const brand = cfg?.pageTitle ?? "Home"

    return (
      <nav class={classNames(displayClass, "navbar")}>
        <div class="navbar-inner">
          <a class="navbar-brand" href={baseDir}>
            <span class="navbar-brand-mark" aria-hidden="true" />
            <span class="navbar-brand-text">{brand}</span>
          </a>
          <ul class="navbar-links">
            {options.links.map((link) => {
              const target = link.slug === ""
                ? baseDir
                : resolveRelative(fileData.slug!, link.slug as FullSlug)
              const isActive =
                link.slug === ""
                  ? currentSlug === "index"
                  : currentSlug === link.slug || currentSlug.startsWith(`${link.slug}/`)
              return (
                <li>
                  <a
                    href={target}
                    class={classNames(undefined, "navbar-link", isActive ? "active" : "")}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }

  NavBar.css = `
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  margin: 0 0 2rem 0;
  padding: 0.75rem 0;
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  background: color-mix(in srgb, var(--light) 65%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--secondary) 18%, transparent);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none !important;
  color: var(--dark) !important;
  font-family: var(--titleFont);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.navbar-brand-mark {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: radial-gradient(circle at 32% 30%, var(--secondary) 0%, var(--tertiary) 55%, transparent 75%);
  box-shadow: 0 0 18px color-mix(in srgb, var(--secondary) 55%, transparent);
}

.navbar-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
}

.navbar-link {
  display: inline-block;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-family: var(--bodyFont);
  font-size: 0.92rem;
  font-weight: 500;
  color: color-mix(in srgb, var(--dark) 70%, transparent) !important;
  text-decoration: none !important;
  transition: color 180ms ease, background 180ms ease;
}

.navbar-link:hover {
  color: var(--dark) !important;
  background: color-mix(in srgb, var(--secondary) 12%, transparent);
}

.navbar-link.active {
  color: var(--dark) !important;
  background: color-mix(in srgb, var(--secondary) 18%, transparent);
}

@media (max-width: 720px) {
  .navbar-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .navbar-link {
    padding: 0.4rem 0.7rem;
    font-size: 0.85rem;
  }
}
`

  return NavBar
}) satisfies QuartzComponentConstructor<Options>
