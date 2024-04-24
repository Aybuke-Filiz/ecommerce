/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerTop: '#252B42',
        white: '#FFFFFF',
        title: '#252B42',
        softText: '#737373',
        click: '#23A6F0',
      },
    },
  },
  plugins: [],

}

