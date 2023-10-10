import {Box, styled, Typography} from '@mui/material';

export const ProjectListWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  overflow: 'scroll',
}));

export const ProjectListContainer = styled(Box)(() => ({
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

export const FilterContainer = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  width: '100%',
  gap: '20px',
  '+ div': {paddingBottom: '20px'},
}));

export const FilterText = styled(Typography)(() => ({
  width: '150px',
  padding: '5px 10px',
  fontFamily: 'Roclette Pro',
  fontSize: '1em',
  fontWeight: 800,
  letterSpacing: '0.03rem',
  lineHeight: 1.25,
}));

export const ProjectItemsContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  boxSizing: 'border-box',
  alignItems: 'center',
  width: '100%',
  gap: '20px',
}));
