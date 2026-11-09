---
title: "The video head impulse test vHIT identifies high-frequency angular vestibulo-ocular reflex deficits"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - vestibular
  - vhit
  - vor
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch16, p.324"
aliases:
  - "Video Head Impulse Test"
  - "vHIT"
  - "High-Frequency VOR"
  - "Head Thrust Test"
---

# The video head impulse test vHIT identifies high-frequency angular vestibulo-ocular reflex deficits

## Active Recall

> [!question]- What is the normal VOR gain range on vHIT for the horizontal semicircular canals?
> *Answer / Clinical Rationale*: A VOR gain of **$0.80\text{ to }1.00$**.

> [!question]- What two coplanar canal pairs are evaluated in vertical vHIT testing?
> *Answer / Clinical Rationale*: The **LARP** (Left Anterior / Right Posterior) and **RALP** (Right Anterior / Left Posterior) pairs.

## Core Clinical & Mechanistic Principles
The **video Head Impulse Test (vHIT)** is the modern clinical gold standard for [[Bithermal caloric testing calculates Jongkees formula to quantify unilateral vestibular paresis|quantifying]] the high-frequency angular Vestibulo-Ocular Reflex (VOR) across all six individual semicircular canals:
- **Physiological Basis of the VOR**:
  - Head rotation stimulates endolymph flow in the coplanar semicircular canal, generating compensatory eye rotation of equal velocity and opposite direction to maintain foveal fixation.
  - Head impulses test high-frequency, high-acceleration angular motion (**$2\text{–}6\text{ Hz}$, $>150\text{–}250^\circ/\text{s}$**), reflecting real-world head movement.
- **vHIT Goggle Technology**:
  - High-speed digital camera ($250\text{ Hz}$) tracking pupil position paired with gyroscopes/accelerometers measuring head velocity.
- **Normal VOR Gain**:
  - $\text{Gain} = \frac{\text{Eye Velocity}}{\text{Head Velocity}}$.
  - **Normal Horizontal Canal Gain**: **$0.80\text{–}1.00$**.
  - **Normal Vertical Canal (LARP / RALP) Gain**: **$0.70\text{–}1.00$**.

```mermaid
%% vHIT Multi-Canal High-Frequency Testing
flowchart TD
  N1(["High-Speed Digital Video-Oculography Goggles (250 Hz Infrared Camera)"]) --> N2{"Deliver Passive, Unpredictable, High-Acceleration Head Impulses (10-20° at >2000°/s2)"}
  N2 -->|"Horizontal Plane Impulses (Left / Right Yaw)"| N3["Tests Horizontal Semicircular Canals & Superior Vestibular Nerves"]
  N2 -->|"LARP Plane (Left Anterior - Right Posterior Diagonal Pitch)"| N4["Tests Left Anterior & Right Posterior Semicircular Canals"]
  N2 -->|"RALP Plane (Right Anterior - Left Posterior Diagonal Pitch)"| N5["Tests Right Anterior & Left Posterior Semicircular Canals"]
  N2 --> N6{"Evaluate Canal-Specific VOR Gain & Corrective Saccades"}
  N6 -->|"Normal Response: VOR Gain 0.8-1.0 with Smooth Compensatory Tracking"| N7["Intact Peripheral Canal Function"]
  N6 -->|"Pathologic Response: Reduced VOR Gain (<0.7) + Covert / Overt Catch-Up Saccades"| N8["Localizes Deficit to Exact Individual Semicircular Canal End-Organ"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N7 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Surgical Technique & Critical Safety Checks
- **Canal Planes Tested**:
  1. Horizontal (Yaw plane).
  2. **LARP** (Left Anterior - Right Posterior).
  3. **RALP** (Right Anterior - Left Posterior).

## Connected Concepts & Graph Traversal
- **Covert & Overt Saccades**: [[Overt and covert saccades on vHIT indicate peripheral vestibular hypofunction|Overt & Covert Saccade Analysis]]
- **Caloric Low-Frequency Testing**: [[Bithermal caloric testing calculates Jongkees formula to quantify unilateral vestibular paresis|Bithermal Caloric Testing]]
- **Rotary Chair Comparison**: [[Rotary chair testing assesses low-frequency bilateral vestibular hypofunction and central compensation|Rotary Chair Diagnostics]]
- **Acute Neuritis Diagnosis**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Vestibular Neuritis]]
- **HINTS Bedside Stroke Protocol**: [[The HINTS examination separates vestibular neuritis from posterior circulation stroke in acute vestibular syndrome|HINTS Stroke Protocol]]
