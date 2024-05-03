import {Box, styled} from '@mui/material';

export const ProjectWrapper = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}));

export const ProjectContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: '10px',
  width: '90%',
  height: '85%',
  gap: '50px',
}));

export const ProjectHeader = styled(Box)(() => ({
  display: 'grid',
  boxSizing: 'border-box',
  gridTemplateColumns: '1fr 70% 1fr',
  width: '100%',
  color: 'rgba(0, 0, 0, 0.7)',
}));

export const ProjectTitle = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  justifySelf: 'center',
  alignSelf: 'center',
  fontFamily: 'Raleway Bold',
  fontSize: 36,
}));

export const ProjectContentContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  boxSizing: 'border-box',
  gap: '30px',
  width: '100%',
  height: '100%',
}));

export const ProjectImageWrapper = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
}));

export const ProjectDetailContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  color: 'rgba(0, 0, 0, 0.7)',
  gap: '20px',
}));

export const ProjectTagList = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  gap: '10px',
  '& > :last-child': {
    marginLeft: 'auto',
  },
}));

export const ProjectDescription = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  fontFamily: 'Raleway Regular',
  fontSize: '1em',
  lineHeight: '1.5em',
  whiteSpace: 'pre-line',
  textAlign: 'justify',
  textJustify: 'inter-word',
}));

export const ProjectTechStackList = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  width: '100%',
  gap: '5px',
  fontFamily: 'Raleway Regular',
  fontSize: '1em',
}));
