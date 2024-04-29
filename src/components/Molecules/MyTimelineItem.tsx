import {Box, Typography} from '@mui/material';
import {getMonthYear} from '../../utils/dateUtils';
import {CareerTimelineItemType} from '../../type/CareerTimelineItem';

const MyTimelineItem = ({
  item,
  itemsLength,
  index,
  showComponents,
}: {
  item: CareerTimelineItemType;
  itemsLength: number;
  index: number;
  showComponents: boolean;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        gap: '20px',
        paddingX: '20px',
        paddingBottom: index === itemsLength - 1 ? '0' : '20px',
        borderLeft: '2px solid rgba(191, 191, 191, 0.3)',
        opacity: showComponents ? 1 : 0,
        transition: `all 0.5s ease-in-out ${index * 0.2 + 2}s`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexShrink: 0,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background:
            index === 0 ? 'rgba(70, 70, 70, 1)' : 'rgba(153, 153, 153, 1)',
          color: 'white',
          fontFamily: 'Lato Light',
        }}
      >
        {index + 1}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '10px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Raleway Regular',
            fontSize: '1em',
            letterSpacing: '0.03rem',
            color: 'rgba(70, 70, 70, 1)',
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Lato Light',
            fontSize: '0.75em',
            letterSpacing: '0.03rem',
            fontWeight: 800,
            textAlign: 'justify',
          }}
        >
          {item.companyName}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Lato Light',
            fontSize: '0.75em',
            letterSpacing: '0.03rem',
            fontWeight: 800,
          }}
        >
          {getMonthYear(item.positionStartTime) +
            ' - ' +
            getMonthYear(item.positionEndTime)}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Lato Light',
            fontSize: '0.75em',
            letterSpacing: '0.03rem',
            fontWeight: 800,
            textAlign: 'justify',
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
};
export default MyTimelineItem;
