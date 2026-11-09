---
title: "The HINTS examination separates vestibular neuritis from posterior circulation stroke in acute vestibular syndrome"
tier: "Tier S: Vestibular Medicine Completion"
tags:
  - otology
  - vestibular
  - stroke
  - neuro-otology
  - emergency
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch2, p.20–21"
aliases:
  - "HINTS Exam"
  - "Acute Vestibular Syndrome"
  - "HINTS Plus"
---

# The HINTS examination separates vestibular neuritis from posterior circulation stroke in acute vestibular syndrome

## Active Recall

> [!question]- Why does a NORMAL head impulse test alarm rather than reassure in AVS?
> *Answer / Clinical Rationale*: An intact VOR with ongoing spontaneous nystagmus means the periphery is working — the lesion is central.

> [!question]- What does HINTS-plus add and which vascular territory does it catch?
> *Answer / Clinical Rationale*: Bedside hearing assessment; new SNHL flags AICA/labyrinthine artery infarction masquerading as labyrinthitis.

## Core Clinical & Mechanistic Principles
- Applies **only** to continuous [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|acute vestibular syndrome]] with spontaneous nystagmus — not to episodic or positional vertigo, where it is uninterpretable.
- Benign (peripheral) pattern: **abnormal head impulse** (corrective catch-up saccade), **unidirectional** horizontal nystagmus obeying Alexander's law, **no skew deviation**. A dangerous exam is any of: normal head impulse, direction-changing or vertical nystagmus, or skew.
- In experienced hands HINTS outperforms early diffusion MRI, which is **falsely negative in a meaningful fraction of posterior circulation strokes within the first 48 hours**.
- **HINTS-plus** adds bedside hearing: new unilateral loss in AVS raises AICA-territory infarct (labyrinthine artery), the exception to 'hearing loss means peripheral.'

```mermaid
%% HINTS Examination: Stroke vs Peripheral Vestibular Neuritis
flowchart TD
  N1(["Acute Vestibular Syndrome (AVS): Continuous Vertigo, Nausea, Nystagmus & Unsteady Gait >24 Hours"]) --> N2{"Three-Part Bedside HINTS Examination (More Sensitive than Early MRI-DWI <24h)"}
  N2 -->|"1. Head Impulse Test (HIT: High-Acceleration Angular Horizontal Impulse)"| N3{"HIT Findings"}
  N3 -->|"Normal HIT (Zero Corrective Saccade; Eye Remains Fixed on Target)"| N4["CENTRAL / STROKE SIGN (PICA/AICA Infarct)"]
  N3 -->|"Abnormal HIT (Overt Refixation Catch-Up Saccade Present)"| N5["PERIPHERAL SIGN (Vestibular Neuritis)"]
  N2 -->|"2. Nystagmus Directionality (Gaze-Evoked Nystagmus in Left & Right Gaze)"| N6{"Nystagmus Findings"}
  N6 -->|"Direction-Changing / Bidirectional / Pure Vertical Nystagmus"| N4
  N6 -->|"Unidirectional Horizontal-Torsional Nystagmus (Beats Away from Affected Ear Across All Gazes)"| N5
  N2 -->|"3. Test of Skew (Alternate Cover Test of Eyes)"| N7{"Skew Findings"}
  N7 -->|"Vertical Misalignment / Skew Deviation (Vertical Corrective Saccade on Uncovering)"| N4
  N7 -->|"Absent Skew (No Vertical Ocular Realignment)"| N5
  N4 ==>|"ANY 1 OF 3 Central Signs Present"| N8["EMERGENT STROKE CODE ACTIVATION + STAT CONTRAST BRAIN MRI / CTA"]
  N5 -->|"ALL 3 Signs Consistently Peripheral"| N9["Acute Vestibular Neuritis: Corticosteroid Taper + Early Vestibular Rehabilitation"]
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N8 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N9 green
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N4 red
```

### Management & Critical Safety Checks
- A dangerous or discordant exam is stroke-pathway activation regardless of a clean early MRI; a fully benign triad with a compatible story is treated as neuritis with [[Vestibular rehabilitation exploits adaptation habituation and substitution to recalibrate gaze and posture|vestibular rehabilitation]] and brief symptomatic suppression only.
- Chart the exam in components — a summary word without the three findings is not reviewable.

## Connected Concepts & Graph Traversal
- **Acute Peripheral Neuritis**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Vestibular Neuritis]]
- **vHIT High-Frequency Confirmation**: [[The video head impulse test vHIT identifies high-frequency angular vestibulo-ocular reflex deficits|vHIT Angular Deficits]]
- **Nystagmus Directional Laws**: [[Ewald's laws and Alexander's law govern the directional dynamics and intensity of vestibular nystagmus|Alexander Law of Nystagmus]]
- **Caloric Paresis Confirmation**: [[Bithermal caloric testing calculates Jongkees formula to quantify unilateral vestibular paresis|Bithermal Caloric Testing]]
- **Suppurative Labyrinthitis Spread**: [[Labyrinthitis presents with acute prolonged vertigo combined with sudden sensorineural hearing loss|Suppurative Labyrinthitis]]
