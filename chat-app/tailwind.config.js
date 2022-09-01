/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        '75':'85vh'
      },
      width:{
        '75':'85vh'
      },
      minWidth: {
        '35': '35%',
      },
      maxWidth: {
        '40': '40%',
      },
      top:{
        '-350px':'-350px'
      }
    },
  },
  plugins: [],
}
