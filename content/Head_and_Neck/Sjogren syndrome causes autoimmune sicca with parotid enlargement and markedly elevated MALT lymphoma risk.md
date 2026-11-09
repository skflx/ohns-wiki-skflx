---
title: "Sjogren syndrome causes autoimmune sicca with parotid enlargement and markedly elevated MALT lymphoma risk"
tier: "Tier S: Salivary & Systemic Clinic"
tags:
  - head-and-neck
  - salivary
  - sjogren
  - autoimmune
  - lymphoma
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch11, p.221, 234, 235"
aliases:
  - "Sjogren Syndrome"
  - "Sicca Syndrome"
---

# Sjogren syndrome causes autoimmune sicca with parotid enlargement and markedly elevated MALT lymphoma risk

## Active Recall

> [!question]- State the histologic criterion on lip biopsy and what a 'focus' is.
> *Answer / Clinical Rationale*: Focus score ≥ 1: at least one aggregate of ≥ 50 lymphocytes per 4 mm² of minor salivary tissue.

> [!question]- Which clinical features flag the Sjogren patient at highest lymphoma risk?
> *Answer / Clinical Rationale*: Persistent asymmetric parotid enlargement, cryoglobulinemia/low C4, and palpable purpura — surveillance intensifies and thresholds for biopsy drop.

## Core Clinical & Mechanistic Principles
- Immunopathology: lymphocytic exocrinopathy → xerostomia and keratoconjunctivitis sicca; serology **anti-Ro/SSA (and La/SSB)**; tissue criterion is the **minor salivary (lip) biopsy with focus score of one or more** foci per 4 mm².
- The malignant shadow: substantially elevated **parotid MALT lymphoma** risk (relative risks in the double digits) — risk markers include persistent unilateral gland enlargement, cryoglobulinemia, low C4, and purpura.
- ENT presentations beyond dryness: recurrent sialadenitis, bilateral parotid swelling, dental collapse, dysphagia from xerostomia, hoarseness from dry laryngitis.
- Ultrasound of the glands (heterogeneous hypoechoic foci) has entered diagnosis and surveillance; [[Sialendoscopy enables diagnostic visualization and stone extraction in chronic obstructive sialadenitis|sialendoscopy]] with irrigation palliates ductal disease.

```mermaid
%% Sjogren Syndrome Diagnostic and Lymphoma Surveillance Cascade
flowchart TD
  N1(["Keratoconjunctivitis Sicca + Xerostomia"]) --> N2["Serologies: Anti-Ro/SSA & Anti-La/SSB"]
  N2 --> N3["Minor Salivary Gland Lip Biopsy: Focus Score >=1 (>=50 Lymphocytes / 4mm2)"]
  N3 --> N4{"Long-Term Sjogren Gland Surveillance"}
  N4 -->|"Stable Symmetric Swelling"| N5["Secretagogues: Pilocarpine / Cevimeline + Sialendoscopy"]
  N4 -->|"High Risk Features: Asymmetric Parotid Mass / Low C4 / Cryoglobulins / Purpura"| N6["Parotid Ultrasound / MRI Core Needle Biopsy"]
  N6 -->|"Monoclonal B-Cell Expansion Confirmed"| N7["Parotid MALT (Extranodal Marginal Zone) Lymphoma"]
  N7 --> N8["Involved-Site Radiotherapy or Anti-CD20 Rituximab"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2,N5 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N6 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N7,N8 red
```

### Management & Critical Safety Checks
- Symptomatic care: secretagogues (pilocarpine/cevimeline), saliva substitutes, aggressive dental prophylaxis, ocular co-management; systemic immunomodulation for extraglandular disease belongs to rheumatology.
- **Any persistent, firm, or asymmetric parotid mass in Sjogren is a biopsy** — this population's 'chronic swelling' hides lymphoma.

## Connected Concepts & Graph Traversal
- **Diagnostic Biopsy Architecture**: [[Suspected cervical lymphoma requires excisional or core biopsy because cytology cannot assess architecture|Lymphoma Biopsy Architecture]]
- **Recurrent Infection Substrate**: [[Acute suppurative sialadenitis affects dehydrated patients and is dominated by Staphylococcus aureus|Suppurative Sialadenitis Risk]]
- **Sialendoscopic Intervention**: [[Sialendoscopy enables diagnostic visualization and stone extraction in chronic obstructive sialadenitis|Diagnostic & Interventional Sialendoscopy]]
- **Benign Parotid Neoplasm**: [[Warthin tumor presents as a cystic parotid neoplasm associated with smoking and bilateral occurrence|Warthin Tumor & Parotid Swelling]]
- **Granulomatous Salivary Disease**: [[Sarcoidosis of the upper respiratory tract causes non-caseating granulomas and mucosal cobblestoning|Sarcoidosis & Heerfordt Syndrome]]
