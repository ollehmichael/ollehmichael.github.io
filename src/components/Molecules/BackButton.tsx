import {IconButton} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      aria-label="go-back"
      size="large"
      onClick={() => navigate(-1)}
      sx={{
        justifySelf: 'flex-start',
        borderRadius: 0,
        padding: 0,
        color: 'white',
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

export default BackButton;
