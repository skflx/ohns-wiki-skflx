---
title: "Scala tympani electrode array placement preserves residual hearing and avoids basilar membrane translocation"
tier: "Tier IV: Otosclerosis, Stapes Surgery, Bone Conduction & Cochlear Implantation"
tags:
  - otology
  - cochlear-implantation
  - scala-tympani
  - translocation
last_revised: 2026-11-03
status: complete
sources:
  - "KJLee"
aliases:
  - "Scala Tympani Placement"
  - "Array Translocation"
  - "Hearing Preservation CI"
  - "Intracochlear Trauma"
---

# Scala tympani electrode array placement preserves residual hearing and avoids basilar membrane translocation

## Active Recall

> [!question]- What catastrophic histological event occurs during electrode array translocation in cochlear implantation?
> *Answer / Clinical Rationale*: The electrode array **punctures through the basilar membrane and osseous spiral lamina**, tearing the organ of Corti and translocating into the scala vestibuli.

> [!question]- What are the clinical consequences of intracochlear electrode translocation?
> *Answer / Clinical Rationale*: **Complete loss of residual acoustic hearing**, elevated electrical stimulation thresholds, and poorer speech understanding.

## Core Clinical & Mechanistic Principles
Placement of the cochlear implant electrode array strictly within the **scala tympani (ST)** is the primary anatomical objective of atraumatic cochlear implant surgery:
- **Intracochlear Scala Architecture**:
  - **Scala Tympani (ST)**: The inferior chamber; located immediately adjacent to the spiral ganglion cell bodies in Rosenthal's canal.
  - **Scala Vestibuli (SV)**: The superior chamber; separated from the scala media by [[Endolymphatic hydrops results from impaired resorption of endolymph within the endolymphatic sac|Reissner]]'s membrane.
  - **Scala Media (Cochlear Duct)**: Houses the organ of Corti and basilar membrane.
- **The "Translocation" Hazard**:
  - If the electrode array deviates superiorly during insertion, it punctures the delicate **basilar membrane and osseous spiral lamina**, translocating from the scala tympani into the scala media or scala vestibuli.
  - **Consequences of Translocation**:
    1. **Immediate permanent destruction of residual acoustic hearing**.
    2. Mechanical laceration of spiral ganglion peripheral axons.
    3. Cross-talk and elevated electrical thresholds due to greater distance from the modiolus.

```mermaid
%% Scala Tympani Insertion and Translocation Prevention
flowchart TD
  N1(["Cochlear Implant Array Insertion: Lateral Wall Flexible Array vs Pre-Curved Peri-Modiolar Array"]) --> N2["Advance Array Gently through Round Window Portal along Outer Scala Tympani Wall"]
  N2 --> N3{"Maintain Strict Sub-Basilar Intrascalar Trajectory"}
  N3 -->|"Correct Scala Tympani Placement (Beneath Osseous Spiral Lamina & Basilar Membrane)"| N4{"Scala Tympani Advantages"}
  N4 --> N5["Spares Delicate Basilar Membrane & Organ of Corti Hair Cells from Mechanical Shear Trauma"]
  N4 --> N6["PRESERVES NATIVE LOW-FREQUENCY RESIDUAL ACOUSTIC HEARING (Electric-Acoustic Stimulation Candidate)"]
  N3 -->|"Basilar Membrane Translocation (Buckling Array Pierces Through to Scala Vestibuli)"| N7{"Translocation Disaster"}
  N7 --> N8["Direct Laceration of Spiral Ganglion Fibers + Permanent Destruction of Residual Acoustic Hearing"]
  N7 --> N9["Elevates Channel Interaction & Cross-Turn Stimulation Artifacts"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N9 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N6 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Surgical Technique & Critical Safety Checks
- **Electrode Designs**:
  - *Lateral Wall (Straight) Arrays*: Sit along the outer scalar wall; lowest insertion trauma, ideal for hearing preservation.
  - *Perimodiolar (Pre-curved) Arrays*: Hug the modiolus; closer proximity to spiral ganglion cells with lower electrical charge requirements.

## Connected Concepts & Graph Traversal
- **Round Window Insertion Craft**: [[Round window and extended round window insertions minimize intracochlear acoustic trauma|Round Window Insertion]]
- **Cochlear Implant Candidacy**: [[Cochlear implant candidacy criteria include severe to profound bilateral sensorineural hearing loss|CI Candidacy]]
- **Intraoperative NRT Verification**: [[Intraoperative neural response telemetry NRT confirms auditory nerve fiber stimulation|Neural Response Telemetry]]
- **Tonotopic Frequency Organization**: [[The traveling wave along the basilar membrane establishes tonotopic frequency organization|Basilar Membrane Tonotopy]]
- **Endocochlear Driving Potential**: [[The stria vascularis generates the endocochlear potential of positive eighty millivolts|Stria Vascularis]]
- **Combined Electric-Acoustic Rehabilitation**: [[Electroacoustic stimulation preserves residual low-frequency acoustic hearing while providing high-frequency electrical cochlear stimulation for steep high-frequency sensorineural loss|Electroacoustic Stimulation / Hybrid CI]]
