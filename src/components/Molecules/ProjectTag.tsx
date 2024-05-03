import {MyIconButton} from '../Atoms';

const ProjectTag = ({
  hasBorder = false,
  tag,
  fontSize,
}: {
  hasBorder?: boolean;
  tag: string;
  fontSize: string;
}) => {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Frontend':
        return ['rgba(255, 148, 28)', 'rgba(255, 148, 28, 0.1)'];
      case 'Backend':
        return ['rgba(255, 203, 50)', 'rgba(255, 203, 50, 0.1)'];
      case 'DevOps':
        return ['rgba(50, 76, 255)', 'rgba(50, 76, 255, 0.1)'];
      case 'Data':
        return ['rgba(50, 221, 87)', 'rgba(50, 221, 87, 0.1)'];
      case 'Machine Learning':
        return ['rgba(200, 73, 246)', 'rgba(200, 73, 246, 0.1)'];
      default:
        return ['rgba(0, 0, 0)', 'rgba(0, 0, 0, 0.1)'];
    }
  };
  return (
    <MyIconButton
      backgroundColor={getTagColor(tag)[1]}
      color={getTagColor(tag)[0]}
      hasBorder={hasBorder}
      fontSize={fontSize}
    >
      {tag.toUpperCase()}
    </MyIconButton>
  );
};

export default ProjectTag;
