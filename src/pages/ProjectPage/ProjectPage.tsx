import {useParams} from 'react-router-dom';
import {PageCard as ProjectWrapper} from '../../components/PageCard';
import {Box} from '@mui/material';
import {useEffect, useState} from 'react';

export const ProjectPage = () => {
  const {projectId} = useParams();
  const [showComponents, setShowComponents] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProjectWrapper>
      <Box
        sx={{
          display: 'flex',
          boxSizing: 'border-box',
          justifyContent: 'center',
          alignSelf: 'center',
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255)',
          opacity: showComponents ? 1 : 0,
          transition: showComponents ? 'opacity 0.5s ease-in' : 'none',
        }}
      >
        a
      </Box>
    </ProjectWrapper>
  );
};
