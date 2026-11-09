---
title: "Massive tracheostomy hemorrhage requires cuff overinflation, digital compression, and emergent surgical or endovascular control"
tier: "Tier I: Bedrock Foundations"
tags:
  - laryngology
  - airway-emergencies
  - tracheostomy
  - massive-hemorrhage
  - tracheoinnominate-fistula
  - utley-maneuver
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsReview2017, Laryngology"
aliases:
  - "Massive Tracheostomy Bleeding"
  - "Tracheostomy Hemorrhage Algorithm"
  - "Utley Maneuver and Cuff Hyperinflation"
---

# Massive tracheostomy hemorrhage requires cuff overinflation, digital compression, and emergent surgical or endovascular control

## Active Recall

> [!question]- Describe the physical mechanics of the Utley maneuver in a patient with massive tracheostomy bleeding.
> *Answer / Clinical Rationale*: The tracheostomy tube is removed, the operator inserts an index finger through the stoma into the pretracheal space behind the sternum, and **firmly compresses the innominate artery anteriorly against the posterior cortex of the manubrium** while the patient is intubated from above.

> [!question]- Why is simple suture ligation and division of the innominate artery (without bypass graft) usually well-tolerated during emergency surgical repair of a tracheoinnominate fistula?
> *Answer / Clinical Rationale*: Collateral cerebral blood flow via the **circle of Willis (from the left internal carotid artery)** and retrograde flow down the right internal carotid from the **right vertebral and subclavian arteries** reliably maintains right hemispheric perfusion.

## Core Clinical & Mechanistic Principles
Massive, pulsatile hemorrhage from or around a tracheostomy is a catastrophic, high-mortality surgical emergency. The classic underlying etiology is a **[[Tracheoinnominate fistula presents with sentinel bleeding requiring hyperinflation tamponade and emergency surgical ligation|Tracheoinnominate Fistula]] (TIF)**—an abnormal communication between the posterior wall of the brachiocephalic (innominate) artery and the anterior tracheal wall, occurring in 0.7% of tracheotomized patients with peak incidence at **1 to 3 weeks postoperatively**. Because mortality approaches 100% without immediate mechanical tamponade, every otolaryngologist must execute a rapid, reflexive three-step algorithmic rescue:

- **Pathophysiological Mechanisms of TIF**:
  - **Low Tracheotomy**: Incision placed below the 4th tracheal ring, placing the rigid tube in direct contact with the cross-compressing innominate artery behind the sternal manubrium.
  - **High Cuff Pressures & Mucosal Necrosis**: Sustained cuff hyperinflation ($>30\text{ mmHg}$) exceeding capillary perfusion pressure, causing circumferential ischemic necrosis of anterior tracheal cartilage rings and erosive fistulization into the adjacent arterial adventitia.
  - **Malaligned Rigid Tube Tip**: Forward-curving tip of a rigid tube impinging directly on the anterior tracheal wall.

- **Step-by-Step Bedside Emergency Rescue Algorithm**:
  1. **Immediate Mobilization & Resuscitation**: Activate the hospital-wide emergency surgical/trauma code. Order massive transfusion protocol (MTP: 1:1:1 pRBC, FFP, platelets), place two large-bore IV lines, and notify the Operating Room and Cardiothoracic/Vascular surgery teams.
  2. **Step 1 — Cuff Hyperinflation**:
     - Immediately inject **20 to 30 mL of air** into the tracheostomy pilot balloon using a 20 mL syringe.
     - *Mechanistic Tamponade*: The overinflated balloon expands anteriorly, compressing the eroded innominate artery against the posterior table of the sternum. Controls bleeding temporarily in **$\approx 85\%$ of cases**.
  3. **Step 2 — Endotracheal Tube Exchange & Distal Airway Isolation**:
     - If bleeding persists or if the patient has an uncuffed tube, pass a standard cuffed endotracheal tube (size 7.0–8.0) into the stoma, advancing the cuff distal to the fistula site to ventilate the lungs while sealing the airway from blood aspiration.
  4. **Step 3 — Digital Tamponade (The Utley Maneuver)**:
     - If massive bleeding continues around the tube, **remove the tracheostomy tube**.
     - Insert a gloved index finger directly through the stomal incision into the anterior mediastinal pretracheal space.
     - **Compress the pulsating innominate artery anteriorly against the posterior cortex of the sternal manubrium**.
     - Simultaneously, an assistant or anesthesiologist performs **orotracheal intubation from above**, advancing the ETT past the digital compression site into the distal trachea.
     - **DO NOT RELEASE DIGITAL COMPRESSION** until the patient is prepped, draped, and the sternum is opened in the Operating Room.

```mermaid
%% Massive Tracheostomy Hemorrhage and Utley Maneuver Algorithm
flowchart TD
  N1(["Catastrophic Pulsatile Tracheostomy Hemorrhage / Tracheoinnominate Fistula"]) --> N2{"Immediate Systemic Mobilization"}
  N2 --> N3["Call Code / Activate MTP (1:1:1 pRBC/FFP/Plt) + Notify ENT/Cardiothoracic/OR"]
  N2 --> N4{"Step 1: Pilot Balloon Hyperinflation"}
  N4 --> N5["Inject 20-30 mL Air into Trach Balloon (Compreses Artery Ant Against Sternum; 85% Success)"]
  N4 -->|"Bleeding Successfully Controlled"| N6["Urgent Transfer to OR for Rigid Bronchoscopy & Median Sternotomy"]
  N4 -->|"Persistent Pulsatile Exsanguination"| N7{"Step 2: Endotracheal Tube Exchange"}
  N7 --> N8["Pass Standard Cuffed ETT (7.0-8.0) into Stoma with Cuff Distal to Fistula Site"]
  N7 -->|"Refractory Bleeding Continues"| N9{"Step 3: Digital Tamponade / Utley Maneuver"}
  N9 --> N10["Remove Trach Tube -> Insert Gloved Index Finger into Pretracheal Space Behind Stoma"]
  N9 --> N11["FIRM Compression of Innominate Artery Anteriorly Against Posterior Manubrial Cortex"]
  N9 --> N12["Simultaneous Orotracheal Intubation from Above with ETT Advanced Distal to Bleed"]
  N9 --> N13["DO NOT RELEASE DIGITAL PRESSURE: Transport to OR for Emergent Median Sternotomy & Ligation"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N5 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N6,N13 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10,N11,N12 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N3 red
```

## References
1. Ridley, R.W., Zwischenberger, J.B. (2006). Tracheoinnominate fistula: Surgical management of an iatrogenic disaster. *J Laryngol Otol*, 120(8):676-680.
2. Mitchell, R.B., Hussey, H.M., Setzen, G., et al. (2013). Clinical consensus statement: Tracheostomy care. *Otolaryngol Head Neck Surg*, 148(1):6-20.
3. Kraft, S.M., Schindler, J.S. (2020). Tracheotomy. In Flint, P.W., et al. (Eds.), *Cummings Otolaryngology Head and Neck Surgery* 7e (pp. 95-103). Philadelphia, PA: Elsevier.
4. Durbin Jr., C.G. (2010). Tracheostomy: why, when, and how? *Respir Care*, 55(8):1056-1068.

## Connected Concepts & Graph Traversal
- **Physiological Basis**: [[Tracheoinnominate fistula presents with sentinel bleeding requiring hyperinflation tamponade and emergency surgical ligation|Tracheoinnominate Fistula Pathophysiology]]
- **Minor Bleeding Management**: [[Tracheostomy stomal bleeding is controlled with cuff overinflation, hemostatic agents, and silver nitrate cautery|Stomal Granulation & Minor Bleeding]]
- **Tube System Mechanics**: [[Shiley, Bivona, and Portex tracheostomy tubes differ in cannula design, cuff profile, and airway resistance|Tracheostomy Tube Types]]
- **Surgical Prevention**: [[Open tracheostomy provides superior exposure and stay suture placement compared to percutaneous technique|Open Tracheostomy Surgical Anatomy]]
- **🔗 Vascular Blowout Spectrum (Head and Neck)**: [[Carotid blowout syndrome is classified into threatened, impending, and acute hemorrhage|Carotid Blowout Syndrome]]
