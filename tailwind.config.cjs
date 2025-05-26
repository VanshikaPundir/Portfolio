/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  darkMode: 'class', // important: enables class-based dark mode
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: true, // all built-in themes
    darkTheme: 'dark', // default dark theme name
    logs: false,
  },
}
