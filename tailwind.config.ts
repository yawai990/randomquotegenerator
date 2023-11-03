/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts},', './src/**/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        primary:{
          DEFAULT:'rgba(10,10,10,0.8)',
          100:'rgba(32,32,32,0.8)',
          200:'rgba(32,32,32,0.2)',
        },
        overlay: 'rgba(40,40,40,0.5)',
      },
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
