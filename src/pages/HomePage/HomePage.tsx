import {useEffect, useState} from 'react';
import {
  BackgroundContainer,
  ForegroundContainer,
  HomeContainer,
  HomeWrapper,
  NameContainer,
  TitleTypography,
} from './HomePage.styles';
import {SlantedImage} from '../../components/Molecules';
import TransformingWords from '../../components/TransformingWords';

export const HomePage = () => {
  const [showComponents, setShowComponents] = useState<boolean>(false);
  const backgroundImageSource =
    'url(' + require('../../assets/images/appBackground.png') + ')';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeWrapper>
      <HomeContainer>
        <ForegroundContainer>
          <NameContainer
            sx={{
              opacity: showComponents ? 1 : 0,
              transition: 'all 1s ease-in-out 0.5s',
            }}
          >
            <TransformingWords
              freq={3000}
              words={['MICHAEL HAN', 'BYONG CHEOL HAN']}
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                fontFamily: 'BodoniModa Regular',
                fontSize: '6em',
                letterSpacing: '0rem',
                textAlign: 'center',
                whiteSpace: 'pre-wrap',
              }}
            />
          </NameContainer>
          <TitleTypography
            sx={{
              opacity: showComponents ? 1 : 0,
              transition: 'all 1s ease-in-out 2s',
            }}
          >
            PORTFOLIO
          </TitleTypography>
        </ForegroundContainer>
        <BackgroundContainer
          sx={{
            filter: 'grayScale(100%)',
            opacity: showComponents ? 0.75 : 1,
            transition: 'all 1s ease-in-out',
          }}
        >
          <SlantedImage
            width="100%"
            height="100%"
            filter="none"
            source={backgroundImageSource}
            rotateDeg="5"
          />
        </BackgroundContainer>
      </HomeContainer>
    </HomeWrapper>
  );
};
