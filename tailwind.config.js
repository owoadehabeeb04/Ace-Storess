/* eslint-disable no-unused-vars */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
  
    extend: {
      fontFamily: {
        Inika: ["Inika"],
        OpenSans: ["General Sans"],
      },
      
      screen: {
        'mobile': '450px' ,
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      
      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    },
    
  // colors :{
  //   linear1: "#EFEFEF",
  //   linear2: "rgba(239, 239, 239, 0.00) ",
  // },
  },

  plugins: [],
};
