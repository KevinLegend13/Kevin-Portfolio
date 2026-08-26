# Phase 14 — Responsive & Mobile Design Specification

## 1. Executive Summary & Design Principles

Phase 14 adapts Kevin Prakash J's interactive Spider-Man/Spider-Verse reactive portfolio across all device form factors:
- **Desktop** (≥ 1200px)
- **Laptop** (900px – 1199px)
- **Tablet** (600px – 899px)
- **Mobile Portrait** (< 600px)
- **Mobile Landscape** (max-height 500px)

### Core Philosophy: "Spatial Translation, Not Desktop Compression"
Rather than cramming the desktop layout into a miniature box or reverting to a generic flat mobile resume, the mobile experience translates the spatial web physics, camera spring dynamics, compact preview nodes, and two-level interactive case studies into a touch-first interface.

---

## 2. Breakpoint Architecture & Layout Specifications

| Device Tier | Viewport Width | Container Dimensions (`.full-page-frame`) | Navigation Bar (`header`) | Grid Layout Rules |
|---|---|---|---|---|
| **Desktop** | `≥ 1200px` | `width: 78vw; max-width: 940px; height: 68vh; max-height: 520px` | Full horizontal layout with badge, title, and pills. | 4-column pillars, 3-column triad, 4-tier architecture. |
| **Laptop** | `900px – 1199px` | `width: 88vw; max-width: 940px; height: 72vh; max-height: 560px` | Full horizontal layout, adjusted padding (`0 20px`). | 2x2 pillars, 2x2 architecture, 2-column flow. |
| **Tablet** | `600px – 899px` | `width: 92vw; height: 78vh; padding: 20px 16px; scrollable` | Compact brand title, scrollable nav pills with 44px tap targets. | 2x2 pillars, 1-col triad, 2-col architecture/pipeline. |
| **Mobile** | `< 600px` | `width: 95vw; height: calc(100vh - 76px); padding: 14px 10px; scrollable` | 52px height, momentum scrollable nav pills with 44px tap targets. | 1-column vertical stack across all sections, wrapped CTAs. |
| **Landscape** | `max-height: 500px` | `height: calc(100vh - 60px); padding: 12px 14px` | 46px compact header, 250px skills web stage. | Compact vertical cards with native momentum scrolling. |

---

## 3. Scene-by-Scene Mobile Adaptations

### 1. Home (Node 00)
- **Hero Typography**: Scaled using fluid CSS `clamp(20px, 6.2vw, 26px)` on mobile with clean 1.15 line-height and no horizontal overflow.
- **Pillars Grid**: Stacks from a 4-column desktop grid into a 2x2 grid on tablet and a single-column vertical stack on mobile.
- **CTA Actions**: Full-width stacked button layout on mobile (`hero-cta-primary` & `hero-cta-secondary`) ensuring ≥44px touch targets.

### 2. About (Node 01)
- **Triad of Strengths**: 3 track cards stack vertically with clean spacing (`gap: 8px`), readable 10.5px body typography, and high-contrast credential badges.
- **Semantic Jump Links**: Flex-wrapped 2-column grid (`flex: 1 1 calc(50% - 6px)`) with ≥44px touch targets.

### 3. Skills (Node 02)
- **Radial Web Stage**: Scaled dynamically (`360px` on tablet, `330px` on mobile, `250px` on landscape).
- **Center Core**: Compacted to `74px` on mobile, ensuring full visibility of 6 radial domain nodes.
- **Pill-Box Badges**: Auto-sized badges (`min-width: 72px; max-width: 96px; padding: 4px 6px`) with 8.5px legible typography, preventing any text clipping.
- **Technology Context Modal**: Scaled to `94vw; max-width: 380px` with a full-width direct jump button (`min-height: 44px`).

### 4. Projects (Node 03)
- **Level 1 (Suspended Web)**: Dangling project cards preserve their physics-based bobbing motion and tap targets.
- **Level 2 (Case Studies — TeamFlow Flagship)**:
  - 4-Tier Architecture Diagram stacks vertically into single-column cards on mobile.
  - Performance and Test Quality metrics stack cleanly without horizontal scroll.
  - Tech chips wrap naturally within section blocks.

### 5. Research (Node 04)
- **Level 1 (Research Hub)**: 2 research cards stack into a vertical flow.
- **Level 2 (Scientific Investigations — Indic NLP & One Health)**:
  - 6-Phase Scientific Pipeline transforms into a sequential vertical flow.
  - Architecture & Data Matrix is wrapped in `.table-scroll-wrapper` (`overflow-x: auto; -webkit-overflow-scrolling: touch;`), enabling touch scrolling.
  - Formal Evaluation Framework adapts to a single-column card stack.

### 6. Experience (Node 05)
- **Syncfusion AI Internship Flow**: 4 architectural flow nodes stack vertically on mobile.
- **Technical Responsibilities & Tenure Timeline**: Stack cleanly into 1 column via `.exp-deliverables-grid`.

### 7. Contact (Node 06)
- **Contact Action Cards**: 2x2 grid on tablet, 1 column on mobile with minimum 52px card height.
- **Active Focus Chips**: Wrap flexibly without overflowing card bounds.
- **Kevin's Resume Link**: Opens `Kevin_Resume.pdf` in a new tab with touch confirmation.

---

## 4. Spatial Camera, Web Physics & Ambient Canvas

1. **Dynamic Spatial Distance Scale (`getSpatialScale()`)**:
   ```javascript
   function getSpatialScale() {
     if (window.innerWidth < 600) return 0.52;
     if (window.innerWidth < 900) return 0.70;
     if (window.innerWidth < 1200) return 0.86;
     return 1.0;
   }
   ```
   - Automatically compresses spatial scene offsets during camera travel, ensuring target preview nodes and silk shooting vectors stay within mobile viewport bounds.

2. **Touch-First Ambient Deflection**:
   - Added passive `touchstart` and `touchmove` event listeners on `#world-viewport` to enable gentle silk strand deflection on touch devices without blocking page gestures.

3. **Orientation & Resizing**:
   - Added `orientationchange` listener with debounced recalculation of canvas dimensions, node projection coordinates, and camera centering.

---

## 5. Accessibility & Performance Verification

- **Touch Target Sizing**: All interactive buttons, navigation pills, and cards meet or exceed the WCAG minimum **≥44px x 44px** standard.
- **Reduced Motion Support**: `prefers-reduced-motion` suppresses camera overshoot, spring vibration, and ambient pulsing.
- **Performance**: Zero external dependencies (no Three.js/WebGL); single lightweight `requestAnimationFrame` loop maintaining steady 60 FPS.
- **Zero Horizontal Document Overflow**: `document.documentElement.scrollWidth === window.innerWidth` across all breakpoints.
