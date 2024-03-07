import {Box} from '@mui/material';
import {ProjectItemType} from '../type/ProjectItem';
import {useNavigate} from 'react-router-dom';

export const ProjectItem = ({item}: {item: ProjectItemType}) => {
  return (
    <BoxContainer item={item}>
      <TitleBox>{item.title}</TitleBox>
      {item.ndaSigned && <NdaBox>NDA Signed</NdaBox>}
    </BoxContainer>
  );
};

const BoxContainer = ({
  item,
  children,
}: {
  item: ProjectItemType;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        minWidth: '100px',
        minHeight: '200px',
        background: item.ndaSigned
          ? 'linear-gradient(to top left, rgba(255, 0, 0, 0) 0%, rgba(255, 0, 0, 0) calc(50% - 2px), rgba(255, 0, 0, 1) 50%, rgba(255, 0, 0, 0) calc(50% + 2px), rgba(255, 0, 0, 0) 100%), rgba(255, 255, 255, 0.6)'
          : 'rgba(255, 255, 255, 0.6)',
        filter: 'brightness(0.7)',
        '&:hover': {
          filter: 'brightness(1)',
          transition: 'all 0.1s linear',
        },
      }}
      onClick={() => navigate(`/projects/${item.navigateUrl}`)}
    >
      {children}
    </Box>
  );
};

const TitleBox = ({children}: {children: React.ReactNode}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        padding: '8px',
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      {children}
    </Box>
  );
};

const NdaBox = ({children}: {children: React.ReactNode}) => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'rgba(255, 0, 0)',
        fontSize: '15px',
      }}
    >
      {children}
    </Box>
  );
};
