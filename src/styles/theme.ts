export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  font: {
    family: {
      primary:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      secundary:
        "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },

    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem'
    }
  },
  colors: {
    primary: '#5c63ef',
    secundary: '#d8d8e5',
    white: '#fff',
    gray_100: '#e6e6eb',
    gray_200: '#d8d8e5',
    blue_100: '#5c63ef',
    blue_200: '#5d5e7a',
    blue_300: '#292b52',
    red: '#e03f3f',
    green: '#2ea340',
    orange: '#ff8933',
    black: '#292b52'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
