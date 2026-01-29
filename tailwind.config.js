// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//         cream: '#fbf4e7',   // Matches your "Lightorange" image
//           azure: '#58bde3',   // Matches your "Azure" image
//           red: '#ed4937',     // Matches your "Vividred" image
//           yellow: '#fdc83d',  // Matches your "Orange" image
//           dark: '#0f172a',    // Dark Mode Sections (Slate-900 equivalent)
//         }
//       },
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-out',
//         'bounce-slow': 'bounce 3s infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         }
//       }
//     },
//   },
//   plugins: [],
// }

// export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#fbf4e7',  //backgrounds
          azure: '#58bde3', //accents
          red: '#ed4937', //primary buttons
          yellow: '#fdc83d', //highlights
          dark: '#0f172a', //text colors
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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