import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'powder-blue': {
          50: '#F2F8FB',
          100: '#E1EEF6',
          200: '#C7E0EE',
          300: '#A3CCE3',
          400: '#7EAFD4',
          500: '#5F96C4',
        },
        'gold': {
          300: '#EBD8A0',
          400: '#DFC27C',
          500: '#C8A355',
          600: '#B0883B',
          700: '#8A6827',
        },
        'sand-cream': '#FDFAF7',
        'deep-charcoal': '#372E2C',
        'muted-slate': '#5C6A72',
      },
      fontFamily: {
        'script': ['"Great Vibes"', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 10px 30px -5px rgba(126, 175, 212, 0.15), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'gold-glow': '0 4px 20px -2px rgba(200, 163, 85, 0.25)',
      },
    },
  },
  plugins: [forms],
};
