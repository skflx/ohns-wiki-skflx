---
title: "Overt and covert saccades on vHIT indicate peripheral vestibular hypofunction"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - vestibular
  - saccades
  - vhit
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch16, p.324"
aliases:
  - "Covert Saccades"
  - "Overt Saccades"
  - "Catch-up Saccades vHIT"
---

# Overt and covert saccades on vHIT indicate peripheral vestibular hypofunction

## Active Recall

> [!question]- What is the difference between a covert saccade and an overt saccade on vHIT?
> *Answer / Clinical Rationale*: **Covert saccades occur during head rotation** (invisible to naked eye), whereas **overt saccades occur after head rotation stops** (visible at bedside).

> [!question]- Why can a patient with severe vestibular hypofunction have a normal bedside head thrust test?
> *Answer / Clinical Rationale*: Because the patient has learned to generate **covert saccades during the thrust**, masking the eye lag from direct visual observation.

## Core Clinical & Mechanistic Principles
When the angular VOR fails, the eyes move with the head off the visual target, triggering compensatory **catch-up saccades** to re-acquire foveal fixation:
- **Covert Saccades (Invisible to Naked Eye)**:
  - Occur **DURING the head movement** (before head rotation stops).
  - Generated via feed-forward central motor commands or rapid somatosensory/proprioceptive loops.
  - **Cannot be seen on bedside clinical head impulse test (Halmagyi-Curthoys test)**; only detected by high-speed [[The video head impulse test vHIT identifies high-frequency angular vestibulo-ocular reflex deficits|vHIT]] video analysis.
- **Overt Saccades (Visible at Bedside)**:
  - Occur **AFTER the head movement has completely finished**.
  - Generated via visual feedback once the brain perceives retinal slip.
  - Readily visible to the clinician's naked eye during bedside examination.

```mermaid
%% vHIT Covert vs Overt Saccades and VOR Gain Deficit
flowchart TD
  N1(["High-Frequency Angular Head Impulse (10-20° Unpredictable High Acceleration: >2000-4000°/s2)"]) --> N2["High-Speed Digital Video Goggles Track Eye Velocity vs Head Velocity in Real Time"]
  N2 --> N3{"Calculate Vestibulo-Ocular Reflex (VOR) Gain (Eye Velocity / Head Velocity)"}
  N3 -->|"Normal VOR (Gain ~0.8 to 1.0; Zero Corrective Saccades)"| N4["Eye Compensates Perfectly in Opposite Direction"]
  N3 -->|"Impaired VOR (Gain <0.70-0.80: Inadequate Slow Phase Eye Velocity)"| N5{"Corrective Saccade Generation"}
  N5 -->|"Covert Saccades (Occur DURING Head Motion: Invisible to Naked Eye at Bedside)"| N6["Early Central Feedforward Saccade"]
  N5 -->|"Overt Saccades (Occur AFTER Head Motion Stops: Visible Catch-Up Saccade to Examiner)"| N7["Delayed Feedback Saccade"]
  N6 --> N8["Confirms Specific Semicircular Canal Peripheral Hypofunction (Horizontal, Anterior, or Posterior Canal)"]
  N7 --> N8
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2,N4 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N8 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
```

### Surgical Technique & Critical Safety Checks
- **Clinical Significance**: Patients with chronic or well-compensated vestibular loss convert overt saccades into covert saccades, masking their deficit on bedside exam; vHIT accurately captures covert saccades and documents true residual hypofunction.

## Connected Concepts & Graph Traversal
- **vHIT High-Frequency Testing**: [[The video head impulse test vHIT identifies high-frequency angular vestibulo-ocular reflex deficits|vHIT Angular Testing]]
- **Caloric Low-Frequency Testing**: [[Bithermal caloric testing calculates Jongkees formula to quantify unilateral vestibular paresis|Bithermal Caloric Testing]]
- **Rotary Chair Low-Frequency Testing**: [[Rotary chair testing assesses low-frequency bilateral vestibular hypofunction and central compensation|Rotary Chair Diagnostics]]
- **Acute Neuritis Diagnosis**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Vestibular Neuritis]]
- **HINTS Bedside Protocol**: [[The HINTS examination separates vestibular neuritis from posterior circulation stroke in acute vestibular syndrome|HINTS Stroke Protocol]]
