module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray:{
          default:'#323232'
        }
      },
      fontFamily: {
        monts:[ 'Montserrat'],
        robo:['Roboto']
      },
      fontSize:{
        'Elephant':['10rem', { lineHeight: '2' }]
      },
      width: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
        'half-screen':'50vw',
      }),
      height: (theme) => ({
       
        's-0.5': '50vh',
        's-0.75':'75vh'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
