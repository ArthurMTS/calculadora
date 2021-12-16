import { FC } from 'react';
import { InputProps } from '@material-ui/core';

import { useStyles } from './Input.styles';

export const Input: FC<InputProps> = ({ type, onChange }) => {
  const styles = useStyles();

  return (
    <input
      className={styles.input}
      type={type}
      onChange={onChange}
    />
  );
}