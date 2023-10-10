import React from 'react';
import {SxProps, Theme, Typography, Box} from '@mui/material';

const Blockquote = ({
  children,
  cite,
  style,
}: {
  children: React.ReactNode;
  cite: string;
  style: SxProps<Theme>;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
        ...style,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 40,
          '&:before': {
            display: 'block',
            content: '"\u201C"',
            fontSize: 70,
            position: 'absolute',
            top: -7,
            color: '#7a7a7a',
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'BodoniModa Italic',
            fontSize: '1.3em',
            lineHeight: 2,
            color: 'rgba(56, 56, 56, 1)',
          }}
        >
          {children}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'BodoniModa Regular',
            fontSize: '1em',
            textAlign: 'end',
            color: 'rgba(153, 153, 153, 1)',
            '&:before': {
              content: '"\u2014 \u2009"',
            },
          }}
        >
          {cite}
        </Typography>
      </Box>
    </Box>
  );
};

export default Blockquote;
