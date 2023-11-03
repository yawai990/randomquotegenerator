/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts},', './src/**/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        overlay: 'rgba(40,40,40,0.5)',
      },
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
