module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {

    screens:{
        'sm': '660px',
        'medium': '830px'
    },
    extend: {
      keyframe:{
        linha:{
          '0%': {  },
          '50%': {},
          '100%': {},
        }
      },
      colors:{
        orange:{
          500: '#FF8F3F'
        }
      },
      fontFamily:{
        'poppins':['Poppins'],
        'roboto':['Roboto']
      }
    }
  },
  plugins: [],
}