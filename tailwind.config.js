/** @type {import('@tailwindcss/postcss7-compat').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Vibrant purple
        secondary: '#EC4899', // Pink
        accent: '#06B6D4', // Cyan
        dark: '#111827', // Very dark blue/gray
        light: '#F9FAFB', // Very light gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      transform: ['hover', 'focus'],
      translate: ['hover', 'focus'],
      scale: ['hover', 'group-hover'],
    },
  },
  plugins: [],
} 