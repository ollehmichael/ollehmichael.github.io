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
      primary: 'rgb(34, 34, 34)',
      secondary: 'rgb(114, 114, 114)',
      disabled: undefined, // disabled
    },
    error: {
      main: '#D32F2F',
    },
    background: {
      default: 'rgb(255, 255, 255)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 400,
      fontSize: '34px',
      lineHeight: '44px',
      letterSpacing: '0.25px',
    },
    h2: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '0.25px',
    },
    h3: {
      fontFamily: 'Montserrat-Semibold',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '0.1px',
    },
    h4: undefined, // disabled
    h5: undefined, // disabled
    h6: undefined, // disabled
    button: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
    },
    body1: {
      fontFamily: 'Open-Sans-Regular',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },
    body2: {
      fontFamily: 'Open-Sans-Regular',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
    },
    caption: {
      fontFamily: 'Open-Sans-Regular',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: '16px',
      letterSpacing: '0.3px',
    },
  },
});
