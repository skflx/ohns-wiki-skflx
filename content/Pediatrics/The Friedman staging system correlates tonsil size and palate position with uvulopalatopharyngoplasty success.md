---
title: "The Friedman staging system correlates tonsil size and palate position with uvulopalatopharyngoplasty success"
tier: "Tier I: Bedrock Foundations — Branchial Embryology, Starling Resistor & Sleep Neurobiology"
tags:
  - pediatrics
  - sleep-surgery
  - friedman-staging
  - uppp
  - osa
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Pediatric Otolaryngology Core Principles"
aliases:
  - "Friedman Staging System"
  - "Friedman Palate Position"
  - "Friedman Tonsil Grading"
  - "UPPP Success Staging"
---

# The Friedman staging system correlates tonsil size and palate position with uvulopalatopharyngoplasty success

## Active Recall

> [!question]- How does the patient positioning and instruction for Friedman palate position grading fundamentally differ from the anesthesiology Mallampati classification?
> *Answer / Clinical Rationale*: In the **Friedman palate position** assessment, the patient is instructed to **open the mouth widely while keeping the tongue in a neutral, relaxed position inside the oral cavity (WITHOUT protruding the tongue or phonating)**. In contrast, the Mallampati classification requires maximal active tongue protrusion with phonation. The neutral Friedman position accurately reflects true dynamic resting upper airway caliber during sleep.

> [!question]- What anatomical findings define Friedman palate positions I through IV and tonsil grades 0 through 4?
> *Answer / Clinical Rationale*: - **Palate Positions**: **Position I**: entire uvula and tonsillar pillars visible; **Position II**: uvula visible, but pillars hidden; **Position III**: soft palate visible, but uvula obscured; **Position IV**: hard palate only visible (soft palate completely hidden). - **Tonsil Grades**: **0**: surgically absent (prior tonsillectomy); **1**: hidden within tonsillar pillars; **2**: extends to the edge of posterior pillars; **3**: extends beyond pillars into oropharynx; **4**: touching in the midline ("kissing tonsils").

> [!question]- How does Friedman clinical staging predict surgical success for isolated uvulopalatopharyngoplasty (UPPP)?
> *Answer / Clinical Rationale*: - **Friedman Stage I (Palate Position I/II + Tonsil Grade 3/4 + BMI $<40\text{ kg/m}^2$)**: High success rate of **$>80\text{–}85\%$** for isolated UPPP. - **Friedman Stage II (Palate I/II with Tonsils 1/2, OR Palate III/IV with Tonsils 3/4)**: Intermediate success rate of **$35\text{–}40\%$**. - **Friedman Stage III (Palate Position III/IV + Tonsil Grade 0/1/2)**: Poor success rate of **$<15\text{–}20\%$** for standard UPPP; indicates predominant hypopharyngeal / retroglossal collapse mandating multilevel sleep surgery.

## Core Clinical & Mechanistic Principles
The **Friedman Clinical Staging System** (Friedman et al., 2002) is the benchmark physical examination paradigm for stratifying anatomical collapse and predicting operative success in adult obstructive sleep apnea:

```mermaid
%% Friedman Staging System and UPPP Success Matrix
flowchart TD
  N1(["Physical Exam: Patient Mouth Open, Tongue Neutral Inside Mouth Without Phonation"]) --> N2{"Friedman Anatomical Scoring Matrix"}
  N2 --> N3["Friedman Palate Position (FPP): Position I (Full Uvula/Pillars) to IV (Hard Palate Only)"]
  N2 --> N4["Friedman Tonsil Size (FT): Grade 0 (Absent) to Grade 4 (Kissing in Midline)"]
  N2 -->|"Stage I: Palate Pos I/II + Tonsil Grade 3/4 + BMI <40 kg/m2"| N5{"Stage I Protocol"}
  N5 --> N6["HIGH UPPP SUCCESS RATE: >80-85% AHI Reduction"]
  N5 --> N7["Procedure: Isolated Modified UPPP / Expansion Sphincter Pharyngoplasty"]
  N2 -->|"Stage II: Palate Pos I/II + Tonsil 1/2 OR Palate III/IV + Tonsil 3/4"| N8{"Stage II Protocol"}
  N8 --> N9["INTERMEDIATE UPPP SUCCESS RATE: ~35-40% AHI Reduction"]
  N8 --> N10["Workup: DISE to Rule Out Retroglossal / Hypopharyngeal Collapse"]
  N2 -->|"Stage III: Palate Pos III/IV + Tonsil Grade 0/1/2"| N11{"Stage III Protocol"}
  N11 --> N12["POOR ISOLATED UPPP SUCCESS RATE: <15-20% (Isolated UPPP Contraindicated)"]
  N11 --> N13["Mandatory Multilevel Surgery: DISE -> TORS Base of Tongue / HGNS / MMA Expansion"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N3,N4 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N7 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N9,N10 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N13 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N12 red
```

### Clinical Decision Tree for Upper Airway Surgery
- **Stage I Patients**: Ideal candidates for isolated oropharyngeal surgery (**Modified UPPP, [[Expansion sphincter pharyngoplasty ESP rotates the palatopharyngeus muscle to stabilize lateral pharyngeal wall collapse|Expansion Sphincter Pharyngoplasty]], or Z-palatoplasty**).
- **Stage II and III Patients**: Isolated UPPP is contraindicated; patients require **Drug-Induced Sleep Endoscopy (DISE)** to evaluate retroglossal and lateral pharyngeal wall dynamics, followed by multilevel procedures (TORS lingual tonsillectomy, hypoglossal nerve stimulation [HGNS], or maxillomandibular advancement [MMA]).

## Connected Concepts & Graph Traversal
- **Palatal Sleep Surgery**: [[Modified uvulopalatopharyngoplasty UPPP resects redundant palatal tissue while preserving muscular function|Modified UPPP Surgical Craft]]
- **Lateral Wall Splinting**: [[Relocating the palatopharyngeus anterolaterally splints the lateral pharyngeal walls in expansion pharyngoplasty|Expansion Sphincter Pharyngoplasty]]
- **DISE Evaluation**: [[VOTE classification standardizes drug-induced sleep endoscopy findings across velum, oropharynx, tongue base, and epiglottis|VOTE Classification System]]
- **Adult PSG Criteria**: [[Adult polysomnography criteria define obstructive sleep apnea severity by apnea-hypopnea index thresholds of five, fifteen, and thirty|Adult PSG Criteria]]
- **Hypoglossal Stimulation**: [[Inclusion criteria for hypoglossal nerve stimulation include BMI less than thirty-five and absence of complete concentric collapse|HGNS Inclusion & Selection]]
- **Staging System**: [[Adult obstructive sleep apnea surgical staging synthesizes anatomical Fujita levels of collapse with the Friedman clinical staging system to predict surgical response|Fujita-Friedman Integrated Staging]]
