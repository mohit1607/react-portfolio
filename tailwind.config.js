/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        Fugaz: ["Opensans", "sans-serif"],
      },
    },
    colors: {
      primary: '#88D7F7',
      secondary: '#0B2D9C',
      accent: '#2523F0',
      white: '#ffffff',
      darkprimary: '#111111',
      black: '#000'
    }
  },
  plugins: [],
}

