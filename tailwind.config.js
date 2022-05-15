module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {

    screens:{
        'sm': '660px',
        'medium': '830px',
        'inter' : '800px',
        'inter2' : '670px',
        'extra' : '2750px',
        'xs' : '2750px'
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