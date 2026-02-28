/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 0 60px -20px rgba(56, 189, 248, 0.45)'
      }
    }
  },
  plugins: []
};
