import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
        cream: '#fbf4e7',   // Matches your "Lightorange" image
          azure: '#58bde3',   // Matches your "Azure" image
          red: '#ed4937',     // Matches your "Vividred" image
          yellow: '#fdc83d',  // Matches your "Orange" image
          dark: '#0f172a',    // Dark Mode Sections (Slate-900 equivalent)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

export default config