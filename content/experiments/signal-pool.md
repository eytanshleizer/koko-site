---
title: Signal Pool
date: 2026-05-01
tags:
  - experiment
  - webgl
  - interactive
description: A reactive field of light particles that respond to attention. A study in ambient interfaces.
kind: webgl
status: live
---

> Move your cursor across the surface. The particles notice.

<div style="position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;border:1px solid rgba(34,211,238,0.25);background:#06060a;margin:1.5rem 0 2rem;">
  <iframe
    src="../static/experiments/signal-pool/index.html"
    style="position:absolute;inset:0;width:100%;height:100%;border:0;"
    loading="lazy"
    title="Signal Pool experiment"
  ></iframe>
</div>

## What it is

A small canvas full of points that drift, settle, and react. Each particle is a tiny oscillator with a memory of the cursor.

## Why

I wanted to feel the difference between an interface that **answers** and one that **listens**. Most UI is the former. The interesting space is the latter.

## What's next

- Sound. Each particle as a voice.
- A second mode where the field drives the cursor instead.
- Persistence — let the field learn from many visitors.
