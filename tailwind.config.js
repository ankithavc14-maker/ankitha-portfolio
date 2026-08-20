/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        ink: '#05060a',
        electric: '#8b5cf6',
        cyanx: '#22d3ee',
      },
      boxShadow: {
        neon: '0 0 60px rgba(139,92,246,.22)',
      },
    },
  },
  plugins: [],
}
