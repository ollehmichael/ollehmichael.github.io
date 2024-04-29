import {useState} from 'react';
import {Box, IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageCarousel = ({
  projectTitle,
  images,
}: {
  projectTitle: string;
  images: string[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(activeIndex);

  return (
    <Box sx={{position: 'relative'}}>
      <Box
        sx={{
          display: 'flex',
          boxSizing: 'border-box',
          width: '100%',
          height: 'fit-content',
          background: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Box
          component="img"
          sx={{
            boxSizing: 'border-box',
            padding: '2px',
            width: '100%',
          }}
          alt={`${projectTitle} Image ${activeIndex + 1}`}
          src={images[activeIndex]}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          boxSizing: 'border-box',
          justifyContent: 'space-between',
          color: 'white',
        }}
      >
        <IconButton
          disabled={activeIndex == 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
          sx={{color: 'white'}}
        >
          <ArrowBackIcon fontSize={'small'} />
        </IconButton>
        {images.map((item, index) => (
          <IconButton
            disabled={index == activeIndex}
            key={`Carousel Image ${index + 1}`}
            sx={{
              width: '100px',
            }}
            onClick={() => setActiveIndex(index)}
          >
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '100%',
              }}
              alt={`${projectTitle} Image Option ${activeIndex + 1}`}
              src={item}
            />
          </IconButton>
        ))}
        <IconButton
          disabled={activeIndex + 1 == images.length}
          onClick={() => setActiveIndex(activeIndex + 1)}
          sx={{color: 'white'}}
        >
          <ArrowForwardIcon fontSize={'small'} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
