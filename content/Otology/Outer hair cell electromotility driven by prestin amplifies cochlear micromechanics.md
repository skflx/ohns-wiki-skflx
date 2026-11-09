---
title: "Outer hair cell electromotility driven by prestin amplifies cochlear micromechanics"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - cochlea
  - outer-hair-cells
  - prestin
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch2, p.8–9"
aliases:
  - "Outer Hair Cell Electromotility"
  - "Prestin Motor Protein"
  - "Cochlear Amplifier"
---

# Outer hair cell electromotility driven by prestin amplifies cochlear micromechanics

## Active Recall

> [!question]- What motor protein in the outer hair cell lateral membrane drives electromotility?
> *Answer / Clinical Rationale*: **Prestin (SLC26A5)**.

> [!question]- How much hearing sensitivity gain (in decibels) is provided by the active cochlear amplifier?
> *Answer / Clinical Rationale*: Approximately **$40\text{ to }50\text{ dB}$** of gain and sharp frequency tuning.

## Core Clinical & Mechanistic Principles
The mammalian cochlea possesses an active biological amplifier that sharpens [[The traveling wave along the basilar membrane establishes tonotopic frequency organization|frequency]] selectivity and increases hearing sensitivity by **$40\text{–}50\text{ dB}$**:
- **The Cellular Motor**: **Outer Hair Cells (OHCs)** (organized in 3 rows; $\approx 12,000$ cells).
- **The Molecular Motor Protein**: **Prestin (SLC26A5)**:
  - Densely packed in the lateral plasma membrane of OHCs.
  - Functions as a voltage-sensitive motor that undergoes rapid conformational changes in response to transmembrane potential fluctuations without requiring ATP hydrolysis.
- **Electromotility Mechanics**:
  - Depolarization (influx of $\text{K}^+$ via stereocilia tip links) causes OHCs to **contract / shorten**.
  - Hyperpolarization causes OHCs to **elongate**.
  - This cycle injects mechanical energy back into the basilar membrane at acoustic frequencies (up to $>20\text{ kHz}$), amplifying the vibration peak for inner hair cell stimulation.

```mermaid
%% Outer Hair Cell Prestin Electromotility Amplification
flowchart TD
  N1(["Traveling Wave Deflects Basilar Membrane Upward into Scala Media"]) --> N2["Stereocilia Bundles of Outer Hair Cells (OHC) Shear Against Rigid Tectorial Membrane"]
  N2 --> N3["Mechanical Opening of MET (Mechanotransduction) Ion Channels at Stereocilia Tips"]
  N3 --> N4["Potassium (K+) from Scala Media Endolymph (+80 mV) Influxes into OHC Body"]
  N4 --> N5["Depolarizes OHC Intracellular Membrane Potential"]
  N5 --> N6{"Prestin Voltage-Sensor Activation"}
  N6 --> N7["Prestin (SLC26A5) Motor Proteins in Lateral OHC Membrane Undergo Conformational Contraction"]
  N6 --> N8["OHC Somatic Length Shortens Vertically (Hyperpolarization -> Lengthening)"]
  N6 --> N9["Feeds Mechanical Energy Back into Basilar Membrane: 40-50 dB Gain Amplification & Sharp Frequency Tuning"]
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N2 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N4,N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N9 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7,N8 purple
```

### Surgical Technique & Critical Safety Checks
- **Otoacoustic Emissions (OAEs)**: By-product of OHC electromotility; retrograde acoustic energy travels back through the ossicles and vibrates the tympanic membrane.

## Connected Concepts & Graph Traversal
- **OAE Functional Readout**: [[Otoacoustic emissions evaluate outer hair cell integrity and differentiate cochlear from auditory neuropathy spectrum disorder|Otoacoustic Emissions]]
- **Endocochlear Driving Battery**: [[The stria vascularis generates the endocochlear potential of positive eighty millivolts|Stria Vascularis +80 mV Potential]]
- **Basilar Membrane Tonotopy**: [[The traveling wave along the basilar membrane establishes tonotopic frequency organization|Traveling Wave Tonotopy]]
- **Ototoxic Hair Cell Damage**: [[Platinum and aminoglycoside ototoxicity mandates baseline and serial high-frequency audiometric monitoring|Aminoglycoside Outer Hair Cell Loss]]
- **Sensorineural Presbycusis**: [[Presbycusis produces symmetric high-frequency sensorineural loss with disproportionate speech-in-noise decline|Sensory Presbycusis]]
