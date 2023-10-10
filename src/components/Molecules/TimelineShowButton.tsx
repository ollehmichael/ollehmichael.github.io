import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {MyIconButton} from '../Atoms';

const TimelineShowButton = ({
  showMore,
  handleShowMore,
}: {
  showMore: boolean;
  handleShowMore: React.MouseEventHandler;
}) => {
  return (
    <MyIconButton
      onClick={handleShowMore}
      style={{
        display: 'flex',
        borderRadius: '0',
        fontFamily: 'Raleway Regular',
        fontSize: '0.75em',
        letterSpacing: '0.03rem',
        fontWeight: 800,
      }}
    >
      {showMore ? (
        <KeyboardDoubleArrowDownIcon
          fontSize="small"
          sx={{
            '@keyframes bounce': {
              '0%, 100%': {transform: 'translateY(2.5px)'},
              '50%': {transform: 'translateY(-2.5px)'},
            },
            animation: 'bounce 1s ease-in-out infinite',
          }}
        />
      ) : (
        <KeyboardDoubleArrowUpIcon
          fontSize="small"
          sx={{
            '@keyframes bounce': {
              '0%, 100%': {transform: 'translateY(2.5px)'},
              '50%': {transform: 'translateY(-2.5px)'},
            },
            animation: 'bounce 1s ease-in-out infinite',
          }}
        />
      )}
      {showMore ? 'Show More' : 'Show Less'}
    </MyIconButton>
  );
};
export default TimelineShowButton;
