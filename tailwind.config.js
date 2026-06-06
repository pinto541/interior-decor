/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F1EA',
        beige: '#D8CFC4',
        charcoal: '#3A3A3A',
        gold: '#D4B06A',
        'gold-hover': '#B89045',
        'dark-bg': '#0F1115',
        'dark-surface': '#161A20',
        'dark-panel': '#1E242D',
        'dark-card': '#232A34',
        'dark-text': '#F5F5F5',
        'dark-muted': '#B0B0B0',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(58, 58, 58, 0.12)',
        'luxury-dark': '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  plugins: [],
};
