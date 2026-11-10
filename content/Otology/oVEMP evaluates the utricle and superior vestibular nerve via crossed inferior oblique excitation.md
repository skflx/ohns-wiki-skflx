---
title: "oVEMP evaluates the utricle and superior vestibular nerve via crossed inferior oblique excitation"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - vestibular
  - ovemp
  - utricle
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch43, p.770"
aliases:
  - "oVEMP"
  - "Ocular VEMP"
  - "Utricular Reflex"
  - "Vestibulo-Ocular Otolith Reflex"
---

# oVEMP evaluates the utricle and superior vestibular nerve via crossed inferior oblique excitation

## Active Recall

> [!question]- What extraocular muscle is recorded during oVEMP testing, and which eye is measured relative to the stimulated ear?
> *Answer / Clinical Rationale*: The **contralateral inferior oblique muscle** (beneath the eye opposite the stimulated ear).

> [!question]- What is the initial wave complex and latency for oVEMP?
> *Answer / Clinical Rationale*: The **n10–p15 complex** (initial negative peak at $\approx 10\text{ ms}$).

## Core Clinical & Mechanistic Principles
**Ocular Vestibular Evoked Myogenic Potential (oVEMP)** evaluates the utriculo-ocular reflex:
- **Physiological Basis & Sensory Plane**: The **utricular macula** is oriented in the **horizontal plane**, making it the primary vestibular receptor detecting **linear acceleration in the horizontal axis** (e.g., car acceleration/braking, side-to-side translation) as well as static head tilt relative to gravity.
- **Neural Reflex Arc**:
  1. Sound or bone vibration activates the **utricular macula**.
  2. Signal ascends along the **superior vestibular nerve (SVN)** to the superior and medial vestibular nuclei.
  3. Decussates (crosses) via the **medial longitudinal fasciculus (MLF)** in the brainstem.
  4. Ascends to the contralateral oculomotor nucleus (CN III), causing transient **excitation of the contralateral inferior oblique extraocular muscle**.
- **Waveform Characteristics**:
  - Initial negative peak at **$\approx 10\text{ ms}$ (n10)** followed by a positive peak at **$\approx 15\text{ ms}$ (p15)**.
- **Recording Technique**:
  - Surface electrode placed on the infraorbital skin directly beneath the contralateral eye.
  - Patient maintains **maximal upward gaze ($30\text{–}35^\circ$)** to bring the inferior oblique muscle close to the recording electrode.

```mermaid
%% oVEMP Utriculo-Ocular Reflex Circuit
flowchart TD
  N1(["Vibrational / Acoustic Stimulus (Bone Conduction at Fz or 500 Hz Air Tone Burst)"]) --> N2["Shearing Deflection of Otolith Crystals within UTRICULAR MACULA"]
  N2 --> N3["Afferent Action Potentials Travel along SUPERIOR VESTIBULAR NERVE"]
  N3 --> N4["Synapses in Medial Vestibular Nucleus in Brainstem"]
  N4 --> N5["Ascends via Medial Longitudinal Fasciculus (MLF) & CROSSES MIDLINE in Midbrain"]
  N5 --> N6["Excitatory Motor Outflow via Oculomotor Nerve (CN III) to Contralateral Inferior Oblique Muscle"]
  N6 --> N7["Produces Excitatory Biphasic Waveform Recorded Beneath Contralateral Eye: n10 (~10 ms) & p15 (~15 ms)"]
  N7 --> N8["Third-Window SCDS Check: Giant Contralateral n10 Amplitude (>20-30 uV)"]
  N8 --> N9["Confirms Superior Semicircular Canal Dehiscence (SCDS Third Window)"]
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N3,N4 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N2 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N6,N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9 red
```

### Surgical Technique & Critical Safety Checks
- **Clinical Application**: Differentiates superior from inferior [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|vestibular neuritis]]; identifies utricular dysfunction in SCDS and otolith trauma.

## Connected Concepts & Graph Traversal
- **Saccular Uncrossed Diagnostic Pair**: [[cVEMP evaluates the saccule and inferior vestibular nerve via uncrossed sternocleidomastoid inhibition|cVEMP Saccular Pair]]
- **Third-Window Acoustic Thresholds**: [[Superior semicircular canal dehiscence SCDS presents with Tullio phenomenon and sound-induced vertigo|SCDS Third-Window Hypersensitivity]]
- **High-Resolution CT Poschl Views**: [[High-resolution temporal bone CT with Poschl and Stenvers reformatting confirms superior canal dehiscence|Poschl & Stenvers CT Views]]
- **BPPV Utricular Otoconia Source**: [[The Dix-Hallpike maneuver produces torsional upbeating nystagmus in posterior canal BPPV|Utricular Otoconia Origin]]
- **Vestibular Neuritis Localization**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Superior Vestibular Neuritis]]
