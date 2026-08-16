/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fcf9f8',
        ink: '#1c1b1b',
        muted: '#424754',
        line: '#c2c6d6',
        surface: {
          light: '#F4F4F4',
          mid: '#E2E2E2',
          card: '#FBFBFB',
          dark: '#313030',
        },
        accent: {
          DEFAULT: '#0058be',
          hover: '#004395',
          soft: '#bec6e0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
