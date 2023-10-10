import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import {ProjectTag} from '../Molecules';
import {ProjectItemType} from '../../type/ProjectItem';
import {useNavigate} from 'react-router-dom';

const ProjectItem = ({
  index,
  project,
  style,
}: {
  index: number;
  project: ProjectItemType;
  style?: SxProps<Theme>;
}) => {
  const navigate = useNavigate();
  return (
    <Card raised sx={{...style}}>
      <CardActionArea
        onClick={() => navigate(`/projects/${project.projectID}`)}
      >
        <CardMedia
          sx={{
            height: 140,
            filter: 'grayScale(100%)',
            '&:hover': {
              filter: 'grayScale(0%)',
              transition: 'all 0.5s ease-in',
            },
          }}
          image={project.imageList[0]}
          title={`project-item-${index}-image`}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            gap: '5px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Raleway Bold',
              fontSize: '1em',
              color: 'rgba(0, 0, 0, 0.7)',
              letterSpacing: '0.03rem',
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Lato Light',
              fontSize: '1em',
              color: 'rgba(0, 0, 0, 0.7)',
              fontWeight: 800,
              letterSpacing: '0.03rem',
              lineHeight: 1.25,
            }}
          >
            {`${project.briefDescription.substring(0, 150)}${
              project.briefDescription.length > 150 ? '...' : ''
            }`}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              boxSizing: 'border-box',
              alignItems: 'center',
              width: '100%',
              padding: '5px 0',
              gap: '10px',
            }}
          >
            {project.tagList.map((tag: string) => {
              return (
                <ProjectTag
                  key={`project-items-${index}-tag-${tag}`}
                  fontSize={'1em'}
                  tag={tag}
                />
              );
            })}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProjectItem;
