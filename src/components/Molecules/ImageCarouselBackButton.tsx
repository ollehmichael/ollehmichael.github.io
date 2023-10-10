import {IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ImageCarouselBackButton = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: React.MouseEventHandler;
}) => {
  return (
    <IconButton
      disabled={disabled}
      disableFocusRipple={true}
      disableRipple={true}
      disableTouchRipple={true}
      onClick={onClick}
      sx={{color: 'rgba(0, 0, 0, 0.7)', transition: 'all 0.1s ease-in'}}
    >
      <ArrowBackIcon fontSize={'small'} />
    </IconButton>
  );
};

export default ImageCarouselBackButton;
