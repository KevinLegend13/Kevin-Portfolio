# Phase 8 — Projects & Case Studies Experience

## 1. Executive Summary
Phase 8 establishes the **Two-Level Projects Presentation Model** for Kevin Prakash J's reactive portfolio. Grounded strictly in the Master Profile PDF (`Kevin_Portfolio_Master_Profile_v3_TeamFlow_Final.pdf`), the architecture presents a discovery grid (Level 1) transitioning into deep, high-fidelity engineering case studies (Level 2) with the proven Spider-Verse spring-physics engine.

---

## 2. Projects Ground Truth Matrix

| Project Name | Classification | Core Stack | Architecture Highlights |
| :--- | :--- | :--- | :--- |
| **TeamFlow (Flagship)** | Full-Stack Systems & Collaboration | FastAPI, React, TypeScript, Vite, PostgreSQL 17.11, SQLAlchemy 2.x, JWT, RBAC, PyTest | 4-Tier Architecture, signed JWT Bearer auth, RBAC route guards, optimistic Kanban state machine, ACID relational schema, automated PyTest suite. |
| **Indian Sign Language Translator** | Computer Vision & Accessibility AI | Python, OpenCV, MediaPipe, Gesture ML, Speech Synthesis | Real-time camera pipeline, 21 3D hand keypoints landmark tracking $(x,y,z)$, geometric angle matching, instantaneous audio & text translation. |
| **One Health / Avian AI** | Multimodal AI & Global Health Security | Python, GraphRAG, Knowledge Graphs, ERA5 Climate, MODIS Satellite | Multimodal data ingestion, heterogeneous One Health Knowledge Graph, agentic GraphRAG reasoning, spatiotemporal risk maps. |
| **MyKitchen** | Full-Stack Web & Recipe Planner | Flask, Python, REST APIs, PostgreSQL, HTML5/CSS3, JavaScript | Interactive recipe management, ingredient inventory tracking, dietary filtering, automated grocery list generation. |
| **AI-Based Email Summarizer** | NLP & Applied LLM Productivity | Python, LangChain, Ollama, NLP, Prompt Engineering, LLMs | Email thread cleaner, prompt chain orchestrator, executive action-item extraction and urgency scoring. |
| **AWS Attendance System** | Cloud Infrastructure & Automation | AWS Cloud, Python, REST APIs, Cloud Logging, IAM Security | Serverless HTTPS ingestion via API Gateway, cloud compute timestamp verification, immutable database audit logging. |

---

## 3. Two-Level Presentation Architecture

### Level 1: Projects Discovery Grid
- **Container**: `#projects-dynamic-mount` with a 3-column responsive grid.
- **Card Metadata**: Domain tag, flagship badge (for TeamFlow), concise summary, top technology chips, and an explicit `"OPEN FULL CASE STUDY →"` CTA button.
- **Micro-Interactions**: Hover elevation, subtle cyan/crimson border glow, and magnetic tension cues.

### Level 2: Dedicated Full Case Studies
- **Motion Trigger**: Clicking any project preview card triggers the Spider-Verse shockwave web pull directly into the dedicated case study view.
- **Structure (Example: TeamFlow Flagship)**:
  1. **Section 01 — Hero**: Project title, positioning tagline, and full technology array chips.
  2. **Section 02 — Problem & Engineering Objective**: The distributed team challenge (permission drift, unvalidated payloads, state desynchronization).
  3. **Section 03 — System Overview & Architecture Diagram**: Clean 4-tier visual hierarchy (`Frontend Client` $\rightarrow$ `API Gateway / Router` $\rightarrow$ `Persistence ORM` $\rightarrow$ `Database Store`).
  4. **Section 04 — Security & RBAC**: JWT Bearer auth and role-based permissions (Admin, PM, Contributor, Viewer).
  5. **Section 05 — Kanban Workflow Engine**: Optimistic UI state transitions with automatic error rollbacks.
  6. **Section 06 — Relational Data Layer**: PostgreSQL 17.11 cascading schemas and SQLAlchemy 2.0 async sessions.
  7. **Section 07 — Automated Verification**: Comprehensive PyTest integration tests and mutation resilience.
  8. **Section 08 — Engineering Takeaways**: Summary of architectural rigor.
  9. **Section 09 — Navigation Actions**: `← BACK TO ALL PROJECTS`, `VIEW NEXT PROJECT →`, and shortcuts to Skills / Research.

---

## 4. Reverse Navigation & State Management
- **Return Mechanism**: Clicking `← BACK TO ALL PROJECTS` returns smoothly to the Level 1 Discovery Grid.
- **Semantic Links**: Direct jumps to connected sections (`VIEW CONNECTED SKILLS →`, `EXPLORE RESEARCH →`) reuse the proven 10-stage physics engine.
- **Keyboard Shortcuts**: Keys `1` (Home), `2` (About), `3` (Skills), `4` (Projects), `5` (Research) remain fully active and responsive.

---

## 5. Verification & Compliance
- **Validation URL**: `http://localhost:4173/prototypes/navigation_system/index.html` (HTTP 200).
- **Reduced Motion Support**: Bypasses physical transitions instantly while preserving full case-study access.
- **Touch & Mobile Targets**: All interactive cards and buttons meet or exceed the 44px touch target guidelines.
