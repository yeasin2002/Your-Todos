/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#406BBF',
        secondary: '#132039',
        lightBlue: '#D9E1F2',
        ashed: '#D9E1F2',
        'sky-250': '#C6D3EC',
        'Shades-100': '#D9E1F2',
        'accent-10': '#d9e2f1',
        'accent-20': '#c6d3eb',
        'accent-50': '#436ebc',
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
};
