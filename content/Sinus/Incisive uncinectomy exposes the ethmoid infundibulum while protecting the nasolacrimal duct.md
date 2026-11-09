---
title: "Incisive uncinectomy exposes the ethmoid infundibulum while protecting the nasolacrimal duct"
tier: "Tier III: Primary FESS Step-by-Step Execution"
tags:
  - rhinology
  - fess
  - uncinectomy
  - surgical-technique
last_revised: 2026-11-09
status: complete
sources:
  - "AtlasESS19, part3_4_revision_orbit"
aliases:
  - "Incisive Uncinectomy Technique"
  - "Step 1 of FESS"
  - "Uncinectomy & Lacrimal Protection"
---

# Incisive uncinectomy exposes the ethmoid infundibulum while protecting the nasolacrimal duct

## Active Recall

> [!question]- What anatomical structure is at risk if the anterior uncinectomy incision is carried too far anteriorly into dense cortical bone?
> *Answer / Clinical Rationale*: The **nasolacrimal duct (NLD)**, which courses within the hard bone of the lacrimal groove anterior to the uncinate attachment.

> [!question]- Why is the removal of the superior uncinate remnant critical during uncinectomy?
> *Answer / Clinical Rationale*: The superior remnant attaches to the lamina papyracea, skull base, or middle turbinate. Leaving this uncinate flake intact mechanically obstructs the **frontal recess** outflow tract.

## Core Clinical & Mechanistic Principles
**Uncinectomy** is the initial and mandatory "gateway" step of functional endoscopic sinus surgery (FESS). Complete resection of the uncinate process opens the **ethmoid infundibulum** and exposes the **natural maxillary sinus ostium**.

```mermaid
%% Uncinectomy Technique and Safety Protocol
flowchart TD
  N1(["FESS Step 1: Uncinectomy [Mandatory Gateway to Ostiomeatal Complex]"]) --> N2{"Surgical Approach Selection"}
  N2 -->|"Sickle Knife Incisive Technique"| N3["Superior-to-Inferior Vertical Incision Along Anterior Bony Attachment"]
  N2 -->|"Backbiting Forceps Technique"| N4["Engage Free Posterior Edge of Uncinate Midpoint & Bite Anteriorly"]
  N2 --> N5{"CRITICAL ANATOMICAL DANGER ZONES"}
  N5 -->|"ANTERIOR VECTOR HAZARD"| N6{"NLDDangerPath"}
  N5 -->|"LATERAL VECTOR HAZARD"| N7{"OrbitDangerPath"}
  N5 -->|"SUPERIOR RESIDUAL HAZARD"| N8["FrontalDangerPath"]
  N6 --> N9["CRITICAL HAZARD: Incising Hard Lacrimal Crest Lacerates Nasolacrimal Duct"]
  N6 --> N10["Results in Chronic Epiphora & Dacryocystitis (Stay Strictly on Thin Uncinate Bone)"]
  N7 --> N11["CRITICAL HAZARD: Deep Perpendicular Puncture Breaches Lamina Papyracea"]
  N7 --> N12["Causes Orbital Fat Herniation & Medial Rectus Laceration"]
  N8 --> N13["Leaving Residual Superior Uncinate Remnant Obstructs Frontal Recess"]
  N5 --> N14{"Surgical Gateway Endpoint"}
  N14 --> N15["Mobilize Body Medially & Flush-Trim Superior/Inferior Stumps with Microdebrider"]
  N14 --> N16["Directly Exposes Ethmoid Infundibulum & Natural Maxillary Sinus Ostium"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N13 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N15,N16 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9,N10,N11,N12 red
```

### Step-by-Step Incisive vs Backbiting Technique
1. **Palpation**: Palpate the uncinate with a ball-tipped seeker to assess mobility and depth relative to the [[Draf IIb frontal sinusotomy extends from lamina papyracea to the nasal septum|lamina papyracea]].
2. **Incisive Uncinectomy (Sickle Knife)**:
   - Place a sickle knife at the superior junction of the uncinate and lateral nasal wall.
   - Incise vertically from **superior to inferior**, staying strictly within the uncinate bone.
   - **CRITICAL LANDMARK**: Stay posterior to the hard bone of the lacrimal crest to avoid transecting the **nasolacrimal duct (NLD)**.
3. **Backbiting Uncinectomy**:
   - Introduce a pediatric or standard backbiting forceps into the middle meatus.
   - Engage the free posterior edge of the uncinate process at its midpoint and bite anteriorly.
4. **Remnant Removal**:
   - Grasp the freed uncinate body with straight Blakesley or Takahashi forceps and mobilize it medially and anteriorly.
   - Use a [[Powered microdebrider blade selection and suction irrigation maintain clean surgical optics|microdebrider]] to flush-trim the inferior uncinate stump along the inferior turbinate and the superior uncinate root.

## Critical Failure Modes & Error Traps
- **Nasolacrimal Duct Injury**: Placing the incision too far anteriorly on the hard bone of the maxilla lacerates the nasolacrimal duct, leading to post-operative epiphora or dacryocystitis.
- **Lamina Papyracea Breach**: Penetrating the uncinate too deeply or perpendicular to the lateral wall punctures the lamina papyracea, entering orbital fat (see [[Lamina papyracea dehiscence predisposes to orbital fat herniation and medial rectus injury|Lamina Papyracea Dehiscence]]).
- **Missed Superior Uncinate Remnant**: Leaving a residual superior uncinate flap blocks the frontal recess (a primary cause of persistent frontal sinusitis).

## Connected Concepts & Graph Traversal
- **Anatomy**: [[The uncinate process superior attachment dictates the frontal sinus drainage pathway|Uncinate Attachments]]
- **Next Step**: [[Maxillary antrostomy requires incorporating accessory fontanelle ostia to prevent recirculation|Maxillary Antrostomy]]
- **Infundibulum Space**: [[The hiatus semilunaris and infundibulum form the primary drainage channel of the ostiomeatal complex|Ethmoid Infundibulum]]
- **Orbital Risk**: [[Lamina papyracea dehiscence predisposes to orbital fat herniation and medial rectus injury|Lamina Papyracea Injury]]
- **Surgical Craft**: [[Entering the ethmoid bulla inferomedially avoids orbital and skull base penetration|Anterior Ethmoidectomy Technique]]
- **Diagnostic Evaluation**: [[Draf I frontal sinusotomy clears obstructing ethmoid cells without instrumenting the ostium|Draf I Frontal Sinusotomy]]
- **Anatomical Foundation**: [[Modified medial maxillectomy provides wide maxillary access while preserving the nasolacrimal duct and inferior turbinate head with a nasal floor mucosal flap|Modified Medial Maxillectomy]]
