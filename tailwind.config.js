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
        },
        'brand': {
          DEFAULT: '#2A4A5C', // Dark Blue
          'hover': '#213B49',
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
