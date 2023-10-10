import {Box} from '@mui/material';

const SlantedImage = ({
  width,
  height,
  filter,
  source,
  rotateDeg,
}: {
  width: string;
  height: string;
  filter: string;
  source: string;
  rotateDeg: string;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        transform: `rotate(-${rotateDeg}deg)`,
        overflow: 'hidden',
        transition: 'transform 1s ease-in-out',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '120%',
          height: '120%',
          margin: '0 -10%',
          transform: `rotate(${rotateDeg}deg)`,
          background: source,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: filter,
          transition: 'transform 1s ease-in-out',
        }}
      />
    </Box>
  );
};

export default SlantedImage;
