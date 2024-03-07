import {useEffect, useState} from 'react';
import {PageCard as HomeWrapper} from '../../components/PageCard';
import {ProjectItem} from '../../components/ProjectItem';
import {ProjectItems} from '../../const/ProjectItems';
import {ProjectItemType} from '../../type/ProjectItem';
import {
  HomeContainer,
  HomeProjectItemContainer,
  HomeProjectItemWrapper,
  HomeTitleContainer,
  PrimaryTitle,
  SecondaryTitle,
} from './HomePage.styles';
import {secondaryTitleList} from '../../const/SecondaryTitle';

export const HomePage = () => {
  const [showComponents, setShowComponents] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const WordDisplay = ({words}: {words: string[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsVisible(true);
        }, 500);
      }, 2000);

      return () => clearTimeout(timer);
    }, [currentIndex, words]);

    return (
      <SecondaryTitle
        sx={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {words[currentIndex]}
      </SecondaryTitle>
    );
  };

  return (
    <HomeWrapper>
      <HomeContainer
        sx={{
          opacity: showComponents ? 1 : 0,
          transition: showComponents ? 'opacity 0.5s ease-in' : 'none',
        }}
      >
        <HomeTitleContainer>
          <PrimaryTitle>Michael Han</PrimaryTitle>
          <WordDisplay words={secondaryTitleList} />
        </HomeTitleContainer>
        <HomeProjectItemWrapper>
          <HomeProjectItemContainer>
            {ProjectItems.map((item: ProjectItemType, idx: number) => (
              <ProjectItem key={`project_${idx}`} item={item} />
            ))}
          </HomeProjectItemContainer>
        </HomeProjectItemWrapper>
      </HomeContainer>
    </HomeWrapper>
  );
};
