module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#0F1012',
      navbar: '#101011',
      secondary: '#141517',
      third: '#FF2E0C',
      fourth: '#212226',
    }),
    extend: {
      backgroundImage: {
        darkCard:
          'linear-gradient(to bottom, rgba(33, 34, 38,0.6), rgba(33, 34, 38,1))',
        whiteCard:
          'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,1)) ',
        'la-liga':
          "linear-gradient(to bottom right, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.8)), url('https://i.pinimg.com/originals/aa/be/0e/aabe0eee411bb5b65814a1e8a37ef541.png')",
        'ligue-1':
          "linear-gradient(to bottom right, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.8)), url('https://i.pinimg.com/640x/ac/a1/31/aca131d50641cec1807b5b1ef187a2bc.jpg')",
        champions:
          "linear-gradient(to bottom right, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.8)), url('https://wallery.app/dufovot/uefa-champions-league-wallpaper.webp')",
        europa:
          "linear-gradient(to bottom right, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.8)), url('https://wallpapercave.com/wp/wp4486794.jpg')",
      },
      fontFamily: {
        headline: ['F1-Regular'],
        boldHeadline: ['F1-Bold'],
      },
      height: {
        '8vh': '8vh',
        '10vh': '10vh',
        '82vh': '82vh',
        '90vh': '90vh',
      },
      // progress: {
      //   primary: '#FE2782',
      //   secondary: '#141517',
      // },
      width: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
      fontSize: {
        md: '0.8rem',
        xxs: '0.60rem',
      },
      backgroundColor: {
        pink: '#793EF9',
        // pink: '#FE2782',
      },
      colors: {
        pink: '#793EF9',
        // pink: '#FE2782',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],

  // daisyui: {
  //   daisyui: {
  //     styled: true,
  //     themes: true,
  //     base: true,
  //     utils: true,
  //     logs: true,
  //     rtl: false,
  //     themes: [
  //       {
  //         light: {
  //           primary: '#FE2782',
  //           navbar: '#101011',
  //           secondary: '#141517',
  //           third: '#FF2E0C',
  //           fourth: '#212226',
  //           pink: '#FE2782',
  //         },
  //         dark: {
  //           primary: '#0F1012',
  //           navbar: '#101011',
  //           secondary: '#141517',
  //           third: '#FF2E0C',
  //           fourth: '#212226',
  //           pink: '#FE2782',
  //         },
  //       },
  //     ],
  //   },
  // },
};
