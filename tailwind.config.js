/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#00ed64',
          dark: '#00684a',
          light: '#d2f3e0',
          hover: '#00d65a',
        },
        // Background Colors
        bg: {
          primary: '#011621',
          secondary: '#001e2b',
          tertiary: '#061e2b',
          header: '#021A26',
          surface: '#ffffff',
        },
        // Text Colors
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.87)',
          muted: '#6b7280',
          dark: '#001e2b',
        },
        // Border Colors
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(0, 237, 100, 0.3)',
        },
        // Legacy support (deprecated, use new tokens)
        background: '#0a0a0a',
        secondary: '#001e2b',
        muted: '#1c2d2f',
      },
    },
  },
  plugins: [],
}
