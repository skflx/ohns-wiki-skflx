---
title: "Microvascular arterial thrombosis presents with a pale, flat flap and requires immediate surgical exploration"
tier: "Tier VII: Microvascular Free Flaps & High-Stakes Complication Rescue"
tags:
  - head-and-neck
  - microsurgery
  - arterial-thrombosis
  - flap-crisis
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch5, p.136"
aliases:
  - "Arterial Thrombosis"
  - "Free Flap Arterial Failure"
  - "Flap Ischemia"
---

# Microvascular arterial thrombosis presents with a pale, flat flap and requires immediate surgical exploration

## Active Recall

> [!question]- What is the classic clinical appearance and pinprick response of a free flap with arterial thrombosis?
> *Answer / Clinical Rationale*: The flap is **pale, cold, and flaccid**, with **no bleeding on 20-gauge needle puncture**.

> [!question]- What is the maximum ischemic window for successful free flap surgical salvage before irreversible failure occurs?
> *Answer / Clinical Rationale*: Re-exploration within **$<2\text{ hours}$** provides the highest salvage rate ($>80\text{–}90\%$).

## Core Clinical & Mechanistic Principles
**Microvascular arterial thrombosis** is a surgical emergency occurring in $1\text{–}3\%$ of head and neck free flaps, typically within the first 24–48 hours:
- **Etiology & Triggers**:
  - Mechanical: Intimal flap dissection, adventitial inversion into lumen, kinking, twisting, or excessive tension on the arterial pedicle.
  - Systemic: Hypotension, hypovolemia, vasopressor use, hypercoagulable state (Factor V Leiden, protein C/S deficiency).
  - External: Neck hematoma compressing the pedicle or tight tracheostomy ties.
- **Clinical Presentation**:
  - **Color**: Pale, marble-white, or ashen-gray.
  - **Temperature**: Cold to touch.
  - **Turgor**: Flaccid, flat, and dehydrated.
  - **Capillary Refill**: Absent or severely prolonged ($>3\text{–}5\text{ seconds}$).
  - **Pinprick Test**: **No bleeding whatsoever** upon 20-gauge needle puncture.
  - **Doppler**: Complete loss of arterial Doppler signal.

```mermaid
%% Free Flap Arterial Crisis Identification and Salvage Cascade
flowchart TD
  N1(["Free Flap Skin Paddle: Pale / Marble-White / Cold / Flat"]) --> N2["Bedside Verification: Absent Capillary Refill + NO Bleeding on 20G Pinprick"]
  N2 --> N3["Loss of Arterial Doppler Signal (Flatline / No Pulsatile Sound)"]
  N3 --> N4["Immediate Bedside Release of Neck Sutures (Relieve External Compression)"]
  N4 --> N5["STAT Transfer to Operating Room (Golden Window <2 Hours)"]
  N5 --> N6{"Operative Findings & Microvascular Revision"}
  N6 -->|"Pedicle Kinking / Mechanical Compression"| N7["Untwist Pedicle + Evacuate Hematoma + Warm Papaverine Irrigation"]
  N6 -->|"Intraluminal Arterial Thrombosis / Intimal Flap"| N8["Fogarty Catheter Thrombectomy + Heparinized Saline / tPA Flush"]
  N8 --> N9["Resect Damaged Vessel Segment + Vein Graft / Fresh Arterial Re-Anastomosis"]
  N9 --> N10["Verify Prompt Bright-Red Refill & Pulsatile Doppler Signal"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N8,N9 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7,N10 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4,N5 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N2,N3 red
```

### Surgical Technique & Critical Safety Checks
- **The Golden Window**: Flap re-exploration must occur within **$<2\text{ hours}$** of onset (see [[Postoperative free flap compromise within forty-eight hours requires emergent surgical re-exploration for pedicle salvage|Free Flap Surgical Salvage]]) to prevent microcirculatory endothelial necrosis and irreversible "no-reflow" phenomenon.

## Connected Concepts & Graph Traversal
- **Venous Thrombosis Contrast**: [[Microvascular venous thrombosis presents with violaceous congestion and rapid dark bleeding on pinprick|Venous Congestion Contrast]]
- **Flap Salvage Protocols**: [[Postoperative free flap compromise within forty-eight hours requires emergent surgical re-exploration for pedicle salvage|Free Flap Surgical Salvage]]
- **Postoperative Flap Monitoring**: [[Postoperative free flap monitoring includes Doppler ultrasound, pinprick bleeding, and capillary refill checks|Flap Monitoring Standards]]
- **Venous Anastomotic Couplers**: [[Microvascular venous couplers achieve rapid and reliable end-to-end and end-to-side anastomoses|Venous Anastomosis Technology]]
- **Thin Fasciocutaneous Flap**: [[The radial forearm free flap provides thin, pliable fasciocutaneous tissue for oral and pharyngeal defects|Radial Forearm Free Flap]]
- **Leech Therapy for Outflow**: [[Leech therapy with Hirudo medicinalis decompresses venous congested flaps with ciprofloxacin prophylaxis for Aeromonas hydrophila|Hirudinotherapy Decompression]]
