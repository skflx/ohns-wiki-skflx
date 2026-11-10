---
title: "cVEMP evaluates the saccule and inferior vestibular nerve via uncrossed sternocleidomastoid inhibition"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - vestibular
  - cvemp
  - saccule
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch43, p.782"
aliases:
  - "cVEMP"
  - "Cervical VEMP"
  - "Saccular Reflex"
  - "Vestibulocollic Reflex"
---

# cVEMP evaluates the saccule and inferior vestibular nerve via uncrossed sternocleidomastoid inhibition

## Active Recall

> [!question]- What is the characteristic biphasic wave complex of cVEMP and its normal peak latencies?
> *Answer / Clinical Rationale*: The **p13–n23 complex** (initial positive peak at $\approx 13\text{ ms}$, negative peak at $\approx 23\text{ ms}$).

> [!question]- Why must the patient actively contract their neck musculature during cVEMP testing?
> *Answer / Clinical Rationale*: Because cVEMP is an **inhibitory reflex**; an existing baseline motor unit contraction in the SCM is required to record the transient dip in electrical activity.

## Core Clinical & Mechanistic Principles
**Cervical Vestibular Evoked Myogenic Potential (cVEMP)** measures the vestibulocollic reflex:
- **Physiological Basis & Sensory Plane**: The **saccular macula** is oriented in the **parasagittal (vertical) plane**, making it the primary otolithic organ detecting **linear acceleration in the vertical axis** (e.g., gravitational load, elevator translation, vertical jumping).
- **Neural Reflex Arc**:
  1. Acoustic stimulus ($500\text{-Hz}$ tone burst) activates the **saccular macula**.
  2. Signal travels along the **inferior vestibular nerve (IVN)** to the lateral vestibular (Deiters) nucleus.
  3. Descends via the **medial vestibulospinal tract (MVST)** uncrossed.
  4. Inhibits motor neurons in the spinal accessory nucleus (CN XI), producing transient **ipsilateral SCM muscle inhibition**.
- **Waveform Characteristics**:
  - Biphasic waveform: Positive peak at **$\approx 13\text{ ms}$ (p13)** followed by a negative peak at **$\approx 23\text{ ms}$ (n23)**.
- **Recording Technique**:
  - Patient must actively contract the SCM (head turned against resistance or elevated supine); amplitude is proportional to tonic muscle contraction.

```mermaid
%% cVEMP Sacculo-Collic Reflex Circuit
flowchart TD
  N1(["High-Intensity Acoustic Tone Burst (500 Hz: 95-105 dB nHL) Delivered to Ear"]) --> N2["Acoustic Deflection of Otolith Crystals within SACCULAR MACULA"]
  N2 --> N3["Afferent Action Potentials Travel along INFERIOR VESTIBULAR NERVE"]
  N3 --> N4["Synapses in Lateral Vestibular Nucleus (Deiters Nucleus) in Brainstem"]
  N4 --> N5["Descending Uncrossed Medial Vestibulospinal Tract (MVST) to Spinal Accessory CN XI Nucleus"]
  N5 --> N6["Inhibitory Motor Outflow to Ipsilateral Tonically Contracted SCM Muscle"]
  N6 --> N7["Produces Characteristic Biphasic Inhibitory Waveform: Positive Peak p13 (~13 ms) & Negative Peak n23 (~23 ms)"]
  N7 --> N8["Third-Window Diagnostic Threshold Check (SCDS)"]
  N8 -->|"cVEMP Threshold <=70-80 dB nHL + Giant Amplitude"| N9["Confirms Superior Semicircular Canal Dehiscence (SCDS)"]
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N3 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N2 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4,N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N6,N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9 red
```

### Surgical Technique & Critical Safety Checks
- **Asymmetry Ratio (AR)**: $\text{AR} = \frac{|A_L - A_R|}{A_L + A_R} \times 100\%$. An $\text{AR} > 35\text{–}40\%$ indicates saccular or [[oVEMP evaluates the utricle and superior vestibular nerve via crossed inferior oblique excitation|inferior]] nerve paresis.

## Connected Concepts & Graph Traversal
- **Utricular Crossed Diagnostic Pair**: [[oVEMP evaluates the utricle and superior vestibular nerve via crossed inferior oblique excitation|oVEMP Utricular Pair]]
- **Third-Window Acoustic Thresholds**: [[Superior semicircular canal dehiscence SCDS presents with Tullio phenomenon and sound-induced vertigo|SCDS Third-Window Hypersensitivity]]
- **High-Resolution CT Poschl Views**: [[High-resolution temporal bone CT with Poschl and Stenvers reformatting confirms superior canal dehiscence|Poschl & Stenvers CT Views]]
- **Endolymphatic Hydrops Monitoring**: [[Electrocochleography SP to AP ratio exceeding zero point four indicates endolymphatic hydrops|ECoG in Hydrops]]
- **Vestibular Neuritis Localization**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Inferior Vestibular Neuritis]]
