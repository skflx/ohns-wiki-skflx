---
title: "VFSS provides continuous radiographic evaluation of all deglutition phases"
tier: "Tier VI: Deglutition & Hypopharyngeal Pathology"
tags:
  - laryngology
  - deglutition
  - vfss
  - modified-barium-swallow
  - rosenbek
  - ues-kinetics
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsReview2017, Ch7, p.165"
aliases:
  - "Videofluoroscopic Swallow Study (VFSS)"
  - "Modified Barium Swallow (MBS)"
  - "Fluoroscopic Deglutition Analysis"
  - "Videofluoroscopic swallow study provides continuous dynamic radiographic evaluation of all deglutition phases"
---

# VFSS provides continuous radiographic evaluation of all deglutition phases

## Active Recall

> [!question]- What major anatomical advantage does VFSS provide over FEES when assessing cricopharyngeal dysfunction?
> *Answer / Clinical Rationale*: VFSS visualizes the entire **upper esophageal sphincter (UES) opening kinetics and cervical esophagus in lateral and A-P views**, allowing direct dynamic identification of a cricopharyngeal bar or Zenker's diverticulum, which are obscured on endoscopy.

> [!question]- How does hyolaryngeal elevation contribute to UES opening during the pharyngeal swallow?
> *Answer / Clinical Rationale*: Superior and anterior traction of the hyoid bone and thyroid framework exerts **mechanical distraction on the anterior wall of the cricopharyngeus muscle**, pulling the sphincter open to receive the descending bolus.

## Core Clinical & Mechanistic Principles
The **Videofluoroscopic Swallow Study (VFSS)**, also referred to as the **Modified Barium Swallow (MBS)**, is the dynamic radiographic gold standard for comprehensive, sub-second evaluation of the oral, pharyngeal, and cervical esophageal phases of deglutition.

### Dynamic Fluoroscopic Capabilities
- **Sub-Second Temporal Resolution**: Records continuous radiographic fluoroscopy at 30 frames per second during bolus ingestion of varying barium consistencies (thin liquid, nectar-thick, honey-thick, paste/pudding, and solid radiopaque cookies).
- **Absence of Whiteout**: Unlike [[FEES assesses pharyngeal secretions and aspiration under direct vision|FEES]], fluoroscopy maintains uninterrupted visualization during the peak pharyngeal swallow, capturing the exact biomechanical instant of bolus penetration, aspiration, or residue.

```mermaid
%% VFSS Fluoroscopic Deglutition Evaluation Algorithm
flowchart TD
  N1(["Video Fluoroscopic Swallowing Study (VFSS): Real-Time Dynamic Fluoroscopy"]) --> N2["Administer Calibrated Barium Consistencies (Thin, Nectar, Honey, Solid)"]
  N2 --> N3{"Systematic Assessment of Deglutition Sequence"}
  N3 -->|"Oral Phase: Lip Seal, Mastication, Tongue Base Propulsion"| N4["Assess Oral Residue & Premature Spillage"]
  N3 -->|"Pharyngeal Phase: Hyolaryngeal Elevation, Epiglottic Inversion, UES Opening"| N5{"Detect Airway Incursion on Rosenbek Scale"}
  N5 -->|"Penetration: Barium Enters Laryngeal Vestibule Above True Vocal Cords"| N6["Rosenbek Scores 2-5: Ejection vs Vestibular Residue"]
  N5 -->|"Aspiration: Barium Passes Below True Vocal Cords into Subglottis/Trachea"| N7["Rosenbek Scores 6-8: Responsive Cough vs Silent Aspiration"]
  N6 --> N8["Test Compensatory Maneuvers: Chin Tuck, Supraglottic Swallow, Diet Thickening"]
  N7 --> N8
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N4 cyan
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N6 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7 red
```

## Key Evaluative Parameters
1. **Hyolaryngeal Elevation**: Upward and forward displacement of the [[Suprahyoid Montgomery release mobilizes the larynx to reduce anastomotic tension|hyoid bone]] and larynx, which mechanically pulls open the Upper Esophageal Sphincter (UES).
2. **Cricopharyngeal Relaxation**: Evaluates for a prominent posterior indentation (**[[Open diverticulectomy combines pouch resection with cricopharyngeal myotomy|cricopharyngeal bar]]**) or herniation (**[[Zenker's diverticulum herniates through Killian's triangle due to elevated pulsion pressure|Zenker's diverticulum]]**).
3. **Penetration-Aspiration Scoring**: Standardized using the 8-point [[The Rosenbek Scale standardizes the depth of airway penetration and aspiration|Rosenbek Penetration-Aspiration Scale]].

## Clinical Strengths vs Limitations
- **Strengths**: Visualizes the entire deglutition sequence from lips to stomach; identifies the exact biomechanical etiology of aspiration (e.g., delayed swallow trigger, reduced hyolaryngeal elevation, or cricopharyngeal spasm).
- **Limitations**: Involves ionizing radiation exposure; requires transport to the radiology suite; utilizes barium-mixed substances rather than pure natural meals.

## Connected Concepts & Graph Traversal
- **Bedside Endoscopic Alternative**: [[FEES assesses pharyngeal secretions and aspiration under direct vision|Fiberoptic Endoscopic Evaluation of Swallowing (FEES)]]
- **Standardized Aspiration Scale**: [[The Rosenbek Scale standardizes the depth of airway penetration and aspiration|Rosenbek Penetration-Aspiration Scale]]
- **Associated Pathology**: [[Zenker's diverticulum herniates through Killian's triangle due to elevated pulsion pressure|Zenker's Diverticulum]]
- **Framework Surgical Correlate**: [[Arytenoid adduction closes large posterior glottic gaps and corrects height mismatch|Arytenoid Adduction for Aspiration]]
- **Clinical Management**: [[Open diverticulectomy combines pouch resection with cricopharyngeal myotomy|Open Transcervical Diverticulectomy]]
