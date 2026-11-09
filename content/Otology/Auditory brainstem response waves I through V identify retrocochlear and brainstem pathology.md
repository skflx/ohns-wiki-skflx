---
title: "Auditory brainstem response waves I through V identify retrocochlear and brainstem pathology"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - audiology
  - abr
  - retrocochlear
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch15, p.305"
aliases:
  - "Auditory Brainstem Response"
  - "ABR"
  - "BERA"
  - "Auditory Evoked Potentials"
---

# Auditory brainstem response waves I through V identify retrocochlear and brainstem pathology

## Active Recall

> [!question]- What anatomical structure generates Wave I of the ABR?
> *Answer / Clinical Rationale*: The **distal segment of the cochlear nerve (CN VIII)** near the spiral lamina.

> [!question]- What interaural Wave V latency difference ($IT_5$) threshold suggests retrocochlear pathology (e.g., vestibular schwannoma)?
> *Answer / Clinical Rationale*: An **$IT_5 > 0.4\text{ ms}$** difference between ears.

## Core Clinical & Mechanistic Principles
The **Auditory Brainstem Response (ABR)** records far-field surface electrical potentials generated within the first **$10\text{ milliseconds}$** following [[Acoustic reflex thresholds and reflex decay testing identify retrocochlear lesions and facial nerve pathology|acoustic]] click stimulation:
- **Anatomical Wave Generators (E-COLI Mnemonic)**:
  - **Wave I**: Distal (cochlear) segment of the **Auditory Nerve (CN VIII)**.
  - **Wave II**: Proximal (brainstem) segment of the **Auditory Nerve** / **Cochlear Nucleus**.
  - **Wave III**: **Superior Olivary Complex (SOC)** in lower pons.
  - **Wave IV**: **Lateral Lemniscus** in mid-pons.
  - **Wave V**: **Inferior Colliculus** in midbrain / Lateral lemniscus termination.
- **Diagnostic Interpeak Latency Norms (Click at 70–80 dB nHL)**:
  - **I–III Interpeak Latency**: Normal $\approx 2.0\text{ ms}$.
  - **III–V Interpeak Latency**: Normal $\approx 1.8\text{ ms}$.
  - **I–V Interpeak Latency**: Normal $\approx 4.0\text{ ms}$.

```mermaid
%% ABR Wave Generators and Neurotologic Latency
flowchart TD
  N1(["Acoustic Click Stimulus (70-90 dB nHL) Scalp Electrode Far-Field Recording"]) --> N2{"ABR Positive Peak Wave Sequence"}
  N2 -->|"Peripheral Components (Waves I & II: Distal to Proximal Auditory Nerve)"| N3{"Peripheral Peaks"}
  N3 --> N4["Wave I: Distal Auditory Nerve Segment at Cochlea (~1.6 ms)"]
  N3 --> N5["Wave II: Proximal Auditory Nerve at Brainstem Entrance (~2.8 ms)"]
  N2 -->|"Central Brainstem Components (Waves III, IV, V: Pons to Midbrain)"| N6{"Central Peaks"}
  N6 --> N7["Wave III: Ventral Cochlear Nucleus in Lower Pons (~3.8 ms)"]
  N6 --> N8["Wave IV: Superior Olivary Complex in Mid-Pons (~4.6 ms)"]
  N6 --> N9["Wave V: Lateral Lemniscus & Inferior Colliculus (~5.6 ms)"]
  N9 --> N10{"Diagnostic Criteria for Retrocochlear Lesion (Vestibular Schwannoma)"}
  N10 --> N11["Wave I-V Interpeak Latency Prolongation (>4.4 ms) or Interaural Wave V Latency Difference (ITD >0.4 ms)"]
  N10 --> N12["Triggers Mandatory Contrast-Enhanced MRI IAC / Brain"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N4 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N5 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N11,N12 red
```

### Surgical Technique & Critical Safety Checks
- **Retrocochlear Tumor Criteria**:
  1. Interaural Wave V latency difference (**$IT_5 > 0.4\text{ ms}$**).
  2. Absolute Wave V latency $>6.1\text{ ms}$.
  3. Prolonged I–V interpeak interval ($>4.4\text{ ms}$).
  4. Poor morphology or absence of waves III and V with intact Wave I.

## Connected Concepts & Graph Traversal
- **Wave Generators Anatomy**: [[Wave I of the ABR arises from the distal auditory nerve while wave V originates at the lateral lemniscus and inferior colliculus|ABR Generators]]
- **Retrocochlear Pathology**: [[Vestibular schwannomas arise from the Schwann cell sheath of the inferior or superior vestibular nerve|Vestibular Schwannoma Diagnosis]]
- **ANSD Differential**: [[Otoacoustic emissions evaluate outer hair cell integrity and differentiate cochlear from auditory neuropathy spectrum disorder|OAEs and ANSD]]
- **Stapedius Acoustic Reflex**: [[Acoustic reflex thresholds and reflex decay testing identify retrocochlear lesions and facial nerve pathology|Acoustic Reflex Decay Screening]]
- **Electrodiagnostic Cross-Check**: [[Electrocochleography SP to AP ratio exceeding zero point four indicates endolymphatic hydrops|ECoG vs ABR Far-Field Potentials]]
