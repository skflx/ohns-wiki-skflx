---
title: "Intrathecal fluorescein enables visual localization of occult dural defects"
tier: "Tier VI: Endoscopic CSF Leak Repair & Vascularized Flaps"
tags:
  - rhinology
  - csf-leak
  - intrathecal-fluorescein
  - diagnostics
last_revised: 2026-11-03
status: complete
sources:
  - "AtlasESS19, Endoscopic Sinus & Skull Base Surgery"
aliases:
  - "Intrathecal Fluorescein Protocol"
  - "Fluorescein-Guided CSF Localization"
  - "Off-Label Fluorescein Safety"
---

# Intrathecal fluorescein enables visual localization of occult dural defects

## Active Recall

> [!question]- What is the standard safe dosing and administration protocol for intrathecal fluorescein in CSF leak repair?
> *Answer / Clinical Rationale*: **$0.1\text{ mL}$ of 10% preservative-free fluorescein (10 mg)** diluted into **$10\text{ mL}$ of autologous CSF**, slowly injected via lumbar puncture over **10 minutes**.

> [!question]- What catastrophic neurological complication is associated with high-dose or rapid bolus injection of intrathecal fluorescein?
> *Answer / Clinical Rationale*: **Grand mal seizures**, status epilepticus, and severe chemical meningitis.

## Core Clinical & Mechanistic Principles
**Intrathecal Fluorescein** is an established diagnostic adjunct for intraoperative visual localization of occult, low-flow, or complex multi-site [[Beta-2 transferrin and high-resolution CT localize sinonasal CSF fistulas|sinonasal]] CSF fistulas. It provides bright, high-contrast, fluorescent green illumination of escaping CSF under blue-light / yellow-filter endoscopy.

```mermaid
%% Intrathecal Fluorescein Protocol
flowchart TD
  N1(["Occult or Low-Flow Sinonasal CSF Fistula Localization"]) --> N2{"Step 1: Neuroprotective Pre-Medication"}
  N2 --> N3["IV Dexamethasone 10 mg (Suppresses Meningeal Irritation)"]
  N2 --> N4{"Step 2: Dosing & Autologous Dilution"}
  N4 --> N5["0.1 mL of 10% Preservative-Free Fluorescein (10 mg)"]
  N4 --> N6["Dilute in 10 mL Autologous CSF Drawn from Lumbar Puncture"]
  N4 --> N7{"Step 3: Slow Lumbar Administration"}
  N7 --> N8["Slow Injection Over 10 Minutes via Spinal Needle"]
  N7 -->|"Dosing >50 mg or Rapid Bolus"| N9["CRITICAL HAZARD: Seizures, Status Epilepticus & Arachnoiditis"]
  N7 -->|"Standard Low-Dose Injection"| N10{"Step 4: Intraoperative Optical Localization"}
  N10 --> N11["Blue Light Excitation Filter (490 nm) + Yellow Barrier Filter"]
  N10 --> N12["Direct Visualization of Bright Green Fluorescent CSF Stream"]
  N10 --> N13["Enables Pinpoint 360° De-Mucosalization & Multi-Layer Repair"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6,N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N13 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N11,N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N9 red
```

### Safety Rules & Neurotoxicity Prevention
- **Low-Dose Threshold**: The total dose must **never exceed $50\text{ mg}$ ($0.5\text{ mL}$ of 10% solution)**. Standard recommended adult dose is **$10\text{–}25\text{ mg}$ ($0.1\text{–}0.25\text{ mL}$)**.
- **Toxicity Risks of Overdose**: High doses ($>100\text{ mg}$) or rapid bolus injection can cause **seizures**, chemical arachnoiditis, opisthotonos, and cranial nerve palsies.
- **Pre-Medication**: Administer $10\text{ mg}$ IV dexamethasone prior to injection to minimize meningeal irritation.

## Connected Concepts & Graph Traversal
- **Biochemical Confirmation**: [[Beta-2 transferrin and high-resolution CT localize sinonasal CSF fistulas|Beta-2 Transferrin]]
- **Defect Preparation**: [[CSF leak defect preparation requires circumferential bone de-mucosalization|Defect Preparation]]
- **Multi-Layer Closure**: [[Multi-layer skull base reconstruction combines underlay, inlay, and overlay barriers|Skull Base Reconstruction]]
- **Anatomical Foundation**: [[Spontaneous CSF leaks are strongly associated with idiopathic intracranial hypertension and elevated BMI|Spontaneous CSF Leaks & IIH]]
- **Surgical Craft**: [[Endoscopic repair of cerebrospinal fluid rhinorrhea employs systematic biochemical confirmation, intrathecal fluorescein localization, and multilayer underlay dural reconstruction to achieve primary closure|Endoscopic CSF Rhinorrhea Repair]]
