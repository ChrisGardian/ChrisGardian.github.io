---
title: Real-Time Lip Sync
summary: An Unreal Engine client that animates a MetaHuman's face in real time on an LLM-generated voice.
order: 1
featured: true
label: Bachelor thesis
youtubeId: "mfxO03slr0A"
tags: [Unreal 5.5, C++, MetaHuman, LiveLink]
cover: ../../../assets/projects/lipsync-cover.jpg
coverAlt: Ada, a MetaHuman avatar, speaking in the demo scene
stats:
  - value: "~2 s"
    label: end-to-end latency
  - value: "57"
    label: automatically measured runs
  - value: "99.7%"
    label: of client time spent on audio analysis
facts:
  - label: Context
    value: Bachelor thesis, "Meta-Serious Game" project
  - label: Year
    value: "2026"
  - label: Engine
    value: Unreal Engine 5.5
  - label: Role
    value: Design, development and evaluation
gallery:
  - src: ../../../assets/projects/lipsync-scene.jpg
    alt: The final demo scene, during one of Ada's answers
  - src: ../../../assets/projects/lipsync-editor.jpg
    alt: The DemoScenarioActor in the editor, with its lip sync, blink and animation settings
  - src: ../../../assets/projects/lipsync-visemes.jpg
    alt: Test map for tuning each viseme's weight by hand
---

## The problem

The "Meta-Serious Game" project already has a REST middleware that lets the player talk to NPCs through a large language model (LLM). But while the NPC answers, the web client only shows a **still image**: the text is believable, the scene is not.

The goal of my thesis: an **Unreal Engine** client where a **MetaHuman** actually speaks the answer, around one research question: *what latency and quality budgets does the exchange need to feel both responsive and believable?*

## The pipeline

1. The middleware returns the LLM answer and the synthesized audio.
2. The client analyzes the audio with **Rhubarb Lip Sync**, which extracts a sequence of **visemes** (mouth shapes).
3. Each viseme is converted into **ARKit** blendshape curves, interpolated to smooth the transitions.
4. A **custom `ILiveLinkSource` written in C++** pushes these curves into the MetaHuman's facial rig (RigLogic), frame by frame.
5. Simple animations complete it: random eye blinks and an idle body animation (retargeted from Mixamo).

## Evaluation

- **Technical**: every step of the pipeline is timed and automatically logged to a CSV file, over **57 runs**.
- **Perceptual**: a two-round, video-based pilot study (15 responses in total) to judge how believable the animation is.

## Results

- Around **2 seconds** of end-to-end latency, split almost evenly between the network round trip to the middleware and the Rhubarb analysis.
- On the client side, audio analysis alone accounts for **99.7%** of the time: that's the bottleneck to tackle first.
- On quality, the mere **presence** of viseme-based lip sync and a few idle animations is enough to make the exchange believable, regardless of how finely it is tuned.
