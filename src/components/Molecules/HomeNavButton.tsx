import {MyIconButton} from '../Atoms';

const HomeNavButton = ({
  onMouseOver,
  onMouseLeave,
  onClick,
  children,
}: {
  onMouseOver?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}) => {
  return (
    <MyIconButton
      backgroundColor="none"
      color="rgba(0, 0, 0, 0.7)"
      fontSize="1.5rem"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      size="small"
    >
      {children}
    </MyIconButton>
  );
};

export default HomeNavButton;
