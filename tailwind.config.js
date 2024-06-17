/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        lime: {
          100: '#C0E693',
          200: '#9EE693',
        },
        green: {
          100: '#3FCC29',
          200: '#36A928',
          300: '#1F6414',
          400: '#194913',
          500: '#21321F',
        },
        softGreen: {
          100: '#C3E6BE',
          200: '#93E6A6',
          300: '#93E6A6',
          400: '#93E6A6',
        },
      },
      fontFamily: { sarabun: ['"TH SarabunPSK"', 'sans-serif'] },
    },
  },
};
