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
          europaConference:
          "linear-gradient(to bottom right, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.8)), url('https://e0.365dm.com/21/05/2048x1152/skysports-europa-conference-league_5378745.jpg')",
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
      maxWidth: {
        '10': '2.5rem',
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

  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
  },

  daisyui: {
    themes: [
      {
        worldie: {
          /* your theme name */ primary: '#0090FF' /* Primary color */,
          'primary-focus': '#212226' /* Primary color - focused */,
          'primary-content':
            '#793EF9' /* Foreground content color to use on primary color */,
          'primary-redbull': '#0600ef',

          third: '#0600ef',

          secondary: '#2B4562' /* Secondary color */,
          'secondary-focus': '#f3cc30' /* Secondary color - focused */,
          'secondary-content':
            '#ffffff' /* Foreground content color to use on secondary color */,

          fourth: '#212226' /* fourth color */,
          'fourth-focus': '#2aa79b' /* fourth color - focused */,
          'fourth-content':
            '#ffffff' /* Foreground content color to use on accent color */,

          neutral: '#3d4451' /* Neutral color */,
          'neutral-focus': '#FFF' /* Neutral color - focused */,
          'neutral-content':
            '#900000' /* Foreground content color to use on neutral color */,

          'base-100':
            '#005AFF' /* Base color of page, used for blank backgrounds */,
          'base-200': '#006F62' /* Base color, a little darker */,
          'base-300': '#2B4562' /* Base color, even more darker */,
          'base-content':
            '#0090FF' /* Foreground content color to use on base color */,

          info: '#0600ef' /* Info */,
          success: '#FF0000' /* Success */,
          warning: '#793EF9' /* Warning */,
          error: '#00D2BE' /* Error */,
          accent: '#793EF9',
        },
      },
    ],
  },
};
