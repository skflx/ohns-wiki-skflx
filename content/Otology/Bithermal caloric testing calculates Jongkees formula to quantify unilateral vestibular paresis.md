---
title: "Bithermal caloric testing calculates Jongkees formula to quantify unilateral vestibular paresis"
tier: "Tier I: Bedrock Foundations — Cochlear Micromechanics, Auditory Electrophysiology & Vestibular Testing"
tags:
  - otology
  - vestibular
  - caloric-testing
  - jongkees-formula
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee, Ch16, p.323"
aliases:
  - "Caloric Testing"
  - "Jongkees Formula"
  - "Vestibular Paresis"
  - "Unilateral Weakness"
---

# Bithermal caloric testing calculates Jongkees formula to quantify unilateral vestibular paresis

## Active Recall

> [!question]- What is the COWS mnemonic in caloric testing?
> *Answer / Clinical Rationale*: **Cold = Opposite, Warm = Same** (cold irrigation produces nystagmus beating to opposite ear; warm produces nystagmus beating to same ear).

> [!question]- What percentage of unilateral weakness on Jongkees formula indicates significant vestibular hypofunction?
> *Answer / Clinical Rationale*: A **unilateral weakness $\ge 25\%$**.

## Core Clinical & Mechanistic Principles
**Bithermal caloric irrigations** (part of videonystagmography / VNG) test the horizontal semicircular canal at ultra-low frequencies (**$0.003\text{ Hz}$**):
- **Mechanism (COWS Mnemonic)**:
  - **Warm Water ($44^\circ\text{C}$)** / Air ($45.5^\circ\text{C}$): Endolymph rises (ampullopetal flow) $\r\r\rightarrow$ excitation $\r\r\rightarrow$ **nystagmus beating TOWARD stimulated ear**.
  - **Cold Water ($30^\circ\text{C}$)** / Air ($27.5^\circ\text{C}$): Endolymph sinks (ampullofugal flow) $\r\r\rightarrow$ inhibition $\r\r\rightarrow$ **nystagmus beating AWAY from stimulated ear (to Opposite ear)**.
- **Jongkees Formula for Unilateral Weakness (UW)**:
  $$\text{UW (\%)} = \frac{|(R_{warm} + R_{cold}) - (L_{warm} + L_{cold})|}{R_{warm} + R_{cold} + L_{warm} + L_{cold}} \times 100$$
- **Diagnostic Criteria**:
  - **Unilateral Weakness $\ge 25\%$**: Defines clinically significant unilateral horizontal canal paresis (e.g., [[Vestibular schwannomas arise from the Schwann cell sheath of the inferior or superior vestibular nerve|vestibular schwannoma]], Meniere disease, [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|vestibular neuritis]]).
  - **Directional Preponderance $\ge 30\%$**: Non-specific asymmetry in right vs. left beating nystagmus.

```mermaid
%% Jongkees Caloric Formula and Vestibular Paresis Matrix
flowchart TD
  N1(["VNG / ENG Testing: Bithermal Caloric Irrigation of External Auditory Canal"]) --> N2{"COWS Principle of Thermally Driven Endolymph Convection"}
  N2 -->|"Cold Water (30°C) / Air (24°C)"| N3["Endolymph Sinks: Ampullofugal Flow -> Nystagmus Beats OPPOSITE Ear"]
  N2 -->|"Warm Water (44°C) / Air (50°C)"| N4["Endolymph Rises: Ampullopetal Flow -> Nystagmus Beats SAME Ear"]
  N2 --> N5["Measure Maximum Slow Phase Velocity (SPV) across All 4 Irrigations (RW, RC, LW, LC)"]
  N5 --> N6{"Apply Jongkees Formula Calculations"}
  N6 -->|"Unilateral Weakness (UW % = [(RW + RC) - (LW + LC)] / Total SPV x 100)"| N7["UW Interpretation"]
  N7 --> N8["UW >=25%: Confirms Clinically Significant Unilateral Horizontal Canal Peripheral Hypofunction"]
  N6 -->|"Directional Preponderance (DP % = [(RW + LC) - (LW + RC)] / Total SPV x 100)"| N9["DP Interpretation"]
  N9 --> N10["DP >=30%: Indicates Vestibular Asymmetry / Incomplete Central Compensation"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N5 blue
  classDef cyan fill:#cffafe,stroke:#0891b2,color:#164e63
  class N3,N4 cyan
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N8 orange
  classDef purple fill:#f3e8ff,stroke:#9333ea,color:#581c87
  class N10 purple
```

### Surgical Technique & Critical Safety Checks
- **Bilateral Weakness**: Total slow phase eye velocity across all 4 irrigations $<12\text{–}20^\circ/\text{s}$ indicates bilateral vestibular hypofunction (mandates [[Rotary chair testing assesses low-frequency bilateral vestibular hypofunction and central compensation|rotary chair]] evaluation).

## Connected Concepts & Graph Traversal
- **Rotary Chair Low-Frequency Testing**: [[Rotary chair testing assesses low-frequency bilateral vestibular hypofunction and central compensation|Rotary Chair Diagnostics]]
- **High-Frequency Angular Testing**: [[The video head impulse test vHIT identifies high-frequency angular vestibulo-ocular reflex deficits|vHIT Testing]]
- **Fluctuating Hydrops Differential**: [[Meniere disease is characterized by episodic vertigo, fluctuating low-frequency SNHL, tinnitus, and aural fullness|Meniere Disease]]
- **Nystagmus Biophysical Laws**: [[Ewald's laws and Alexander's law govern the directional dynamics and intensity of vestibular nystagmus|Ewald Laws of Endolymph Flow]]
- **Acute Neuritis Differential**: [[Vestibular neuritis causes acute spontaneous prolonged vertigo without auditory symptoms|Vestibular Neuritis]]
