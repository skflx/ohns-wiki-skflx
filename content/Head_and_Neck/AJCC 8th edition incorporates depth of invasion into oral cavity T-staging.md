---
title: "AJCC 8th edition incorporates depth of invasion into oral cavity T-staging"
tier: "Tier I: Bedrock Foundations — Cervical Fascia, Lymphatic Levels & AJCC-8 TNM Staging"
tags:
  - head-and-neck
  - oral-cavity
  - ajcc-8
  - depth-of-invasion
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch5, p.79–80"
aliases:
  - "Depth of Invasion"
  - "DOI"
  - "AJCC 8th Edition Oral Cavity"
---

# AJCC 8th edition incorporates depth of invasion into oral cavity T-staging

## Active Recall

> [!question]- How is Depth of Invasion (DOI) measured microscopically?
> *Answer / Clinical Rationale*: From the **horizon of adjacent normal basement membrane** to the deepest infiltrating tumor cell.

> [!question]- Why does a 1.5-cm oral tongue tumor with a DOI of 12 mm stage as T3?
> *Answer / Clinical Rationale*: Because any oral cavity tumor with a **DOI $> 10\text{ mm}$** is automatically upstaged to **T3**.

## Core Clinical & Mechanistic Principles
AJCC 8th Edition utilizes **Depth of Invasion (DOI)** to stage oral cavity SCC:
- **Definition**: Perpendicular distance from the horizon of the basement membrane of adjacent normal mucosa down to the deepest point of tumor invasion.
- **T-Staging Criteria**:
  - **T1**: Tumor $\le 2\text{ cm}$ AND $\text{DOI} \le 5\text{ mm}$.
  - **T2**: Tumor $\le 2\text{ cm}$ with $\text{DOI} > 5\text{ mm}$ to $\le 10\text{ mm}$, OR tumor $> 2\text{ cm}$ to $\le 4\text{ cm}$ with $\text{DOI} \le 10\text{ mm}$.
  - **T3**: Tumor $> 4\text{ cm}$ OR any tumor with $\text{DOI} > 10\text{ mm}$.
  - **T4a**: Gross cortical bone invasion (mandible/maxilla) or deep extrinsic tongue muscles.
- **Rule of 4 mm**: Oral cavity SCC with a $\text{DOI} > 4\text{ mm}$ carries a $>20\text{–}30\%$ risk of [[Elective neck dissection is indicated for oral cavity squamous cell carcinoma with depth of invasion exceeding four millimeters|occult nodal metastasis]] and mandates **[[Selective neck dissection targets high-risk nodal basins while sparing low-risk cervical levels|elective neck dissection]] (Levels I–III)**.

```mermaid
%% AJCC-8 Oral Cavity T-Staging and Neck Management
flowchart TD
  N1(["Oral Cavity SCC Lesion"]) --> N2{"Evaluate Tumor Diameter and DOI"}
  N2 -->|"<=2 cm AND DOI <=5 mm"| N3["T1 Tumor"]
  N2 -->|"<=2 cm with DOI 5-10 mm OR 2-4 cm with DOI <=10 mm"| N4["T2 Tumor"]
  N2 -->|">4 cm Diameter OR ANY Tumor with DOI >10 mm"| N5["T3 Tumor (Advanced Primary)"]
  N2 -->|"Gross Bone / Deep Extrinsic Muscle Invasion"| N6["T4a / T4b Locally Advanced"]
  N3 --> N7["Clinically N0 Oral Tongue / Floor of Mouth"]
  N4 --> N7
  N5 --> N7
  N7 --> N8{"Assess Depth of Invasion (DOI)"}
  N8 -->|"DOI >4 mm (Occult Metastasis Risk >20-30%)"| N9(["Mandatory Elective Neck Dissection Levels I-III"])
  N8 -->|"DOI <=4 mm with Favorable Features"| N10(["Careful Clinical & Ultrasound Observation"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N4,N7 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N3,N10 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N9 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6 red
```

### Surgical Technique & Critical Safety Checks
- **Distinction from Thickness**: Exophytic tumors have large thickness but low DOI; ulcerated lesions have minimal thickness but high DOI.
- **Margin Assessment**: Deep resection margin of $\ge 5\text{ mm}$ is necessary.

## Connected Concepts & Graph Traversal
- **Clear Margins**: [[Oncologic clear margins require at least five millimeters of histological normal tissue|Oncologic Margins]]
- **Elective Neck Dissection**: [[Elective neck dissection is indicated for oral cavity squamous cell carcinoma with depth of invasion exceeding four millimeters|Elective Neck Dissection]]
- **Oral Tongue Carcinoma**: [[Oral tongue carcinoma spreads along intrinsic lingual musculature to bilateral cervical lymphatics|Oral Tongue SCC]]
- **Anatomical Foundation**: [[Intensity-modulated radiation therapy and cisplatin radiosensitization form the standard definitive chemoradiation regimen]]
- **Surgical Lymphadenectomy**: [[Selective neck dissection targets high-risk nodal basins while sparing low-risk cervical levels]]
- **Oncologic Resection & Margins**: [[Hard palate and upper alveolar carcinoma require partial or total maxillectomy]]
- **Aerodigestive / Pharyngolaryngeal**: [[Postcricoid hypopharyngeal carcinoma frequently invades the cervical esophagus and bilateral RLNs]]
