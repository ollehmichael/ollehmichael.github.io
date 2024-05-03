import {useState} from 'react';
import {Box, IconButton} from '@mui/material';
import {ImageCarouselBackButton, ImageCarouselNextButton} from '../Molecules';

const ImageCarousel = ({
  projectTitle,
  images,
}: {
  projectTitle: string;
  images: string[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            border: '2px solid rgba(0, 0, 0, 0.7)',
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
          color: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <ImageCarouselBackButton
          disabled={activeIndex == 0}
          onClick={() => setActiveIndex(activeIndex - 1)}
        />
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
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                padding: index == activeIndex ? '2px' : '4px',
                border:
                  index == activeIndex
                    ? '2px solid rgba(0, 0, 0, 0.7)'
                    : 'none',
                transition: 'border 0.1s ease-in',
              }}
              alt={`${projectTitle} Image Option ${activeIndex + 1}`}
              src={item}
            />
          </IconButton>
        ))}
        <ImageCarouselNextButton
          disabled={activeIndex + 1 == images.length}
          onClick={() => setActiveIndex(activeIndex + 1)}
        />
      </Box>
    </Box>
  );
};

export default ImageCarousel;
