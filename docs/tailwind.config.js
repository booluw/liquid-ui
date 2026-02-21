/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../src/**/*.{vue,js,ts,jsx,tsx}",
    "./**/*.md",
    "./.vitepress/theme/**/*.{js,ts,vue}"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
