---
title: "Newborn hearing screening follows the one-three-six EHDI timeline with early CMV testing"
tier: "Tier S: Function & Development"
tags:
  - pediatrics
  - hearing-screening
  - ehdi
  - cmv
  - snhl
last_revised: 2026-11-09
status: complete
sources:
  - "CummingsPed, Ch12, p.1"
aliases:
  - "Newborn Hearing Screening"
  - "EHDI"
  - "Congenital CMV Testing"
---

# Newborn hearing screening follows the one-three-six EHDI timeline with early CMV testing

## Active Recall

> [!question]- Why does the CMV test expire at three weeks of age?
> *Answer / Clinical Rationale*: Postnatally acquired CMV (breast milk, contact) becomes detectable after that point — only early PCR proves congenital infection as the cause of the loss.

> [!question]- Why must NICU graduates be screened with ABR rather than OAE?
> *Answer / Clinical Rationale*: Their risk profile includes auditory neuropathy — present emissions with absent neural conduction — which OAE alone would falsely pass.

## Core Clinical & Mechanistic Principles
- **1-3-6 rule**: screen by one month, diagnostic audiology (ABR) by three months, intervention (amplification, early intervention services) by six months — the timeline exists because language outcomes track intervention age, not identification age.
- Screening technology maps to nursery: OAE misses neural (auditory neuropathy) disease; **well-baby screens often use OAE, NICU graduates require ABR** — prolonged NICU stay, hyperbilirubinemia, and aminoglycosides enrich for neuropathy-spectrum disease.
- **Congenital CMV** is the leading nongenetic cause: a failed screen triggers saliva/urine CMV PCR **within the first three weeks of life** — after that window, congenital cannot be separated from postnatal acquisition; dried blood spot retrieval is the late-window salvage.
- 'Passed the newborn screen' is not immunity: delayed-onset and progressive losses (CMV, EVA/Pendred, GJB2 variants) mandate re-testing any child with language delay or parental concern.

```mermaid
%% EHDI OneThreeSix Screening and Early CMV Protocol
flowchart TD
  N1(["Universal Newborn Hearing Screening at Birth"]) --> N2{"Nursery Screening Modality Triage"}
  N2 -->|"Well-Baby Nursery (Low Risk)"| N3["Otoacoustic Emissions (OAE) or Automated ABR (AABR)"]
  N2 -->|"NICU Stay >5 Days / Hyperbilirubinemia / Aminoglycosides"| N4["Automated ABR (AABR) MANDATORY (Detects Auditory Neuropathy Spectrum ANSD)"]
  N2 -->|"'REFER' / Failed Screen"| N5{"EHDI 1-3-6 BENCHMARK TIMELINE"}
  N5 --> N6["1 MONTH: Rescreen / Diagnostic Audiology Referral Completed"]
  N5 --> N7["3 MONTHS: Comprehensive Frequency-Specific Diagnostic ABR Confirms SNHL"]
  N5 --> N8["6 MONTHS: Hearing Aid Amplification & Early Intervention Enrollment"]
  N5 --> N9{"EARLY ETIOLOGIC WORKUP: <= 21 Days"}
  N9 --> N10["Saliva / Urine CMV PCR <= 21 Days of Life (Separates Congenital from Postnatal CMV)"]
  N9 --> N11["Genetic Panel (GJB2/Connexin 26) + Temporal Bone CT/MRI (EVA) + ECG (JLNS)"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N6 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N7,N11 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3,N4 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N8 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N10 red
```

### Management & Critical Safety Checks
- A refer result is a referral, not a diagnosis — but the machinery (diagnostic ABR, medical evaluation, genetics/ophthalmology, early intervention) must move on the 1-3-6 clock.
- Confirmed SNHL evaluation bundles: genetics (GJB2 first-line or panel), CMV status, imaging by phenotype, ophthalmology (Usher), and cardiology when syndrome-indicated (Jervell-Lange-Nielsen ECG) (see [[Connexin 26 mutations in GJB2 and congenital CMV infection are leading causes of non-syndromic pediatric sensorineural hearing loss|Connexin 26 & CMV]]).

## Connected Concepts & Graph Traversal
- **GJB2 & CMV Genetics**: [[Connexin 26 mutations in GJB2 and congenital CMV infection are leading causes of non-syndromic pediatric sensorineural hearing loss|Connexin 26 & CMV]]
- **Syndromic SNHL Syndromes**: [[Syndromic pediatric sensorineural hearing loss encompasses Pendred, Usher, Waardenburg, and Jervell and Lange-Nielsen syndromes|Syndromic Hearing Loss]]
- **Stickler SNHL Syndrome**: [[Stickler syndrome combines progressive sensorineural hearing loss, spondyloepiphyseal dysplasia, and retinal detachment|Stickler Syndrome]]
- **Treacher Collins Dysostosis**: [[Treacher Collins syndrome results from TCOF1 mutations causing mandibulofacial dysostosis and conductive hearing loss|Treacher Collins Syndrome]]
- **Pediatric Mastoiditis**: [[Pediatric acute mastoiditis with subperiosteal abscess requires intravenous ceftriaxone, myringotomy tube placement, and cortical mastoidectomy|Pediatric Mastoiditis]]
