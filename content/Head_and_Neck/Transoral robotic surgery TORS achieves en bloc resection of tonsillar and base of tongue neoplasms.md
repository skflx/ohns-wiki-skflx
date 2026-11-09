---
title: "Transoral robotic surgery TORS achieves en bloc resection of tonsillar and base of tongue neoplasms"
tier: "Tier IV: Oropharyngeal (TORS), Laryngeal & Hypopharyngeal Surgical Oncology"
tags:
  - head-and-neck
  - oropharynx
  - tors
  - robotic-surgery
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch5, p.83–84"
aliases:
  - "TORS"
  - "Transoral Robotic Surgery"
  - "Robotic Oropharyngectomy"
---

# Transoral robotic surgery TORS achieves en bloc resection of tonsillar and base of tongue neoplasms

## Active Recall

> [!question]- What are the primary indications for Transoral Robotic Surgery (TORS) in head and neck oncology?
> *Answer / Clinical Rationale*: **T1/T2 carcinomas of the palatine tonsil and base of tongue**, and identification of occult primary carcinomas via diagnostic palatine/lingual tonsillectomy.

> [!question]- What trial demonstrated the oncologic safety of radiotherapy dose de-escalation following TORS in p16+ OPSCC?
> *Answer / Clinical Rationale*: The **ECOG 3311 prospective randomized trial**.

## Core Clinical & Mechanistic Principles
**Transoral Robotic Surgery (TORS)** (using the da Vinci surgical system or single-port SP system) provides 3D stereoscopic magnification, tremor filtration, and multi-articulated wristed instruments for oropharyngeal resection:
- **Core Indications**:
  - T1 and T2 squamous cell carcinomas of the palatine tonsil and base of tongue (BOT).
  - Unknown primary carcinoma of the head and neck (diagnostic lingual tonsillectomy).
  - Select supraglottic laryngeal carcinomas.
- **Oncologic Principles**:
  - Allows en bloc resection with negative margins while avoiding mandibulotomy and extensive lip-split incisions.
  - Core component of **treatment de-escalation protocols (e.g., ECOG 3311)** for intermediate-risk p16+ OPSCC, allowing reduced adjuvant radiation dose ($50\text{ Gy}$ vs. $60\text{–}66\text{ Gy}$) and omission of concurrent chemotherapy.

```mermaid
%% TORS Indications Resection and ECOG 3311 Deescalation
flowchart TD
  N1(["Oropharyngeal Squamous Cell Carcinoma / Unknown Primary Cervical Node"]) --> N2{"Transoral Surgical Feasibility & Resectability"}
  N2 -->|"Carotid Encasement / Prevertebral Fixation / Deep Tongue Base Muscle Infiltration"| N3(["Definitive Chemoradiation / Open Approaches"])
  N2 -->|"T1-T2 Tonsil / BOT / Unknown Primary (FK-WO / Crowe-Davis Gag Accessible)"| N4["TORS Setup & Docking (da Vinci Xi / SP Multi-Articulated Arms)"]
  N4 --> N5["En Bloc 3D Resection with Negative Margins + Concurrent Neck Dissection"]
  N5 --> N6{"Postoperative Pathology Risk Stratification (ECOG 3311)"}
  N6 -->|"Low Risk (T1-T2, Clear Margins, 0-1 Node, No ENE)"| N7["De-escalation: Observation Alone (No Adjuvant RT)"]
  N6 -->|"Intermediate Risk (Close Margins, 2-4 Nodes, <=1mm ENE)"| N8["De-escalation: Reduced Dose RT (50 Gy vs 60 Gy) WITHOUT Cisplatin"]
  N6 -->|"High Risk (Positive Margin, Gross ENE >1mm)"| N9["Standard Tri-Modality: 60-66 Gy IMRT + Concurrent Cisplatin"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7,N8 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N3,N9 red
```

### Surgical Technique & Critical Safety Checks
- **Exposure & Setup**: Feyh-Kastenbauer (FK-WO) or Crow-Davis retractor; tooth guards to protect dentition; monitor for lingual neuropraxia or tongue edema.
- **Contraindications**: Inability to achieve transoral exposure (severe trismus, retrognathia), carotid artery encasement, prevertebral fascia fixation, or extensive tongue base cross-midline invasion (see [[TORS radical tonsillectomy requires careful identification of the internal carotid artery posterolaterally|TORS Radical Tonsillectomy]]).

## Connected Concepts & Graph Traversal
- **TORS Tonsillectomy Craft**: [[TORS radical tonsillectomy requires careful identification of the internal carotid artery posterolaterally|TORS Radical Tonsillectomy]]
- **TORS Lingual Artery Control**: [[Lingual artery branches require clip ligation during TORS base of tongue resection|TORS Lingual Artery Hemostasis]]
- **Prophylactic ECA Ligation**: [[Prophylactic transcervical external carotid ligation reduces fatal secondary hemorrhage after TORS|Transcervical ECA Ligation]]
- **HPV Oropharynx Biology**: [[HPV-positive oropharyngeal squamous cell carcinoma exhibits distinct biological behavior and staging|HPV-Positive OPSCC Biology]]
- **Extranodal Extension Impact**: [[Extranodal extension in cervical lymph nodes upstages nodal disease and dictates adjuvant chemoradiotherapy|Extranodal Extension (ENE)]]
- **Five-Millimeter Margins**: [[Oncologic clear margins require at least five millimeters of histological normal tissue|Clear Margin Standards]]
