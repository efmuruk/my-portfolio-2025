/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       montserrat: ['montserrat','sans-serif'] 
      },
      colors: {
        'dark-grey':'#1B1D21',
        'pp-1': '#6C5DD3',
        'pp-2': '#8072DC',
        'pp-3': '#9D92E9',
        'pp-4': '#CFC8FF',
        'bl-1': '#0049C6',
        'pink': '#FFA2C0',
        'pink-2': '#FFCFDE',
        'yellow': '#FFCE74',
        'yellow-2':'#FFE8BF',
        'white': '#FFF'
      }
    },
  },
  plugins: [],
}