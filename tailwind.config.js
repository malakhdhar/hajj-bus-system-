/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E4D9B",
        secondary: "#2E6DB4",
        success: "#28A745",
        warning: "#FFA500",
        neutral: "#6C757D",
        background: "#F8F9FA",
        text: "#1A1A1A"
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
