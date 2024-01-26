/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newsletter': "url('./src/assets/newsletter-bg.jpeg')",
      },
    },
  },
  plugins: [],
}
