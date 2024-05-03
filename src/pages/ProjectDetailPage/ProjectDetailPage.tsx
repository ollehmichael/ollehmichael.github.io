import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import {ProjectItemInitialState, ProjectItemType} from '../../type/ProjectItem';
import {ProjectItems} from '../../const/ProjectItems';
import {
  ProjectContainer,
  ProjectContentContainer,
  ProjectDescription,
  ProjectDetailContainer,
  ProjectImageWrapper,
  ProjectHeader,
  ProjectTagList,
  ProjectTechStackList,
  ProjectTitle,
  ProjectWrapper,
} from './ProjectDetailPage.styles';
import {BackButton, GitHubLink, ProjectTag} from '../../components/Molecules';
import {ImageCarousel} from '../../components/Organisms';

export const ProjectDetailPage = () => {
  const {projectID} = useParams();
  const [showComponents, setShowComponents] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState<ProjectItemType>(
    ProjectItemInitialState
  );

  useEffect(() => {
    const fetchedProjectDetails = ProjectItems.find(
      (item: ProjectItemType) => item.projectID === projectID
    );
    if (fetchedProjectDetails != null) {
      setProjectDetails(fetchedProjectDetails);

      const timer = setTimeout(() => {
        setShowComponents(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [projectID]);

  return (
    <ProjectWrapper
      sx={{
        opacity: showComponents ? 1 : 0,
        transition: showComponents ? 'all 0.5s ease-in' : 'none',
      }}
    >
      <ProjectContainer
        sx={{
          opacity: showComponents ? 1 : 0,
          transition: showComponents ? 'all 0.5s ease-in' : 'none',
        }}
      >
        <ProjectHeader>
          <BackButton />
          <ProjectTitle>{projectDetails.title}</ProjectTitle>
        </ProjectHeader>
        <ProjectContentContainer>
          <ProjectImageWrapper>
            <ImageCarousel
              projectTitle={projectDetails.title}
              images={projectDetails.imageList}
            />
          </ProjectImageWrapper>
          <ProjectDetailContainer>
            <ProjectTagList>
              {projectDetails.tagList.map((tag: string) => {
                return (
                  <ProjectTag
                    key={`${projectDetails.title} ${tag} stack`}
                    hasBorder={true}
                    fontSize={'1em'}
                    tag={tag}
                  />
                );
              })}
              <GitHubLink link={projectDetails.githubLink} />
            </ProjectTagList>
            <ProjectDescription>
              {projectDetails.description}
            </ProjectDescription>
            <ProjectTechStackList>
              <CodeIcon />
              {'Tech Stack: '}
              {projectDetails.techStackList.map(
                (stack: string, index: number) => {
                  return (
                    <Box key={`${projectDetails.title} ${stack} stack`}>
                      {stack}
                      {index + 1 == projectDetails.techStackList.length
                        ? null
                        : ','}
                    </Box>
                  );
                }
              )}
            </ProjectTechStackList>
          </ProjectDetailContainer>
        </ProjectContentContainer>
      </ProjectContainer>
    </ProjectWrapper>
  );
};
