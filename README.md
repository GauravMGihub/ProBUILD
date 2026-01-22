# ProBUILD 

This is the official React repository for the ProBUILD website, built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have **Node.js** installed. You can check by running `node -v` in your terminal.

### 1. Installation

Clone the repository (or unzip the folder) and install the dependencies:

```bash
# Open the project folder in VS Code
# Open a new terminal (Ctrl + `) and run:
npm install
```

2. Running the Development Server
3. Start the local server to view the website:
```bash
npm run dev
Hold Ctrl and click the link shown in the terminal (usually http://localhost:5173/).
```

📂 Project Structure
```
PROBUILD/
├── public/              # Static assets (Videos, Images)
│   ├── images/          # Store .jpg/.png here
│   └── videos/          # Store .mp4 here
├── src/
│   ├── components/      # All React components (Hero, Navbar, etc.)
│   ├── App.tsx          # Main application file
│   └── index.tsx        # Entry point
└── vite.config.ts       # Vite configuration
```

⚠️ Important Notes for Developers

1. Adding Images & Videos

All static files (images, videos) must go into the public folder.

    Do not import them in the code like import vid from '../assets/vid.mp4'.

    Do reference them using the string path.

2. The "Base URL" Rule

This project is configured with a base path (likely for GitHub Pages).
If you put a file in public/videos/project1.mp4, you must reference it in the code like this:
```
// Correct
<img src="/probuild/images/photo.jpg" />

// Incorrect
<img src="/images/photo.jpg" />
```
Always include /probuild/ at the start of your src paths.

3. Image Formats

    Supported: .jpg, .png, .webp, .svg

    NOT Supported: .heic (iPhone photos).

    Solution: Please convert .HEIC files to .JPG before adding them to the project.

🛠️ Tech Stack

    Framework: React (v18)

    Language: TypeScript

    Styling: Tailwind CSS

    Icons: Lucide React

    Build Tool: Vite

📦 Building for Production

To create the final optimized files for deployment:
```
npm run build
```
This will create a dist folder containing the production-ready website.
