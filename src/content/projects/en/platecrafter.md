---
title: PlateCrafter
summary: A web app to design laboratory dilution plates and export them in GeneData format. Built as a team for a real client.
order: 4
badge: { text: Client project, tone: blue }
tags: [Django, Python, Docker]
cover: ../../../assets/projects/platecrafter-cover.svg
coverAlt: Illustration of a 96-well plate with a dilution gradient
facts:
  - label: Context
    value: Team project for a client
  - label: Year
    value: 2025–2026
  - label: Tech
    value: Django, Python, Docker
  - label: Contribution
    value: About half of the commits (88 of 166)
---

## The need

In a lab, preparing a **dilution plate** means distributing compounds and their concentrations across the wells of a plate, then producing the file that describes this plate for the analysis software. PlateCrafter automates this work in a web application.

## User flow

1. **Import compounds** from a spreadsheet (`.csv`, `.xlsx`, `.xls`, `.tsv`, `.ods`), with a step to map the file's columns to the expected fields.
2. **Create the plate**, either by hand or from predefined JSON **templates**.
3. **Visualize** the plate, with a gradient showing concentrations.
4. **Export to GeneData format.**

The interface is available in German and English.

## My contribution

I worked across the whole form flow: **input validation and error handling** (non-numeric columns, inconsistent control patterns, settings that can't place any compound), plate **orientation**, **filling several plates** in a row, color gradient based on well multiplicity, help texts and navigation between steps.

The project is covered by unit tests and by tests that compare the output against validated reference files. It deploys with Docker.
