import {createTheme} from '@mui/material';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#0D9E7A',
      light: '#84D0BA',
      dark: '#005436',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFAF3B',
      light: '#FFDDAC',
    },
    text: {
      primary: '#b6b5b6',
      secondary: 'rgb(114, 114, 114)',
      disabled: undefined, // disabled
    },
    error: {
      main: '#D32F2F',
    },
    background: {
      default: '#002f6c',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Oswald-Bold',
      fontWeight: 700,
      fontSize: '90px',
      color: '#333333',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    h2: {},
    h3: {},
    h4: undefined, // disabled
    h5: undefined, // disabled
    h6: undefined, // disabled
    button: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontFamily: 'Oswald-Regular',
      fontWeight: 400,
      fontSize: '2em',
      lineHeight: '1em',
    },
    body2: {},
    caption: {},
  },
});
