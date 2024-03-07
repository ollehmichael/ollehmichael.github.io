import React, {useState, useEffect} from 'react';
import {getMergeSortAnimations} from './sortingAlgorithms';
import {Box, Button} from '@mui/material';
import {PageCard as ProjectWrapper} from '../../../components/Molecules/PageCard';
import {randomIntFromInterval} from '../../../utils/sortingUtils';

const ANIMATION_SPEED_MS = 15;
const NUMBER_OF_ARRAY_BARS = 150;
const PRIMARY_COLOR = 'black';
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
  const [array, setArray] = useState<Array<number>>([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(5, 730));
    }
    setArray(newArray);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName(
        'array-bar'
      ) as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight / 2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  return (
    <ProjectWrapper>
      <Box
        sx={{
          display: 'flex',
          boxSizing: 'border-box',
          flexDirection: 'column',
          width: 'fit-content',
          height: 'fit-content',
          border: '2px solid black',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            boxSizing: 'border-box',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            sx={{
              display: 'flex',
              boxSizing: 'border-box',
              justifyContent: 'center',
              width: '180px',
              color: 'black',
              borderRadius: 0,
              border: '1px solid black',
            }}
            onClick={resetArray}
          >
            Reset Visualizer
          </Button>
          <Button
            sx={{
              display: 'flex',
              boxSizing: 'border-box',
              justifyContent: 'center',
              width: '180px',
              color: 'black',
              borderRadius: 0,
              border: '1px solid black',
            }}
            onClick={mergeSort}
          >
            Merge Sort
          </Button>
          {/* <Button
            sx={{
              display: 'flex',
              boxSizing: 'border-box',
              justifyContent: 'center',
              width: '180px',
              border: '1px solid green',
            }}
            onClick={mergeSort}
          >
            Merge Sort
          </Button>
          <Button
            sx={{
              display: 'flex',
              boxSizing: 'border-box',
              justifyContent: 'center',
              width: '180px',
              border: '1px solid green',
            }}
            onClick={mergeSort}
          >
            Merge Sort
          </Button>
          <Button
            sx={{
              display: 'flex',
              boxSizing: 'border-box',
              justifyContent: 'center',
              width: '180px',
              border: '1px solid green',
            }}
            onClick={mergeSort}
          >
            Merge Sort
          </Button> */}
        </Box>
        <Box
          className="array-container"
          sx={{
            display: 'flex',
            boxSizing: 'border-box',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '100%',
            height: '50%',
            padding: '10px',
            // backgroundColor: 'rgb(100,20,200)',
          }}
        >
          {array.map((value, idx) => (
            <Box
              className="array-bar"
              key={idx}
              style={{
                display: 'inline-block',
                width: '3px',
                height: `${value / 2}px`,
                margin: '0 1.5px',
                backgroundColor: PRIMARY_COLOR,
              }}
            />
          ))}
        </Box>
      </Box>
    </ProjectWrapper>
  );
};

export default SortingVisualizer;
