---
title: "Nasopharyngeal carcinoma is an EBV-driven malignancy treated primarily with radiation and concurrent chemotherapy"
tier: "Tier S: Second-Echelon Oncology Heads"
tags:
  - head-and-neck
  - nasopharynx
  - ebv
  - radiation-oncology
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch5, p.93–94"
aliases:
  - "Nasopharyngeal Carcinoma"
  - "NPC"
---

# Nasopharyngeal carcinoma is an EBV-driven malignancy treated primarily with radiation and concurrent chemotherapy

## Active Recall

> [!question]- Why does unilateral serous otitis media open the NPC diagnostic pathway?
> *Answer / Clinical Rationale*: Tumor at the fossa of Rosenmuller obstructs the eustachian tube orifice — effusion is the tumor's first ambassador.

> [!question]- What does circulating EBV DNA add across the disease course?
> *Answer / Clinical Rationale*: Endemic screening, pretreatment prognostication, and sensitive post-treatment surveillance — rises antedate clinical relapse.

## Core Clinical & Mechanistic Principles
- Epidemiology-biology lock: endemic (southern China, Southeast Asia, North Africa) **WHO type III undifferentiated non-keratinizing** disease is EBV-driven; sporadic keratinizing (WHO I) behaves more like conventional SCC; risk cofactors include salted-fish nitrosamines and HLA associations.
- Presentation is drainage anatomy: painless level II/V and **retropharyngeal (Rouviere)** nodes, unilateral serous otitis (tubal obstruction), epistaxis, and cranial neuropathies (V, VI via petroclival extension) — half present with a neck mass.
- **Plasma EBV DNA** is a working biomarker: screening in endemic regions, prognosis, and post-treatment surveillance; rising titers precede clinical recurrence.
- The fossa of Rosenmuller is the origin; primary surgery has essentially no role at presentation because the anatomy is unresectable and the tumor is exquisitely radiosensitive.

```mermaid
%% Nasopharyngeal Carcinoma Diagnostic and Therapeutic Paradigm
flowchart TD
  N1(["Adult Unilateral Serous Otitis Media / Level II/V Neck Mass"]) --> N2["Flexible Nasopharyngoscopy: Fossa of Rosenmuller Mass"]
  N2 --> N3["Endoscopic Biopsy + Plasma Quantitative EBV DNA Titers"]
  N3 --> N4{"AJCC 8th Edition Staging (MRI Skull Base / Neck + PET-CT)"}
  N4 -->|"Stage I: T1 N0 M0 Confined to Nasopharynx"| N5["Definitive IMRT to Primary & Bilateral Necks (No Chemo)"]
  N4 -->|"Stage II-IVA: Locally Advanced / Nodal Positive"| N6["Induction Gemcitabine + Cisplatin followed by Concurrent Cisplatin-IMRT"]
  N6 --> N7["Post-Treatment Surveillance with Serial Plasma EBV DNA"]
  N7 -->|"Rising EBV DNA / Localized Persistent Recurrence"| N8["Salvage Endoscopic Transnasal / Transpterygoid Nasopharyngectomy"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N2 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8 purple
```

### Management & Critical Safety Checks
- Treatment: **IMRT** to primary and necks; concurrent cisplatin for stage II and above, with induction or adjuvant chemotherapy by risk (gemcitabine-cisplatin induction in locoregionally advanced disease has trial support).
- Otolaryngology's roles: diagnosis (endoscopic biopsy), eustachian sequelae, and **salvage nasopharyngectomy** (endoscopic or maxillary-swing) for localized radiorecurrent disease (see [[Adult unilateral otitis media with effusion mandates nasopharyngoscopy to exclude nasopharyngeal carcinoma|Adult Unilateral OME Diagnostic Flag]]).

## Connected Concepts & Graph Traversal
- **Otologic Presentation**: [[Adult unilateral otitis media with effusion mandates nasopharyngoscopy to exclude nasopharyngeal carcinoma|Adult Unilateral OME Diagnostic Flag]]
- **Nodal Drainage Anatomy**: [[Cervical lymph node levels I through VII define regional metastatic drainage basins|Levels II, V & Node of Rouviere]]
- **Skull Base Corridor**: [[Transpterygoid EEA exposes juvenile nasopharyngeal angiofibromas and lateral sphenoid defects|Transpterygoid Endoscopic Corridors]]
- **Radiation Toxicity**: [[Post-radiation carotid vasculopathy and osteoradionecrosis represent severe late radiotherapy sequelae|Late Radiation Sequelae]]
- **Systemic Therapy**: [[Cetuximab targets EGFR overexpression while pembrolizumab and nivolumab inhibit PD-1 in head and neck SCC|Systemic Chemotherapy & PD-1 Blockade]]
- **🔗 Differential Diagnosis (Pediatrics)**: [[Pediatric head and neck rhabdomyosarcoma stratifies into favorable orbital and unfavorable parameningeal sites managed with multimodality chemoradiation|Parameningeal RMS as Pediatric Nasopharyngeal Malignancy]]
- **Poorly Differentiated Midline Differential**: [[NUT midline carcinoma is an aggressive poorly differentiated squamous neoplasm harboring BRD4-NUT fusions with abrupt keratinization|NUT Midline Carcinoma]]
