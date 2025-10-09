// tailwind.config.js
const { heroui } = require('@heroui/react')
const { manarTheme } = require('./src/themes-config/manar.theme')
const { biennialTheme } = require('./src/themes-config/biennial.theme')
const { abuDhabiTheme } = require('./src/themes-config/abu-dhabi.theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true, // centers the container by default
    },
    extend: {
      fontFamily: {
        abcdiatype: ['var(--font-abcdiatype)', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        'default-light': biennialTheme.biennialLight,
        'default-dark': biennialTheme.biennialDark,

        // biennial
        'biennial-light': biennialTheme.biennialLight,
        'biennial-dark': biennialTheme.biennialDark,

        // manar
        'manar-light': { ...manarTheme.manarLight },
        'manar-dark': manarTheme.manarDark,

        // abu-dhabi
        'abu-dhabi-light': abuDhabiTheme.abudhabiLight,
        'abu-dhabi-dark': abuDhabiTheme.abudhabiDark,
      },
    }),
  ],
}
