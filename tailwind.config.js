/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#f8fafc', // Clean Slate Light
        'brand-white': '#ffffff',
        'zinc-glass': 'rgba(255, 255, 255, 0.7)',
        'brand-accent': '#0f172a', // Deep Indigo/Black for text
        'brand-sidebar': '#0f172a', // Dark sidebar for contrast
      },
      borderRadius: {
        '48': '48px',
      },
      boxShadow: {
        'premium': '0 20px 50px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
