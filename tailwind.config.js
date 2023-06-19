/** @type {import('tailwindcss').Config} */

// Settings
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: settingsScreens,
    fontSize: settingsFontSizes,
  },
  plugins: [],
}

