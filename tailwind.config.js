/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: '1280px',
      md: '800px',
      sm: '375px',
    },
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        crimson: ['"Crimson Text"', 'serif'],
        roboto: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
