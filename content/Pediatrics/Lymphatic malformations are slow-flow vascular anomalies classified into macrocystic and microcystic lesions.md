---
title: "Lymphatic malformations are slow-flow vascular anomalies classified into macrocystic and microcystic lesions"
tier: "Tier V: Pediatric Head & Neck Lesions, Vascular Anomalies & Cleft Lip/Palate"
tags:
  - pediatrics
  - vascular-malformations
  - lymphatic-malformation
  - cystic-hygroma
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch10, p.211–212"
aliases:
  - "Lymphatic Malformation"
  - "LM"
  - "Cystic Hygroma"
  - "Macrocystic vs Microcystic"
  - "ISSVA Classification"
---

# Lymphatic malformations are slow-flow vascular anomalies classified into macrocystic and microcystic lesions

## Active Recall

> [!question]- How do macrocystic and microcystic lymphatic malformations differ in cyst size and sclerotherapy response?
> *Answer / Clinical Rationale*: **Macrocystic LMs have cysts $>2.0\text{ cm}$ and respond excellently to sclerotherapy ($>85\%$)**; **microcystic LMs have cysts $<2.0\text{ cm}$ and respond poorly to sclerotherapy** (requiring Sirolimus).

> [!question]- Do lymphatic malformations spontaneously involute over time like infantile hemangiomas?
> *Answer / Clinical Rationale*: **No**, lymphatic malformations are permanent structural malformations that never undergo spontaneous involution.

## Core Clinical & Mechanistic Principles
**Lymphatic Malformations (LMs / Cystic Hygromas)** are congenital, slow-flow vascular malformations resulting from abnormal sequestration of embryonic lymphatic channels:
- **Core Biological Characteristics**:
  - Present at birth (though may expand later); grow proportionally with the child; **NEVER spontaneously involute** (unlike hemangiomas).
  - **GLUT-1 Negative**.
  - **Acute Swelling Trigger**: Rapid, painful enlargement occurs during viral upper respiratory infections or following intralesional hemorrhage.
- **Morphological Classification (Macrocystic vs. Microcystic)**:
  1. **Macrocystic LM ($>2.0\text{ cm}$ Cyst Cavities - "Cystic Hygroma")**:
     - Large, discrete, fluid-filled cystic spaces; typically located in the **posterior cervical triangle and submandibular space**.
     - *Treatment*: **Highly responsive to percutaneous [[Bleomycin and OK-432 picibanil sclerotherapy provide targeted ablation of macrocystic lymphatic malformations|sclerotherapy]] ($>85\text{–}90\%$ response)**; surgical excision.
  2. **Microcystic LM ($<2.0\text{ cm}$ Cysts / Sponge-like)**:
     - Diffuse, infiltrative, honeycomb network of tiny cysts permeating normal muscle, tongue, floor of mouth, and cranial nerves.
     - *Treatment*: Poor response to sclerotherapy; managed with **Sirolimus (mTOR inhibitor)**, bleomycin, CO2/radiofrequency mucosal ablation, or targeted partial debulking.

```mermaid
%% Lymphatic Malformation Classification and Therapy Protocol
flowchart TD
  N1(["Congenital Slow-Flow Vascular Malformation [GLUT-1 Negative, No Involution]"]) --> N2{"Morphological Classification on MRI T2-STIR"}
  N2 -->|"Macrocystic LM (Cyst Cavities > 2.0 cm - Cystic Hygroma)"| N3{"Macrocystic Pathway"}
  N2 -->|"Microcystic LM (Infiltrative Cysts < 2.0 cm - Honeycomb / Sponge)"| N4{"Microcystic Pathway"}
  N2 -->|"Mixed Macrocystic / Microcystic LM"| N5["Mixed Pathway"]
  N3 --> N6["Location: Posterior Cervical Triangle & Submandibular Space"]
  N3 --> N7["FIRST-LINE THERAPY: Percutaneous Sclerotherapy (Doxycycline, OK-432, Bleomycin)"]
  N3 --> N8[">85-90% Complete Volumetric Ablation with Minimal Nerve Risk"]
  N4 --> N9["Location: Infiltrates Tongue Body, Floor of Mouth, Facial Musculature"]
  N4 --> N10["Poor Response to Sclerotherapy / Surgical Resection Causes Severe Morbidity"]
  N4 --> N11["FIRST-LINE MEDICAL THERAPY: Sirolimus (mTOR Inhibitor) + Mucosal Laser Ablation"]
  N5 --> N12["Hybrid Protocol: Sclerotherapy for Large Cysts + Targeted Surgical/Medical Control"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N12 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N9,N10 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7,N8 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N11 red
```

### Surgical Technique & Critical Safety Checks
- **De Serres Staging (Stage I to V)**: Grades LMs based on unilateral vs. bilateral and suprahyoid vs. infrahyoid involvement; predicts surgical complication rates and tracheostomy requirements.

## Connected Concepts & Graph Traversal
- **Sclerotherapy**: [[Bleomycin and OK-432 picibanil sclerotherapy provide targeted ablation of macrocystic lymphatic malformations|Sclerotherapy]]
- **Infantile Hemangiomas**: [[Infantile hemangiomas exhibit rapid neonatal proliferation followed by slow involution driven by GLUT-1 positivity|Infantile Hemangiomas]]
- **First Branchial Cleft**: [[First branchial cleft Work Type I and Type II anomalies require superficial parotidectomy with facial nerve dissection|First Branchial Cleft]]
- **🔗 Fast-Flow Vascular Anomaly Differential (Head & Neck)**: [[Head and neck arteriovenous malformations are staged by the Schobinger classification to guide embolization and complete surgical nidus resection|AVM & Schobinger Staging]]
- **Slow-Flow Venous Differential**: [[Venous malformations are slow-flow vascular anomalies characterized by bluish compressible swelling, dependent engorgement, and pathognomonic phleboliths|Venous Malformations]]
