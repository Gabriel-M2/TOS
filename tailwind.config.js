module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {

    screens:{
        'sm': '660px',
        'medium': '830px',
        'inter' : '800px',
        'inter2' : '670px',
        'extra' : '2750px',
        'xs' : '2750px',
        'break' : '1280px',
        'legenda' : '1600px'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
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