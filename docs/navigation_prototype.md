# Kevin Prakash J — Spider-Web Navigation System Prototype
**Phase 4 Revision Deliverable — Web Pull $\rightarrow$ Spatial Transit $\rightarrow$ Destination Expansion $\rightarrow$ Impact/Vibration**

---

## 1. Prototype Overview & Core Thesis

### The Refined Vision: Physical Pull into Cinematic Arrival
Phase 4 implements and validates the portfolio's signature navigation interaction:
$$\text{CURRENT PAGE (BIG)} \longrightarrow \text{WEB SHOOT} \longrightarrow \text{ANCHOR} \longrightarrow \text{TENSION} \longrightarrow \text{DEPARTING SHRINKS} \longrightarrow \text{PULL} \longrightarrow \text{ARRIVING SMALLER} \longrightarrow \text{EXPANSION TOWARD VIEWER} \longrightarrow \text{IMPACT / MICRO-VIBRATION} \longrightarrow \text{SETTLE} \longrightarrow \text{NEW PAGE (BIG)}$$

Rather than a simple camera pan or page transition, the user experiences true spatial continuity:
1. The **departing section** scales down ($1.00 \rightarrow 0.75$) and recedes into depth.
2. The **web filament** shoots across space, anchors with spark particles, and pulls the viewport camera along an elastic trajectory.
3. The **destination section** approaches in space slightly smaller ($0.78 \rightarrow 0.88$), then dynamically **expands forward toward the viewer** ($0.88 \rightarrow 1.05$).
4. Upon full arrival, the destination card delivers a **subtle 3px micro-vibration impact** with a momentary 70ms Spider-Verse chromatic offset (Crimson `#FF2A4B` / Cyan `#00D2FF`) before settling smoothly to resting size ($1.00$).

- **Prototype Location**: [`prototypes/navigation_system/index.html`](../prototypes/navigation_system/index.html)
- **Local Live URL**: `http://localhost:4173/prototypes/navigation_system/index.html`

---

## 2. Refined 10-Stage Interaction Lifecycle

```text
[IDLE: Current Card Scale 1.00x]
  │ (User clicks node or presses key 1-5)
  ▼
[STAGE 1: TARGETING (40ms)] ──► Lock-on reticle, route telemetry update
  │
  ▼
[STAGE 2: SHOOTING (160ms)] ──► Fast cubic filament shoots toward target anchor
  │
  ▼
[STAGE 3: ANCHORED (30ms)] ──► Contact established; radial spark particle burst (18 particles)
  │
  ▼
[STAGE 4: TENSION (80ms)] ──► Filament bows under elastic strain (ysag = 30px); departing card shrinks to 0.94x
  │
  ▼
[STAGE 5: PULLING (Spring)] ──► Camera accelerates along web vector; departing card recedes to 0.75x (opacity 0.4); target approaches at 0.88x
  │
  ▼
[STAGE 6: ARRIVAL_EXPANSION (110ms)] ──► Target card expands rapidly toward viewer from 0.88x to peak 1.05x
  │
  ▼
[STAGE 7: IMPACT (70ms)] ──► Damped 3px vibration, web tension releases/contracts, subtle chromatic split
  │
  ▼
[STAGE 8: SETTLING (120ms)] ──► Damped harmonic settle from 1.05x to 1.00x; chromatic shift clears; filament dissolves
  │
  ▼
[IDLE: Destination Card Scale 1.00x — Active Focus Border]
```

---

## 3. Centralized Motion Configuration (`CONFIG`)

All physics and arrival dynamics are centralized and exposed via interactive sliders in the Telemetry HUD:

```javascript
const CONFIG = {
  shootDurationMs: 160,        // Filament extension velocity
  tensionDurationMs: 80,       // Pre-pull elastic hold duration
  springK: 420,                // Camera spring stiffness (N/m)
  springC: 26,                 // Camera spring damping (Ns/m)
  mass: 1.0,                   // Viewport inertial mass
  expansionDurationMs: 110,    // Duration of forward expansion
  expansionPeakScale: 1.05,    // Peak overshoot scale on impact (1.04x - 1.06x)
  impactDurationMs: 70,        // Micro-vibration duration
  impactVibAmp: 3.0,           // Peak vibration displacement (px)
  settleDurationMs: 120,       // Harmonic return to 1.00x
  chromaticEnabled: true,      // 70ms Spider-Verse chromatic shadow accent
  reducedMotion: false         // Accessible instant-jump override
};
```

---

## 4. Specific Arrival Effects Analysis

### A. Destination Expansion
- When the camera is within 12px of target coordinates, the destination card scales rapidly from $0.88 \rightarrow 1.05$ using an ease-out cubic curve ($1 - (1 - t)^3$).
- This creates the physical sensation that the destination has been pulled directly into the user's foreground plane.

### B. Micro-Vibration & Tactile Impact
- Driven by a decaying sinusoidal equation:
  $$\text{Vibration}(t) = \sin(t \cdot 8\pi) \cdot A_{\text{impact}} \cdot (1 - t)$$
- Yields a crisp, high-frequency 2.5–3.0px vibration across 70ms that communicates physical mass and velocity absorption without shaking the global screen uncomfortably.

### C. Chromatic Separation Accent (Spider-Verse Influence)
- Activated strictly for 70ms during `STAGE 7 (IMPACT)`:
  ```css
  .section-zone.chromatic-impact {
    box-shadow: -2px 0 20px rgba(255, 42, 75, 0.45), 2px 0 20px rgba(0, 210, 255, 0.5);
  }
  .section-zone.chromatic-impact .section-title {
    text-shadow: -1.5px 0 rgba(255, 42, 75, 0.8), 1.5px 0 rgba(0, 210, 255, 0.8);
  }
  ```
- Evaluated as a high-value tactile accent that instantly vanishes upon `SETTLING`.

### D. Camera Shake Evaluation
- Large camera shakes were rejected in favor of card-level micro-vibrations to maintain reading stability and prevent nausea.

---

## 5. State Machine & Interruption Discipline

```javascript
const STATES = {
  IDLE: 'IDLE',
  TARGETING: 'TARGETING',
  SHOOTING: 'SHOOTING',
  ANCHORED: 'ANCHORED',
  TENSION: 'TENSION',
  PULLING: 'PULLING',
  ARRIVAL_APPROACH: 'ARRIVAL_APPROACH',
  ARRIVAL_EXPANSION: 'ARRIVAL_EXPANSION',
  IMPACT: 'IMPACT',
  SETTLING: 'SETTLING'
};
```

- **Mid-Flight Retargeting**: Clicking any other node during `SHOOTING`, `TENSION`, or `PULLING` instantly redirects `targetCamX/Y` without resetting existing velocity, producing smooth trajectory curving.
- **Arrival Locking**: If clicked during `IMPACT` (70ms), the retarget queues for the next frame to prevent frame-tearing.

---

## 6. Accessibility & Reduced Motion

- When `prefers-reduced-motion: reduce` or the HUD checkbox is active:
  - Dynamic scaling ($0.75 \rightarrow 1.05$) is disabled (cards remain static at $1.00$).
  - Micro-vibration and chromatic shadows are bypassed.
  - Viewport coordinates update immediately to the target section.
  - Keyboard navigation (`1`–`5`, `Tab`, `Enter`) remains fully operational.

---

## 7. Verification Checklist

| Criterion | Observed Behavior | Status |
| :--- | :--- | :--- |
| **Departing Card Recession** | Scales from $1.00 \rightarrow 0.75$ and softens opacity during web pull. | **Verified** |
| **Web Shoot & Pull** | Snappy 160ms vector with particle sparks and spring pull ($k=420, c=26$). | **Verified** |
| **Forward Expansion** | Destination card expands dynamically from $0.88 \rightarrow 1.05$ on arrival. | **Verified** |
| **Tactile Impact** | Decaying 3px micro-vibration over 70ms gives palpable physical weight. | **Verified** |
| **Chromatic Accent** | Ultra-brief 70ms RGB border/text offset adds Spider-Verse energy without noise. | **Verified** |
| **Stable Settle** | Smooth harmonic settle to 1.00x resting scale in 120ms with zero nausea. | **Verified** |

---

## 8. Visual Validation Environments (Temporary Motion Sandbox)

To enable human verification of the scale change, departing shrink, destination approach, and impact, the prototype incorporates 5 distinct temporary mock environments:

1. **HOME (Monumental Identity Hub)**:
   - *Composition*: 780px wide central anchor with 52px hero typography (`KEVIN PRAKASH J`), 4 core discipline pillars (AI/ML, Software Engineering, CV, Research), and a 4-column HUD status telemetry grid.
   - *Motion Test*: Tests large-scale recession ($1.00\text{x} \rightarrow 0.68\text{x}$) and returning expansion ($0.84\text{x} \rightarrow 1.06\text{x} \rightarrow 1.00\text{x}$).
2. **ABOUT (Timeline & Engineering Credentials)**:
   - *Composition*: 740px wide asymmetric card featuring VIT Vellore degree progress (2023–2027, CGPA 8.72/10), Syncfusion AI Internship timeline, and core technical pillars.
   - *Motion Test*: Verifies directional diagonal web pull across coordinate quad $(-900, -600)$.
3. **SKILLS (Living Constellation Network)**:
   - *Composition*: 820px wide 6-category cluster grid (AI/ML, CV, Web/Systems, Languages, Databases/Tools, Testing) with individual technology pill tags.
   - *Motion Test*: Confirms dense multi-node layouts do not suffer visual distortion during forward expansion.
4. **PROJECTS (Systems Grid & TeamFlow Flagship)**:
   - *Composition*: 860px wide showcase highlighting the full-stack **TeamFlow** case study (FastAPI, React, PostgreSQL 17, JWT/RBAC) alongside secondary project cards (ISL Translator, One Health AI).
   - *Motion Test*: Verifies that high-detail cards settle cleanly without frame drops.
5. **RESEARCH (Scientific Investigation & Data Pipelines)**:
   - *Composition*: 820px wide split research panel detailing *Indic Multilingual NLP Embeddings* (mBERT, MuRIL, Samanantar) and *Avian Influenza One Health Digital Twin* (GraphRAG, Agentic AI, ERA5).
   - *Motion Test*: Validates long-distance horizontal pull vectors across quad $(-950, 650)$.

> **IMPORTANT REMINDER**: These 5 mock environments are temporary motion-validation artifacts isolated inside `prototypes/navigation_system/index.html`. They are NOT final portfolio components and do NOT initiate Phase 5.

