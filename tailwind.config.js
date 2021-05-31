module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: (theme) => ({
        center: true,
        padding: theme("spacing.4"),
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px"
       }
      }),
      colors: {
        primary: '#20c29b',
        'primary-hover': '#00916D',
        'primary-active': '#66f6cc',
        secondary: '#de5744',
        'secondary-hover': '#a6241b',
        'secondary-active': '#ff8870',
        tertiary: '#1fb2c8',
        'tertiary-hover': '#008297',
        'tertiary-active': '#67e4fb',
        black: '#151111',
        transparent: 'transparent',
        white: '#ffffff',
      },
      fontFamily: {
        body: ['brother-1816, Arial'],
        heavy: ['brother-1816, Arial'],
        serif: ['brother-1816, serif'],
      },
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
