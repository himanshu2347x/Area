/** @type {import('tailwindcss').Config} */
export default {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    screens: {
      desk: '1280px',
      tab: '800px',
      mob: '375px',
    },
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        crimson: ['"Crimson Text"', 'serif'],
        roboto: ['"Roboto Mono"', 'monospace'],
        rethink: ['"Rethink Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
