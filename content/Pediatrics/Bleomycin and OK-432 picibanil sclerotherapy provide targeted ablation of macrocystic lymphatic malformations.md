---
title: "Bleomycin and OK-432 picibanil sclerotherapy provide targeted ablation of macrocystic lymphatic malformations"
tier: "Tier V: Pediatric Head & Neck Lesions, Vascular Anomalies & Cleft Lip/Palate"
tags:
  - pediatrics
  - vascular-malformations
  - sclerotherapy
  - bleomycin-ok432
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Ch10, p.211–212"
aliases:
  - "Sclerotherapy"
  - "Bleomycin Sclerotherapy"
  - "OK-432 Picibanil"
  - "Doxycycline Sclerotherapy"
---

# Bleomycin and OK-432 picibanil sclerotherapy provide targeted ablation of macrocystic lymphatic malformations

## Active Recall

> [!question]- What is the maximum cumulative lifetime dose of bleomycin in pediatric sclerotherapy to prevent pulmonary fibrosis?
> *Answer / Clinical Rationale*: A cumulative lifetime dose of **$<4\text{ to }5\text{ mg/kg}$** (or $<300\text{ mg}$ total).

> [!question]- What is the first step performed after placing a needle into a macrocystic LM before injecting the sclerosant?
> *Answer / Clinical Rationale*: **Complete aspiration of the internal cystic fluid** to maximize contact between the sclerosant and the endothelial cyst lining.

## Core Clinical & Mechanistic Principles
**Percutaneous image-guided sclerotherapy** has replaced radical open surgery as the primary first-line treatment for macrocystic lymphatic malformations:
- **Biomechanical Mechanism of Sclerotherapy**:
  - The sclerosant is injected directly into the cyst under ultrasound or fluoroscopic guidance.
  - Induces severe endothelial cell chemical destruction, intense inflammatory reaction, thrombus formation, and subsequent **fibrous obliteration of the cyst lumen**.
- **The Primary Sclerosants**:
  1. **Bleomycin**:
     - *Mechanism*: Antitumor antibiotic that inhibits DNA synthesis and causes direct endothelial sclerosis.
     - *Dose*: $0.5\text{–}1.0\text{ mg/kg}$ per session (max cumulative lifetime dose $<4\text{–}5\text{ mg/kg}$ to **prevent pulmonary fibrosis**).
     - *Advantage*: Minimal post-injection swelling; safe near the pediatric airway.
  2. **OK-432 (Picibanil)**:
     - Lyophilized mixture of *Streptococcus pyogenes* treated with penicillin; induces powerful cytokine-mediated immune inflammation (IL-6, TNF-$\alpha$).
  3. **Doxycycline**:
     - Readily available, inexpensive; causes intense chemical sclerosis (higher post-procedure inflammatory edema).

```mermaid
%% Lymphatic Malformation Sclerotherapy Protocol
flowchart TD
  N1(["Macrocystic Cervicofacial Lymphatic Malformation (Cystic Hygroma)"]) --> N3["Step 1: Real-Time Ultrasound / Fluoroscopic Needle Cannulation of Cyst Cavity"]
  N3 --> N4["Complete Aspiration of Cystic Fluid (Maximizes Sclerosant-Endothelium Contact)"]
  N4 --> N5{"Step 2: Sclerosant Selection & Instillation"}
  N5 -->|"Bleomycin (0.5 to 1.0 mg/kg/session)"| N7["Direct Endothelial DNA Sclerosis with Minimal Post-Procedure Swelling (Ideal Near Airway)"]
  N7 -.->|"LIFETIME SAFETY CAP: <4-5 mg/kg Total Dose"| N8["CRITICAL SAFEGUARD: Prevents Irreversible Pulmonary Fibrosis"]
  N5 -->|"OK-432 Picibanil (Inactivated Group A Strep)"| N10["Induces Potent IL-6 / TNF-alpha Cytokine Cascade Driving Endothelial Thrombosis"]
  N5 -->|"Doxycycline (Readily Available / Inexpensive)"| N12["Intense Chemical Sclerosis (Higher Post-Injection Inflammatory Edema)"]
  N7 --> N13["Step 3: Chemical Endothelial Destruction"]
  N10 --> N13
  N12 --> N13
  N13 --> N14A["Intraluminal Inflammatory Adhesion & Fibrosis"]
  N14A --> N14(["Complete Macrocystic Lumen Obliteration"])
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7,N10,N12 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N13,N14A,N14 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N8 red
```

### Surgical Technique & Critical Safety Checks
- **Airway Precaution**: Sclerotherapy in suprahyoid / floor of mouth LMs causes transient inflammatory swelling; requires intensive care observation and prophylactic dexamethasone (see [[Lymphatic malformations are slow-flow vascular anomalies classified into macrocystic and microcystic lesions|Lymphatic Malformations]]).

## Connected Concepts & Graph Traversal
- **Lymphatic Malformations**: [[Lymphatic malformations are slow-flow vascular anomalies classified into macrocystic and microcystic lesions|Lymphatic Malformations]]
- **Infantile Hemangiomas**: [[Infantile hemangiomas exhibit rapid neonatal proliferation followed by slow involution driven by GLUT-1 positivity|Infantile Hemangiomas]]
- **Sistrunk Procedure**: [[Sistrunk procedure resects the thyroglossal duct cyst with the central body of the hyoid bone and foramen cecum core|Sistrunk Procedure]]
- **Embryological & Sleep Foundation**: [[Pediatric polysomnography criteria define obstructive sleep apnea with an obstructive apnea-hypopnea index exceeding one]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Severe secondary post-tonsillectomy hemorrhage requires urgent airway stabilization and surgical electrocautery]]
- **Congenital Airway Pathology**: [[Recurrent respiratory papillomatosis RRP is driven by HPV six and eleven causing recurrent laryngeal lesions]]
- **Open Airway Reconstruction**: [[Postoperative chin-to-chest flexion stitch prevents catastrophic neck extension and tracheal anastomotic dehiscence]]
