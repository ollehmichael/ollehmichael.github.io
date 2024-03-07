import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

interface PageCardProps {
  backgroundColor?: React.CSSProperties['backgroundColor'];
}

export const PageCard = styled(Box)<PageCardProps>(
  ({theme, backgroundColor}) => ({
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'center',
    flexGrow: '1',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    // backgroundColor: backgroundColor ? backgroundColor : '#00539CFF',
  })
);
