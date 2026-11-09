---
title: "Connexin 26 mutations in GJB2 and congenital CMV infection are leading causes of non-syndromic pediatric sensorineural hearing loss"
tier: "Tier I: Bedrock Foundations — Branchial Embryology, Starling Resistor & Sleep Neurobiology"
tags:
  - pediatrics
  - genetic-hearing-loss
  - connexin-26
  - gjb2
  - congenital-cmv
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch16, p.4"
aliases:
  - "Connexin 26"
  - "GJB2 Mutation"
  - "Congenital CMV Hearing Loss"
  - "Non-Syndromic SNHL"
  - "UNHS"
---

# Connexin 26 mutations in GJB2 and congenital CMV infection are leading causes of non-syndromic pediatric sensorineural hearing loss

## Active Recall

> [!question]- What is the cellular function of Connexin 26 encoded by the GJB2 gene, and why does its mutation cause hearing loss?
> *Answer / Clinical Rationale*: It forms **gap junction channels that recycle potassium ions ($K^+$)** from hair cells back to the stria vascularis; mutations disrupt potassium homeostasis and abolish the endocochlear potential.

> [!question]- Within what timeframe must urine or saliva CMV PCR be obtained to definitively diagnose congenital (rather than acquired) CMV infection?
> *Answer / Clinical Rationale*: Within the **first 21 days (3 weeks) of life**.

## Core Clinical & Mechanistic Principles
Non-syndromic genetic mutations and congenital viral infections account for the vast majority of non-syndromic pediatric sensorineural hearing loss:
- **GJB2 Mutation (Connexin 26) — The Leading Genetic Cause ($>50\%$ of Non-Syndromic SNHL)**:
  - *Genetics*: Autosomal recessive mutation in the **GJB2 gene** (chromosome 13q12), encoding the gap junction protein **Connexin 26**. (The 35delG mutation is the most common variant in Caucasian populations).
  - *Mechanism*: Connexin 26 forms hexameric gap junctions between supporting cells in the cochlea, essential for **potassium ($K^+$) recycling** from hair cells back to the stria vascularis to maintain the endocochlear potential.
  - *Clinical Course*: Typically non-progressive, bilateral, moderate-to-profound SNHL with completely **normal temporal bone CT imaging**.
  - *Prognosis*: Outstanding candidates for **cochlear implantation**, achieving superior speech outcomes because the spiral ganglion and auditory nerve fibers are intact.
- **Congenital Cytomegalovirus (cCMV) — The Leading Non-Genetic Infectious Cause**:
  - Acquired in utero via transplacental transmission.
  - *Manifestations*: Microcephaly, periventricular calcifications, chorioretinitis, hepatosplenomegaly, and **progressive, fluctuating, or delayed-onset unilateral or bilateral SNHL**.
  - *Diagnosis*: **CMV DNA PCR in urine or saliva obtained within the first 21 days of life** (testing after 3 weeks cannot distinguish congenital from acquired infection).
  - *Treatment*: Early initiation of oral **Valganciclovir ($16\text{ mg/kg/dose BID}$ for 6 months)** improves hearing and neurodevelopmental outcomes.

```mermaid
%% Non-Syndromic Pediatric SNHL Protocol
flowchart TD
  N1(["Universal Newborn Hearing Screen Failure: JCIH 1-3-6 Benchmark"]) --> N2{"Diagnostic Workup & Etiology"}
  N2 -->|"Genetic Pathway (Leading Cause >50%)"| N3["GJB2 Connexin 26 Route"]
  N2 -->|"Infectious Pathway (Leading Non-Genetic)"| N4["Congenital CMV Route"]
  N3 --> N5["GJB2 / 35delG Mutation (Disrupts K+ Recycling to Stria)"]
  N5 --> N6["CT: Normal Inner Ear Anatomy & Intact Spiral Ganglion"]
  N6 --> N7["Outstanding Candidate for Cochlear Implantation (CI)"]
  N4 --> N8["Diagnostic Urine/Saliva CMV PCR <=21 Days of Life"]
  N8 --> N9["Presents as Progressive, Fluctuating or Late-Onset SNHL"]
  N9 --> N10["Oral Valganciclovir (16 mg/kg BID x 6 Mo) + Serial Audiometry"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N6 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8,N9 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N10 red
```

### Surgical Technique & Critical Safety Checks
- **Universal Newborn Hearing Screening (JCIH 1-3-6 Benchmark)**: Screen by 1 month, diagnose by 3 months, and initiate amplification/intervention by 6 months of age (see [[Newborn hearing screening follows the one-three-six EHDI timeline with early CMV testing|EHDI 1-3-6 Timeline]]).

## Connected Concepts & Graph Traversal
- **EHDI Screening Timeline**: [[Newborn hearing screening follows the one-three-six EHDI timeline with early CMV testing|EHDI 1-3-6 Timeline]]
- **Syndromic SNHL Entities**: [[Syndromic pediatric sensorineural hearing loss encompasses Pendred, Usher, Waardenburg, and Jervell and Lange-Nielsen syndromes|Syndromic Pediatric SNHL]]
- **Stickler SNHL Syndrome**: [[Stickler syndrome combines progressive sensorineural hearing loss, spondyloepiphyseal dysplasia, and retinal detachment|Stickler Syndrome]]
- **Treacher Collins Conductive Loss**: [[Treacher Collins syndrome results from TCOF1 mutations causing mandibulofacial dysostosis and conductive hearing loss|Treacher Collins Syndrome]]
- **Pediatric Mastoiditis**: [[Pediatric acute mastoiditis with subperiosteal abscess requires intravenous ceftriaxone, myringotomy tube placement, and cortical mastoidectomy|Pediatric Acute Mastoiditis]]
