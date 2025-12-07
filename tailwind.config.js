/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}", // Keep this if you use src
  "./app/**/*.{js,jsx,ts,tsx}", // Add this if you have an app folder at root
  "./pages/**/*.{js,jsx,ts,tsx}", // Add this if you have a pages folder at root
  "./components/**/*.{js,jsx,ts,tsx}", // Add this if you have a components folder at root
],
  theme: {
    extend: {},
  },
  plugins: [],
}