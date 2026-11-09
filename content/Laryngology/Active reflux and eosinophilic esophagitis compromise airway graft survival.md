---
title: "Active reflux and eosinophilic esophagitis compromise airway graft survival"
tier: "Tier V: Laryngotracheal Stenosis & Airway Reconstruction"
tags:
  - laryngology
  - airway-stenosis
  - lpr
  - eoe
  - reflux-optimization
  - wound-healing
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Airway & Stridor Evaluation"
aliases:
  - "LPR in Airway Reconstruction"
  - "Reflux and EoE Airway Failure"
  - "Preoperative Antireflux Optimization"
  - "Active laryngopharyngeal reflux and eosinophilic esophagitis compromise airway reconstruction graft survival and promote restenosis"
---

# Active reflux and eosinophilic esophagitis compromise airway graft survival

## Active Recall

> [!question]- Why does active laryngopharyngeal reflux lead to costal cartilage graft failure in LTR?
> *Answer / Clinical Rationale*: Pepsin and gastric acid induce mucosal ulceration and microvascular thrombosis; because the newly grafted costal cartilage relies on diffusion and rapid mucosal re-vascularization, reflux-induced ischemia causes chondrocyte lysis, chondromalacia, and complete graft resorption.

> [!question]- What preoperative gastrointestinal diagnostic evaluation is mandatory in pediatric patients undergoing complex airway reconstruction?
> *Answer / Clinical Rationale*: Dual-probe 24-hour pH/impedance monitoring and **EGD with esophageal biopsies** to actively diagnose and treat reflux and eosinophilic esophagitis before surgery.

## Core Clinical & Mechanistic Principles
Uncontrolled **[[Laryngopharyngeal reflux presents with globus and throat clearing but responds inconsistently to empiric PPIs|Laryngopharyngeal Reflux]] (LPR)** and mucosal inflammatory disorders such as **Eosinophilic Esophagitis (EoE)** are the most frequent causes of delayed cartilage graft resorption, microvascular failure, granulation tissue proliferation, and restenosis following airway reconstruction.

### Pathophysiological Mechanisms of Graft Destruction
1. **Pepsin & Gastric Acid Micro-Aspiration**:
   - Pepsin penetrates deep into the laryngeal and tracheal mucosal intercellular spaces, where it is endocytosed by laryngeal epithelial cells and chondrocytes.
   - Low acidic pH ($<4.0$) activates intracellular pepsin, triggering cell lysis, disruption of extracellular matrix, and profound breakdown of [[Hyaluronic acid regulates lamina propria hydration and shock absorption|hyaluronic acid]] and collagen scaffolds.
2. **Ischemic Chondrocyte Necrosis**:
   - Non-vascularized [[Laryngotracheal reconstruction expands the airway using carved costal cartilage grafts|costal cartilage grafts]] rely on plasmatic diffusion across the raw mucosal bed. Acidic reflux exposure induces intense microvascular thrombosis and mucosal ulceration, devitalizing the graft and leading to complete **cartilage graft chondromalacia / resorption**.
3. **EoE-Mediated Eosinophilic Major Basic Protein**:
   - Eosinophil degranulation releases Major Basic Protein (MBP) and Eosinophil Cationic Protein (ECP), which directly damage airway perichondrium and stimulate aggressive granulation tissue formation.

```mermaid
%% Reflux and EoE Airway Graft Degradation and Optimization
flowchart TD
  N1(["Untreated LPR / EoE in Patient Slated for LTR / CTR Cartilage Grafting"]) --> N2{"Pathophysiologic Mechanisms of Graft Loss"}
  N2 -->|"Pepsin Endocytosis + Acid pH <4.0"| N3["Laryngeal Mucosal Ulceration & Microvascular Bed Thrombosis"]
  N3 --> N4["Avascular Chondrocyte Lysis & Costal Cartilage Graft Resorption"]
  N2 -->|"Eosinophilic Esophagitis (Major Basic Protein & ECP)"| N5["Severe Submucosal Inflammation & Exuberant Luminal Granulation"]
  N5 --> N6["Anastomotic Restenosis & Decannulation Failure (>50% Risk)"]
  N2 --> N7{"Mandatory Pre-Op Optimization Protocol"}
  N7 --> N8["1. 24h Dual-Probe MII-pH + EGD with Esophageal Biopsies (Rule Out >=15 Eos/HPF)"]
  N7 --> N9["2. High-Dose BID PPI + Bedtime H2RA + Fluticasone/Budesonide Slurry for EoE"]
  N7 --> N10["3. Nissen Fundoplication for Severe Refractory High-Volume Reflux"]
  N10 --> N11["Proceed to LTR / CTR in a Quiescent, Epithelialized Airway Bed"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N8 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N9,N10 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4,N6 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N11 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N3,N5 red
```

## Mandatory Preoperative Optimization Protocol
Prior to performing Laryngotracheal Reconstruction (LTR) or [[Cricotracheal resection removes subglottic stenosis while sparing posterior cricoid and RLNs|Cricotracheal Resection (CTR)]]:
1. **Aggressive Acid Suppression**: High-dose proton pump inhibitors (PPI, twice daily) combined with an $\text{H}_2$-receptor antagonist at bedtime.
2. **Diagnostic Confirmation**: 24-hour dual-probe pH-impedance testing and esophagogastroduodenoscopy (EGD) with proximal and distal esophageal biopsies (to rule out EoE: $\ge 15\text{ eosinophils/HPF}$).
3. **Surgical Fundoplication**: Patients with severe, medically refractory LPR must undergo **Nissen fundoplication** prior to open airway reconstruction.

## Critical Failure Modes & Error Traps
- **Operating in an Inflamed Field**: Performing open airway reconstruction in a patient with active untreated LPR or EoE results in a $>50\%$ rate of graft dehiscence, exuberant granulation tissue, and anastomotic restenosis.

## Connected Concepts & Graph Traversal
- **Reflux Diagnostics**: [[Laryngopharyngeal reflux presents with globus and throat clearing but responds inconsistently to empiric PPIs|LPR Diagnosis]]
- **Graft Reconstruction**: [[Two-stage LTR maintains a tracheostomy with prolonged endolaryngeal stenting|Two-Stage LTR Stenting]]
- **Stenosis Grading**: [[The Cotton-Myer classification grades subglottic stenosis by luminal reduction|Cotton-Myer Classification]]
- **Esophageal Motility**: [[High-resolution manometry classifies achalasia and esophageal motility disorders by the Chicago criteria|High-Resolution Manometry]]
- **Airway Dilation**: [[Endoscopic airway dilation combines radial incisions with balloon bronchoplasty|Endoscopic Airway Dilation]]
