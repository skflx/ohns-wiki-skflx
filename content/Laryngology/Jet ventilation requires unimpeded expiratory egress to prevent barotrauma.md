---
title: "Jet ventilation requires unimpeded expiratory egress to prevent barotrauma"
tier: "Tier IV: Primary Surgical Airway Management"
tags:
  - laryngology
  - operative-endoscopy
  - jet-ventilation
  - venturi-effect
  - barotrauma
  - patient-safety
last_revised: 2026-11-09
status: complete
sources:
  - "KJLee"
aliases:
  - "Jet Ventilation in Laryngology"
  - "Supraglottic and Subglottic Jet Ventilation"
  - "Venturi Jet Ventilation Safety"
  - "Jet ventilation delivers high-pressure pulses via the Venturi effect but requires unimpeded expiratory egress to prevent barotrauma"
---

# Jet ventilation requires unimpeded expiratory egress to prevent barotrauma

## Active Recall

> [!question]- What physical principle allows jet ventilation to deliver adequate tidal volume through an open laryngeal lumen?
> *Answer / Clinical Rationale*: The **Venturi effect**; high-velocity oxygen pulses create a localized pressure drop at the nozzle tip, entraining surrounding air to generate adequate tidal volumes.

> [!question]- Why is high-grade subglottic stenosis a major contraindication to supraglottic jet ventilation?
> *Answer / Clinical Rationale*: The narrow stenotic lumen prevents passive expiratory air egress; trapped pressurized air rapidly causes catastrophic **pulmonary barotrauma, pneumomediastinum, and tension pneumothorax**.

## Core Clinical & Mechanistic Principles
**High-Pressure Jet Ventilation** (supraglottic or subglottic, e.g., Mon-Jet, Hunsaker subglottic catheter) is an advanced tubeless anesthesia technique that delivers intermittent pulses of high-pressure oxygen ($20\text{–}50\text{ psi}$) into an open airway system.

### The Venturi Principle & Entrainment
- **High-Velocity Gas Jet**: Oxygen is forced through a narrow metal cannula or subglottic catheter tip at high velocity.
- **Venturi Effect & Gas Entrainment**: The rapid jet stream creates a localized negative pressure zone around the nozzle, entraining ambient room air into the distal airway and augmenting tidal volume.
- **Tubeless Operative Visualization**: Eliminates the bulky polyvinyl chloride endotracheal tube from the operative field, providing uninterrupted $360^\circ$ visualization of the posterior commissure, vocal folds, and subglottis for laser resection or dilation.

```mermaid
%% Jet Ventilation Venturi Mechanics and Expiratory Safety Protocol
flowchart TD
  N1(["High-Pressure Oxygen Pulses: 20-50 psi via Nozzle Tip"]) --> N2["Venturi Pressure Drop at Cannula Tip Entrains Room Air"]
  N2 --> N3["Delivers Augmented Tidal Volume into Distal Trachea & Lungs"]
  N3 --> N4{"Assess Airway Expiratory Egress Channel Patency"}
  N4 -->|"Completely Open Lumen & Passive Chest Recoil"| N5["Safe Continuous Jet Ventilation with Tubeless Surgical Optics"]
  N4 -->|"Glottic Occlusion (Cotton-Myer Grade III/IV, Balloon Inflation, Large Scope)"| N6["Catastrophic Air Trapping & Intrathoracic Pressure Spike"]
  N6 --> N7["Alveolar Rupture -> Pneumomediastinum & Tension Pneumothorax"]
  N7 --> N8["PAUSE JET VENTILATION Immediately During Any Luminal Occlusion"]
  classDef blue fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
  class N2 blue
  classDef green fill:#dcfce7,stroke:#16a34a,color:#14532d
  class N5,N8 green
  classDef orange fill:#ffedd5,stroke:#ea580c,color:#7c2d12
  class N3 orange
  classDef red fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
  class N6,N7 red
```

## The Absolute Expiratory Safety Mandate
- **Passive Exhalation**: Jet ventilation delivers high inspiratory gas volumes in a fraction of a second, but exhalation relies **entirely on passive elastic recoil of the patient's chest wall and lungs**.
- **Mandatory Open Egress Channel**: The subglottic, glottic, and supraglottic airway must remain **completely patent and unoccluded during the expiratory phase**.

## Critical Failure Modes & Error Traps
- **Barotrauma, Tension Pneumothorax, and Pneumomediastinum**:
  - If high-grade subglottic stenosis ([[The Cotton-Myer classification grades subglottic stenosis by luminal reduction|Cotton-Myer Grade]] III/IV) is present, or if surgical instruments (large suction, laser suspension laryngoscope, or dilation balloon) accidentally occlude the narrow glottic channel during jet firing, escaping air cannot exit.
  - Alveolar pressures rapidly exceed capillary bursting thresholds ($>40\text{–}50\text{ cm H}_2\text{O}$), resulting in catastrophic **alveolar rupture, massive pneumomediastinum, [[Subcutaneous emphysema arises when tracheotomy incisions are closed too tightly|subcutaneous emphysema]], and bilateral tension pneumothorax**.
  - *Safety Rule*: Never fire the jet ventilator when instruments are occluding the airway lumen; immediately pause jetting during balloon inflation.

## Connected Concepts & Graph Traversal
- **Diagnostic Companion**: [[Rigid bronchoscopy requires 90-degree rotation through the glottis|Operative Rigid Bronchoscopy]]
- **Endoscopic Procedure**: [[Endoscopic airway dilation combines radial incisions with balloon bronchoplasty|Endoscopic Airway Dilation]]
- **Critical Safety & Barotrauma**: [[Subcutaneous emphysema arises when tracheotomy incisions are closed too tightly|Subcutaneous Emphysema and Air Trapping]]
- **Alternative Primary Airway**: [[Standard open tracheotomy utilizes horizontal intersinusoidal or Bjork flap entry|Standard Open Tracheotomy]]
- **Clinical Management**: [[The Cotton-Myer classification grades subglottic stenosis by luminal reduction|Cotton-Myer Classification]]
