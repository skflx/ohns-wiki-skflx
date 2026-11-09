---
title: "Virtual surgical planning and splint-guided fixation optimize dental occlusion and airway expansion in MMA"
tier: "Tier VII: Advanced Skeletal & Neuromodulatory Sleep Surgery — HGNS & Maxillomandibular Advancement"
tags:
  - pediatrics
  - sleep-surgery
  - vsp
  - splint-guided-fixation
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch10, p.200–201"
aliases:
  - "Virtual Surgical Planning"
  - "VSP"
  - "3D CAD/CAM Splints"
  - "Orthognathic Airway Planning"
---

# Virtual surgical planning and splint-guided fixation optimize dental occlusion and airway expansion in MMA

## Active Recall

> [!question]- How do intermediate and final CAD/CAM surgical splints guide maxillomandibular advancement in the operating room?
> *Answer / Clinical Rationale*: The **intermediate splint guides the advanced maxilla** relative to the native mandible; the **final splint locks the advanced mandible** into Class I occlusion with the maxilla.

> [!question]- What is the surgical accuracy achieved by VSP and custom surgical cutting guides?
> *Answer / Clinical Rationale*: Sub-millimeter precision with **$<0.5\text{ to }1.0\text{ mm}$ of translational error**.

## Core Clinical & Mechanistic Principles
**Virtual Surgical Planning (VSP) and 3D CAD/CAM Splint-Guided Fixation** have replaced manual model surgery, ensuring sub-millimeter precision in skeletal advancement and occlusion:
- **The Modern Digital Workflow**:
  1. **High-Resolution Maxillofacial CT + Intraoral Digital Dental Scans**: Merged to create high-precision 3D composite skull/dental models.
  2. **Virtual Osteotomy & Skeletal Simulation**:
     - Perform virtual Le Fort I and BSSO cuts.
     - Simulate $10\text{–}12\text{ mm}$ advancement and counter-clockwise rotation.
     - Quantify simulated **3D pharyngeal airway volume expansion** using computational fluid dynamics (CFD).
  3. **3D Printing of Custom Surgical Splints**:
     - *Intermediate Splint*: Guides positioning and fixation of the advanced maxilla relative to the un-operated mandible.
     - *Final Splint*: Locks the advanced mandible into class I dental interdigitation with the advanced maxilla.
  4. **Custom Patient-Specific Titanium Plates (PSI)**: Pre-bent or 3D printed titanium plates with pre-drilled screw trajectories match the virtual plan with **$<0.5\text{-mm}$ surgical error**.

```mermaid
%% VSP and CADCAM Splint Guided MMA Protocol
flowchart TD
  N1(["Preoperative Severe OSA Workup: Maxillomandibular Advancement [MMA] Candidate"]) --> N2{"Digital VSP Workflow"}
  N2 --> N3["Merge High-Resolution Maxillofacial CT & Optical Intraoral STL Scans"]
  N2 --> N4["Virtual 3D Osteotomy Simulation: 10-12 mm Advancement + CCW Rotation"]
  N2 --> N5["Computational Fluid Dynamics (CFD) Quantifies Velopharyngeal Volume Gain"]
  N2 --> N6{"CAD/CAM 3D Printed Splint Sequence"}
  N6 --> N7["Intermediate Splint: Fixes Le Fort I Maxilla Against Native Mandible"]
  N6 --> N8["Final Splint: Locks Advanced BSSO Mandible in Class I Dental Interdigitation"]
  N6 --> N9{"Patient-Specific Titanium Implant Fixation"}
  N9 --> N10["Custom 3D Printed Titanium Miniplates Match Pre-Drilled Screw Trajectories"]
  N9 --> N11["Achieves <0.5 mm Translational Error & Reduces OR Time by 60-90 Minutes"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4,N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7,N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N11 red
```

### Surgical Technique & Critical Safety Checks
- **Benefits**: Reduces total operative time by $>60\text{–}90\text{ minutes}$, eliminates unexpected malocclusion, and maximizes airway volume gains (see [[Maxillomandibular advancement MMA advances the skeletal framework by ten to twelve millimeters to expand the upper airway|MMA Advancement]]).

## Connected Concepts & Graph Traversal
- **MMA Advancement**: [[Maxillomandibular advancement MMA advances the skeletal framework by ten to twelve millimeters to expand the upper airway|MMA Advancement]]
- **Le Fort and BSSO**: [[Le Fort I osteotomy and bilateral sagittal split osteotomy BSSO achieve rigid skeletal advancement in MMA|Le Fort and BSSO]]
- **MMA Success Rates**: [[Maxillomandibular advancement achieves the highest surgical cure rate among all non-CPAP sleep apnea interventions|MMA Success Rates]]
- **Embryological & Sleep Foundation**: [[Second branchial cleft anomalies represent the most common branchial anomaly situated anterior to the sternocleidomastoid]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Coblation lingual tonsillectomy debulks tongue base lymphoid tissue while preserving the lingual neurovascular bundles]]
- **Congenital Airway Pathology**: [[Viral laryngotracheobronchitis croup presents with a barking cough and subglottic steeple sign on radiography]]
- **Open Airway Reconstruction**: [[Postoperative chin-to-chest flexion stitch prevents catastrophic neck extension and tracheal anastomotic dehiscence]]
