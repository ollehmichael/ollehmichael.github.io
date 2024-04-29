import {Box, styled, Typography} from '@mui/material';

export const AboutWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  alignItems: 'center',
  width: '100%',
  overflow: 'scroll',
}));

export const AboutContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: '30px',
  width: 'calc(100% - 20vw)',
  gap: '20px',
}));

export const IntroContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  alignItems: 'center',
  width: '100%',
  height: 'fit-content',
  gap: '20px',
}));

export const IntroTitle = styled(Typography)(() => ({
  fontFamily: 'Raleway Bold',
  fontSize: '2.5em',
  letterSpacing: '0.05rem',
  padding: '20px 0',
  color: 'rgba(56, 56, 56, 1)',
}));

export const IntroText = styled(Typography)(() => ({
  width: '100%',
  fontFamily: 'Lato Light',
  fontSize: '1em',
  fontWeight: 800,
  letterSpacing: '0.03rem',
  lineHeight: 1.25,
  whiteSpace: 'pre-line',
  textAlign: 'justify',
  textJustify: 'inter-word',
}));

export const TimelineContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  alignItems: 'center',
  width: '100%',
  padding: '20px 0',
}));
