---
title: "Hereditary hemorrhagic telangiectasia manifests with mucosal AVMs and recurrent epistaxis"
tier: "Tier V: CRS Endotypes, Biologics, Epistaxis & Inverting Papilloma"
tags:
  - rhinology
  - hht
  - osler-weber-rendu
  - epistaxis
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch10, p.211–212"
aliases:
  - "Hereditary Hemorrhagic Telangiectasia (HHT)"
  - "Osler-Weber-Rendu Disease"
  - "Curacao Diagnostic Criteria"
---

# Hereditary hemorrhagic telangiectasia manifests with mucosal AVMs and recurrent epistaxis

## Active Recall

> [!question]- What are the four Curacao diagnostic criteria for Hereditary Hemorrhagic Telangiectasia?
> *Answer / Clinical Rationale*: (1) **Spontaneous recurrent epistaxis**, (2) **Multiple mucocutaneous telangiectasias**, (3) **Visceral AVMs** (pulmonary, cerebral, hepatic), and (4) **First-degree relative with HHT** (3 or 4 = Definite).

> [!question]- Why is monopolar electrocautery and aggressive nasal packing contraindicated in HHT epistaxis?
> *Answer / Clinical Rationale*: Monopolar current causes extensive thermal necrosis, and packing shears fragile telangiectatic vessels, leading to large **septal perforations** that severely worsen turbulent airflow and bleeding.

## Core Clinical & Mechanistic Principles
**Hereditary Hemorrhagic Telangiectasia (HHT / Osler-Weber-Rendu Disease)** is an autosomal dominant vascular dysplasia characterized by abnormal direct connections between arteries and veins lacking a capillary bed, forming fragile **telangiectasias and arteriovenous malformations (AVMs)**.

Mutations occur in **ENG (Endoglin / HHT1)** and **ACVRL1 (ALK1 / HHT2)** in the TGF-$\beta$ / BMP signaling pathways.

```mermaid
%% HHT Diagnostic and Staged Epistaxis Protocol
flowchart TD
  N1(["Recurrent Epistaxis & Cutaneous Telangiectasias: HHT / Osler-Weber-Rendu Suspect"]) --> N2{"Curaçao Diagnostic Criteria [>=3 = Definite]"}
  N2 --> N3["1. Recurrent Epistaxis + 2. Telangiectasias + 3. Visceral AVMs + 4. Family History"]
  N2 --> N4["Genetics: ENG / Endoglin (HHT1: Pulmonary AVMs) vs ACVRL1 / ALK1 (HHT2: Hepatic)"]
  N2 --> N5{"STAGED MULTI-TIER EPISTAXIS LADDER"}
  N5 -->|"Tier 1: Conservative Baseline-Protection"| N6["Tier1Protocol"]
  N5 -->|"Tier 2: Targeted Office / OR Ablation"| N7{"Tier2Protocol"}
  N5 -->|"Tier 3: Anti-Angiogenic Pharmacotherapy"| N8["Tier3Protocol"]
  N5 -->|"Tier 4: Surgical Exclusion for Transfusion-Dependent Refractory Disease"| N9["Tier4Protocol"]
  N6 --> N10["Aggressive Humidification + Saline Gel/Rose Geranium Oil + Oral/Topical TXA"]
  N7 --> N11["KTP (532 nm) / Nd:YAG Laser Photocoagulation or Gentle Bipolar Cautery"]
  N7 --> N12["STRICT AVOIDANCE OF MONOPOLAR CAUTERY & RIGID PACKING (Prevents Perforation)"]
  N8 --> N13["Intravenous / Submucosal BEVACIZUMAB (Avastin Anti-VEGF mAb Therapy)"]
  N9 --> N14["Septodermoplasty (Split-Thickness Skin Graft) or YOUNG'S NASAL CLOSURE"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N10 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N11,N12 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N4 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N13,N14 red
```

### Visceral Arteriovenous Malformations (Pulmonary AVM Screening)
Beyond sinonasal mucosal telangiectasias, visceral organ screening is vital to prevent fatal neurological and embolic complications:
- **Pulmonary AVMs (PAVMs)**:
  - Present in **approximately $40\%$ of patients with HHT** (higher prevalence in HHT1 / *ENG* mutations).
  - *Paradoxical Embolism Hazard*: Right-to-left intrapulmonary vascular shunting bypasses the capillary filtration bed of the lungs, allowing septic microemboli and venous thrombi to reach the systemic arterial circulation, leading to **cryptogenic embolic stroke or recurrent polymicrobial brain abscesses**.
  - *Screening Standard*: Transthoracic contrast echocardiography (**bubble study**)—delayed appearance of microbubbles in the left atrium after 3 to 8 cardiac cycles confirms intrapulmonary right-to-left shunting, mandating thin-slice chest CT and catheter embolotherapy with detachable coils/vascular plugs for feeding vessels $\ge 2–3\text{ mm}$.
- **Cerebral & Hepatic AVMs**: Brain MRI screening identifies cerebral AVMs ($10\%$); hepatic AVMs ($40–70\%$) can cause high-output cardiac failure or portal hypertension.

### Staged Multi-Tier Epistaxis Management
- **Conservative**: Humidification, mucosal emollients (rose geranium oil), tranexamic acid (oral/topical).
- **In-Office / OR Coagulation**: **KTP / Nd:YAG laser photocoagulation** or bipolar cautery (monopolar and aggressive packing must be avoided to prevent septal perforation).
- **Systemic Anti-VEGF / Bevacizumab**: Intravenous or submucosal **Bevacizumab (Avastin)** inhibits hyperactive angiogenesis.
- **Young’s Procedure (Nasal Closure)**: Complete surgical closure of the nasal vestibular introitus for refractory, life-threatening transfusion-dependent epistaxis.

## Connected Concepts & Graph Traversal
- **SPA Ligation**: [[The crista ethmoidalis guides endoscopic sphenopalatine artery ligation|Endoscopic SPA Ligation]]
- **Anatomy**: [[The 24-12-6 rule governs anterior and posterior ethmoidal artery surgical localization|AEA & PEA Ligation]]
- **Laser Craft**: [[The Lund-Kennedy endoscopic staging system tracks mucosal edema, polyps, and discharge|Endoscopic Staging]]
- **Anatomical Foundation**: [[Endoscopic sphenopalatine artery ligation requires crista ethmoidalis resection and systematic multi-branch control to prevent recurrent epistaxis|Endoscopic SPA Multi-Branch Ligation]]
- **Surgical Craft**: [[Kiesselbach plexus anterior epistaxis is managed with cautery and anterior nasal packing|Anterior Epistaxis]]
