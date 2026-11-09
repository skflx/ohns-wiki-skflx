---
title: "Cervical and ocular vestibular evoked myogenic potentials test saccular and utricular otolith function"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - vestibular
  - vemp
  - otolith-organs
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch15, p.312"
aliases:
  - "VEMP"
  - "Vestibular Evoked Myogenic Potentials"
  - "cVEMP and oVEMP"
  - "Otolith Function"
---

# Cervical and ocular vestibular evoked myogenic potentials test saccular and utricular otolith function

## Active Recall

> [!question]- Which otolith organ and vestibular nerve branch are evaluated by cVEMP vs. oVEMP?
> *Answer / Clinical Rationale*: **cVEMP evaluates the Saccule and Inferior Vestibular Nerve**; **oVEMP evaluates the Utricle and Superior Vestibular Nerve**.

> [!question]- What VEMP finding is pathognomonic for Superior Semicircular Canal Dehiscence (SCDS)?
> *Answer / Clinical Rationale*: **Pathologically lowered threshold ($<70\text{–}80\text{ dB nHL}$)** and abnormally large peak amplitudes.

## Core Clinical & Mechanistic Principles
**Vestibular Evoked Myogenic Potentials (VEMPs)** provide frequency-specific, non-invasive assessment of the otolith organs and their corresponding vestibular nerve branches:
- **Anatomical Complementarity**:
  - **Cervical VEMP (cVEMP)**: Tests the **Saccule** and **Inferior Vestibular Nerve (IVN)** via an uncrossed inhibitory reflex to the ipsilateral sternocleidomastoid (SCM) muscle.
  - **Ocular VEMP (oVEMP)**: Tests the **Utricle** and **Superior Vestibular Nerve (SVN)** via a crossed excitatory reflex to the contralateral inferior oblique (IO) extraocular muscle.
- **Acoustic Activation of Otoliths**:
  - High-intensity acoustic clicks or $500\text{-Hz}$ tone bursts ($95\text{–}100\text{ dB nHL}$) vibrate fluid across the maculae, triggering otolith firing.

```mermaid
%% cVEMP vs oVEMP Neural Pathway and Otolith Mapping
flowchart TD
  N1(["High-Intensity Acoustic Click / Tone Burst (95-105 dB nHL) or Bone Vibration"]) --> N2{"Select Otolith Pathway Modality"}
  N2 -->|"Cervical VEMP (cVEMP: Uncrossed Ipsilateral Sacculo-Collic Reflex)"| N4["Acoustic Stimulation of Saccule -> Inferior Vestibular Nerve (IVN)"]
  N4 --> N4B["Lateral Vestibular Nucleus -> Medial Vestibulospinal Tract (MVST)"]
  N4B --> N5["Ipsilateral Spinal Accessory Nerve (CN XI)"]
  N5 --> N6["Inhibitory Biphasic Wave (p13-n23) in Tonically Contracted Ipsilateral SCM"]
  N2 -->|"Ocular VEMP (oVEMP: Crossed Contralateral Utriculo-Ocular Reflex)"| N8["Vibration/Sound Stimulation of Utricle -> Superior Vestibular Nerve (SVN)"]
  N8 --> N8B["Vestibular Nuclei -> Decussates Across Medial Longitudinal Fasciculus (MLF)"]
  N8B --> N9["Contralateral Oculomotor Nucleus (CN III)"]
  N9 --> N10["Excitatory Biphasic Wave (n10-p15) in Contralateral Inferior Oblique Muscle"]
  N6 --> N11{"Third-Window Lesion Screening (SCDS / Large EVA)"}
  N10 --> N11
  N11 -->|"Reduced Acoustic Impedance (SCDS / EVA)"| N12(["Markedly Lowered Thresholds (<70-80 dB) & Supranormal Amplitudes"])
  N11 -->|"Vestibular Neuritis Localization"| N13(["Absent oVEMP = Superior VN; Absent cVEMP = Inferior VN"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N13 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4,N4B,N5,N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8,N8B,N9,N10 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N12 red
```

### Surgical Technique & Critical Safety Checks
- **Third Mobile Window Phenomenon**: In Superior Semicircular Canal Dehiscence ([[Superior semicircular canal dehiscence SCDS presents with Tullio phenomenon and sound-induced vertigo|SCDS]]), acoustic impedance is lowered, producing **pathologically reduced VEMP thresholds ($<70\text{–}80\text{ dB nHL}$)** and massive amplitudes.

## Connected Concepts & Graph Traversal
- **Saccular Diagnostic Mechanics**: [[cVEMP evaluates the saccule and inferior vestibular nerve via uncrossed sternocleidomastoid inhibition|cVEMP Mechanics]]
- **Utricular Diagnostic Mechanics**: [[oVEMP evaluates the utricle and superior vestibular nerve via crossed inferior oblique excitation|oVEMP Mechanics]]
- **Third-Window Acoustic Sensitivity**: [[Superior semicircular canal dehiscence SCDS presents with Tullio phenomenon and sound-induced vertigo|SCDS Third-Window Sound Evocation]]
- **Fluctuating Hydrops Staging**: [[Electrocochleography SP to AP ratio exceeding zero point four indicates endolymphatic hydrops|ECoG in Endolymphatic Hydrops]]
- **Vestibular Neuritis Localization**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Superior vs Inferior Vestibular Neuritis]]
