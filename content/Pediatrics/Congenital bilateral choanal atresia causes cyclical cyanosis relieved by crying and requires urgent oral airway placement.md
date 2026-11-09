---
title: "Congenital bilateral choanal atresia causes cyclical cyanosis relieved by crying and requires urgent oral airway placement"
tier: "Tier V: Pediatric Head & Neck Lesions, Vascular Anomalies & Cleft Lip/Palate"
tags:
  - pediatrics
  - choanal-atresia
  - neonatal-airway
  - charge-syndrome
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch27, p.2"
aliases:
  - "Choanal Atresia"
  - "Bilateral Choanal Atresia"
  - "Cyclical Cyanosis"
  - "CHARGE Syndrome"
  - "McGovern Nipple"
---

# Congenital bilateral choanal atresia causes cyclical cyanosis relieved by crying and requires urgent oral airway placement

## Active Recall

> [!question]- Why does a newborn with bilateral choanal atresia present with cyclical cyanosis that resolves when crying?
> *Answer / Clinical Rationale*: Because newborns are **obligate nasal breathers**; resting with mouth closed causes asphyxiation, whereas crying opens the oral airway and restores ventilation.

> [!question]- What hereditary syndrome is associated with choanal atresia in $>50\%$ of cases, and what gene is mutated?
> *Answer / Clinical Rationale*: **CHARGE syndrome**, caused by mutations in the **CHD7 gene**.

## Core Clinical & Mechanistic Principles
**Congenital Choanal Atresia** is the failure of the posterior nasal cavity to communicate with the nasopharynx ($1\text{ in }7,000$ births):
- **Obligate Nasal Breathing & The "Cyclical Cyanosis" Paradox**:
  - Neonates are **obligate nasal breathers** until 4–6 weeks of age (due to the high anatomical position of the larynx and tongue-palate apposition).
  - In bilateral choanal atresia, the neonate experiences severe inspiratory obstruction and cyanosis while resting with mouth closed; **when the infant cries, the oral airway opens and cyanosis immediately resolves ("cyclical cyanosis")**.
- **Anatomical Atresia Plate Composition**:
  - **Mixed Bony-Membranous ($70\%$)** or **Pure Bony ($30\%$)**; pure membranous atresia is exceptionally rare ($<1\%$).
- **The Four Anatomical Components of the Atresia Deformity**:
  1. Lateral bony impingement from **medialized pterygoid plates**.
  2. Medial bony thickening of the **posterior vomer**.
  3. High-arched hard palate.
  4. Central atretic membranous/bony plate.
- **CHARGE Syndrome Association ($50\text{–}60\%$)**:
  - **C**oloboma of eye, **H**eart defects, **A**tresia choanae, **R**etardation of growth, **G**enital hypoplasia, **E**ar anomalies / deafness (mutations in *CHD7* gene).

```mermaid
%% Bilateral Choanal Atresia Neonatal Management Protocol
flowchart TD
  N1(["Neonate with Obligate Nasal Breathing & Cyclical Cyanosis [Pink When Crying, Cyanotic at Rest]"]) --> N2{"Bedside Diagnostic Screening"}
  N2 --> N3["Inability to Pass 6-8 French Suction Catheter >32 mm from Anterior Nares"]
  N2 --> N4{"EMERGENCY NEONATAL AIRWAY RESCUE"}
  N4 --> N5["Immediate Insertion of Modified McGovern Nipple Oral Airway / Oral Guedel Airway"]
  N4 --> N6["Maintains Continuous Oral Airway Venting to Avert Asphyxial Cardiac Arrest"]
  N4 --> N7{"Step 1: Axial CT Maxillofacial Protocol"}
  N7 --> N8["Defines Atresia Thickness (70% Mixed Bony-Membranous, 30% Pure Bony)"]
  N7 --> N9["Assesses Medialized Pterygoid Plates & Thickened Posterior Vomer"]
  N7 --> N10{"Step 2: Definitive Transnasal Endoscopic Repair"}
  N10 --> N11["0°/30° Endoscopic Resection of Atretic Plate & Posterior 1 cm Vomer"]
  N10 --> N12["Mucosal Preservation Flap Reconstruction Eliminates Need for Rigid Stents"]
  N10 --> N13["Step 3: Syndromic Screening"]
  N13 --> N14["Echocardiogram + Renal US + Genetics for CHARGE Syndrome (CHD7 Mutation)"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N11,N12 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8,N9 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N14 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N5,N6 red
```

### Surgical Technique & Critical Safety Checks
- **Immediate Resuscitation**: Insert a **McGovern nipple** (a feeding nipple with a widened tip strapped around the ears) or an oral airway; definitive surgical repair within 24–72 hours (see [[Transnasal endoscopic resection of the atretic plate and posterior vomer establishes choanal patency without stents|Choanal Atresia Repair]]).

## Connected Concepts & Graph Traversal
- **Choanal Atresia Repair**: [[Transnasal endoscopic resection of the atretic plate and posterior vomer establishes choanal patency without stents|Choanal Atresia Repair]]
- **Pyriform Aperture Stenosis**: [[Congenital pyriform aperture stenosis causes neonatal nasal obstruction and presents with a solitary central incisor|Pyriform Aperture Stenosis]]
- **Pediatric Emergency**: [[High-stakes pediatric and adult sleep airway complications require rapid structured algorithmic emergency rescue|Airway Emergency Rescue]]
- **Embryological & Sleep Foundation**: [[Critical closing pressure Pcrit stratifies upper airway collapsibility from snorers to severe obstructive sleep apnea]]
- **Sleep Endoscopy & Airway Dynamics**: [[Drug-induced sleep endoscopy DISE evaluates dynamic multi-level upper airway collapse under sedation|Drug-Induced Sleep Endoscopy (DISE)]] [[Lingual tonsil hypertrophy causes persistent pediatric obstructive sleep apnea and base of tongue collapse]]
- **Congenital Airway Pathology**: [[Inspiratory, biphasic, and expiratory stridor localize pediatric airway obstruction to supraglottic, subglottic, and tracheobronchial subsites]]
- **Open Airway Reconstruction**: [[Aortopexy suspends the aorta to the sternum to relieve anterior vascular tracheal compression]]
