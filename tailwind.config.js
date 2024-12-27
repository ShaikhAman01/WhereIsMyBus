/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        buttonYellow : '#FCD660',
        bgYellow : '#FFEF9D',
        brandBlue: '#3D408A',
        bgBlack:'#252525'
      },
    },
  },
  plugins: [],
}