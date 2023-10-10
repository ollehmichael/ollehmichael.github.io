import GitHubIcon from '@mui/icons-material/GitHub';
import {MyIconButton} from '../Atoms';

const GitHubLink = ({link}: {link: string}) => {
  return (
    <MyIconButton
      backgroundColor={'rgba(0, 0, 0, 0.1)'}
      color={'rgba(0, 0, 0, 0.7)'}
      onClick={() => window.open(link, '_blank')}
      hasBorder={true}
      fontSize="1em"
    >
      <GitHubIcon />
      View my GitHub
    </MyIconButton>
  );
};

export default GitHubLink;
