/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          base: 'var(--glass-base)',
          border: 'var(--glass-border)',
          highlight: 'var(--glass-highlight)',
        }
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
