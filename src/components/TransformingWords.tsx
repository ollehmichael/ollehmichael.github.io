import {SxProps, Theme, Typography} from '@mui/material';
import {useEffect, useState} from 'react';

const TransformingWords = ({
  freq = 2000,
  style,
  words,
}: {
  freq?: number;
  style?: SxProps<Theme>;
  words: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500);
    }, freq);

    return () => clearTimeout(timer);
  }, [currentIndex, words]);

  return (
    <Typography
      sx={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        ...style,
      }}
    >
      {words[currentIndex]}
    </Typography>
  );
};

export default TransformingWords;
