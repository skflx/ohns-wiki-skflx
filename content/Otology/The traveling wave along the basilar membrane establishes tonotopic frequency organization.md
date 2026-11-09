---
title: "The traveling wave along the basilar membrane establishes tonotopic frequency organization"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - cochlea
  - micromechanics
  - tonotopy
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch2, p.8"
aliases:
  - "Traveling Wave"
  - "Basilar Membrane Mechanics"
  - "Tonotopic Organization"
---

# The traveling wave along the basilar membrane establishes tonotopic frequency organization

## Active Recall

> [!question]- How do the physical dimensions and stiffness of the basilar membrane change from the base to the apex of the cochlea?
> *Answer / Clinical Rationale*: The basilar membrane changes from **narrow and stiff at the base** (high frequencies) to **wide and compliant at the apex** (low frequencies).

> [!question]- Why is presbycusis and ototoxicity characteristically high-frequency initially?
> *Answer / Clinical Rationale*: Because the **basal turn of the cochlea** experiences the highest mechanical wave energy and shear stress and is most susceptible to metabolic injury.

## Core Clinical & Mechanistic Principles
Acoustic energy transmitted to the stapes footplate initiates a fluid displacement wave in the perilymph of the scala vestibuli that propagates along the **basilar membrane (BM)**:
- **Biomechanical Gradient of the Basilar Membrane (von Békésy Principle)**:
  - **Base of Cochlea**: Narrow ($100\ \mu\text{m}$), stiff, and light; responds maximally to **high frequencies (up to $20\text{ kHz}$)**.
  - **Apex of Cochlea (Helicotrema)**: Wide ($500\ \mu\text{m}$), compliant/flaccid, and heavy; responds maximally to **low frequencies ($20\text{–}200\text{ Hz}$)**.
- **Wave Dynamics & Peak Resonance**:
  - The traveling wave starts at the base with high velocity and low amplitude, slows down as it propagates apically, and reaches a **sharp peak of maximum displacement** at its characteristic resonance frequency before abruptly dying out due to fluid damping.

```mermaid
%% Cochlear Traveling Wave and Tonotopic Mapping
flowchart TD
  N1(["Stapes Footplate In-and-Out Piston Motion at Oval Window"]) --> N2["Displaces Incompressible Cochlear Perilymph in Scala Vestibuli"]
  N2 --> N3["Generates Fluid Pressure Gradient Across Cochlear Partition (Scala Media)"]
  N3 --> N4["Propagates Hydrodynamic Traveling Wave from Basal Turn to Apex"]
  N4 --> N5{"Basilar Membrane Biomechanical Gradient"}
  N5 -->|"Basal Turn (Narrow (0.1 mm), Thick & Stiff Framework)"| N6["Resonates at High Frequencies (e.g. 8000-20,000 Hz)"]
  N5 -->|"Apical Turn (Wide (0.5 mm), Thin & Flaccid Framework)"| N7["Resonates at Low Frequencies (e.g. 20-500 Hz)"]
  N6 --> N8["Peak Wave Displacement Shears Stereocilia of Organ of Corti Hair Cells at That Exact Frequency Locus"]
  N7 --> N8
  N8 --> N9["Establishes Strict Tonotopic Frequency-Place Code Preserved Throughout Auditory Cortex"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2,N3,N4 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N9 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8 purple
```

### Surgical Technique & Critical Safety Checks
- **Clinical Relevance**: High-frequency hearing loss ([[Presbycusis produces symmetric high-frequency sensorineural loss with disproportionate speech-in-noise decline|presbycusis]], aminoglycoside/cisplatin ototoxicity, noise-induced acoustic trauma) selectively damages the vulnerable basal turn outer hair cells before apical turns are affected.

## Connected Concepts & Graph Traversal
- **Prestin Motor Amplification**: [[Outer hair cell electromotility driven by prestin amplifies cochlear micromechanics|Prestin Outer Hair Cell Motors]]
- **Endocochlear Driving Battery**: [[The stria vascularis generates the endocochlear potential of positive eighty millivolts|Stria Vascularis +80 mV Potential]]
- **High-Frequency Presbycusis**: [[Presbycusis produces symmetric high-frequency sensorineural loss with disproportionate speech-in-noise decline|Presbycusis High-Frequency SNHL]]
- **Cochlear Array Stimulation**: [[Scala tympani electrode array placement preserves residual hearing and avoids basilar membrane translocation|Scala Tympani Array Tonotopy]]
- **OAE Acoustic Distortion**: [[Otoacoustic emissions evaluate outer hair cell integrity and differentiate cochlear from auditory neuropathy spectrum disorder|Otoacoustic Emissions]]
