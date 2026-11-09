---
title: "FEES assesses pharyngeal secretions and aspiration under direct vision"
tier: "Tier VI: Deglutition & Hypopharyngeal Pathology"
tags:
  - laryngology
  - deglutition
  - dysphagia
  - fees
  - murray-scale
  - aspiration
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch47, p.900"
aliases:
  - "Fiberoptic Endoscopic Evaluation of Swallowing (FEES)"
  - "FEES Swallowing Assessment"
  - "Endoscopic Deglutition Diagnostics"
  - "Fiberoptic endoscopic evaluation of swallowing assesses pharyngeal secretional pooling and aspiration under direct vision"
---

# FEES assesses pharyngeal secretions and aspiration under direct vision

## Active Recall

> [!question]- What is the primary technical limitation of FEES during the pharyngeal phase of swallowing?
> *Answer / Clinical Rationale*: **Pharyngeal "whiteout"**; bolus transit and epiglottic retroflexion cause the pharyngeal mucosa to contact the lens, temporarily obscuring visualization for ~0.5 seconds during the actual swallow.

> [!question]- What does a Murray Secretion Scale Level 3 indicate?
> *Answer / Clinical Rationale*: Severe, un-cleared secretional pooling directly within the **laryngeal vestibule and glottic aperture**, signifying profound sensory/motor deficits and a very high risk of silent aspiration.

## Core Clinical & Mechanistic Principles
**Fiberoptic Endoscopic Evaluation of Swallowing (FEES)** (first described by Susan Langmore in 1988) is a portable, bedside endoscopic diagnostic procedure that provides direct optical visualization of the pharyngeal and laryngeal anatomy before, during, and after deglutition.

### Evaluative Metrics & The Murray Secretion Scale
1. **Resting Secretion Assessment**:
   - Quantified using the **Murray Secretion Scale**:
     - *Level 0*: Normal; no secretions in pyriforms or laryngeal vestibule.
     - *Level 1*: Secretions transiently pooling in valleculae / pyriform sinuses, clearing spontaneously.
     - *Level 2*: Secretions pooling in valleculae / pyriforms with delayed clearing, or transient laryngeal vestibule entry.
     - *Level 3*: Profound, continuous pooling in the laryngeal vestibule and glottis with absent clearing (*high risk of [[The Rosenbek Scale standardizes the depth of airway penetration and aspiration|silent aspiration]]*).
2. **Structural & Sensorimotor Evaluation**:
   - Evaluates vocal fold mobility, base of tongue retraction, pharyngeal squeeze, and [[The superior laryngeal nerve provides supraglottic sensation and cricothyroid motor control|iSLN]] laryngeal adductor sensory reflex (touch test).
3. **Bolus Testing**: Administers real food consistencies (puree, nectar-thick, thin liquid, solids) tinted with green/blue food coloring.

```mermaid
%% FEES Swallowing Assessment Protocol and Secretion Staging
flowchart TD
  N1(["Bedside Dysphagia / Suspected Silent Aspiration in High-Risk Patient"]) --> N2["Transnasal Flexible Endoscopic Passage Over Soft Palate into Oropharynx"]
  N2 --> N3{"Resting Secretion Assessment (Murray Scale)"}
  N3 -->|"Level 0/1: None or Spontaneously Cleared Vallecular Pooling"| N4["Normal / Mild Pharyngeal Secretion Clearance"]
  N3 -->|"Level 2/3: Persistent Pooling in Laryngeal Vestibule / Glottis"| N5["Profound Sensation Deficit -> Severe Silent Aspiration Risk"]
  N2 --> N6["Laryngeal Adductor Reflex Touch Test (iSLN Sensory Integrity)"]
  N6 --> N7{"Graded Bolus Challenges (Green-Dyed Puree, Liquid, Solid)"}
  N7 --> N8["Pre-Swallow Phase: Premature Oral Spillage into Pyriforms Before Initiation"]
  N7 --> N9["Pharyngeal Phase: 0.5s Optical 'Whiteout' (Pharyngeal Wall Apposition)"]
  N7 --> N10["Post-Swallow Phase: Inspect Stasis, Residue, Vestibular Penetration / Subglottic Aspiration"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4,N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8,N10 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9 red
```

## Clinical Strengths vs Limitations
- **Strengths**:
  - Performed at the bedside without ionizing radiation exposure.
  - Utilizes real food and liquid boluses.
  - Directly assesses laryngeal mucosal anatomy, secretions, and vocal fold paralysis.
- **The "Whiteout" Limitation**: During the actual pharyngeal transit phase, the pharyngeal walls and base of tongue collapse against the endoscope tip, causing a brief $0.5\text{-second}$ optical "whiteout." Events occurring strictly during this instant cannot be seen directly, requiring inference from post-swallow residue or complementary [[VFSS provides continuous radiographic evaluation of all deglutition phases|Videofluoroscopic Swallow Study (VFSS)]].

## Connected Concepts & Graph Traversal
- **Radiographic Deglutition Partner**: [[VFSS provides continuous radiographic evaluation of all deglutition phases|Videofluoroscopic Swallow Study (VFSS)]]
- **Standardized Aspiration Scale**: [[The Rosenbek Scale standardizes the depth of airway penetration and aspiration|Rosenbek Penetration-Aspiration Scale]]
- **Neurological Etiology**: [[Unilateral vocal fold paralysis causes glottic insufficiency, breathiness, and aspiration|Unilateral Vocal Fold Paralysis (UVFP)]]
- **Sensory Innervation Assessed**: [[The superior laryngeal nerve provides supraglottic sensation and cricothyroid motor control|Internal Branch of Superior Laryngeal Nerve (iSLN)]]
- **Associated Pathology**: [[Zenker's diverticulum herniates through Killian's triangle due to elevated pulsion pressure|Zenker's Diverticulum]]
