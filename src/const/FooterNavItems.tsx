import {FooterNavItemType} from '../type/FooterNavItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const footerNavItems: FooterNavItemType[] = [
  {
    name: 'Github',
    icon: <GitHubIcon />,
    url: 'https://github.com/ollehmichael',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/ollehmichael/',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/byong-cheol-han-60127b1b7/',
  },
];
