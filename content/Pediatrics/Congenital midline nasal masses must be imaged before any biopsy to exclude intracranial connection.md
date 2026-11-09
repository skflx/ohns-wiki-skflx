---
title: "Congenital midline nasal masses must be imaged before any biopsy to exclude intracranial connection"
tier: "Tier S: Congenital Midline & Airway Completion"
tags:
  - pediatrics
  - congenital
  - nasal
  - midline
  - skull-base
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch5, p.4"
aliases:
  - "Midline Nasal Masses"
  - "Nasal Dermoid"
  - "Nasal Glioma"
  - "Encephalocele"
---

# Congenital midline nasal masses must be imaged before any biopsy to exclude intracranial connection

## Active Recall

> [!question]- Interpret a positive Furstenberg test and its anatomic meaning.
> *Answer / Clinical Rationale*: Mass expands with crying or jugular compression — a patent CSF communication, i.e., encephalocele; gliomas and dermoids do not transmit pressure.

> [!question]- Why is the 'infected pimple on the nasal dorsum with a hair' a neurosurgical conversation?
> *Answer / Clinical Rationale*: It is a dermoid sinus whose tract may reach the foramen cecum and dura — incision without imaging risks intracranial contamination.

## Core Clinical & Mechanistic Principles
- The three lesions are one embryology: incomplete regression of the dural diverticulum through the **[[Thyroglossal duct cyst tract tracks from the foramen cecum through the hyoid bone to the anterior neck|foramen cecum]]/prenasal space** leaves a **dermoid** (with sinus tract and pit, often a hair), a **glioma** (sequestered glial rest, firm, non-compressible), or an **encephalocele** (persistent CSF/brain connection, compressible, pulsatile).
- **Furstenberg test**: expansion with crying/jugular compression = encephalocele (patent CSF connection); gliomas and dermoids are Furstenberg-negative.
- The rule that must never be violated: **no biopsy, no incision, no 'pimple drainage' before MRI** (with CT for bone detail) — a midline pit or mass may be continuous with the subarachnoid space, and the casual bedside procedure becomes meningitis or CSF leak.
- Dermoid tract tells: a pit on the dorsum with a protruding hair, recurrent local infection, bifid crista galli/enlarged foramen cecum on imaging suggesting intracranial extension.

```mermaid
%% Congenital Midline Nasal Mass Diagnostic and Safety Protocol
flowchart TD
  N1(["Congenital Midline Nasal Mass / Dorsal Sinus Pit / Neonatal Intranasal Mass"]) --> N2["Embryological Failure of Dural Diverticulum Regression"]
  N2 --> N3{"Differential Pathological Stratification"}
  N3 -->|"Nasal Dermoid / Sinus Cyst"| N4["Dorsal Nasal Pit with Protruding Hair / Tract Tracking to Foramen Cecum"]
  N3 -->|"Nasal Glioma (Encephalochoristoma)"| N5["Firm, Non-Pulsatile, Non-Compressible (Furstenberg Negative; 15% Dural Fibrous Band)"]
  N3 -->|"Nasal Encephalocele"| N6["Pulsatile, Compressible, Transilluminates; POSITIVE FURSTENBERG TEST (Expands on IJV Occlusion)"]
  N3 --> N7{"MANDATORY PRE-INTERVENTION WORKUP"}
  N7 --> N8["Thin-Cut High-Resolution CT (Bony Skull Base & Foramen Cecum) + MRI Brain/Face (Dural Intracranial Connection)"]
  N7 -->|"CRITICAL PROSCRIPTION: Blind Bedside Biopsy / Pimple Incision"| N9["CATASTROPHIC HAZARD: High-Flow CSF Leak, Meningitis, Pneumocephalus"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6,N9 red
```

### Management & Critical Safety Checks
- Definitive management is complete surgical excision including any tract (dermoid recurrence lives in retained tract); intracranial extension recruits neurosurgery for combined approaches, increasingly endoscopic-assisted.
- Nasal obstruction in a neonate with a bluish intranasal midline mass is an encephalocele until imaged — nasal continuous positive airway pressure and instrumentation wait for the MRI.

## Connected Concepts & Graph Traversal
- **Nasal Atresia Endoscopy**: [[Transnasal endoscopic resection of the atretic plate and posterior vomer establishes choanal patency without stents|Choanal Atresia Resection]]
- **Pediatric Airway Noise**: [[Pediatric stertor and stridor differentiate upper supraglottic airway obstruction from intrathoracic tracheobronchial disease|Pediatric Airway Noise]]
- **Hemangioma Pharmacotherapy**: [[Oral propranolol is the first-line pharmacotherapy for proliferating infantile hemangiomas|Infantile Hemangiomas]]
- **Nasal Foreign Body**: [[Nasal foreign bodies presenting with unilateral foul-smelling rhinorrhea mandate urgent removal with particular vigilance for button batteries|Nasal Foreign Bodies]]
- **Airway Button Battery**: [[Pediatric esophageal button battery impaction causes liquefaction necrosis within two hours and mandates emergent endoscopic extraction|Esophageal Button Battery]]
- **Foramen Cecum Preoperative Imaging**: [[Congenital nasal dermoid sinus cysts require preoperative MRI and CT to detect intracranial extension through the foramen cecum or bifid crista galli|Congenital Nasal Dermoid Sinus Cysts]]
