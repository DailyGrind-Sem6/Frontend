/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#242424',
        'dark-50': '#2f2f2f',
        'dark-100': '#1a1a1a',
        'dark-200': '#0f0f0f'
      },
    },
    
  },
  plugins: [
    require('preline/plugin'),
  ],
}

