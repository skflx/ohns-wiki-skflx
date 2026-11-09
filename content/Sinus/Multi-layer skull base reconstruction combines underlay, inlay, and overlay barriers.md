---
title: "Multi-layer skull base reconstruction combines underlay, inlay, and overlay barriers"
tier: "Tier VI: Endoscopic CSF Leak Repair & Vascularized Flaps"
tags:
  - rhinology
  - skull-base-reconstruction
  - csf-leak-repair
  - surgical-hierarchy
last_revised: 2026-11-09
status: complete
sources:
  - "AtlasESS19, Endoscopic Sinus & Skull Base Surgery"
aliases:
  - "Multi-Layer Skull Base Reconstruction"
  - "Underlay-Inlay-Overlay Hierarchy"
  - "Dural Defect Closure Protocol"
---

# Multi-layer skull base reconstruction combines underlay, inlay, and overlay barriers

## Active Recall

> [!question]- What is the primary biomechanical purpose of the rigid 'inlay' layer in multi-layer skull base reconstruction?
> *Answer / Clinical Rationale*: It provides rigid structural counter-support to **resist intracranial pressure (ICP) pulsations**, preventing soft-tissue graft herniation and long-term encephalocele formation in large defects ($>1\text{ cm}$).

> [!question]- What soft-tissue flap provides the highest success rate ($>95\%$) as an overlay in high-flow expanded skull base reconstruction?
> *Answer / Clinical Rationale*: The **Hadad-Bassagasteguy nasoseptal flap (NSF)**, pedicled on the posterior septal artery.

## Core Clinical & Mechanistic Principles
Reconstruction of large skull base dural defects ($>1\text{ cm}$) or high-flow intraoperative CSF leaks requires a **multi-layer reconstruction hierarchy**. Combining structural rigidity with watertight soft-tissue barriers prevents brain herniation and resists intracranial pressure (ICP) pulsations.

```mermaid
%% Multi-Layer Skull Base Reconstruction Hierarchy
flowchart TD
  N1(["Anterior / Ventral Skull Base Dural Defect Post-EEA"]) --> N1A{"Stratify by Defect Size & CSF Flow Rate"}
  N1A -->|"Small Defect (<1 cm) & Low-Flow Weep"| N1B(["Single/Double-Layer Free Mucosal or Collagen Graft Repair"])
  N1A ==>|"Large Defect (>1 cm) or High-Flow Cisternal/Ventricular Leak"| N2["Plane 1 (Intradural / Subdural Underlay): Tuck Fascia Lata / ADM 3-5 mm Under Dura"]
  N2 --> N3["Plane 2 (Epidural Bony Inlay): Wedge Septal Cartilage / Vomer Against Bony Ledge"]
  N3 --> N4["Plane 3 (Extracranial Vascularized Overlay): Drape Hadad Nasoseptal Flap (>5 mm Overlap)"]
  N4 --> N5["Biological Perimeter Seal (Fibrin Glue + Gelfoam) + Foley / Merocel Bolster"]
  N5 --> N7(["Hermetic Watertight Multi-Layer Seal (>95% CSF Leak Prevention)"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N1B,N2 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N3 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4,N7 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N5 purple
```

### The Three Reconstructive Planes
1. **Underlay (Subdural / Intradural)**:
   - Material: Fascia lata, temporalis fascia, collagen matrix, or acellular dermal matrix (ADM).
   - Placement: Tucked $3\text{–}5\text{ mm}$ subdurally beneath the margins of the dura.
2. **Inlay (Epidural / Bony Shelf)**:
   - Material: Autologous septal cartilage, perpendicular plate bone, or vomer.
   - Placement: Wedged against the bony margins to prevent graft sagging under gravitational and hydrodynamic CSF pressure.
3. **Overlay (Extracranial / Nasal Aspect)**:
   - Material: **Vascularized [[The Hadad-Bassagasteguy nasoseptal flap is pedicled on the posterior septal artery|Hadad-Bassagasteguy]] Nasoseptal Flap (NSF)**.
   - Placement: Draped completely across the de-mucosalized skull base, overlapping the defect edges by $>5\text{ mm}$.

## Connected Concepts & Graph Traversal
- **Vascularized Flap**: [[The Hadad-Bassagasteguy nasoseptal flap is pedicled on the posterior septal artery|Nasoseptal Flap (NSF)]]
- **Defect Preparation**: [[CSF leak defect preparation requires circumferential bone de-mucosalization|De-Mucosalization Protocol]]
- **Diagnostics**: [[Beta-2 transferrin and high-resolution CT localize sinonasal CSF fistulas|CSF Leak Diagnostics]]
- **Expanded Corridor**: [[Transsellar EEA provides direct access to pituitary adenomas and Rathke cleft cysts|Transsellar EEA]]
- **High-Stakes Safety**: [[Iatrogenic skull base cribriform leaks require immediate intraoperative multi-layer graft repair|Iatrogenic Skull Base Repair]]
- **Critical Safety & Complication**: [[Lumbar drain placement and ICP management lower the risk of postoperative CSF fistula recurrence|Lumbar Spinal Drainage Protocol]]
- **Critical Safety / Complication**: [[Esthesioneuroblastoma Kadish and Hyams staging determines craniofacial resection and adjuvant therapy|Esthesioneuroblastoma (ENB)]]
- **Surgical Technique**: [[Multi-layer underlay and overlay CSF leak closure employs a bath-plug technique with autologous fat and fascia lata to resist intracranial pressure pulsations|Bath-Plug CSF Closure]]
