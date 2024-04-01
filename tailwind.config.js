/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'dark': '#242424'
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

