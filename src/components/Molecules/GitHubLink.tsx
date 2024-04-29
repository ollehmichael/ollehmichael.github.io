import GitHubIcon from '@mui/icons-material/GitHub';
import {MyIconButton} from '../Atoms';

const GitHubLink = ({link}: {link: string}) => {
  return (
    <MyIconButton
      backgroundColor={'rgba(255, 255, 255, 0.1)'}
      color={'rgba(255, 255, 255)'}
      onClick={() => window.open(link, '_blank')}
      fontSize="16px"
    >
      <GitHubIcon />
      View my GitHub
    </MyIconButton>
  );
};

export default GitHubLink;
