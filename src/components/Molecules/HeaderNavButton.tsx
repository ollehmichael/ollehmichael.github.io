import {MyIconButton} from '../Atoms';

const HeaderNavButton = ({
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
      fontSize="1rem"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      size="small"
    >
      {children}
    </MyIconButton>
  );
};

export default HeaderNavButton;
