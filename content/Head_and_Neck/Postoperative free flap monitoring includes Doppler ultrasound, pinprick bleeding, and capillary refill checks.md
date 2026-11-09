---
title: "Postoperative free flap monitoring includes Doppler ultrasound, pinprick bleeding, and capillary refill checks"
tier: "Tier VII: Microvascular Free Flaps & High-Stakes Complication Rescue"
tags:
  - head-and-neck
  - microsurgery
  - flap-monitoring
  - postoperative-care
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Free Flap Monitoring"
  - "Postoperative Flap Assessment"
  - "Doppler Flap Checks"
---

# Postoperative free flap monitoring includes Doppler ultrasound, pinprick bleeding, and capillary refill checks

## Active Recall

> [!question]- What are the physical examination findings of acute venous thrombosis in a free flap?
> *Answer / Clinical Rationale*: **Violaceous/purple discoloration**, **rapid capillary refill ($<1\text{ sec}$)**, **tense turgor**, and **immediate dark purplish bleeding upon needle pinprick**.

> [!question]- How does an implantable Cook-Swartz Doppler probe monitor free flap viability?
> *Answer / Clinical Rationale*: It is attached directly around the **venous anastomosis**, providing continuous acoustic Doppler monitoring of venous outflow.

## Core Clinical & Mechanistic Principles
Meticulous postoperative microvascular monitoring detects early vascular compromise before irreversible microcirculatory thrombosis occurs:
- **Physical Examination Parameters (Hourly for 24h, Q2H for 24h, Q4H for 48h)**:
  1. **Flap Color**: Normal pink flesh tone vs. pale/white (arterial ischemia) vs. blue/violaceous (venous congestion).
  2. **Capillary Refill Time (CRT)**: Normal is **$1.0\text{–}2.0\text{ seconds}$**; $>3\text{ seconds}$ indicates arterial insufficiency; $<1\text{ second}$ (brisk refill) indicates venous congestion.
  3. **Tissue Turgor**: Soft and pliable vs. flat/flaccid (arterial) vs. tense, turgid, and swollen (venous).
  4. **Pinprick Bleeding Test (20-Gauge Needle)**:
     - *Normal*: Bright red bleeding within 1–2 seconds.
     - *Arterial Failure*: No bleeding or delayed slow serous exudate.
     - *Venous Failure*: Immediate rapid flow of dark, purplish venous blood.
- **Technological Adjuncts**:
  - **Implantable Doppler Probe (Cook-Swartz Doppler)**: 20-MHz piezoelectric crystal cuff placed directly around the [[Microvascular venous couplers achieve rapid and reliable end-to-end and end-to-side anastomoses|venous anastomosis]]; continuous audio signal; sudden loss of signal provides the earliest alert of venous occlusion.

```mermaid
%% Free Flap Monitoring Assessment and Crisis Stratification
flowchart TD
  N1(["Post-Op Free Flap Hourly Monitoring: Color, CRT, Turgor, Pinprick & Doppler"]) --> N2{"Clinical & Doppler Assessment"}
  N2 -->|"Pink Paddle + CRT 1-2s + Soft Turgor + Bright Red Bleeding + Crisp Doppler Tone"| N3["Flap Viable: Continue Scheduled Protocol Q1H x 24h -> Q2H x 24h"]
  N2 -->|"Pale Marble-White + CRT >3s + Flaccid Turgor + NO Pinprick Bleeding + Loss of Arterial Doppler"| N4["Arterial Thrombosis / Vasospasm / Pedicle Kink"]
  N4 --> N5["Immediate Bedside Suture Release + STAT Surgical Exploration (<2 hr Golden Window)"]
  N2 -->|"Violaceous Mottling + Brisk CRT <1s + Tense Turgor + Copious Dark Pinprick Blood + Loss of Venous Doppler"| N6["Venous Thrombosis / Outflow Obstruction"]
  N6 --> N7["Bedside Suture Release + STAT Take Back: Thrombectomy, tPA Flush & Re-Coupler"]
  N2 -->|"Implantable Cook-Swartz Venous Cuff / ViOptix NIRS StO2 Drop >20%"| N8["Early Warning Alert: Triggers Immediate Bedside Evaluation Before Visual Pallor/Cyanosis"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N8 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N6,N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N4,N5 red
```

### Surgical Technique & Critical Safety Checks
- **Other Technologies**: Near-infrared spectroscopy (NIRS / ViOptix, tissue $\text{StO}_2 < 50\%$ or drop $>20\%$ indicates ischemia), laser Doppler flowmetry.

## Connected Concepts & Graph Traversal
- **Arterial Thrombosis Recognition**: [[Microvascular arterial thrombosis presents with a pale, flat flap and requires immediate surgical exploration|Arterial Thrombosis Management]]
- **Venous Thrombosis Recognition**: [[Microvascular venous thrombosis presents with violaceous congestion and rapid dark bleeding on pinprick|Venous Outflow Failure]]
- **Flap Salvage Protocols**: [[Postoperative free flap compromise within forty-eight hours requires emergent surgical re-exploration for pedicle salvage|Free Flap Re-Exploration Protocols]]
- **Venous Anastomotic Couplers**: [[Microvascular venous couplers achieve rapid and reliable end-to-end and end-to-side anastomoses|Venous Anastomotic Couplers]]
- **Thin Fasciocutaneous Flap**: [[The radial forearm free flap provides thin, pliable fasciocutaneous tissue for oral and pharyngeal defects|Radial Forearm Free Flap]]
- **Leech Therapy Decongestion**: [[Leech therapy with Hirudo medicinalis decompresses venous congested flaps with ciprofloxacin prophylaxis for Aeromonas hydrophila|Hirudinotherapy Decongestion]]
