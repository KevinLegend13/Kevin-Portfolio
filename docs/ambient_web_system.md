# Phase 12 — Global Ambient Web & Background Visual System
## Persistent Web Atmosphere Across the Entire Portfolio

## 1. Overview & Purpose
The **Global Ambient Web System** establishes a continuous, living physical atmosphere throughout the entire portfolio world map (`[-1800, 1800]` x `[-1600, 1600]`). It resolves negative empty space by projecting subtle structural tensile strands and anchor nodes behind all 7 scenes, giving the visual impression that every section is part of a single interconnected web architecture.

---

## 2. Decoupled Architecture & Layer Hierarchy

The portfolio establishes a clean separation between **Ambient Background Geometry** (persistent atmosphere) and **Active Navigation Webs** (temporary directional vectors):

```text
┌─────────────────────────────────────────────────────────────┐
│ LAYER 5: INTERACTION & TELEMETRY HUD (z-index: 200)         │
│ Fixed Navigation Bar, Keybinds, Telemetry HUD               │
├─────────────────────────────────────────────────────────────┤
│ LAYER 4: ACTIVE NAVIGATION WEB CANVAS (z-index: 25)         │
│ #world-canvas: Web shooting, tension curve, impact sparks   │
├─────────────────────────────────────────────────────────────┤
│ LAYER 3: INTERACTIVE PORTFOLIO ENTITIES (z-index: 15)       │
│ Full Page Frames & Compact Nodes for 7 Scenes               │
├─────────────────────────────────────────────────────────────┤
│ LAYER 2: AMBIENT BACKGROUND WEB CANVAS (z-index: 5)         │
│ #ambient-canvas: Structural Strands, Depth, Micro-mesh,     │
│ Distant Anchor Nodes, Parallax & Cursor Physics             │
├─────────────────────────────────────────────────────────────┤
│ LAYER 1: VOID BASE & RADIAL GLOW (z-index: 1–2)             │
│ Obsidian Void (#06080E) & Ambient Cyan Vignette            │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Visual Layers & Opacity Hierarchy

1. **Layer 1 — Micro Mesh**:
   - Faint dashed grid chords connecting local clusters (`rgba(226, 232, 240, 0.06 - 0.12)`).
   - Prevents flat black dead zones while remaining subliminal behind text.
2. **Layer 2 — Structural Tensile Strands**:
   - Major tensile white chords connecting background nodes across the viewport (`rgba(255, 255, 255, 0.14 - 0.22)`).
   - Rendered with quadratic bezier catenary curves to simulate natural web tension.
3. **Layer 3 — Distant Anchor Nodes**:
   - Small circular vertices (1.5px – 3.2px) at lattice intersections.
   - Selected nodes feature organic breathing oscillations (0.3 – 0.8 Hz) between `0.10` and `0.45` opacity.
4. **Layer 4 — Depth Strands (Parallax)**:
   - Soft, wider background spans rendered with a `0.75x` depth multiplier to produce spatial parallax during camera motion.
5. **Layer 5 — Active Navigation Web**:
   - Retains Phase 4 spring-damper directional shooting with semantic Cyan (`#00D2FF`), Crimson (`#FF2A4B`), Venom Purple (`#A855F7`), and Magenta (`#FF007A`).

---

## 4. Section-Aware Density Tuning

While sharing a continuous global topology, regions around scenes express nuanced structural characteristics:
- **HOME**: Expansive, radial network radiating in all 8 compass directions.
- **ABOUT**: Structured hexagonal lattice reinforcing academic and engineering foundations.
- **SKILLS**: Branching constellation clusters reflecting technology taxonomy.
- **PROJECTS**: Relational architectural grid spans hanging across the upper perimeter.
- **RESEARCH**: Interconnected multi-stream data lattice reflecting scientific investigation workflows.
- **EXPERIENCE**: Multi-tier structural spans mirroring enterprise software boundaries.
- **CONTACT**: Converging parabolic strands funneling toward the final terminal node.

When the camera settles on an active scene, nodes and strands in that local cluster receive an automatic `+0.05` opacity focus boost.

---

## 5. Cursor Interaction Physics
- Mouse position is tracked across the spatial viewport.
- Any ambient node within **180px** experiences a smooth, spring-interpolated deflection (`(1 - dist / 180)^2 * 8.5px`) away from the cursor.
- When the cursor moves away, the nodes return smoothly to their rest anchors with natural damping (`0.08` decay factor).
- Strictly avoids noisy gamer trails or loud particle effects.

---

## 6. Accessibility & Performance
- **Reduced Motion**: Under `prefers-reduced-motion: reduce`, pulsing and cursor displacement are disabled, presenting static, low-opacity tensile geometry with zero distraction.
- **Performance Target**: Renders at a steady **60 FPS** using a single background canvas and lightweight quadratic interpolation.
- **Pointer Events**: `pointer-events: none` ensures the ambient canvas never interferes with user clicks, text selection, or navigation.
