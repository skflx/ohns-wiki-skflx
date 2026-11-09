---
title: "The Lund-Mackay CT scoring system quantifies sinonasal opacification and ostiomeatal occlusion"
tier: "Tier II: High-Resolution CT Sinus Mapping & CLOSE Checkpoints"
tags:
  - rhinology
  - ct-imaging
  - lund-mackay
  - staging-systems
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Lund-Mackay CT Score"
  - "Radiological Sinus Staging"
  - "Sinonasal CT Quantification"
---

# The Lund-Mackay CT scoring system quantifies sinonasal opacification and ostiomeatal occlusion

## Active Recall

> [!question]- How is the ostiomeatal complex (OMC) specifically scored in the Lund-Mackay system?
> *Answer / Clinical Rationale*: The OMC is scored strictly as **0 (patent/not occluded) or 2 (occluded)**; there is no score of 1 for the OMC.

> [!question]- What is the maximum possible total score in the Lund-Mackay CT scoring system?
> *Answer / Clinical Rationale*: **24** (maximum of 12 points per side across 5 sinus pairs + 1 OMC pair).

## Core Clinical & Mechanistic Principles
Introduced in 1993, the **Lund-Mackay (LM) CT Scoring System** is the internationally recognized standard for radiologically staging the severity of chronic rhinosinusitis on non-contrast sinus CT.

```mermaid
%% Lund-Mackay CT Radiographic Scoring Matrix
flowchart TD
  N1(["Non-Contrast High-Resolution Coronal Sinus CT"]) --> N2{"Quantify 6 Bilateral Sinonasal Compartments"}
  N2 -->|"Maxillary, Anterior Ethmoid, Posterior Ethmoid, Sphenoid, Frontal Sinuses (0-2 Points Each)"| N3["Score 0: Completely Clear | Score 1: Partial Opacification | Score 2: Complete Opacification"]
  N2 -->|"Ostiomeatal Complex (OMC: Binary 0 or 2 Points Each Side)"| N4["Score 0: Not Occluded | Score 2: Occluded"]
  N2 --> N5["Sum Total Bilateral Lund-Mackay Score: 0 to 24 Points (12 Points per Side)"]
  N5 --> N6{"Clinical Threshold Interpretation"}
  N6 -->|"Score <=3: Normal / Incidental Asymptomatic Mucosal Thickening"| N7["Non-Diagnostic for Surgical CRS"]
  N6 -->|"Score >=4 to 24 with Concordant Symptoms >12 Weeks"| N8["Objective Evidence Supporting Functional Endoscopic Sinus Surgery"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7,N8 purple
```

### Clinical Correlation & Surgical Thresholds
- **Asymptomatic Baseline**: Healthy, asymptomatic individuals typically score **$\le 2\text{–}3$** total.
- **Surgical Cohorts**: Patients undergoing FESS for occlusion of the [[The hiatus semilunaris and infundibulum form the primary drainage channel of the ostiomeatal complex|ostiomeatal complex]] typically present with mean scores between **$9\text{ and }14$**.
- **Important Limitation**: LM scores correlate strongly with disease extent and eosinophilic tissue burden on [[The Lund-Kennedy endoscopic staging system tracks mucosal edema, polyps, and discharge|endoscopic staging]], but have **weak-to-moderate correlation with subjective patient-reported symptom scores (SNOT-22)**.

## Connected Concepts & Graph Traversal
- **Endoscopic Staging Partner**: [[The Lund-Kennedy endoscopic staging system tracks mucosal edema, polyps, and discharge|Lund-Kennedy Endoscopic Score]]
- **Ostiomeatal Complex Pathology**: [[The hiatus semilunaris and infundibulum form the primary drainage channel of the ostiomeatal complex|Ostiomeatal Complex]]
- **Radiological Safety Checklist**: [[The CLOSE checklist systematically evaluates critical radiological danger zones|CLOSE Danger Zone Checklist]]
- **Ethmoid Air Cell Anatomy**: [[The four parallel ethmoidal lamellae guide systematic anterior-to-posterior endoscopic orientation|Four Ethmoidal Lamellae]]
- **Frontal Recess Obstruction**: [[The Kuhn classification stages frontal recess and frontal sinus air cells|Kuhn Frontal Cells]]
