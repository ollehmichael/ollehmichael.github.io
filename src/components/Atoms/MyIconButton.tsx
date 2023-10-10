import {IconButton, SxProps, Theme} from '@mui/material';

const MyIconButton = ({
  backgroundColor,
  color,
  hasBorder,
  disableRipple,
  fontSize,
  size,
  onMouseOver,
  onMouseLeave,
  onClick,
  style,
  children,
}: {
  backgroundColor?: string;
  color?: string;
  hasBorder?: boolean;
  disableRipple?: boolean;
  fontSize?: string;
  size?: 'small' | 'medium' | 'large';
  onMouseOver?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
  style?: SxProps<Theme>;
  children: React.ReactNode;
}) => {
  return (
    <IconButton
      sx={
        style
          ? style
          : {
              display: 'flex',
              boxSizing: 'border-box',
              justifyContent: 'center',
              alignContent: 'center',
              padding: '5px 10px',
              border: hasBorder ? `1px solid ${color}` : 'none',
              color: color,
              borderRadius: '10px',
              background: backgroundColor,
              fontFamily: 'Lato Light',
              fontSize: fontSize,
              gap: '10px',
            }
      }
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      size={size}
      disableRipple={disableRipple ? disableRipple : !onClick}
      disableFocusRipple={disableRipple ? disableRipple : !onClick}
    >
      {children}
    </IconButton>
  );
};

export default MyIconButton;
