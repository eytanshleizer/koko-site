---
title: "Problem Frame"
excerpt: "A 30-second pass that turns a fuzzy problem into a Goal / Inputs / Constraints / Test handoff. For Claude, ChatGPT, or your own head."
kind: "doc"
tags: ["claude-skill", "framing", "prompt"]
date: 2026-05-01
source: "./prompt.md"
---

When you hand a problem to an agent — or to your own next-hour-self — the
shape of the handoff matters more than the model. Most bad outputs come
from a mis-framed handoff, not a weak model.

This is a small skill that takes a fuzzy problem statement and forces it
into four slots before any solving happens:

- **Goal** — what would "done" look like, in one line?
- **Inputs** — what does the agent have access to?
- **Constraints** — what's off-limits, and why?
- **Test** — how will we know we got it right?

Run it as a Claude project skill, paste it into a chat, or just keep it
near your editor as a reading lens.

The full prompt is below. Click **Copy raw** to grab it.
