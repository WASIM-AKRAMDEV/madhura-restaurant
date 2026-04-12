/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0f7f0', 100: '#dceddc', 200: '#b9dbb9', 300: '#8bc18b',
          400: '#5aa05a', 500: '#3a7d3a', 600: '#2d642d', 700: '#1e4a1e',
          800: '#163516', 900: '#0d200d', 950: '#081508',
        },
        'gold': {
          100: '#fef9e7', 200: '#fdf0c0', 300: '#fbe08a', 400: '#f8cc4d',
          500: '#d4a017', 600: '#b8860b', 700: '#996f09', 800: '#7a5807', 900: '#5c4205',
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['"Jost"', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 160, 23, 0.3)',
        'gold-lg': '0 0 40px rgba(212, 160, 23, 0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
