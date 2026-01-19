/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        jetbrains: ['JetBrains Mono', 'monospace']
      },
      colors: {
        navy: {
          base: 'rgb(10, 14, 39)',
          light: 'rgb(15, 23, 66)',
          dark: 'rgb(5, 7, 20)'
        }
      },
      animation: {
        'pulse-slow': 'pulse 15s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}