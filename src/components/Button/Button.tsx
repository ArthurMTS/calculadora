import { FC } from 'react';
import { ButtonProps } from '@material-ui/core';

import { useStyles } from './Button.styles';

export const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  const styles = useStyles();

  return (
    <button 
      className={styles.button}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}