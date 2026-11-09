---
title: "High-resolution temporal bone CT with Poschl and Stenvers reformatting confirms superior canal dehiscence"
tier: "Tier V: Vestibular Disorders, Meniere Disease, BPPV & SCDS"
tags:
  - otology
  - imaging
  - scds-imaging
  - poschl-stenvers
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch2, p.18–20"
aliases:
  - "Poschl Plane"
  - "Stenvers Plane"
  - "SCDS CT"
  - "Temporal Bone Reformatting"
---

# High-resolution temporal bone CT with Poschl and Stenvers reformatting confirms superior canal dehiscence

## Active Recall

> [!question]- What oblique CT plane is oriented parallel to the long axis of the superior semicircular canal?
> *Answer / Clinical Rationale*: The **Pöschl plane**.

> [!question]- What oblique CT plane is oriented perpendicular to the superior semicircular canal?
> *Answer / Clinical Rationale*: The **Stenvers plane**.

## Core Clinical & Mechanistic Principles
Standard axial and coronal CT scans frequently produce false-positive diagnoses of SCDS due to volume averaging of thin tegmen bone. Diagnostic confirmation requires **sub-millimeter ($0.5\text{–}0.6\text{-mm}$) High-Resolution Temporal Bone CT** with dedicated oblique reformats:
- **Pöschl Plane (Parallel to the Superior Semicircular Canal)**:
  - Reconstructed in an oblique sagittal plane **parallel to the long axis of the petrous bone / superior canal**.
  - Demonstrates the entire $360^\circ$ ring of the superior semicircular canal ("donut view").
  - Directly visualizes the **length and true defect margin of the bony dehiscence** at the apex of the canal.
- **Stenvers Plane (Perpendicular to the Superior Semicircular Canal)**:
  - Reconstructed in an oblique coronal plane **perpendicular to the petrous ridge and superior canal**.
  - Demonstrates the cross-section of the canal lumen and confirms the **absence of overlying cortical bone**.

```mermaid
%% SCDS High-Resolution CT Multiplanar Reformatting
flowchart TD
  N1(["High-Resolution Multidetector Temporal Bone CT (<=0.5 mm Slice Thickness with Bone Kernel)"]) --> N2{"Reconstruct Specific Semicircular Canal Planes"}
  N2 -->|"Pöschl Plane (Reconstruction Parallel to Long Axis of Petrous Bone & Plane of Superior Semicircular Canal)"| N3{"Pöschl View"}
  N3 --> N4["Displays Complete Full Ring of Superior Semicircular Canal Arc"]
  N3 --> N5["Directly Demonstrates Bony Dehiscence / Defect of Canal Arc Roof Facing Middle Fossa Dura"]
  N2 -->|"Stenvers Plane (Reconstruction Perpendicular to Long Axis of Petrous Bone & Plane of Superior Canal)"| N6{"Stenvers View"}
  N6 --> N7["Displays Cross-Sectional Lumen of Semicircular Canal in Profile"]
  N6 --> N8["Confirms Transverse Diameter & Continuity of Dehiscence Edge"]
  N5 --> N9["Prevents Volume-Averaging False Positives & Confirms SCDS Third-Window Defect"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N5,N8 red
```

### Surgical Technique & Critical Safety Checks
- **Diagnostic Confirmation Criteria**: Defect must be documented on **BOTH Pöschl and Stenvers planes**, supported by **lowered [[Cervical and ocular vestibular evoked myogenic potentials test saccular and utricular otolith function|VEMP]] thresholds ($<70\text{ dB nHL}$)**.

## Connected Concepts & Graph Traversal
- **SCDS Clinical Syndrome**: [[Superior semicircular canal dehiscence SCDS presents with Tullio phenomenon and sound-induced vertigo|SSCD Tullio Phenomenon]]
- **Surgical Resurfacing & Plugging**: [[Middle cranial fossa and transmastoid canal plugging or resurfacing repair superior canal dehiscence|MCF vs Transmastoid Repair]]
- **Otolith Evoked Diagnostics**: [[cVEMP evaluates the saccule and inferior vestibular nerve via uncrossed sternocleidomastoid inhibition|cVEMP Hypersensitivity Thresholds]]
- **Third-Window Acoustic Imbalance**: [[Pulsatile tinnitus is differentiated into arterial and venous etiologies by auscultation, jugular compression, and targeted vascular imaging|Third-Window Pulsatile Tinnitus]]
- **Otic Capsule Anatomy**: [[The otic capsule is an immutable endochondral bone that provides fixed surgical reference landmarks|Otic Capsule Integrity]]
