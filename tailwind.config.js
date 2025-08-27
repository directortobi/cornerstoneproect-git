/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF',
        'primary': '#F9FAFB', 
        'secondary': '#F3F4F6',
        'border': '#E5E7EB',
        'accent': {
          DEFAULT: '#C8A464', // Gold
          'hover': '#B38F54',
          'light': '#E6D4A8',
          'dark': '#A08952',
        },
        'brand': {
          DEFAULT: '#2A4A5C', // Dark Blue
          'hover': '#213B49',
          'light': '#4A6B7C',
          'dark': '#1A3240',
        },
        'emerald': {
          DEFAULT: '#10B981',
          'light': '#6EE7B7',
          'dark': '#047857',
        },
        'slate': {
          DEFAULT: '#64748B',
          'light': '#94A3B8',
          'dark': '#475569',
        },
        'text-primary': '#1F2937', 
        'text-secondary': '#6B7280',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
