import {useEffect, useState} from 'react';
import {
  ProjectListWrapper,
  ProjectListContainer,
  IntroContainer,
  IntroTitle,
  FilterText,
  FilterContainer,
  ProjectItemsContainer,
} from './ProjectListPage.styles';
import Footer from '../../components/Footer';
import {Box} from '@mui/material';
import {ProjectItems} from '../../const/ProjectItems';
import {ProjectItemType} from '../../type/ProjectItem';
import {FilterButton} from '../../components/Molecules';
import {ProjectItem} from '../../components/Organisms';

export const ProjectListPage = () => {
  const [showComponents, setShowComponents] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredProjectItems, setFilteredProjectItems] =
    useState<ProjectItemType[]>(ProjectItems);

  const handleClickFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    } else {
      setFilters(filters.filter((item: string) => item !== filter));
    }
  };

  const uniqueTagList = ProjectItems.reduce(
    (tagList: string[], project: ProjectItemType) => {
      project.tagList.forEach((tag: string) => {
        if (!tagList.includes(tag)) {
          tagList.push(tag);
        }
      });
      return tagList.slice().sort();
    },
    []
  );
  const uniqueTechStackList = ProjectItems.reduce(
    (techStackList: string[], project: ProjectItemType) => {
      project.techStackList.forEach((tag: string) => {
        if (!techStackList.includes(tag)) {
          techStackList.push(tag);
        }
      });
      return techStackList.slice().sort();
    },
    []
  );

  useEffect(() => {
    if (filters.length > 0) {
      const filtered = filteredProjectItems.filter((project: ProjectItemType) =>
        filters.some(
          (filter: string) =>
            project.tagList.includes(filter) ||
            project.techStackList.includes(filter)
        )
      );
      setFilteredProjectItems(filtered);
    } else {
      setFilteredProjectItems(ProjectItems);
    }
  }, [filters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProjectListWrapper>
      <ProjectListContainer>
        <IntroContainer>
          <IntroTitle
            sx={{
              opacity: showComponents ? 1 : 0,
              transition: showComponents ? 'all 0.5s ease-in' : 'none',
            }}
          >
            PROJECTS
          </IntroTitle>
        </IntroContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            alignItems: 'center',
            width: '100%',
            gap: '5px',
          }}
        >
          <FilterContainer>
            <FilterText
              sx={{
                opacity: showComponents ? 1 : 0,
                transition: showComponents ? 'all 0.5s ease-in 0.5s' : 'none',
              }}
            >
              Filter by Domain:
            </FilterText>
            {uniqueTagList.map((tag: string, index: number) => {
              return (
                <FilterButton
                  key={`tag-${index}`}
                  onClick={() => handleClickFilter(tag)}
                  style={{
                    opacity: showComponents ? 1 : 0,
                    transition: showComponents
                      ? `all 0.5s ease-in ${index * 0.1 + 0.6}s`
                      : 'none',
                  }}
                >
                  {tag}
                </FilterButton>
              );
            })}
          </FilterContainer>
          <FilterContainer>
            <FilterText
              sx={{
                opacity: showComponents ? 1 : 0,
                transition: showComponents ? 'all 0.5s ease-in 0.5s' : 'none',
              }}
            >
              Filter by Technology:
            </FilterText>
            {uniqueTechStackList.map((tech: string, index: number) => {
              return (
                <FilterButton
                  key={`tech-${index}`}
                  onClick={() => handleClickFilter(tech)}
                  style={{
                    opacity: showComponents ? 1 : 0,
                    transition: showComponents
                      ? `all 0.5s ease-in ${index * 0.1 + 0.6}s`
                      : 'none',
                  }}
                >
                  {tech}
                </FilterButton>
              );
            })}
          </FilterContainer>
          <ProjectItemsContainer>
            {filteredProjectItems.map(
              (project: ProjectItemType, index: number) => {
                const transitionDelay =
                  index % 3 === 0 ? '0.5s' : index % 3 === 1 ? '0.8s' : '1.1s';
                return (
                  <ProjectItem
                    index={index}
                    key={`project-items-${index}`}
                    project={project}
                    style={{
                      opacity: showComponents ? 1 : 0,
                      transition: showComponents
                        ? `all 0.5s ease-in ${transitionDelay}`
                        : 'none',
                    }}
                  />
                );
              }
            )}
          </ProjectItemsContainer>
        </Box>
      </ProjectListContainer>
      <Box sx={{height: '100%'}} />
      <Footer />
    </ProjectListWrapper>
  );
};
