import { useState } from "react"

interface Props {
  source: string
  label?: string
}

export default function CopyRaw({ source, label = "Copy raw" }: Props) {
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(source)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard blocked — fall back to selection.
      const ta = document.createElement("textarea")
      ta.value = source
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      } finally {
        document.body.removeChild(ta)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-full border border-bone-500/25 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-bone-50 transition hover:border-bone-200/40 hover:text-bone-0"
    >
      {copied ? "Copied ✓" : label}
    </button>
  )
}
