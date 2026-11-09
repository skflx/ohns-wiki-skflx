---
title: "The Dix-Hallpike maneuver produces torsional upbeating nystagmus in posterior canal BPPV"
tier: "Tier V: Vestibular Disorders, Meniere Disease, BPPV & SCDS"
tags:
  - otology
  - vestibular
  - dix-hallpike
  - bppv-diagnosis
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch2, p.18–20"
aliases:
  - "Dix-Hallpike Maneuver"
  - "Dix-Hallpike Test"
  - "Posterior Canal Nystagmus"
  - "Nystagmus Dynamics"
---

# The Dix-Hallpike maneuver produces torsional upbeating nystagmus in posterior canal BPPV

## Active Recall

> [!question]- What are the direction and characteristics of nystagmus in a positive right posterior canal Dix-Hallpike test?
> *Answer / Clinical Rationale*: A **mixed torsional upbeating nystagmus** (top pole of eyes beating toward the right ear and upward toward the forehead), with a 2–10 sec latency and $<60\text{ sec}$ duration.

> [!question]- What happens to the direction of nystagmus when the patient returns to the upright seated position after a positive Dix-Hallpike test?
> *Answer / Clinical Rationale*: The nystagmus **reverses direction** (becoming torsional downbeating).

## Core Clinical & Mechanistic Principles
The **Dix-Hallpike maneuver** is the diagnostic gold standard for posterior semicircular canal [[Benign paroxysmal positional vertigo BPPV results from canalithiasis or cupulolithiasis in semicircular canals|BPPV]]:
- **Execution Protocol**:
  1. Patient sits upright on the exam table with head turned **$45^\circ$ toward the test ear**.
  2. Rapidly lay patient back into the supine position with the **head extended $20\text{–}30^\circ$ below the horizontal plane of the table** (maintaining $45^\circ$ turn).
  3. Observe eyes under Frenzel goggles / infrared VNG for at least 30–60 seconds.
- **Pathognomonic Nystagmus Profile (Posterior Canal Canalithiasis)**:
  - **Latency**: $2\text{–}10\text{ seconds}$ before onset of vertigo and nystagmus.
  - **Direction**: **Mixed torsional upbeating nystagmus**:
    - *Torsional Component*: Fast phase beats with the top pole of the eyes toward the **dependent (affected / down) ear**.
    - *Vertical Component*: Fast phase beats **upward (toward the forehead)**.
  - **Duration**: Paroxysmal, crescendo-decrescendo, resolving within **$<30\text{–}60\text{ seconds}$**.
  - **Reversal upon Sitting**: Upon returning to sitting, the nystagmus reverses direction (torsional downbeating).
  - **Fatigability**: Repeated testing produces progressively weaker responses.

```mermaid
%% Dix-Hallpike Maneuver and Posterior BPPV Nystagmus
flowchart TD
  N1(["Patient Seated Upright on Examination Table: Head Rotated 45° Toward Test Ear"]) --> N2["Rapid Decubitus Positioning: Lie Patient Flat with Head Extended 20-30° Below Horizontal"]
  N2 --> N3["Gravitational Force Drives Free-Floating Canalithiasis Otoconia Downward in Posterior Semicircular Canal"]
  N3 --> N4{"Characteristic 4-Phase Diagnostic Nystagmus Response"}
  N4 -->|"1. Latency Period (2 to 5 Seconds Before Onset of Vertigo / Nystagmus)"| N5["Inertial Otoconia Drag"]
  N4 -->|"2. Torsional-Upbeating Nystagmus (Top Pole of Eye Beats Toward Dependent Ear + Upward Component)"| N6["Classic Posterior BPPV Nystagmus"]
  N4 -->|"3. Crescendo-Decrescendo Duration (Paroxysm Lasts <30 to 60 Seconds)"| N7["Otoconia Settle in Dependent Arm"]
  N4 -->|"4. Fatigability & Reversal (On Sitting Upright, Nystagmus Reverses Direction to Downbeating)"| N8["Confirms Peripheral Posterior BPPV"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N3 red
```

### Surgical Technique & Critical Safety Checks
- **Anterior Canal BPPV**: Produces **torsional downbeating nystagmus** (top pole beating toward affected ear).

## Connected Concepts & Graph Traversal
- **Definitive Particle Repositioning**: [[The Epley particle repositioning maneuver clears otoconia from the posterior canal into the utricle|Epley Repositioning Maneuver]]
- **Horizontal Canal Diagnostic Maneuver**: [[Horizontal canal BPPV is diagnosed with the supine roll test and treated with the Lempert barbecue maneuver|Supine Roll Test for HC-BPPV]]
- **Nystagmus Biophysical Laws**: [[Ewald's laws and Alexander's law govern the directional dynamics and intensity of vestibular nystagmus|Ewald Laws of Semicircular Canals]]
- **Otolith Utricular Source**: [[oVEMP evaluates the utricle and superior vestibular nerve via crossed inferior oblique excitation|Utricular Otoconia Origin]]
- **Vestibular Neuritis Sparing**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Vestibular Neuritis Differential]]
