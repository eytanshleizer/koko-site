import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Editorial dark palette
        ink: {
          0: "#000000",
          50: "#0a0a0a",
          100: "#111111",
          200: "#161616",
          300: "#1c1c1c",
          400: "#262626",
        },
        bone: {
          0: "#ffffff",
          50: "#fafafa",
          100: "#e6e6e6",
          200: "#a3a3a3",
          300: "#737373",
          400: "#525252",
          500: "#3d3d3d",
        },
        ember: {
          // single warm accent, used sparingly
          50: "#fff4ec",
          100: "#ffd9bd",
          200: "#ffb583",
          300: "#ff8a4c",
          400: "#f97316",
          500: "#ea580c",
        },
      },
      fontFamily: {
        sans: [
          "Inter Tight",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        tight: "-0.018em",
      },
      fontSize: {
        // editorial display scale
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        display: ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        prose: "68ch",
        page: "1200px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "orb-rotate": "orbRotate 60s linear infinite",
        "orb-pulse": "orbPulse 9s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        orbRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.04)", opacity: "0.95" },
        },
      },
    },
  },
  plugins: [typography],
}
