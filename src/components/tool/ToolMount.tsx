import { useEffect, useState } from "react"

// Vite eager-globs all `App.jsx` files in tool folders. The keys are
// project-rooted paths; values are dynamic-import loaders. Resolving the
// right one happens at runtime so the [slug] route can render any tool
// without a static registry.
const APPS = import.meta.glob("/src/content/tools/*/App.jsx") as Record<
  string,
  () => Promise<{ default: React.ComponentType<any> }>
>

interface Props {
  slug: string
}

export default function ToolMount({ slug }: Props) {
  const [Comp, setComp] = useState<React.ComponentType<any> | null>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    const key = `/src/content/tools/${slug}/App.jsx`
    const loader = APPS[key]
    if (!loader) {
      setMissing(true)
      return
    }
    let cancelled = false
    loader().then(
      (mod) => {
        if (!cancelled) setComp(() => mod.default)
      },
      (err) => {
        console.error("[ToolMount] failed to load app:", err)
        if (!cancelled) setMissing(true)
      },
    )
    return () => {
      cancelled = true
    }
  }, [slug])

  if (missing) {
    return (
      <p className="font-mono text-[13px] text-bone-300">
        [missing App.jsx for "{slug}"]
      </p>
    )
  }
  if (!Comp) {
    return (
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-bone-300">
        Loading…
      </p>
    )
  }
  return <Comp />
}
