---
title: "Microvascular free flap salvage requires urgent re-exploration within two hours of vascular compromise"
tier: "Tier VII: Complex Microvascular Free Tissue Transfer & Maxillofacial Reconstruction"
tags:
  - fprs
  - free-flaps
  - microvascular-salvage
  - thrombosis-protocol
last_revised: 2026-11-03
status: complete
sources:
  - "BakerFlaps3e, Facial Plastic and Reconstructive Surgery"
aliases:
  - "Microvascular free flap salvage requires urgent re-exploration within two hours of vascular compromise"
  - "Free Flap Vascular Crisis Protocol"
  - "Microvascular Thrombosis Salvage"
  - "Medicinal Leeching Protocol"
---

# Microvascular free flap salvage requires urgent re-exploration within two hours of vascular compromise

## Active Recall

> [!question]- How does the pinprick bleeding of a venous-congested free flap differ from that of an arterially-occluded flap?
> *Answer / Clinical Rationale*: An **arterially-occluded flap** shows **zero bleeding** upon 25G needle puncture. A **venous-congested flap** produces immediate, **brisk, dark burgundy/black blood** due to trapped deoxygenated venous pooling.

> [!question]- Why is prophylactic Ciprofloxacin mandatory whenever medicinal leeches (Hirudo medicinalis) are applied?
> *Answer / Clinical Rationale*: To prevent catastrophic soft tissue infection by ***Aeromonas hydrophila***, an enteric symbiotic bacterium present within the leech gut.

## Core Clinical & Mechanistic Principles
Free [[The radial forearm free flap provides thin, pliable fasciocutaneous tissue for oral and pharyngeal defects|tissue]] transfer success rates exceed $>95\%$, but microvascular pedicle thrombosis occurs in $3\text{–}6\%$ of cases. The primary determinant of flap salvage is **time to operating room re-exploration (salvage rate $>80\%$ if $<2\text{ hours}$; drops to $<20\%$ if $>6\text{ hours}$)**.

### Why Aeromonas Prophylaxis is Non-Negotiable
- The digestive tract of the medicinal leech (*Hirudo medicinalis*) carries the symbiotic gram-negative bacterium ***Aeromonas hydrophila***.
- Leeches secrete **hirudin** (potent thrombin inhibitor) to decompress venous congestion, but will cause devastating soft-tissue myonecrosis and flap loss without prophylactic **Ciprofloxacin**.

```mermaid
%% Free Flap Emergency Salvage Algorithm
flowchart TD
  N1(["Hourly Flap Monitoring (First 48-72h): Color, Capillary Refill (1-2s), Surface Temp, Implantable Doppler"]) --> N2{"Differentiate Vascular Crisis via 25G Pinprick"}
  N2 -->|"Arterial Occlusion: Pale, Cool, Flat, Loss of Doppler Signal, NO BLEEDING"| N3["Immediate Bedside Release of Tight Neck Sutures + IV 5,000U Heparin Bolus"]
  N2 -->|"Venous Congestion (~70%): Tense, Violaceous / Purple, Rapid Refill, BRISK DARK BURGUNDY BLEEDING"| N3
  N3 --> N4["STAT Transfer to Operating Room (GOLDEN WINDOW <2-4 HOURS; DO NOT ORDER IMAGING)"]
  N4 --> N5["Open Neck Incision, Evacuate Hematoma & Relieve Pedicle Kinking/Twisting"]
  N5 --> N6{"Operative Pedicle Exploration & Microvascular Revision"}
  N6 -->|"Venous Anastomotic Thrombosis"| N7["Fogarty Catheter (Fr 2) Thrombectomy + Heparinized Saline / tPA (2-5 mg) Flush + Redo Anastomosis / Vein Graft"]
  N6 -->|"Arterial Inflow Occlusion / Spasm"| N8["Thrombectomy + Adventitial Stripping + Topical Papaverine/Lidocaine + Revise Inflow"]
  N7 --> N9["Restores Microvascular Flap Perfusion (>80% Salvage if <2 Hours)"]
  N8 --> N9
  N6 -->|"Refractory Venous Outflow Failure"| N10["Medicinal Leeching (Hirudo medicinalis) + MANDATORY CIPROFLOXACIN PROPHYLAXIS (Aeromonas hydrophila)"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N7,N8 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N9 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N2 red
```

## Connected Concepts & Graph Traversal
- **🔗 Donor Flaps (Head and Neck)**: [[The radial forearm free flap provides thin, pliable fasciocutaneous tissue for oral and pharyngeal defects|Radial Forearm]]
- **Anatomical Foundation**: [[The fibula free flap provides vascularized cortical bone for composite mandibular reconstruction|Fibula Flap]]
- **Complication Matrix**: [[High-stakes FPRS complications require proactive landmarking and emergency rescue protocols|High-Stakes FPRS Complications]]
- **Surgical Craft**: [[Preserving the distal five centimeters of the fibula prevents ankle instability and talar tilt|Distal Fibular Preservation Rule]]
- **Diagnostic Assessment**: [[The anterolateral thigh free flap provides versatile soft tissue volume based on the LCFA|Anterolateral Thigh (ALT) Flap]]
