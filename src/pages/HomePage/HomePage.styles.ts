import {Box, Typography, styled} from '@mui/material';

export const HomeContainer = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'center',
  width: '90vw',
  height: '90vh',
}));

export const HomeTitleContainer = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: '50vh',
  height: 'fit-content',
  minHeight: '15vh',
  width: '100%',
}));

export const PrimaryTitle = styled(Typography)(() => ({
  color: 'white',
  letterSpacing: '5px',
  fontSize: '90px',
  fontFamily: 'Roclette Pro',
}));

export const SecondaryTitle = styled(Typography)(() => ({
  color: '#02CCFE',
  fontSize: '40px',
  fontFamily: 'Roclette Pro',
}));

export const HomeProjectItemWrapper = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'flex-end',
  width: '100%',
  height: '100%',
}));

export const HomeProjectItemContainer = styled(Box)(() => ({
  display: 'grid',
  boxSizing: 'border-box',
  padding: '10px',
  width: '100%',
  height: 'fit-content',
  gap: '20px',
  gridTemplateColumns: '1fr 1fr 1fr',
}));
