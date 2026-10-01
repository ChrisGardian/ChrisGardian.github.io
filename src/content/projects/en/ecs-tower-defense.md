---
title: ECS Tower Defense
summary: An architecture study in Unity DOTS, with the simulation fully in ECS and decoupled from rendering.
order: 4
badge: { text: In progress, tone: pink }
tags: [Unity DOTS, ECS, C#]
cover: ../../../assets/projects/ecs-cover.svg
coverAlt: Diagram of a path, enemies and a tower with its range
facts:
  - label: Context
    value: Personal project
  - label: Year
    value: "2026"
  - label: Tech
    value: Unity 6.6, Entities (DOTS)
  - label: Status
    value: In progress, phase 2
---

## The goal

This project is about learning Unity's **ECS** (Entity Component System) architecture, as opposed to classic object-oriented inheritance. Game design isn't the point: the mechanics of a classic tower defense are reused as-is, so all the effort goes into the structure of the code.

## Architecture

- **Simulation and rendering are separate.** All the logic (movement, targeting, shooting, damage) lives in ECS *components* and *systems*. Rendering uses regular GameObjects that only read the simulated state. This is deliberate: in 2026, DOTS' native 2D rendering is still too unstable.
- **Organized by layer**, not by entity: `Simulation/` knows nothing about rendering, `Presentation/` makes no decisions.
- **Narrow, reusable components** (often a single field), empty *tags* for entity identity, and the presence of a component to carry state (a tower "has a target" or not).
- **An event pattern**: one system detects a hit and adds a transient tag, another consumes it and applies the consequence. The source of the hit stays independent from its effects.
- **Enemy types are baked prefabs**. A destroyed enemy spawns its children at the same point on the path: adding an enemy type means adding a prefab.

## Method

The project moves forward in **phases** that must each run before moving on, with one git branch per feature and one tag per phase. Architecture decisions are written down as they're made, with their rationale and the signals that would justify revisiting them.

- **Phase 1 (done)**: an enemy with several layers of health follows a path, a tower targets it and shoots it.
- **Phase 2 (in progress)**: several enemy types and several towers at once, which is where ECS really pays off.
- **Next**: waves, economy, then player-placed towers.
