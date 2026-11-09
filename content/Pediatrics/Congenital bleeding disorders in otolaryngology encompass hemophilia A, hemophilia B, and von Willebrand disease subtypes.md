---
title: "Congenital bleeding disorders in otolaryngology encompass hemophilia A, hemophilia B, and von Willebrand disease subtypes"
tier: "Tier I: Bedrock Foundations — Branchial Embryology, Starling Resistor & Sleep Neurobiology"
tags:
  - pediatrics
  - head-and-neck
  - hematology
  - hemophilia
  - von-willebrand-disease
  - tonsillectomy
last_revised: 2026-11-03
status: complete
sources:
  - "CummingsPed, Pediatric Otolaryngology Core Principles"
aliases:
  - "Congenital Bleeding Disorders"
  - "Hemophilia A and B in ENT"
  - "von Willebrand Disease Subtypes"
  - "Pediatric Coagulopathies"
---

# Congenital bleeding disorders in otolaryngology encompass hemophilia A, hemophilia B, and von Willebrand disease subtypes

## Active Recall

> [!question]- How do Hemophilia A and Hemophilia B differ in their specific factor deficiencies, inheritance patterns, and laboratory profiles?
> *Answer / Clinical Rationale*: - **Hemophilia A**: Deficiency of **Factor VIII** ($80\text{–}85\%$ of hemophilias; X-linked recessive). - **Hemophilia B (Christmas Disease)**: Deficiency of **Factor IX** ($15\text{–}20\%$ of hemophilias; X-linked recessive). - **Laboratory Profile**: Both exhibit an **isolated prolonged aPTT** with a normal PT/INR, normal platelet count, and normal bleeding time. Severity is defined by baseline plasma factor activity: Severe ($<1\%$), Moderate ($1\text{–}5\%$), and Mild ($5\text{–}40\%$).

> [!question]- What are the clinical, genetic, and diagnostic distinctions between von Willebrand Disease (vWD) Types 1, 2, and 3?
> *Answer / Clinical Rationale*: - **Type 1 ($70\text{–}80\%$)**: Partial **quantitative deficiency** of structurally normal von Willebrand factor (Autosomal dominant); responds robustly to **DDAVP (Desmopressin)**. - **Type 2 ($15\text{–}20\%$)**: **Qualitative dysfunction** of vWF (subtypes 2A, 2B, 2M, 2N; Autosomal dominant); DDAVP is contraindicated in Type 2B due to risk of thrombocytopenia. - **Type 3 ($<5\%$)**: Severe, total **absence of vWF** (Autosomal recessive); manifests with undetectable vWF antigen, very low Factor VIII ($<5\%$), and severe hemophilia-like bleeding; requires vWF/FVIII concentrate replacement (DDAVP is ineffective).

> [!question]- What is the perioperative factor replacement target for elective tonsillectomy or major head and neck surgery in a patient with severe Hemophilia A or vWD?
> *Answer / Clinical Rationale*: - **Hemophilia A**: Preoperative **Factor VIII target of $100\%$ ($50\text{ units/kg}$ recombinant FVIII bolus)** given 30 minutes prior to incision, maintained at **$>50\%$ factor levels for $7\text{–}10\text{ days}$** postoperatively via twice-daily boluses or continuous infusion, combined with oral **aminocaproic acid (Amicar) or tranexamic acid (TXA)** to stabilize mucosal clots. - **vWD**: vWF/FVIII concentrate (e.g., Humate-P, Wilate) infused to achieve **vWF:RCo and FVIII:C levels $\ge 100\%$** preoperatively and $>50\%$ for 5–7 days.

## Core Clinical & Mechanistic Principles
Congenital coagulopathies present major hemorrhagic risks during high-vascularity head and neck mucosal procedures (e.g., [[Adenotonsillectomy is the first-line surgical treatment for pediatric obstructive sleep apnea|adenotonsillectomy]], endoscopic sinus surgery, and cleft palate repair):

```mermaid
%% Congenital Bleeding Disorders Perioperative Management Protocol
flowchart TD
  N1(["Congenital Bleeding Disorder Scheduled for Adenotonsillectomy / Airway Surgery"]) --> N2{"Coagulopathy Phenotype Stratification"}
  N2 -->|"Hemophilia A (Factor VIII Deficiency; X-Linked Recessive)"| N3{"Factor VIII Replacement Protocol"}
  N2 -->|"Hemophilia B (Factor IX Deficiency; X-Linked Recessive)"| N4{"Factor IX Replacement Protocol"}
  N2 -->|"von Willebrand Disease (Types 1, 2, 3; Platelet Adhesion Defect)"| N5{"vWD Replacement Protocol"}
  N3 --> N6["Pre-Op Bolus: Recombinant FVIII (50 U/kg) Target 100% 30 Min Pre-Incision"]
  N3 --> N7["Post-Op Maintenance: Maintain FVIII Levels >50% for 7 to 10 Days Post-Op"]
  N4 --> N8["Pre-Op Bolus: Recombinant FIX (100-120 U/kg) Target 100% Pre-Incision"]
  N4 --> N9["Post-Op Maintenance: Maintain FIX Levels >50% for 7 to 10 Days Post-Op"]
  N5 -->|"Type 1 (Quantitative Deficiency)"| N10["DDAVP (Desmopressin 0.3 mcg/kg) or vWF/FVIII Concentrate (Target 100%)"]
  N5 -->|"Type 2B (Avoid DDAVP Due to Thrombocytopenia) / Type 3 (Total Absence)"| N11["vWF/FVIII Concentrate (Humate-P / Wilate) Pre-Op Target 100%"]
  N2 --> N12{"MANDATORY MUCOSAL HEMOSTASIS SAFEGUARDS"}
  N12 --> N13["Oral Tranexamic Acid (TXA) / Aminocaproic Acid (Amicar) Counters Salivary Fibrinolysis"]
  N12 -->|"CRITICAL PROSCRIPTION: NSAIDs & IM Injections"| N14["Prevents Platelet Dysfunction & Deep Intramuscular Hematomas"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N8,N10,N11 green
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7,N9,N13 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N14 red
```

### High-Yield Surgical Safeguards
- **Avoid NSAIDs & Intramuscular Injections**: In all patients with congenital bleeding disorders to prevent worsening platelet inhibition or deep muscular hematomas.
- **Antifibrinolytic Synergy**: Oral tranexamic acid ($25\text{ mg/kg}$ tid) or aminocaproic acid mouthwash provides crucial local clot stabilization against salivary enzymes in oral/oropharyngeal surgical beds.

## Connected Concepts & Graph Traversal
- **Coagulation Cascade**: [[The coagulation cascade is organized into extrinsic, intrinsic, and common pathways evaluated by PT and aPTT|Coagulation Pathways & Mixing Studies]]
- **Anticoagulant Reversal**: [[Targeted reversal of direct oral anticoagulants and antiplatelet agents is required for emergent head and neck surgery|Anticoagulation Reversal]]
- **Tonsillectomy Hemorrhage**: [[Paradise criteria define evidence-based indications for pediatric tonsillectomy in recurrent throat infections|Pediatric Tonsillectomy Criteria]]
- **High-Risk Airway Admission**: [[High-risk pediatric criteria mandate overnight inpatient admission following adenotonsillectomy|High-Risk Pediatric Inpatient Criteria]]
- **Cleft Palate Repair**: [[Two-flap palatoplasty and Furlow double-reversing Z-plasty reconstruct the hard and soft palate musculature|Cleft Palate Reconstruction]]
