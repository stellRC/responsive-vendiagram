/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')
export default  {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'dark-blue': '#0f172a',
      'light-blue': '#1e293b',
      'white': '#f1f5f9',
      'off-white': '#94a3b8'
    },
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}

