---
title: "Neoadjuvant cemiplimab achieves high pathological response rates in resectable locally advanced cutaneous squamous cell carcinoma"
tier: "Tier S: Thyroid Oncology Completion"
tags:
  - head-and-neck
  - landmark-trials
  - immunotherapy
  - cemiplimab
  - cscc
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch5, p.103"
aliases:
  - "Neoadjuvant Cemiplimab in cSCC"
  - "Cemiplimab Cutaneous SCC Trial"
  - "Anti-PD-1 in Advanced Skin Cancer"
  - "Organ Preservation in cSCC"
---

# Neoadjuvant cemiplimab achieves high pathological response rates in resectable locally advanced cutaneous squamous cell carcinoma

## Active Recall

> [!question]- Why does cutaneous squamous cell carcinoma exhibit profound susceptibility to anti-PD-1 immunotherapy compared to many other epithelial malignancies?
> *Answer / Clinical Rationale*: Chronic UV radiation generates an exceptionally **high tumor mutational burden (TMB)** with numerous somatic mutations, creating abundant immunogenic neoantigens that cytotoxic T-cells recognize once PD-1 inhibition is lifted.

> [!question]- What pathological complete response (pCR) rate was demonstrated in the pivotal Gross et al. NEJM trial for neoadjuvant cemiplimab in cSCC?
> *Answer / Clinical Rationale*: A **$51\%$ complete pathological response rate ($0\%$ residual viable tumor)**, with an overall major pathological response rate of over $70\%$.

> [!question]- How does neoadjuvant cemiplimab alter surgical decision-making in periorbital and auriculo-temporal cSCC?
> *Answer / Clinical Rationale*: Marked tumor involution allows for **organ-preserving resections**, frequently avoiding planned orbital exenterations, extensive cranial base resections, or total ear amputations.

## Core Clinical & Mechanistic Principles
The groundbreaking **Phase II Neoadjuvant Cemiplimab Trial (Gross et al., *New England Journal of Medicine* 2022)** revolutionized the management of surgically resectable, locally advanced **Cutaneous Squamous Cell Carcinoma (cSCC)** of the head and neck:

- **Trial Design & Protocol**:
  - *Study Population*: Patients with stage III or IV (M0) resectable cSCC involving the head, neck, or trunk where upfront surgical resection would result in extensive morbidity (e.g., orbital exenteration, total auriculectomy, extensive [[Total parotidectomy with facial nerve sacrifice is indicated for direct malignant nerve invasion|facial nerve sacrifice]], or major craniectomy).
  - *Regimen*: **Cemiplimab ($350\text{ mg}$ IV every 3 weeks for up to 4 cycles / 2–4 doses preoperatively)** $\rightarrow$ curative-intent [[High-risk cutaneous squamous cell carcinoma drains first to parotid and perifacial nodal basins|surgical resection and parotid/neck lymphadenectomy]] $\rightarrow$ optional adjuvant cemiplimab or radiation.
- **Unprecedented Pathological & Clinical Response Rates**:
  - **Complete Pathological Response (pCR)**: **$51\%$** of patients had zero residual viable tumor cells on surgical histopathology.
  - **Major Pathological Response (mPR)**: **$13\%$** had $\le 10\%$ residual tumor cells (yielding an overall **pathological response rate of $64\text{–}73\%$**).
  - **Objective Radiographic Response Rate (ORR)**: **$68\%$** by central review.
  - **Event-Free Survival**: Exceptional 1- and 2-year event-free survival ($>85\%$), with pathological responders experiencing near-zero local or distant recurrences.
- **Surgical & Functional Paradigm Shift (Organ Preservation)**:
  - Dramatic tumor shrinkage and immune-mediated clearance converted extensive, mutilating surgical operations into focused, **organ-preserving procedures**, sparing the orbit, globe, facial nerve trunks, and external ear canal.
- **High Tumor Mutational Burden (TMB) in cSCC**:
  - Cutaneous SCC exhibits one of the highest tumor mutational burdens among all human solid malignancies due to chronic ultraviolet (UV) radiation-induced DNA damage.
  - This extreme mutational density produces abundant novel immunogenic neoantigens, rendering cSCC exceptionally sensitive to **PD-1 checkpoint inhibition**.

```mermaid
%% Neoadjuvant Cemiplimab Protocol and Organ Preservation Cascade
flowchart TD
  N1(["Resectable Locally Advanced Stage III/IV cSCC: High Morbidity Site"]) --> N2["UV Mutational Burden Generates Abundant Immunogenic Neoantigens"]
  N2 --> N3["Neoadjuvant Cemiplimab: 350 mg IV Q3W x 2-4 Cycles (Preoperative)"]
  N3 --> N4["Objective Radiographic Response: 68% Tumor Shrinkage"]
  N4 --> N5["Organ-Preserving Curative Resection (Spares Orbit / Ear / CN VII)"]
  N5 --> N6{"Surgical Pathological Assessment"}
  N6 -->|"Complete Pathological Response (pCR: 51% Zero Viable Cells)"| N7["Observation / De-escalated Adjuvant Therapy (Near-Zero Recurrence)"]
  N6 -->|"Major Pathological Response (mPR: 13% <=10% Viable Cells)"| N8["Observation or Optional Adjuvant Cemiplimab"]
  N6 -->|"Non-Responder / Persistent Gross Disease"| N9["Adjuvant Radiotherapy +/- Continued Anti-PD-1 Blockade"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3,N4 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N2 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7,N8,N9 purple
```

### Surgical Technique & Critical Safety Checks
- **Margin Assessment in Post-Immunotherapy Resections**: The resected surgical specimen frequently demonstrates massive histiocytic infiltrate, cholesterol clefts, dense fibrosis, and foreign-body giant cell reactions replacing tumor. Frozen sections and permanent margins must be carefully oriented to confirm true absence of residual neoplastic cells.

## Connected Concepts & Graph Traversal
- **Cutaneous Nodal Basins**: [[High-risk cutaneous squamous cell carcinoma drains first to parotid and perifacial nodal basins|Cutaneous SCC Lymphatic Drainage & Parotid Basin]]
- **Perioperative Mucosal Immunotherapy**: [[KEYNOTE-689 establishes neoadjuvant and adjuvant pembrolizumab as standard for locally advanced head and neck squamous cell carcinoma|KEYNOTE-689 Trial in HNSCC]]
- **Melanoma Sentinel Node Biopsy**: [[Cutaneous head and neck melanoma is staged by Breslow depth and sentinel lymph node biopsy|Head and Neck Melanoma & MSLT Trials]]
- **Parotidectomy Craft**: [[Superficial parotidectomy dissects the facial nerve branches to resect the lateral salivary lobe|Superficial Parotidectomy for Cutaneous Metastasis]]
- **Microvascular Scalp Reconstruction**: [[The latissimus dorsi myocutaneous free flap covers massive soft tissue and skull base defects|Scalp & Skull Base Reconstruction]]
