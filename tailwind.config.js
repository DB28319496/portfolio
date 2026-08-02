/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"Spline Sans Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#faf9f7',
          raised: '#ffffff',
        },
        line: {
          DEFAULT: '#e8e4de',
          strong: '#d6d0c8',
        },
        ink: {
          DEFAULT: '#191714',
          secondary: '#6e675e',
          muted: '#9c948a',
        },
        accent: {
          DEFAULT: '#e04e10',
          dark: '#c2410c',
          wash: '#fdf0e7',
        },
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
}
