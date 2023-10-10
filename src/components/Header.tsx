import {HeaderNavButton} from './Molecules';
import {useNavigate} from 'react-router-dom';
import {Box, styled} from '@mui/material';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderNavButton onClick={() => navigate('/')}>Home</HeaderNavButton>
      <Box
        sx={{
          display: 'flex',
          boxSizing: 'border-box',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <HeaderNavButton onClick={() => navigate('/about-me')}>
          About Me
        </HeaderNavButton>
        <HeaderNavButton onClick={() => navigate('/projects')}>
          Projects
        </HeaderNavButton>
        <HeaderNavButton onClick={() => navigate('/study')}>
          Study
        </HeaderNavButton>
      </Box>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '15px 5vw',
  boxShadow: '0px -10px 20px rgba(0, 0, 0, 0.8)',
}));

export default Header;
