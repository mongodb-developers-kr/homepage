/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: {
          DEFAULT: '#00ed64',
          dark: '#00684a',
          light: '#d2f3e0',
        },
        secondary: '#001e2b',
        muted: '#1c2d2f',
      },
    },
  },
  plugins: [],
}
