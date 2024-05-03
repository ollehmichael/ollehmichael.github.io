import {IconButton} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageCarouselNextButton = ({
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
      <ArrowForwardIcon fontSize={'small'} />
    </IconButton>
  );
};

export default ImageCarouselNextButton;
