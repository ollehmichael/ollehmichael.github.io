import ClickingAnimation from '../../const/ClickingAnimation.json';
import Lottie from 'lottie-react';
import {useNavigate} from 'react-router-dom';
import {IconButton, Typography} from '@mui/material';

const AboutMeButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignContent: 'center',
        width: 'fit-content',
        // height: '100%',
        padding: '0 10px',
        border: `1px solid rgba(255, 255, 255)`,
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        gap: '20px',
      }}
      onClick={() => navigate('/about-me')}
    >
      <Lottie animationData={ClickingAnimation} style={{width: '25px'}} />
      <Typography
        sx={{
          fontFamily: 'Roclette Pro',
          fontSize: 16,
          letterSpacing: '1.5px',
          color: 'rgba(255, 255, 255)',
        }}
      >
        Learn more About Me
      </Typography>
    </IconButton>
  );
};

export default AboutMeButton;
