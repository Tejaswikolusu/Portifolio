# TEJASWI — THE SERIES

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Portfolio-e50914?style=for-the-badge&logo=firefox&logoColor=white)](https://tejaswikolusu.github.io/Portifolio/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> 🌐 **Live Website:** [https://tejaswikolusu.github.io/Portifolio/](https://tejaswikolusu.github.io/Portifolio/)

---

## 📽️ About the Project

**Personally designed and developed by [Tejaswi Kolusu](https://github.com/Tejaswikolusu)** — Software Engineer & AI Engineer and B.Tech CSE Graduate from Gayatri Vidya Parishad College of Engineering.

**TEJASWI — THE SERIES** is a cinematic, streaming-platform-inspired portfolio web application. It reimagines the traditional developer portfolio into an interactive streaming experience:
- Every career milestone is an **Episode**
- Every major software project is an **Original**
- Every skill is mapped to real-world code evidence and live certifications
- The entire experience plays like an immersive episodic series

---

## ✨ Key Features & Architecture

- **🎬 Cinematic Opening Sequence:** Studio titles, title card animation, and portrait reveal with sound and letterbox framing.
- **👤 Multi-Perspective Viewer Profiles:** "Who's watching?" interface that re-orders the series based on who is viewing:
  - **Recruiter:** Resume, achievements, and core skills first.
  - **Developer:** Projects, technical stack, architecture, and GitHub repositories first.
  - **Creative:** Journey, highlights, and story arc first.
- **🚀 Featured Originals (Projects):**
  - **GenAI Architectural Floor Plan Generator:** Built with Python, Gemini API prompt engineering, MongoDB, and interactive Fabric.js canvas rendering.
  - **FloraHub E-Commerce Platform:** Full-stack shopping application with high-throughput REST APIs and database CRUD optimizations.
  - **Freshify IoT Air Quality System:** Real-time smoke/gas detection with MQ9 sensor and automated purifier control logic.
  - **Predictive Stock Price Modeling:** Python data preprocessing and machine learning forecasting pipeline.
- **📄 Interactive Resume Sheet & PDF Viewer:** Built-in PDF reader with full-screen viewer and one-click download.
- **🎖️ Verified Achievements & Honors:** Highlights NPTEL Java Programming Silver Medal, Infosys Foundation Finishing School Grade A, 1Stop AI/Full-Stack, and Python certifications.
- **🌊 Ultra-Smooth 60 FPS Experience:** Lenis smooth scrolling, Framer Motion spring physics, custom interactive cursor, magnetic buttons, and 3D card tilt effects.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18, TypeScript |
| **Build Tool & Bundler** | Vite 6 |
| **Styling & Design System** | Tailwind CSS v4, Custom Design Tokens |
| **Animations & Physics** | Framer Motion 11 |
| **Smooth Scrolling** | Lenis Scroll |
| **Icons & Media** | SVG, Sharp (High-Res Responsive WebP) |
| **CI / CD Deployment** | GitHub Actions & GitHub Pages |

---

## 🚀 Running Locally

### Prerequisites
- **Node.js 18+** installed on your machine.
- **npm** or any preferred package manager.

### 1. Clone the repository
```bash
git clone https://github.com/Tejaswikolusu/Portifolio.git
cd Portifolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## 📁 Repository Structure

```
├── public/                 # Static assets (Resume PDF, icons, images)
│   └── assets/             # High-res portraits, PDF resume, social share card
├── src/
│   ├── components/         # Modular React components
│   │   ├── OpeningSequence.tsx  # Cinematic title card sequence
│   │   ├── ProfileSelector.tsx  # "Who's watching?" profile picker
│   │   ├── Hero.tsx             # Billboard hero with parallax & ambient light
│   │   ├── PlayIntro.tsx        # Highlight reel story overlay
│   │   ├── About.tsx            # Starring poster card & background
│   │   ├── Seasons.tsx          # Educational & career timeline episodes
│   │   ├── Originals.tsx        # Featured software projects
│   │   ├── TopPicks.tsx         # Top 10 career highlights
│   │   ├── Skills.tsx           # Skills matrix with evidence cross-references
│   │   ├── Achievements.tsx     # Certifications & honors
│   │   └── ResumeViewer.tsx     # In-browser resume sheet & download
│   ├── data/
│   │   └── portfolio.ts    # Centralized portfolio data & resume schema
│   ├── hooks/              # Custom React hooks (smooth scroll, media queries)
│   ├── App.tsx             # Main application orchestrator
│   └── main.tsx            # Application entrypoint
├── vite.config.ts          # Vite & Tailwind configuration
└── package.json            # Project dependencies & build scripts
```

---

## 🌐 Live Deployment

The website is continuously deployed on **GitHub Pages**:
👉 **[https://tejaswikolusu.github.io/Portifolio/](https://tejaswikolusu.github.io/Portifolio/)**

---

## 📬 Connect with Me

- **Developer:** Tejaswi Kolusu
- **Email:** [kolusutejaswi99@gmail.com](mailto:kolusutejaswi99@gmail.com)
- **LinkedIn:** [linkedin.com/in/kolusu-tejaswi9999](https://linkedin.com/in/kolusu-tejaswi9999)
- **GitHub:** [github.com/Tejaswikolusu](https://github.com/Tejaswikolusu)
