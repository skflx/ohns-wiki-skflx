---
title: "Endovascular parent vessel balloon occlusion and covered stenting manage pseudoaneurysms after ICA injury"
tier: "Tier VII: Expanded Endoscopic Skull Base Surgery (EEA) & ICA Crisis"
tags:
  - rhinology
  - interventional-neuroradiology
  - ica-injury
  - pseudoaneurysm
last_revised: 2026-11-03
status: complete
sources:
  - "AtlasESS19, Endoscopic Sinus & Skull Base Surgery"
aliases:
  - "Post-ICA Injury Endovascular Management"
  - "Carotid Pseudoaneurysm Stenting"
  - "Balloon Test Occlusion (BTO)"
---

# Endovascular parent vessel balloon occlusion and covered stenting manage pseudoaneurysms after ICA injury

## Active Recall

> [!question]- Why is diagnostic catheter angiography mandatory within 24 hours of packing an intraoperative ICA laceration?
> *Answer / Clinical Rationale*: To detect and treat **traumatic pseudoaneurysms, arteriovenous fistulas (carotid-cavernous fistulas), or arterial dissections** that will rupture postoperatively without endovascular intervention.

> [!question]- What endovascular option allows definitive repair of an ICA laceration while preserving distal cerebral blood flow?
> *Answer / Clinical Rationale*: Placement of an **endovascular covered stent** across the arterial tear.

## Core Clinical & Mechanistic Principles
Following initial intraoperative [[Intraoperative ICA injury requires two-surgeon suction and crushed muscle patch hemostasis|hemostasis]] of an **Internal Carotid Artery (ICA) injury** with a crushed muscle patch, the patient is at extreme risk for **traumatic pseudoaneurysm formation ($>30\text{–}40\%$)**, delayed rupture, and stroke.

Immediate postoperative transfer to **Interventional Neuroradiology (INR)** for diagnostic digital subtraction angiography (DSA) and definitive endovascular management is mandatory.

```mermaid
%% ICA Pseudoaneurysm Endovascular Protocol
flowchart TD
  N1(["Post-Intraoperative ICA Hemostasis via Crushed Muscle Patch"]) --> N2{"Emergent INR Angiographic Assessment [<24 Hours]"}
  N2 --> N3["Digital Subtraction Angiography (DSA) Evaluates Wall Defect & Flow"]
  N2 --> N4{"POST-INJURY VASCULAR PATHOLOGIES"}
  N4 --> N5["Traumatic Pseudoaneurysm (30-40% Risk: False Wall Prone to Delayed Exsanguination)"]
  N4 --> N6["Carotid-Cavernous Fistula (CCF) or Traumatic Intimal Dissection"]
  N4 --> N7{"ENDOVASCULAR INTERVENTIONAL DECISION TREE"}
  N7 -->|"Vessel Preservation Strategy (Preferred)"| N8{"CoveredStentPath"}
  N7 -->|"Irreparable Laceration / Massive Tear"| N9{"ParentSacrificePath"}
  N8 --> N10["Endovascular Covered Stent / Flow-Diverter Deployed Across Tear"]
  N8 --> N11["Excludes Pseudoaneurysm While Preserving Distal Cerebral Perfusion"]
  N9 --> N12["Perform Balloon Test Occlusion (BTO) with Hypotensive / SPECT Challenge"]
  N9 --> N13["If Circle of Willis Robust: Permanent Balloon / Coil Trapping of ICA"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N10,N11 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N12,N13 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N5,N6 red
```

### The Traumatic Pseudoaneurysm Danger
- A pseudoaneurysm is a hematoma contained only by adventitia or surrounding muscle/bone.
- Unrecognized pseudoaneurysms carry a **catastrophic delayed rupture rate ($>50\%$ mortality)** occurring days to weeks after surgery, presenting with sudden exsanguinating epistaxis.

## Connected Concepts & Graph Traversal
- **Intraoperative Crisis**: [[Intraoperative ICA injury requires two-surgeon suction and crushed muscle patch hemostasis|ICA Injury Crisis Protocol]]
- **Checklist Prevention**: [[The CLOSE checklist systematically evaluates critical radiological danger zones|CLOSE Checklist ("S" for Sphenoid)]]
- **Corridors**: [[Transclival EEA provides midline access to clival chordomas and chondrosarcomas|Transclival EEA]]
- **Anatomical Foundation**: [[Endoscopic endonasal anterior ethmoidal artery ligation requires skull base skeletonization to prevent orbital fat prolapse and vessel retraction|Endoscopic AEA Ligation]]
- **Surgical Craft**: [[The endoscopic cross-over flap technique reconstructs congenital choanal atresia by covering denuded bone without circumferential stenting|Stamm Cross-Over Flap Technique]]
