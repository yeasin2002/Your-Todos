/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#406BBF',
        secondary: '#132039',
        lightBlue: '#D9E1F2',
        ashed: '#D9E1F2',
      },
    },
  },
  plugins: [],
};
