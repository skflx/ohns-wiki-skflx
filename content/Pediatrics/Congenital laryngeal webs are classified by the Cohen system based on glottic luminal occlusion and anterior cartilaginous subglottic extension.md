---
title: "Congenital laryngeal webs are classified by the Cohen system based on glottic luminal occlusion and anterior cartilaginous subglottic extension"
tier: "Tier II: Pediatric Airway Emergencies, Inflammatory Disorders & Ingestion"
tags:
  - pediatrics
  - laryngology
  - congenital-laryngeal-anomalies
  - laryngeal-web
  - cohen-classification
  - stridor
last_revised: 2026-11-09
status: complete
sources:
  - "EncycloOto, Vol C, p.222-224"
aliases:
  - "Congenital Laryngeal Web"
  - "Cohen Classification"
  - "Anterior Glottic Web"
---

# Congenital laryngeal webs are classified by the Cohen system based on glottic luminal occlusion and anterior cartilaginous subglottic extension

## Active Recall

> [!question]- What genetic microdeletion is strongly associated with congenital anterior glottic laryngeal webs?
> *Answer / Clinical Rationale*: **22q11.2 microdeletion syndrome** (velocardiofacial / DiGeorge syndrome), identified in up to $65\%$ of pediatric patients with congenital anterior laryngeal webs, mandating genetic testing and cardiac screening.

> [!question]- How does the Cohen classification define the four degrees of congenital laryngeal webs?
> *Answer / Clinical Rationale*: **Type I**: $<35\%$ glottic occlusion, thin membranous; **Type II**: $35\text{–}50\%$ occlusion, thicker with anterior subglottic cartilage; **Type III**: $50\text{–}75\%$ occlusion, thick fibrous web with anterior cricoid extension; **Type IV**: $75\text{–}90\%$ occlusion, solid continuous cartilaginous fusion into the subglottis causing severe airway distress.

## Core Clinical & Mechanistic Principles

Congenital laryngeal webs result from incomplete recanalization of the primitive laryngeal lumen during the 7th to 10th weeks of gestation due to arrested resorption of the embryonic epithelial lamina. Over $75\%$ of webs occur at the vocal fold level, characteristically positioned across the anterior commissure with a concave posterior margin:

### Pathophysiology & Genetic Syndromes
- **Embryonic Arrest**: The larynx recanalizes from posterior to anterior; incomplete lamina resorption leaves an anterior web with varying degrees of cartilaginous subglottic fusion (the "anterior sail" deformity), fundamentally linked to the development of [[Congenital subglottic stenosis results from incomplete recanalization of the laryngeal lumen during embryogenesis]].
- **Syndromic Associations**: Strongly associated with **22q11.2 microdeletion syndrome** (velocardiofacial / DiGeorge syndrome); all neonates presenting with congenital laryngeal webs require fluorescence in situ hybridization (FISH) or chromosomal microarray testing and echocardiography.
- **Clinical Presentation**: Weak, high-pitched, or absent neonatal cry (falsetto voice), chronic hoarseness, and progressive biphasic stridor. In severe forms, acute neonatal respiratory distress and complete aphonia occur at birth.

### The Cohen Staging System
1. **Type I (Mild Web — $<35\%$ Glottic Luminal Occlusion)**:
   - Thin, translucent, mucosal membrane localized strictly to the anterior glottis.
   - Vocal folds are clearly visible through the membrane; subglottic extension is absent.
   - Symptoms: Mild dysphonia or high-pitched cry; airway compromise is absent.
2. **Type II (Moderate Web — $35\text{–}50\%$ Glottic Luminal Occlusion)**:
   - Thicker membrane with an anterior fibrous or cartilaginous component involving the subglottis.
   - Symptoms: Husky voice, mild to moderate exertional biphasic stridor; rarely causes resting distress.
3. **Type III (Severe Web — $50\text{–}75\%$ Glottic Luminal Occlusion)**:
   - Thick, dense fibrous tissue extending deep into the anterior cricoid ring; vocal cord margins are poorly visualized.
   - Symptoms: Marked hoarseness or weak cry, persistent resting biphasic stridor, and recurrent croup-like episodes.
4. **Type IV (Near-Total Atresia — $75\text{–}90\%$ Glottic Luminal Occlusion)**:
   - Dense, solid cartilaginous fusion between the vocal folds extending into the subglottis; true lumen reduced to a small posterior chink.
   - Symptoms: Complete aphonia, severe neonatal cyanosis and airway obstruction requiring immediate resuscitation.

### Staged Surgical Management
- **Type I Webs**: Endoscopic cold-knife or CO2 laser division along the midline. Application of topical mitomycin C ($0.4\text{ mg/mL}$ for 2–3 minutes) is used to prevent anterior commissure re-adhesion. Simple dilation or [[Endoscopic balloon dilation with steroid injection manages early, soft, non-circumferential subglottic stenosis]] can be adjunctively performed.
- **Type II Webs**: Endoscopic division with mucosal microflap advancement to cover denuded vocal cord margins, or placement of an endoscopic Silastic or Teflon keel secured with transcutaneous nylon sutures across the thyroid cartilage for 10 to 14 days.
- **Type III & IV Webs**: Require open surgical reconstruction. Neonates with Type IV webs mandate immediate tracheostomy at delivery. Definitive repair involves open laryngofissure, division and submucosal thinning of the cartilaginous web, keel placement, and formal reconstruction with anterior and posterior cartilage grafts.

```mermaid
%% Cohen Laryngeal Web Staging and Surgical Protocol
flowchart TD
  N1(["Congenital Laryngeal Web: Incomplete Lumen Recanalization / 22q11 Deletion"]) --> N2{"Cohen Staging System on Endoscopy"}
  N2 -->|"Type I (<35% Thin Membranous)"| N3["Type 1 Pathway"]
  N2 -->|"Type II (35-50% Thicker Anterior Cartilage)"| N4["Type 2 Pathway"]
  N2 -->|"Type III (50-75% Dense Fibrous / Cricoid Extension)"| N5{"Type 3/4 Pathway"}
  N2 -->|"Type IV (75-90% Solid Cartilaginous Occlusion)"| N5
  N3 --> N6["Endoscopic Cold Steel / CO2 Laser Division + Topical Mitomycin C"]
  N4 --> N7["Endoscopic Division with Mucosal Flap Coverage or Silastic Keel Placement"]
  N5 --> N8["Severe Neonatal Airway Obstruction: Emergency Tracheostomy Placement"]
  N5 --> N9["Delayed Open Laryngofissure with Resection of Subglottic Cartilage Wedge"]
  N5 --> N10["Laryngotracheal Reconstruction with Anterior Costal Cartilage Graft"]
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N10 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N7 purple
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6,N9 red
```

## Connected Concepts & Graph Traversal

- **Subglottic Stenosis Classification**: [[Myer-Cotton grading system stratifies subglottic stenosis from Grade I less than fifty percent to Grade IV no lumen]]
- **Supraglottic Collapse**: [[Laryngomalacia is the most common cause of congenital pediatric stridor characterized by dynamic supraglottic collapse]]
- **Open Airway Repair**: [[Single-stage and double-stage laryngotracheal reconstruction LTR repair mature high-grade subglottic stenosis]]
- **Resection & Anastomosis**: [[Cricotracheal resection CTR achieves primary end-to-end anastomosis for severe Grade III and IV subglottic stenosis]]
- **Posterior Cricoid Splitting**: [[Posterior costal cartilage grafts with a carved flange split the posterior cricoid lamina to expand the glottic lumen]]
