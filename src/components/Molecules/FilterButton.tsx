import {useState} from 'react';
import {MyIconButton} from '../Atoms';
import {SxProps, Theme} from '@mui/material';

const FilterButton = ({
  children,
  style,
  onClick,
}: {
  children: React.ReactNode;
  style?: SxProps<Theme>;
  onClick: React.MouseEventHandler;
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFocused(!focused);
    onClick(event);
  };
  return (
    <MyIconButton
      size="small"
      onClick={handleClick}
      disableRipple={true}
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '5px 10px',
        border: 'none',
        color: 'rgba(0, 0, 0, 0.7)',
        borderRadius: focused ? '5px' : '10px',
        background: focused ? 'rgba(0, 0, 0, 0.1)' : 'none',
        fontFamily: 'Roclette Pro',
        fontSize: '1rem',
        letterSpacing: '1.5px',
        gap: '10px',
        transition: 'all 0.2s ease-in',
        ...style,
      }}
    >
      {children}
    </MyIconButton>
  );
};

export default FilterButton;
