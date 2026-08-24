import type { Config } from 'tailwindcss';

// Same semantic token names/values as the app's own CSS variables
// (frontend/index.html :root) — kept in sync by hand since this is a
// separate Next.js project.
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f1f5f9',
        surface: '#ffffff',
        'surface-alt': '#f8fafc',
        primary: '#0f172a',
        'on-primary': '#ffffff',
        accent: '#ef4444',
        'accent-blue': '#3b82f6',
        'accent-green': '#22c55e',
        'accent-amber': '#f59e0b',
        'on-surface': '#0f172a',
        'on-surface-variant': '#64748b',
        'outline-variant': '#e2e8f0',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
