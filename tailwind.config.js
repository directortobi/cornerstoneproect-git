/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D0D0D',
        'primary': '#111111',
        'secondary': '#1F1F1F',
        'border': '#262626',
        'accent': {
          DEFAULT: '#34D399', // A vibrant green
          'hover': '#10B981',
        },
        'gold': '#D4AF37',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A3A3A3',
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
