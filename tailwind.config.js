/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '[image]': "url('/images/hero.jpg')",
        '[img]':"url('/images/53530.jpg')"
      },
    },
  },
  plugins: [],
}