---
title: Problem Cartographer
date: 2026-05-01
tags:
  - instrument
  - claude-skill
  - problem-exploration
description: A Claude skill that turns vague problem statements into a navigable map of terrain, edges, and unknowns.
kind: claude-skill
status: draft
---

> **Status:** Draft. The shape is real, the polish is not.

Most "problems" arrive as one-line summaries that hide three problems underneath. **Problem Cartographer** is a Claude skill that resists the urge to jump to solutions. Instead, it asks the questions that make the territory visible.

## What it does

Given a problem statement, the skill produces:

- A **terrain map** — the surrounding system, the actors, the constraints
- A list of **edges** — where this problem touches other problems
- The **unknowns** — what would have to be true for an answer to even exist
- A small set of **first questions** worth chasing before any solutioning starts

## Why it exists

Because most of the cost of being wrong is paid upstream of the work. Solving the wrong problem fast is worse than solving the right problem slowly.

## Coming soon

- Public skill bundle
- A walkthrough on a real problem
- Integration with a thinking-canvas experiment
