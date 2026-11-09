---
title: "Zenker's diverticulum herniates through Killian's triangle due to elevated pulsion pressure"
tier: "Tier VI: Deglutition & Hypopharyngeal Pathology"
tags:
  - laryngology
  - hypopharynx
  - zenkers-diverticulum
  - killians-triangle
  - cricopharyngeus
  - dysphagia
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch7, p.172–173"
aliases:
  - "Zenker's Diverticulum (ZD)"
  - "Pharyngeal Pulsion Diverticulum"
  - "Hypopharyngeal Diverticulum"
  - "Zenker's diverticulum is a pulsion diverticulum herniating through Killian's triangle due to elevated hypopharyngeal opening pressures"
---

# Zenker's diverticulum herniates through Killian's triangle due to elevated pulsion pressure

## Active Recall

> [!question]- Why is a Zenker's diverticulum classified as a 'false' pulsion diverticulum?
> *Answer / Clinical Rationale*: It is formed by herniation of only the **mucosa and submucosa** through a muscular defect (Killian's triangle), lacking a true muscularis layer in the pouch wall.

> [!question]- What underlying biomechanical muscle dysfunction generates the pulsion pressure in Zenker's diverticulum?
> *Answer / Clinical Rationale*: Incomplete relaxation, delayed opening, or hypertonicity of the **cricopharyngeus muscle**, which increases hypopharyngeal intrabolus pressure during swallowing.

## Core Clinical & Mechanistic Principles
**Zenker's Diverticulum (ZD)** (first described by Friedrich Albert von Zenker in 1877) is a **false, pulsion diverticulum** formed by herniation of the hypopharyngeal mucosa and submucosa through a posterior anatomical muscular weakness known as **[[Killian's triangle is a posterior muscular dehiscence above the cricopharyngeus|Killian's triangle]]**.

### Pathophysiological Mechanism
1. **Cricopharyngeal Hypertonicity / Non-Compliance**: The [[Open diverticulectomy combines pouch resection with cricopharyngeal myotomy|cricopharyngeus]] (CP) muscle fails to relax completely or exhibits delayed, uncoordinated opening during the pharyngeal phase of deglutition.
2. **Elevated Intrabolus Opening Pressure**: The advancing food bolus encounters a rigid, non-compliant CP barrier, generating pathologically elevated hydrostatic intrabolus pressures within the hypopharynx.
3. **Mucosal Herniation through Killian's Triangle**: High pressure forces the hypopharyngeal mucosal envelope to herniate posteriorly between the oblique fibers of the thyropharyngeus and the transverse fibers of the cricopharyngeus muscle.

```mermaid
%% Zenkers Diverticulum Pathogenesis and Surgical Triage
flowchart TD
  N1(["Cricopharyngeus Muscle Hypertonicity & Incomplete Deglutitive Relaxation"]) --> N2["Elevated Hypopharyngeal Hydrostatic Intrabolus Pressure"]
  N2 --> N3["False Pouch Herniates Posteriorly Through KILLIAN'S TRIANGLE"]
  N3 --> N4["Boundaries: Oblique Thyropharyngeus (Superior) & Transverse Cricopharyngeus (Inferior)"]
  N3 --> N5{"Clinical Triad & Diagnostic Workup"}
  N5 --> N6["Triad: Progressive Dysphagia + Regurgitation of Undigested Food + Halitosis"]
  N5 --> N7["Diagnostic Confirmation: Barium Esophagram (Posterior Pouch at C5-C6)"]
  N5 --> N8{"Surgical Selection Decision Tree"}
  N8 -->|"Pouch Size >= 2.5-3.0 cm"| N9["Transoral Endoscopic Stapler Diverticulotomy (First-Line)"]
  N8 -->|"Pouch Size < 2.5 cm or Isolated CP Bar"| N10["Transoral CO2 Laser / Harmonic Scalpel Micro-Diverticulotomy"]
  N8 -->|"Giant Pouch > 5-6 cm or Difficult Transoral Anatomy"| N11["Open Transcervical Diverticulectomy with Formal CP Myotomy"]
  N5 -->|"CRITICAL FATAL TRAP: Blind NGT / Endoscope Passage"| N12["Perforates Diverticular Fundus into Danger Space -> Fatal Mediastinitis"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N9,N10,N11 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N6,N7 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N3,N4 red
```

## Clinical Manifestations & Diagnostic Findings
- **Hallmark Symptoms**: Progressive oropharyngeal dysphagia, regurgitation of undigested food hours after eating, halitosis, noisy deglutition (borborygmi in the neck), nocturnal coughing fits, and recurrent aspiration pneumonia.
- **Diagnostic Modality**: **Barium Esophagram / [[VFSS provides continuous radiographic evaluation of all deglutition phases|VFSS]]** is the definitive diagnostic test, demonstrating a posterior barium-filled pouch projecting at the level of C5–C6 with a prominent cricopharyngeal bar.

## Surgical Management Paradigm
The cornerstone of all surgical approaches is **division of the cricopharyngeal muscle bar** ($\pm$ pouch management):
1. **Transoral Endoscopic Stapler Diverticulotomy**: First-line for pouches $\ge 2.5\text{–}3.0\text{ cm}$.
2. **Transoral Laser / Harmonic Scalpel Diverticulotomy**: Indicated for small pouches ($<2.5\text{ cm}$) or prominent CP bars.
3. **Open Transcervical Excision with CP Myotomy**: Indicated for giant pouches ($>5\text{–}6\text{ cm}$), recurrent disease, or impossible endoscopic transoral access.

## Critical Failure Modes & Error Traps
- **Blind Nasogastric Tube Placement**: Passing a blind NG tube or flexible endoscope in a patient with an un-diagnosed Zenker's can easily perforate the thin-walled diverticular fundus into the retropharyngeal space, causing fatal mediastinitis.

## Connected Concepts & Graph Traversal
- **Open Surgical Diverticulectomy**: [[Open diverticulectomy combines pouch resection with cricopharyngeal myotomy|Open Diverticulectomy]]
- **Esophageal Motility Manometry**: [[High-resolution manometry classifies achalasia and esophageal motility disorders by the Chicago criteria|High-Resolution Manometry]]
- **Aspiration Scale Grading**: [[The Rosenbek Scale standardizes the depth of airway penetration and aspiration|Rosenbek Penetration Scale]]
- **PE Segment Tone**: [[Pharyngoesophageal segment hypertonicity causes TEP failure treated with Botox or myotomy|PE Segment Dysfunction]]
- **LPR Reflux Mimic**: [[Laryngopharyngeal reflux presents with globus and throat clearing but responds inconsistently to empiric PPIs|Laryngopharyngeal Reflux]]
