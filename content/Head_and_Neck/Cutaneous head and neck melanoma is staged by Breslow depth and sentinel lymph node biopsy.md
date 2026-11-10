---
title: "Cutaneous head and neck melanoma is staged by Breslow depth and sentinel lymph node biopsy"
tier: "Tier S: Second-Echelon Oncology Heads"
tags:
  - head-and-neck
  - melanoma
  - cutaneous
  - sentinel-node
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch11, p.233"
aliases:
  - "Head and Neck Melanoma"
  - "Melanoma SLNB"
---

# Cutaneous head and neck melanoma is staged by Breslow depth and sentinel lymph node biopsy

## Active Recall

> [!question]- At what Breslow threshold is SLNB discussed and what has replaced routine completion dissection after a positive sentinel?
> *Answer / Clinical Rationale*: 0.8 mm (or ulcerated thinner lesions); positive sentinels now go to nodal ultrasound surveillance plus adjuvant systemic therapy in most cases.

> [!question]- What makes desmoplastic melanoma a distinct surgical problem?
> *Answer / Clinical Rationale*: Amelanotic presentation delays diagnosis; neurotropism follows nerves (including VII) beyond visible margins — wider excision and consideration of adjuvant radiation.

## Core Clinical & Mechanistic Principles
Cutaneous head and neck melanoma accounts for $>20\%$ of all melanomas despite representing $<10\%$ of total skin surface area, characterized by aggressive microvascular invasion and complex, non-contiguous lymphatic drainage across [[Cervical lymph node levels I through VII define regional metastatic drainage basins|cervical lymph node basins]]:

- **AJCC 8th Edition T-Staging & Excision Margins**:
  - **Melanoma in Situ (Tis)**: Excision with $0.5\text{–}1.0\text{ cm}$ radial margins; SLNB is not indicated.
  - **T1a**: Breslow depth $<0.8\text{ mm}$ without ulceration (excision with $1.0\text{ cm}$ margins; SLNB not routinely recommended unless high-risk features present).
  - **T1b**: Breslow depth $0.8\text{–}1.0\text{ mm}$ without ulceration, OR $<0.8\text{ mm}$ with ulceration (excision with $1.0\text{ cm}$ margins + SLNB).
  - **T2a**: Breslow depth $>1.0\text{–}2.0\text{ mm}$ without ulceration (excision with $1.0\text{–}2.0\text{ cm}$ margins + SLNB).
  - **T2b**: Breslow depth $>1.0\text{–}2.0\text{ mm}$ with ulceration (excision with $1.0\text{–}2.0\text{ cm}$ margins + SLNB).
  - **T3a**: Breslow depth $>2.0\text{–}4.0\text{ mm}$ without ulceration (excision with $2.0\text{ cm}$ margins + SLNB).
  - **T3b**: Breslow depth $>2.0\text{–}4.0\text{ mm}$ with ulceration (excision with $2.0\text{ cm}$ margins + SLNB).
  - **T4a**: Breslow depth $>4.0\text{ mm}$ without ulceration (excision with $2.0\text{ cm}$ margins + SLNB).
  - **T4b**: Breslow depth $>4.0\text{ mm}$ with ulceration (excision with $2.0\text{ cm}$ margins + SLNB).
- **AJCC 8th Edition Regional Nodal Staging (N)**:
  - **N1a**: 1 clinically occult / microscopically detected positive lymph node (identified on SLNB).
  - **N1b**: 1 clinically detected / macroscopically positive lymph node (confirmed pathologically).
  - **N2a**: 2–3 clinically occult / microscopically detected positive lymph nodes.
  - **N2b**: 2–3 clinically detected / macroscopically positive lymph nodes.
  - **N2c**: Presence of in-transit, satellite, or microsatellite metastases WITHOUT concurrent regional lymph node metastases.
  - **N3**: $\ge 4$ positive lymph nodes, matted nodal masses, or any in-transit / satellite metastasis WITH concurrent regional nodal metastases.
- **Nodal Management Post-MSLT-2**:
  - Following the landmark [[The MSLT-1 and MSLT-2 trials establish sentinel lymph node biopsy utility and ultrasound surveillance safety in melanoma|MSLT-1 and MSLT-2 trials]], discovery of micrometastatic disease in a sentinel lymph node does **not mandate routine completion neck dissection**. Instead, close serial high-resolution nodal ultrasound surveillance paired with adjuvant systemic immunotherapy (anti-PD-1 pembrolizumab/nivolumab) or targeted therapy (BRAF/MEK inhibitors for *BRAF* V600E mutations) provides equivalent overall survival with significantly reduced surgical morbidity.
- **Desmoplastic Melanoma Nuance**:
  - Highly neurotropic, amelanotic variant with high propensity for perineural tracking along the branches of the facial nerve trunk; requires wide subfascial clearance and adjuvant post-operative radiotherapy.

```mermaid
%% Melanoma Breslow Depth and Surgical Margins Algorithm
flowchart TD
  N1(["Biopsy-Proven Cutaneous Melanoma"]) --> N2{"Breslow Thickness & Ulceration"}
  N2 -->|"Melanoma in Situ (Tis)"| N3["0.5 - 1.0 cm Surgical Margin"]
  N3 --> N4["No SLNB Indicated"]
  N2 -->|"Breslow < 0.8 mm (Non-Ulcerated)"| N5["1.0 cm Margin"]
  N5 --> N6["Observation / SLNB Only if Adverse Features"]
  N2 -->|"Breslow 0.8 - 2.0 mm (or <0.8 mm Ulcerated)"| N7["1.0 - 2.0 cm Margin"]
  N7 --> N8["SPECT-CT Lymphoscintigraphy + SLNB"]
  N2 -->|"Breslow > 2.0 mm"| N9["2.0 cm Margin + SLNB"]
  N9 --> N10["Sentinel Node Status (MSLT-2 Protocol)"]
  N10 -->|"Positive Sentinel Node"| N11["Adjuvant PD-1 / BRAF Inhibitor + Nodal Ultrasound"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N5,N6 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N7,N8 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9,N11 red
```

### Management & Critical Safety Checks
- **Intraparotid Sentinel Nodes**: Preoperative SPECT-CT is vital when lymphoscintigraphy demonstrates drainage to parotid lymph nodes; sentinel harvest within the parotid gland requires careful superficial parotid dissection and identification of [[The facial nerve main trunk is localized using the tragal pointer, tympanomastoid suture, and digastric ridge|facial nerve branches]].

## Connected Concepts & Graph Traversal
- **Lymphoscintigraphy Evidence**: [[The MSLT-1 and MSLT-2 trials establish sentinel lymph node biopsy utility and ultrasound surveillance safety in melanoma|MSLT-1 and MSLT-2 Clinical Trial Practice]]
- **Parotid Basin Landmark**: [[The facial nerve main trunk is localized using the tragal pointer, tympanomastoid suture, and digastric ridge|Parotid Sentinel Node Dissection & CN VII]]
- **Cervical Nodal Drainage**: [[Cervical lymph node levels I through VII define regional metastatic drainage basins|Cervical Lymph Node Basin Mapping]]
- **Cutaneous Carcinoma Parallel**: [[High-risk cutaneous squamous cell carcinoma drains first to parotid and perifacial nodal basins|Parotid & Perifacial Nodal Metastases]]
- **Immunotherapy Backbone**: [[Cetuximab targets EGFR overexpression while pembrolizumab and nivolumab inhibit PD-1 in head and neck SCC|Anti-PD-1 Immune Checkpoint Blockade]]
