import {Box, Typography} from '@mui/material';
import {MyIconButton} from './Atoms';
import {FooterNavItemType} from '../type/FooterNavItem';
import {footerNavItems} from '../const/FooterNavItems';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'center',
        justifySelf: 'flex-end',
        width: '100%',
        boxShadow: '0px -1px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          boxSizing: 'border-box',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 20px',
          width: 'calc(100% - 20vw)',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            boxSizing: 'border-box',
            gap: '10px',
          }}
        >
          {footerNavItems.map((item: FooterNavItemType, index: number) => (
            <MyIconButton
              key={`footer-nav-item-${index}`}
              onClick={() => window.open(item.url, '_blank')}
              color="rgba(0, 0, 0, 0.5)"
            >
              {item.icon}
            </MyIconButton>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            gap: '5px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Lato Light',
              fontSize: '1em',
              fontWeight: 800,
              letterSpacing: '0.03rem',
              lineHeight: 1.25,
            }}
          >
            {`@2024 Mike's Portfolio v3.0.0`}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Lato Light',
              fontSize: '0.8em',
              fontWeight: 800,
              letterSpacing: '0.03rem',
              lineHeight: 1.25,
            }}
          >
            {`Built with React, TypeScript, Material-UI, and Mike's Love`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
