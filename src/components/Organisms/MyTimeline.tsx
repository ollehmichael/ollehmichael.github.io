import {Box} from '@mui/material';
import {CareerTimelineItemType} from '../../type/CareerTimelineItem';
import {MyTimelineItem} from '../Molecules';

const MyTimeline = ({
  items,
  showComponents,
}: {
  items: CareerTimelineItemType[];
  showComponents: boolean;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      {items.map((item: CareerTimelineItemType, index: number) => (
        <MyTimelineItem
          key={`timeline-item-${index}`}
          item={item}
          itemsLength={items.length}
          index={index}
          showComponents={showComponents}
        />
      ))}
    </Box>
  );
};
export default MyTimeline;
