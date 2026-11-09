---
title: "Carotid body paragangliomas splay the bifurcation and are graded by the Shamblin classification"
tier: "Tier S: Vascular & Lymphoid Neck Masses"
tags:
  - head-and-neck
  - paraganglioma
  - carotid
  - vascular
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch11, p.241"
aliases:
  - "Carotid Body Tumor"
  - "Shamblin Classification"
  - "Cervical Paraganglioma"
---

# Carotid body paragangliomas splay the bifurcation and are graded by the Shamblin classification

## Active Recall

> [!question]- Describe the imaging feature separating carotid body from vagal paraganglioma.
> *Answer / Clinical Rationale*: Carotid body tumors splay ICA from ECA (lyre sign); vagal tumors displace the carotid axis anteriorly/medially without splaying.

> [!question]- Why does an SDHB mutation change the entire care plan?
> *Answer / Clinical Rationale*: It confers multifocality and metastatic potential — driving whole-body surveillance, family testing, and greater caution about intervention timing.

## Core Clinical & Mechanistic Principles
- Imaging signature: avidly enhancing mass **splaying the internal and external carotids (lyre sign)** at the bifurcation — versus vagal paragangliomas, which displace both vessels anteromedially without splaying, and schwannomas, which enhance less avidly.
- **Shamblin**: I minimal carotid attachment; II partial encasement; III circumferential encasement — the grade predicts vascular reconstruction likelihood and cranial nerve (X, XII, sympathetic) injury risk.
- Genetics moved center stage: **SDHx germline mutations** (notably SDHB — multifocality and malignant potential) mandate testing in essentially all cervical paragangliomas, with family cascade screening and whole-body surveillance in carriers.
- Function check before any manipulation: secretory head-neck paragangliomas are uncommon but plasma metanephrines are cheap and the intraoperative surprise is not.

```mermaid
%% Shamblin Classification and Paraganglioma Management
flowchart TD
  N1(["Pulsatile Neck Mass Splays Carotid Bifurcation: Lyre Sign"]) --> N2["Check Plasma Fractionated Metanephrines + SDHx Genetics"]
  N2 --> N3{"Shamblin Anatomical Classification"}
  N3 -->|"Shamblin I: Small Tumor, Minimal Adherence to Carotids"| N4["Subadventitial Dissection along White Line / Low Nerve Risk"]
  N3 -->|"Shamblin II: Moderate Size, Partially Surrounds Carotid Vessels"| N5["Meticulous Perivascular Dissection / Moderate CN X/XII Risk"]
  N3 -->|"Shamblin III: Large Tumor, Intimately Encases Bifurcation / ICA"| N6["Preop Embolization + Vascular Bypass / High Nerve Deficit Risk"]
  N6 --> N7["Bilateral Resection Warning"]
  N7 --> N8["Stage Surgeries to Prevent Fatal Baroreflex Failure & Hypertensive Crisis"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N4 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N5 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6,N8 red
```

### Management & Critical Safety Checks
- Management is not reflexively surgical: observation for small/elderly/bilateral disease, radiation for control in poor candidates; surgery (subadventitial dissection along the white line, early vascular control, lighted expectations for Shamblin III) when growth or symptoms demand.
- Bilateral resections risk **baroreflex failure**; stage them and warn the anesthetic team (see [[Jugular paragangliomas arise from the glomus body in the adventitia of the jugular bulb|Glomus Jugulare Pathology]]).

## Connected Concepts & Graph Traversal
- **Jugular Skull Base Paraganglioma**: [[Jugular paragangliomas arise from the glomus body in the adventitia of the jugular bulb|Glomus Jugulare Pathology]]
- **Skull Base Paraganglioma Staging**: [[Fisch classification categorizes temporal bone and skull base paragangliomas from Class A to Class D|Fisch Temporal Bone Paraganglioma Staging]]
- **Preoperative Embolization**: [[Preoperative embolization reduces intraoperative blood loss in hypervascular glomus jugulare tumors|Endovascular Embolization Technique]]
- **Carotid Vascular Emergency**: [[Carotid blowout syndrome is classified into threatened, impending, and acute hemorrhage|Carotid Injury & Blowout Planning]]
- **Anatomical Exposure Corridors**: [[Penetrating neck trauma anatomical zones I, II, and III dictate surgical exposure corridors|Zone II Carotid Bifurcation Access]]
- **Differential Diagnosis**: [[Jugular foramen masses differentiate into paraganglioma, schwannoma, and meningioma based on bone erosion patterns and MRI signal characteristics|Jugular Foramen Mass Differential]]
