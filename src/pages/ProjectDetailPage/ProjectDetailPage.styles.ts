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
  color: 'white',
}));

export const ProjectTitle = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  justifySelf: 'center',
  alignSelf: 'center',
  fontFamily: 'Roclette Pro',
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
  color: 'white',
  gap: '20px',
}));

export const ProjectTagList = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  gap: '10px',
}));

export const ProjectDescription = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  fontFamily: 'Roclette Pro Light',
  fontSize: 18,
  letterSpacing: '1.5px',
  whiteSpace: 'pre-line',
  textAlign: 'justify',
  textJustify: 'inter-word',
}));

export const ProjectTechStackList = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  gap: '5px',
  fontFamily: 'Roclette Pro Light',
  fontSize: 18,
  letterSpacing: '1.5px',
}));
