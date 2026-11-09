---
title: "High-stakes head and neck surgical oncology complications require rapid structured emergency rescue"
tier: "Tier VII: Microvascular Free Flaps & High-Stakes Complication Rescue"
tags:
  - head-and-neck
  - emergencies
  - crisis-management
  - complications
last_revised: 2026-11-09
status: complete
sources:
  - "AtlasESS19, Frontal Sinus Surgery & Ostial Clearance"
aliases:
  - "Head and Neck Emergencies"
  - "Surgical Rescue"
  - "Crisis Management Protocol"
---

# High-stakes head and neck surgical oncology complications require rapid structured emergency rescue

## Active Recall

> [!question]- What is the immediate bedside management for an expanding neck hematoma causing stridor?
> *Answer / Clinical Rationale*: **Immediately open all skin and platysmal sutures at the bedside** and evacuate the hematoma manually.

> [!question]- What are the four highest-stakes postoperative surgical emergencies in head and neck oncology?
> *Answer / Clinical Rationale*: **Acute lost airway**, **expanding cervical hematoma**, **acute carotid blowout**, and **acute microvascular free flap thrombosis**.

## Core Clinical & Mechanistic Principles
Head and neck oncologic surgery encompasses some of the highest-stakes surgical emergencies in medicine. Mastery requires rapid, algorithmic execution:
- **The Four Critical Head & Neck Emergencies**:
  1. **Acute Upper Airway Obstruction / Lost Airway**:
     - *Action*: Cannot Intubate, Cannot Oxygenate (CICO) protocol $\r\r\rightarrow$ Immediate **cricothyroidotomy** or **emergency tracheostomy**.
  2. **Expanding Postoperative Cervical Hematoma**:
     - *Action*: **Immediate bedside incision opening** and manual clot evacuation before attempting intubation.
  3. **Acute Carotid Blowout Syndrome (CBS)**:
     - *Action*: Endotracheal tube cuff hyperinflation $\r\r\rightarrow$ Direct digital compression against transverse processes $\r\r\rightarrow$ Massive transfusion protocol $\r\r\rightarrow$ Immediate transfer to endovascular suite for covered stent / coil embolization.
  4. **Acute Free Flap Vascular Crisis**:
     - *Action*: Urgent bedside suture release $\r\r\rightarrow$ Immediate re-exploration in the OR within $<2$ hours $\r\r\rightarrow$ Thrombectomy + tPA flush + anastomotic revision.

```mermaid
%% Emergency Rescue Algorithms in Head and Neck Surgical Oncology
flowchart TD
  N1(["Acute High-Stakes Head and Neck Postoperative Complication"]) --> N2{"Identify Crisis Presentation & Anatomy"}
  N2 -->|"Airway & Bleeding Emergencies"| N3{"Airway & Carotid Emergencies"}
  N3 -->|"Expanding Neck Hematoma / Impending Stridor"| N4["Emergency Bedside Clip Opening + Evacuate Hematoma + Intubation/Tracheostomy"]
  N3 -->|"Carotid Blowout Syndrome (CBS: Sentinel Bleed / Rupture)"| N5["Immediate Direct Digital Pressure + Tamponade + Emergent Endovascular Stenting / Embolization"]
  N2 -->|"Lymphatic & Microvascular Emergencies"| N6{"Chyle & Microvascular Emergencies"}
  N6 -->|"High-Output Chyle Leak (>1000 mL/day post-Neck Dissection)"| N7["Medium-Chain Triglyceride (MCT) Diet / NPO + Octreotide + Thoracic Duct Embolization/Ligation"]
  N6 -->|"Free Flap Venous / Arterial Thrombosis (Loss of Doppler Signal / Dark Bleed)"| N8["Immediate Re-Exploration <4-6 Hours: Thrombectomy + Heparin + Anastomosis Revision"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N8 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N5 purple
```

### Surgical Technique & Critical Safety Checks
- **Crisis Resource Management (CRM)**: Clear closed-loop communication, early mobilization of operative teams, and predetermined emergency bedside kits (scalpel, suture removal, packing, cricothyroidotomy set) at every patient's bedside (see [[Postoperative neck hematoma after thyroidectomy or neck dissection requires emergent bedside wound opening for airway decompression|Postoperative Neck Hematoma Rescue]]).

## Connected Concepts & Graph Traversal
- **Expanding Cervical Hematoma**: [[Postoperative neck hematoma after thyroidectomy or neck dissection requires emergent bedside wound opening for airway decompression|Postoperative Neck Hematoma Rescue]]
- **Carotid Blowout Protocol**: [[Carotid blowout syndrome management includes throat packing, endovascular embolization, and carotid stenting|Carotid Blowout Management Protocol]]
- **Free Flap Pedicle Salvage**: [[Postoperative free flap compromise within forty-eight hours requires emergent surgical re-exploration for pedicle salvage|Free Flap Salvage Timeline]]
- **Emergency Airway Management**: [[Standard open tracheotomy utilizes horizontal intersinusoidal or Bjork flap entry|Emergency Surgical Airway]]
- **Pharyngocutaneous Fistula**: [[Pharyngocutaneous fistula is managed with wound care, nutritional support, and surgical flap closure|Pharyngocutaneous Fistula Management]]
