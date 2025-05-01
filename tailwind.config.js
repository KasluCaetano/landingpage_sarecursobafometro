/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#bfd0ff',
          300: '#8eadff',
          400: '#5a82ff',
          500: '#3a62ff',
          600: '#2744ff',
          700: '#1f35e6',
          800: '#1d2fc9',
          900: '#1e319f',
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            h2: {
              color: '#0f172a',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};