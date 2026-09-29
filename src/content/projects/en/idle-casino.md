---
title: Idle Casino Conquest
summary: A pixel-art idle/tycoon game about growing a casino. Released on itch.io.
order: 2
badge: { text: Playable, tone: green }
tags: [Unity 6, C#, Pixel art]
cover: ../../../assets/projects/casino-cover.jpg
coverAlt: The casino late in the game, full of machines and customers
facts:
  - label: Context
    value: Bachelor game project
  - label: Year
    value: "2025"
  - label: Engine
    value: Unity 6, C#
links:
  - label: Play on itch.io
    url: https://lebape.itch.io/incremental-casino-expansion
  - label: Source code
    url: https://github.com/ChrisGardian/incremental-casino-expansion
gallery:
  - src: ../../../assets/projects/casino-midgame.jpg
    alt: Mid-game, with the first machine lines unlocked
  - src: ../../../assets/projects/casino-upgrades.jpg
    alt: The upgrade tree that drives the whole progression
---

## The game

The player runs a casino: they unlock **machine lines** (slots, blackjack, roulette…), attract **customers** who come to play, and reinvest the earnings in an **upgrade tree**. Two resources drive the game: **money**, which the casino earns when customers lose, and **popularity**, which rises when they leave happy and brings in more people.

The project had to document both the game design and the technical implementation.

## Architecture

- **Data separated from code**: machines, customers, lines and upgrade nodes are all configured in *ScriptableObjects*. Balancing the game doesn't require touching the code.
- **Customers driven by a state machine** (idle → walking → playing → leaving), with an overall patience and a per-machine patience.
- **Event-based coordination**: a central system assigns idle customers to freed-up seats, without customers and machines knowing about each other.
- **Generic upgrade tree**: each node applies a list of typed effects (more machines, customer speed, VIP customers, unlocking UI panels…). More than 20 effect types are implemented.
- **Editor tooling**: a custom inspector and a tool that generates the upgrade tree, to iterate quickly on balancing.
