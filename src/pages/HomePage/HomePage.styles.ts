import {Box, styled, Typography} from '@mui/material';

export const HomeWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
}));

export const HomeContainer = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'calc(100% - 10vw)',
  height: '100%',
  margin: 'auto auto',
}));

export const ForegroundContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: '100%',
  height: '50%',
  zIndex: 1,
  background: 'transparent',
}));

export const NameContainer = styled(Box)(() => ({
  display: 'flex',
}));

export const TitleTypography = styled(Typography)(() => ({
  boxSizing: 'border-box',
  fontFamily: 'Archivo Regular',
  fontSize: '8em',
  letterSpacing: '0.75rem',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
}));

export const BackgroundContainer = styled(Box)(() => ({
  position: 'absolute',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40%',
  height: '40%',
}));
