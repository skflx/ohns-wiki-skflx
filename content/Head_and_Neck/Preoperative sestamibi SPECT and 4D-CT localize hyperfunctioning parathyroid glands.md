---
title: "Preoperative sestamibi SPECT and 4D-CT localize hyperfunctioning parathyroid glands"
tier: "Tier V: Thyroid & Parathyroid Surgery: RLN/EBSLN Craft & Miami Criteria"
tags:
  - head-and-neck
  - parathyroid
  - imaging
  - sestamibi-4dct
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch5, p.111–112"
aliases:
  - "Sestamibi SPECT"
  - "4D-CT Parathyroid"
  - "Parathyroid Localization Imaging"
---

# Preoperative sestamibi SPECT and 4D-CT localize hyperfunctioning parathyroid glands

## Active Recall

> [!question]- What is the characteristic enhancement profile of a parathyroid adenoma on 4D-CT?
> *Answer / Clinical Rationale*: **Intense peak hyper-enhancement on the arterial phase** with **rapid contrast washout on the delayed venous phase**.

> [!question]- How does Tc-99m Sestamibi scintigraphy differentiate a parathyroid adenoma from normal thyroid tissue?
> *Answer / Clinical Rationale*: Sestamibi washes out rapidly from normal thyroid tissue but is **retained prolonged in the mitochondria-rich oxyphil cells of parathyroid adenomas**.

## Core Clinical & Mechanistic Principles
Preoperative imaging localization enables **Minimally Invasive Parathyroidectomy (MIP)** with high cure rates ($>95\text{–}98\%$):
- **Technetium-99m Sestamibi Scintigraphy / SPECT-CT**:
  - *Mechanism*: Sestamibi concentrates in mitochondria of both thyroid and parathyroid tissue; clears rapidly from normal thyroid but is **retained in hyperfunctioning parathyroid oxyphil cells**.
  - Dual-phase imaging (early 15 min vs. delayed 2–3 hr) and SPECT-CT provide precise 3D anatomical localization.
- **Four-Dimensional CT (4D-CT)**:
  - *Mechanism*: Multi-phase contrast CT (non-contrast, arterial phase, venous delayed phase) exploiting parathyroid vascular kinetics.
  - *Classic 4D-CT Profile*: **Hyper-attenuating on arterial phase** (due to high vascularity) with **rapid contrast washout on venous phase**.
  - Superior sensitivity ($>85\text{–}90\%$) for re-operative necks, multigland disease, and ectopic adenomas.
- **High-Resolution Ultrasound**: Identifies hypoechoic, hypervascular oval glands situated posterior to the thyroid lobe.

```mermaid
%% Parathyroid Adenoma Imaging Localization and Surgical Pathway
flowchart TD
  N1(["Biochemically Confirmed Primary Hyperparathyroidism: Hypercalcemia + Elevated PTH"]) --> N2["First-Line Screening: High-Resolution Cervical Ultrasound"]
  N2 --> N3["Dual-Phase Tc-99m Sestamibi SPECT-CT (Mitochondrial Oxyphil Retention)"]
  N3 --> N4{"Concordance Assessment"}
  N4 -->|"Concordant Single Adenoma Localized on US + Sestamibi"| N5["Targeted Focused Minimally Invasive Parathyroidectomy (MIP)"]
  N5 --> N6["Verify Miami Criterion: >50% PTH Drop at 10 Min Post-Excision"]
  N4 -->|"Discordant Imaging / Negative US & Sestamibi / Re-operative Neck"| N7["4D-CT Multi-Phase Dynamic Imaging"]
  N7 --> N8{"4D-CT Perfusion Profile"}
  N8 -->|"Arterial Hyper-Enhancement + Venous Rapid Washout (Single Ectopic/Deep Adenoma)"| N9["Targeted Focused Excision Guided by 4D-CT Coordinates"]
  N8 -->|"Equivocal / Multigland Symmetrical Hyperplasia"| N10["Standard Bilateral Four-Gland Neck Exploration (BNE)"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6,N9,N10 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
```

### Surgical Technique & Critical Safety Checks
- **Discordant Imaging Strategy**: When Sestamibi and US disagree, 4D-CT is the definitive tie-breaker before committing to targeted surgery vs. bilateral neck exploration (see [[Primary hyperparathyroidism is caused by single adenomas, multigland hyperplasia, or parathyroid carcinoma|Primary Hyperparathyroidism Workup]]).

## Connected Concepts & Graph Traversal
- **Biochemical Diagnosis**: [[Primary hyperparathyroidism is caused by single adenomas, multigland hyperplasia, or parathyroid carcinoma|Primary Hyperparathyroidism Workup]]
- **Intraoperative PTH Monitoring**: [[The Miami criterion requires a fifty percent intraoperative PTH drop at ten minutes post-excision|Miami Criterion & Kinetic Assays]]
- **3D Parathyroid Topography**: [[Superior and inferior parathyroid glands maintain constant anatomical relationships to the RLN and ITA|Parathyroid Embryology & Anatomy]]
- **Autotransplantation Craft**: [[Devascularized parathyroid glands require confirmation biopsy and autotransplantation into the SCM|Parathyroid Autotransplantation]]
- **Post-Thyroidectomy Calcium Management**: [[Post-thyroidectomy hypocalcemia is managed with oral calcium, calcitriol, and intravenous calcium gluconate|Postoperative Hypocalcemia Protocols]]
- **RLN Localization in Simon's Triangle**: [[The recurrent laryngeal nerve is identified within Simon's triangle and followed through Berry's ligament|RLN Identification Craft]]
- **Dual Imaging for Reoperation**: [[Reoperative parathyroidectomy for persistent or recurrent hyperparathyroidism requires dual imaging concordance and a lateral backdoor approach to minimize nerve injury|Reoperative Parathyroidectomy]]
