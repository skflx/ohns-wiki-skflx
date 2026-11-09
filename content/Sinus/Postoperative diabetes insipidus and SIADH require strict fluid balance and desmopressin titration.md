---
title: "Postoperative diabetes insipidus and SIADH require strict fluid balance and desmopressin titration"
tier: "Tier VII: Expanded Endoscopic Skull Base Surgery (EEA) & ICA Crisis"
tags:
  - rhinology
  - skull-base
  - diabetes-insipidus
  - siadh
last_revised: 2026-11-03
status: complete
sources:
  - "AtlasESS19, Endoscopic Sinus & Skull Base Surgery"
aliases:
  - "Postoperative Diabetes Insipidus (DI)"
  - "Triphasic Pituitary Response"
  - "SIADH vs Cerebral Salt Wasting"
---

# Postoperative diabetes insipidus and SIADH require strict fluid balance and desmopressin titration

## Active Recall

> [!question]- What is the physiological mechanism underlying the second phase (SIADH) of the triphasic pituitary response?
> *Answer / Clinical Rationale*: Unregulated **leakage of pre-formed, stored ADH from degenerating posterior pituitary axons and pituicytes**, causing water retention and dilutional hyponatremia.

> [!question]- What is the diagnostic threshold for urine output when suspecting acute postoperative diabetes insipidus?
> *Answer / Clinical Rationale*: Urine output exceeding **$>250\text{–}300\text{ mL/hour}$ for 2 consecutive hours** with low urine specific gravity ($<1.005$).

## Core Clinical & Mechanistic Principles
Surgical manipulation or transection of the [[Transsellar EEA provides direct access to pituitary adenomas and Rathke cleft cysts|pituitary]] stalk (infundibulum) and posterior pituitary gland during transsellar and transplanum surgery disrupts **Arginine Vasopressin (AVP / Antidiuretic Hormone / ADH)** regulation, leading to **Diabetes Insipidus (DI)**, **SIADH**, or the classic **Triphasic Response**.

```mermaid
%% Post-Pituitary Resection Fluid and Sodium Dysregulation
flowchart TD
  N1(["Post-Transsphenoidal Sellar Surgery: Strict I/O & Serum/Urine Sodium Monitoring"]) --> N2{"Triphasic Posterior Pituitary Response Pattern"}
  N2 -->|"Phase 1 (Days 1-3): Diabetes Insipidus (Axonal Shock / ADH Depletion)"| N3["Polyuria (>300 mL/hr), High Serum Na+, Low Urine Osmolality"]
  N3 --> N4["Titrate Desmopressin (DDAVP) & Free Water Intake"]
  N2 -->|"Phase 2 (Days 4-7): SIADH (Dying Axons Unregulated ADH Dumping)"| N5["Fluid Retention, Hyponatremia (Na+ <130), High Urine Osmolality"]
  N5 --> N6["Strict Fluid Restriction (1000 mL/day) +/- Oral Urea/Salt Tabs"]
  N4 --> N7{"Assess Progression into Phase 3"}
  N6 --> N7
  N7 -->|"Phase 3 (Days 8+): Permanent DI (Loss of >85% Hypothalamic ADH Neurons)"| N8["Lifelong Maintenance Oral/Nasal DDAVP Therapy"]
  N7 -->|"Phase 3: Transient Stunning Resolution"| N9["Normal Sodium Balance & Complete Recovery"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N9 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N5,N6 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Diagnostic Triad of Acute Diabetes Insipidus
1. **Polyuria**: Urine output $>250\text{–}300\text{ mL/hour}$ for 2 consecutive hours (or $>4\text{–}5\text{ L/day}$).
2. **Dilute Urine**: Specific gravity $<1.005$ and Urine Osmolality $<200\text{ mOsm/kg}$.
3. **Serum Hypernatremia**: Serum Sodium $>145\text{ mEq/L}$ and Serum Osmolality $>295\text{ mOsm/kg}$.

## Connected Concepts & Graph Traversal
- **Sellar Surgery**: [[Transsellar EEA provides direct access to pituitary adenomas and Rathke cleft cysts|Transsellar EEA]]
- **Suprasellar Expansion**: [[Transplanum and transtuberculum EEA corridors expose suprasellar craniopharyngiomas|Transplanum EEA]]
- **Apoplexy**: [[Pituitary apoplexy causes acute chiasmatic compression and life-threatening panhypopituitarism|Pituitary Apoplexy]]
- **Diagnostic Evaluation**: [[Transcribriform EEA provides access to olfactory groove meningiomas and esthesioneuroblastomas|Transcribriform EEA Corridor]]
- **Anatomical Foundation**: [[Transpterygoid EEA exposes juvenile nasopharyngeal angiofibromas and lateral sphenoid defects|Transpterygoid EEA Corridor]]
