---
title: "Floating footplate complication during stapedectomy is managed with small inferior fenestration or vein graft"
tier: "Tier IV: Otosclerosis, Stapes Surgery, Bone Conduction & Cochlear Implantation"
tags:
  - otology
  - complications
  - floating-footplate
  - stapes-surgery
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch19, p.372"
aliases:
  - "Floating Footplate"
  - "Depressed Footplate"
  - "Stapedectomy Complications"
---

# Floating footplate complication during stapedectomy is managed with small inferior fenestration or vein graft

## Active Recall

> [!question]- Why is direct suction near a floating footplate strictly prohibited?
> *Answer / Clinical Rationale*: Suction will **draw the footplate and perilymph into the suction tip**, causing immediate catastrophic avulsion of the membranous labyrinth and permanent deafness.

> [!question]- What surgical maneuver is used to retrieve a floating footplate if a laser is unavailable?
> *Answer / Clinical Rationale*: Drill a **small control hole in the inferior margin of the promontory**, slide a fine micro-hook beneath the footplate, and gently elevate it outward.

## Core Clinical & Mechanistic Principles
A **floating footplate** occurs when the entire stapes footplate becomes completely mobilized and detaches from the annular ligament *before* a fenestration has been made:
- **Mechanisms & Risk Factors**:
  - Occurs during manual manipulation, attempted crural fracture, or mechanical drilling of an early otosclerotic lesion where anterior fixation is loose.
  - The completely loose footplate floats freely on the underlying perilymph and easily submerges into the vestibule (**depressed footplate**).
- **The "DO NOT SUCTION" Mandate**:
  - Never apply suction near a floating footplate; suction will immediately aspirate the footplate and perilymph into the suction tip, causing complete irreversible deafness.
- **Rescue Protocols**:
  1. **Laser Fenestration (Preferred)**: If a laser is available, create a small fenestration through the floating footplate without physical contact.
  2. **Micro-Hook "Pot-Hole" Extraction**: Drill a tiny "pot-hole" or control hole in the inferior bony promontory / margin of the oval window niche; slide a fine $0.3\text{-mm}$ right-angle hook beneath the footplate and gently elevate it outward.
  3. **Total Vestibule Seal**: If the footplate is submerged, do not chase it into the vestibule; immediately seal the oval window with a large **fascia / vein graft** and place a Robinson bucket or [[Stapedotomy utilizes a micro-drill or laser fenestration of the posterior footplate|piston prosthesis]] onto the graft.

```mermaid
%% Floating Footplate Emergency Rescue Algorithm
flowchart TD
  N1(["Stapedotomy / Stapedectomy: Total Mobilization of Unfenestrated Footplate from Oval Window Rim"]) --> N2["Recognize Floating Footplate (CRITICAL HAZARD: DO NOT SUCTION OR PRY FOOTPLATE)"]
  N2 --> N3{"Emergency Rescue Strategy"}
  N3 -->|"Safe Mechanical Extraction Approach"| N4{"Micro-Fenestration Technique"}
  N4 --> N5["Drill Micro-Hole (0.3-0.5 mm) in Inferior / Promontory Bony Margin with Skeeter Drill (Pothole Technique)"]
  N4 --> N6["Pass 45-Degree Micro-Hook under Inferior Margin to Safely Elevate Footplate Outward without Sinking"]
  N3 -->|"Inability to Mobilize / High Risk of Labyrinthine Intrusion"| N7{"Safe Abort Protocol"}
  N7 --> N8["Cover Entire Oval Window Niche with Compressed Fascia / Vein Graft"]
  N7 --> N9["Place Stapes Piston onto Tissue Graft or Abort Procedure & Revisit in 6-12 Months"]
  N8 --> N10["Prevents Sensorineural Hearing Loss & Profound Dead Ear (<1% Permanent Loss with Sparing Protocol)"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N10 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8,N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N2 red
```

### Surgical Technique & Critical Safety Checks
- **Outcome**: Leaving a submerged footplate fragment undisturbed in the vestibule often heals without hearing loss; chasing it with instruments causes total sensorineural destruction.

## Connected Concepts & Graph Traversal
- **Stapes Fixation Primary Pathology**: [[Otosclerosis is characterized by abnormal bone remodeling of the otic capsule causing stapes fixation|Otosclerosis Footplate Pathology]]
- **Surgical Laser Fenestration**: [[Laser stapedotomy reduces mechanical trauma and footplate mobilization compared to manual perforators|Laser Stapedotomy Safety]]
- **Congenital Perilymph Gush**: [[Gushing footplate indicates a congenital perilymph fistula from an abnormally patent cochlear aqueduct|Gushing Footplate Complication]]
- **Prosthetic Distance Landmark**: [[The distance from the incus long process to the stapes footplate averages four to four point five millimeters|Piston Length Sizing]]
- **Audiometric Carhart Notch**: [[Carhart notch presents as an artificial bone-conduction dip at two thousand Hertz in stapes fixation|Carhart Notch Resolution]]
