/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include your source code files
    './public/index.html',         // Include your HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
}

