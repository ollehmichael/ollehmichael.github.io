import {useEffect, useState} from 'react';
import {
  AboutWrapper,
  AboutContainer,
  IntroContainer,
  IntroTitle,
  IntroText,
  TimelineContainer,
} from './AboutMePage.styles';

import {careerTimelineItems} from '../../const/CareerTimelineItems';
import {MyTimeline} from '../../components/Organisms';
import {Blockquote} from '../../components/Atoms';
import Footer from '../../components/Footer';

export const AboutMePage = () => {
  const [showComponents, setShowComponents] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AboutWrapper>
      <AboutContainer>
        <IntroContainer>
          <IntroTitle
            sx={{
              opacity: showComponents ? 1 : 0,
              transition: showComponents ? 'all 0.5s ease-in' : 'none',
            }}
          >
            WHO AM I?
          </IntroTitle>
          <IntroText
            sx={{
              opacity: showComponents ? 1 : 0,
              transition: showComponents ? 'all 0.5s ease-in 0.5s' : 'none',
            }}
          >
            {`I'm a man of many identities - a developer, a jazz musician, a gym addict, a former drill sergeant, and a dreamer with a "Let's get shit done" attitude.\nI'm a truly passionate software engineer experienced in Frontend, Mobile Dev, Backend, Data Transformation, DevSecOps, Blockchain, and Agile Methodologies. \nMy work ethic revolves around upholding best practices and methodologies to drive the best possible outcomes.`}
          </IntroText>
          <Blockquote
            cite="great friend of mine"
            style={{
              opacity: showComponents ? 1 : 0,
              transition: showComponents ? 'all 0.5s ease-in 1s' : 'none',
            }}
          >
            {`If you're aligned on the `}
            <span style={{color: 'red'}}>why</span>
            {`, nothing can stop you or your team.`}
          </Blockquote>
          <IntroText
            sx={{
              opacity: showComponents ? 1 : 0,
              transition: showComponents ? 'all 0.5s ease-in 1.5s' : 'none',
            }}
          >
            {`I thrive on delivering exceptional products that stand out for their quality and innovation, all while fostering a collaborative and enjoyable team environment.\nThrough a blend of expertise and a passion for excellence, I strive to make every project a success story, combining technical prowess with a positive team dynamic.`}
          </IntroText>
        </IntroContainer>
        <TimelineContainer>
          <MyTimeline
            items={careerTimelineItems}
            showComponents={showComponents}
          />
        </TimelineContainer>
      </AboutContainer>
      <Footer />
    </AboutWrapper>
  );
};
