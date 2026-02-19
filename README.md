# ProBUILD

This is the official React repository for the **ProBUILD** website — an EdTech platform built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

| Tool        | Minimum Version | Check Command   |
| ----------- | --------------- | --------------- |
| **Node.js** | v18+            | `node -v`       |
| **npm**     | v9+             | `npm -v`        |
| **Git**     | Any recent      | `git --version` |

> [!NOTE]
> If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

---

### 1. Clone the Repository

```bash
git clone https://github.com/probuild-vet/probuild.git
cd probuild
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required packages listed in `package.json` (see [Dependencies](#-dependencies) below).

### 3. Run the Development Server

```bash
npm run dev
```

The app will start on **http://localhost:3000**. Hold `Ctrl` and click the link in your terminal to open it in the browser.

### 4. Build for Production

```bash
npm run build
```

This generates an optimized production bundle in the `dist/` folder.

### 5. Preview the Production Build

```bash
npm run preview
```

---

## 📦 Dependencies

### Runtime Dependencies

| Package              | Description                               |
| -------------------- | ----------------------------------------- |
| `react`              | Core React library (v19)                  |
| `react-dom`          | React DOM rendering                       |
| `react-router-dom`   | Client-side routing                       |
| `@react-three/fiber` | React renderer for Three.js (3D graphics) |
| `@react-three/drei`  | Useful helpers for React Three Fiber      |
| `three`              | 3D rendering engine                       |
| `lucide-react`       | Icon library                              |
| `@emailjs/browser`   | Email sending via EmailJS                 |

### Dev Dependencies

| Package                | Description                   |
| ---------------------- | ----------------------------- |
| `vite`                 | Build tool & dev server       |
| `@vitejs/plugin-react` | Vite plugin for React         |
| `typescript`           | TypeScript compiler           |
| `tailwindcss`          | Utility-first CSS framework   |
| `@tailwindcss/postcss` | Tailwind CSS PostCSS plugin   |
| `postcss`              | CSS transformation tool       |
| `autoprefixer`         | Auto-adds vendor CSS prefixes |

---

## 📂 Project Structure

```
ProBUILD/
├── public/                        # Static assets (served as-is)
│   ├── images/                    # Image files (.jpg, .png, .webp, .svg)
│   ├── videos/                    # Video files (.mp4)
│   ├── models/                    # 3D model assets
│   └── brochures/                 # Downloadable brochure files
│
├── src/                           # Application source code
│   ├── components/                # All React components
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── Hero.tsx               # Hero / landing section
│   │   ├── Home.tsx               # Home page layout
│   │   ├── AboutUs.tsx            # About Us page
│   │   ├── AboutComingSoon.tsx    # About coming-soon placeholder
│   │   ├── CohortPage.tsx         # Cohort details page
│   │   ├── ContactUs.tsx          # Contact form page
│   │   ├── Footer.tsx             # Site footer
│   │   ├── MentoringHub.tsx       # Mentoring hub section
│   │   ├── Mentors.tsx            # Mentors listing
│   │   ├── Pathway.tsx            # Learning pathway page
│   │   ├── PathwaysPreview.tsx    # Pathway preview cards
│   │   ├── Philosophy.tsx         # Philosophy section
│   │   ├── ProgramShowcase.tsx    # Programs showcase
│   │   ├── QuickMentoring.tsx     # Quick mentoring section
│   │   ├── Roadmap.tsx            # Roadmap / timeline
│   │   ├── StudentPortfolios.tsx  # Student portfolio gallery
│   │   ├── StudentWork.tsx        # Student work showcase
│   │   ├── SuccessStories.tsx     # Success stories section
│   │   ├── StatsBar.tsx           # Statistics bar
│   │   ├── LifeAtProBuild.tsx     # Life at ProBUILD section
│   │   ├── ScrollToTop.tsx        # Scroll-to-top on route change
│   │   └── ScrollToTopButton.tsx  # Floating scroll-to-top button
│   │
│   ├── App.tsx                    # Main application & routing
│   ├── index.tsx                  # App entry point
│   └── index.css                  # Global styles
│
├── .github/                       # GitHub workflows & config
├── index.html                     # HTML entry point (used by Vite)
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vercel.json                    # Vercel deployment settings
├── package.json                   # Project metadata & dependencies
├── package-lock.json              # Dependency lock file
└── .gitignore                     # Git ignore rules
```

---

## ⚠️ Important Notes for Developers

### Adding Images & Videos

- All static files (images, videos, 3D models) **must go into the `public/` folder**.
- **Do NOT** import them using ES module imports:
  ```tsx
  // ❌ Wrong
  import vid from "../assets/vid.mp4";
  ```
- **Do** reference them using string paths:
  ```tsx
  // ✅ Correct
  <img src="/images/photo.jpg" />
  <video src="/videos/demo.mp4" />
  ```

### Supported Image Formats

| Supported       | Not Supported    |
| --------------- | ---------------- |
| `.jpg`, `.png`  | `.heic` (iPhone) |
| `.webp`, `.svg` |                  |

> [!TIP]
> Convert `.heic` files to `.jpg` before adding them to the project using any free online converter.

---

## 🛠️ Tech Stack

| Category       | Technology     |
| -------------- | -------------- |
| **Framework**  | React 19       |
| **Language**   | TypeScript     |
| **Styling**    | Tailwind CSS   |
| **3D Engine**  | Three.js + R3F |
| **Icons**      | Lucide React   |
| **Build Tool** | Vite           |
| **Deployment** | Vercel         |

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/my-feature`)
3. **Commit** your changes (`git commit -m "Add my feature"`)
4. **Push** to the branch (`git push origin feature/my-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is private and proprietary. All rights reserved.
