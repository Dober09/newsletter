/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.jsx',
    './src/components/*.jsx'
  ],
  theme: {
    extend: {
      screens:{
        'sm':'367px',
        'md':"1440px"
      },
      fontFamily:{
        roboto:['Roboto']
      },
      colors:{
        tomato:"hsl(4,100%,67%)",
        darkgray:"hsl(234,18%,26%)",
        charcoalgray:"hsl(235,18%,26%)",
        gray:"hsl(231,7%,60%)",
      }
    
    },
  },
  plugins: [],
}

