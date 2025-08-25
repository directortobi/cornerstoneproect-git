/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'primary': '#1A1A1A',
        'secondary': '#242424',
        'accent': {
          DEFAULT: '#C5A47E',
          'hover': '#D4B38E',
        },
        'text-primary': '#EAEAEA',
        'text-secondary': '#A8A8A8',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
