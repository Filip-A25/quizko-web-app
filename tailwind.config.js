/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main-theme': '#e1bf57',
      'main-dark-theme': '#3c3c3c',
      'background-color': 'rgb(240, 240, 240)',
      'text-color': '#3c3c3c',
      'text-light-color': 'rgb(255, 255, 255)',
      'background-green': 'rgb(53, 245, 53)',
      'button-red': 'rgb(191, 16, 16)'
    }
  },
  plugins: [],
}

