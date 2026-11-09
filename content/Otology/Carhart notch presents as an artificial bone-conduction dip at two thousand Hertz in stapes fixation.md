---
title: "Carhart notch presents as an artificial bone-conduction dip at two thousand Hertz in stapes fixation"
tier: "Tier IV: Otosclerosis, Stapes Surgery, Bone Conduction & Cochlear Implantation"
tags:
  - otology
  - audiology
  - carhart-notch
  - otosclerosis
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Carhart Notch"
  - "Carhart Effect"
  - "Bone Conduction Artifact"
  - "2000 Hz Dip"
---

# Carhart notch presents as an artificial bone-conduction dip at two thousand Hertz in stapes fixation

## Active Recall

> [!question]- At what audiometric frequency is the Carhart notch deepest in patients with otosclerosis?
> *Answer / Clinical Rationale*: At **$2,000\text{ Hz}$** (demonstrating an artificial $\approx 15\text{-dB}$ bone-conduction threshold elevation).

> [!question]- Why does the Carhart notch occur in stapes fixation?
> *Answer / Clinical Rationale*: Because stapes ankylosis **abolishes the inertial component of bone conduction** (which resonates maximally at $2\text{ kHz}$).

## Core Clinical & Mechanistic Principles
The **Carhart notch** is a pathognomonic audiometric phenomenon observed in patients with stapes footplate fixation ([[Otosclerosis is characterized by abnormal bone remodeling of the otic capsule causing stapes fixation|otosclerosis]]):
- **Audiometric Manifestation**:
  - A characteristic **apparent elevation (worsening) of bone-conduction (BC) thresholds**, with a maximum dip centered specifically at **$2,000\text{ Hz}$** ($5\text{ dB}$ at $500\text{ Hz}$, $10\text{ dB}$ at $1,000\text{ Hz}$, **$15\text{ dB}$ at $2,000\text{ Hz}$**, $5\text{ dB}$ at $4,000\text{ Hz}$).
- **The "Mechanical Artifact" Pathophysiology**:
  - Normal bone-conduction hearing is composed of three distinct mechanisms:
    1. **Inertial Component**: Skull vibration causes the ossicular chain to lag behind due to inertia, driving the stapes in and out of the oval window (dominant at $1\text{–}2\text{ kHz}$).
    2. **Compressional Component**: Skull vibrations compress the cochlear capsule directly, displacing fluid.
    3. **Osseotympanic Component**: Vibrations of the bony canal radiate into the air canal.
  - **Stapes Ankylosis abolishes the Inertial Ossicular Component**: The fixed stapes cannot vibrate relative to the skull, artificially elevating the bone conduction threshold at the resonant frequency of the ossicular chain ($2,000\text{ Hz}$).

```mermaid
%% Carhart Notch Biomechanics and Resolution
flowchart TD
  N1(["Stapes Footplate Ankylosis in Clinical Otosclerosis"]) --> N2["Loss of Stapedial Annular Ligament Compliance"]
  N2 --> N3{"Three Bone Conduction Hearing Mechanisms"}
  N3 -->|"Ossicular Inertial Component (Impaired by Rigid Stapes Fixation)"| N4["Inertial Loss"]
  N3 -->|"Compressional / Distortional Inner Ear Component (Partially Attenuated)"| N5["Compressional Loss"]
  N3 -->|"Osseotympanic Middle Ear Resonance (~2000 Hz Peak Loss)"| N6["Resonance Loss"]
  N4 --> N7["Artificial Bone-Conduction Threshold Elevation Specifically at 2000 Hz (Carhart Notch: 15 dB Dip)"]
  N5 --> N7
  N6 --> N7
  N7 --> N8["Stapedotomy / Stapedectomy with Piston Insertion Restores Ossicular Mobility"]
  N8 --> N9["Over-Closure of Air-Bone Gap: True Sensorineural Bone Threshold Normalizes"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4,N5,N6 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7 red
```

### Surgical Technique & Critical Safety Checks
- **Postoperative Resolution**: Following successful stapedotomy/[[Stapedotomy utilizes a micro-drill or laser fenestration of the posterior footplate|stapedectomy]], the inertial ossicular mechanism is restored, and the **Carhart notch completely resolves (recovering 10–15 dB of bone conduction)**.

## Connected Concepts & Graph Traversal
- **Otosclerosis Pathology**: [[Otosclerosis is characterized by abnormal bone remodeling of the otic capsule causing stapes fixation|Otosclerosis Footplate Pathology]]
- **Definitive Surgical Repair**: [[Stapedotomy utilizes a micro-drill or laser fenestration of the posterior footplate|Stapedotomy Micro-Fenestration]]
- **Audiometric Masking Validation**: [[Audiometric masking with the plateau method prevents shadow responses from the non-test ear|Hood Plateau Masking]]
- **Middle Ear Transformer Physics**: [[The middle ear transformer ratio provides twenty-seven decibels of acoustic impedance matching|Middle Ear Transformer Ratio]]
- **Tuning Fork Evaluation**: [[Tuning fork tests utilize the 512-Hertz fork to differentiate conductive from sensorineural hearing loss via Weber and Rinne tests|Weber & Rinne Fork Tests]]
