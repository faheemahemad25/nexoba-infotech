# Nexoba Infotech - Multi-Page React + Vite Website

A multi-page enterprise web application for **Nexoba Infotech**, built using modern **React**, **Vite**, **React Router**, and **Lucide Icons**.

## 🚀 Key Features

- **Multi-Page Architecture (`react-router-dom`)**:
  - `/` — **Home**: Dynamic circuit hub SVG animation, stats, services preview, featured projects, 4-step workflow, and enterprise value pillars.
  - `/services` — **Services**: All 8 engineering disciplines with category filtering, bullet points, technical capabilities, and standards.
  - `/portfolio` — **Portfolio**: 15 real-world client products across 5 categories with interactive category tabs, real-time keyword search, and detailed project modals.
  - `/about` — **About**: Delivery ethos, 4 foundational operating habits, client engagement models, and modern technology stack architecture.
  - `/contact` — **Contact**: Interactive project inquiry form with budget selectors, real-time feedback, direct contact details, and a 3-step proposal timeline.
  - `*` — **404 Not Found**: Clean fallback page with navigation recovery.

- **Branding & Visuals**:
  - Precision brand palette: Burgundy/Maroon (`#901c3d`), dark slate accents (`#1c050c`), and vibrant contrast highlights.
  - Interactive SVG circuit board with flowing electron pulses and glowing central hub.
  - Custom vector thumbnail interface sketches for each project category (SaaS, Marketplace, E-commerce, ERP, EdTech).
  - High-res embedded WebP branding.
  - Smooth micro-interactions, responsive mobile drawer menu, and automatic scroll-to-top on route changes.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler / Dev Server**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Poppins](https://fonts.google.com/specimen/Poppins) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
nexoba-infotech/
├── public/
│   └── logo.webp
├── src/
│   ├── assets/
│   │   └── logo.webp
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroCircuit.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── CtaBanner.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   ├── companyData.js
│   │   ├── servicesData.js
│   │   └── projectsData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

© 2026 Nexoba Infotech. All rights reserved.
