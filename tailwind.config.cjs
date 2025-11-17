/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Color tokens mapped to CSS variables so themes can swap at runtime
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        themeText: 'var(--color-text)',
        muted: 'var(--color-muted)'
      }
    }
  },
  plugins: []
}
