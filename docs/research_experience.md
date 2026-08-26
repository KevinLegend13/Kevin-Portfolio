# Phase 9 — Research Experience Specification
## Research Hub & Scientific Investigation Architecture

## 1. Overview & Objectives
The **Research Experience** in Kevin Prakash J's reactive developer portfolio presents his scientific research work grounded directly in the **Portfolio Master Profile (v3 TeamFlow Final)**.

Rather than looking like a generic software project grid or an unreadable academic paper PDF, the Research node is designed as an **interactive scientific investigation hub** with a **two-level hierarchical architecture** and an **extensible data framework** ready for future publications.

---

## 2. Information Architecture: Two-Level Model

```text
┌─────────────────────────────────────────────────────────────┐
│ LEVEL 1: SCIENTIFIC RESEARCH HUB                           │
│ - Concise previews of verified research investigations      │
│ - Extensible slot for upcoming publications                 │
│ - Models & datasets overview pills                          │
└──────────────────────────────┬──────────────────────────────┘
                               │
               [ CLICK "OPEN SCIENTIFIC INVESTIGATION" ]
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ LEVEL 2: DETAILED SCIENTIFIC INVESTIGATION                 │
│ - Formal academic research problem & motivation             │
│ - 6-Stage sequential methodology & signal flow pipeline     │
│ - Model framework specifications & subword tokenizer matrix │
│ - Formal evaluation framework (Affinity, Modularity, STS)   │
│ - Scientific significance & direct cross-links to skills    │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Verified Research Tracks (Ground Truth)

### Track 01: Cross-Lingual Semantic Alignment in Multilingual Sentence Embeddings for Indic Languages
- **Domain**: Multilingual / Indic NLP Research
- **Evaluated Models**: `mBERT` (110M Transformer), `XLM-RoBERTa` (270M Transformer), `LaBSE` (471M Bi-Encoder), `MuRIL` (236M Transformer).
- **Corpora / Datasets**: `Samanantar`, `Wiki-Translate`, `IN22`.
- **Language Families**: Dravidian (Tamil, Telugu, Malayalam, Kannada) vs. Indo-Aryan (Hindi, Bengali, Marathi, Gujarati).
- **6-Stage Pipeline**:
  1. *Corpus Curation*: Ingesting multi-way parallel corpora.
  2. *Tokenization*: Subword tokenization and vocabulary fertility analysis across Indic scripts.
  3. *Embedding Projection*: Extracting layer-wise sentence vectors across encoders.
  4. *Semantic Space Mapping*: High-dimensional cosine similarity and centered kernel alignment (CKA).
  5. *Modularity Analysis*: Evaluating community cohesion and graph modularity vs. phylogenetic families.
  6. *Methodological Insight*: Characterizing cross-lingual transfer gaps.
- **Evaluation Framework**: Semantic Affinity Scoring, Graph Modularity Analysis, Manual STS Correlation, Bitext Retrieval Evaluation.

### Track 02: One Health Platform & Avian Influenza Digital Twin Architecture
- **Domain**: Multimodal AI & Digital Twin
- **Data Layers**: ERA5 Atmospheric Weather, MODIS Surface Satellite, Veterinary Outbreak Records, Migratory Bird Flyways.
- **Architecture Layers**:
  1. *Multimodal Ingestion*: Continuous stream of climate and surveillance alerts.
  2. *Spatial Normalization*: Harmonizing raster weather with vector flyway geometries.
  3. *Knowledge Graph Fusion*: Constructing heterogeneous graph linking host species and viral clades.
  4. *Predictive Modeling*: Spatiotemporal transmission probability and risk classification.
  5. *GraphRAG Reasoning*: Context-augmented graph traversal for explainable hypothesis generation.
  6. *Decision Support*: Audit-ready surveillance heatmaps and actionable biosecurity alerts.
- **Evaluation Framework**: Spatiotemporal Risk Calibration, Graph Query Faithfulness, Multi-Stream Data Ablation.

---

## 4. Extensibility Strategy
The research subsystem is parameterized via the `RESEARCH_DATA` structure in `prototypes/navigation_system/index.html`. 
- New research papers, peer-reviewed articles, and experimental findings can be added to the array with zero structural changes to the UI engine.
- Level 1 includes a dedicated extension slot indicating upcoming research readiness without fabricating placeholder findings.

---

## 5. Interaction & Motion System Integration
- **Web Shooting Transition**: Entering Research triggers the Spring-Damper physics camera pull and chromatic magenta impact.
- **Shockwave Dive**: Selecting a research investigation activates a localized shockwave pulse before revealing the Level 2 view.
- **Automatic Reset**: Navigating away from Research or clicking Research in the navbar resets the active investigation view back to the Level 1 Hub.
- **Smooth Viewport Management**: Level 1 remains centered without scrolling, while Level 2 supports smooth scroll with programmatic `scrollTop = 0` on opening.

---

## 6. Verification & Quality Checklist
- [x] Grounded strictly in `Kevin_Portfolio_Master_Profile_v3_TeamFlow_Final.pdf`.
- [x] No fabricated metrics, citations, or unverified findings.
- [x] Level 1 Research Hub and Level 2 Detailed Scientific Investigation operational.
- [x] 6-Stage methodology pipelines and model comparison matrices render cleanly.
- [x] Semantic links to Skills (PyTorch, Hugging Face, NLP) and Projects (One Health, TeamFlow) active.
- [x] Tested and running at `http://localhost:4173/prototypes/navigation_system/index.html`.
