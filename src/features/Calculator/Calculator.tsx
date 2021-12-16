import { useState, ChangeEvent } from 'react';
import { Box } from '@material-ui/core';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import useStyles from './Calculator.styles';

export const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [total, setTotal] = useState(0);

  const styles = useStyles();

  function handleSum() {
    setTotal(firstValue + secondValue);
  }

  function handleChangeFirstValue(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value)
    setFirstValue(value);
  }

  function handleChangeSecondValue(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value)
    setSecondValue(value);
  }

  return (
    <Box className={styles.calculator}>
      <h1 className={styles.title}>
        {process.env.REACT_APP_APP_NAME}
      </h1>

      <Box className={styles.inputBox}>
        <Input
          type='number'
          onChange={handleChangeFirstValue}
        />
        <Input
          type='number'
          onChange={handleChangeSecondValue}
        />
      </Box>

      <Button onClick={handleSum}>
        +
      </Button>

      <Box className={styles.result}>
        <span>{total}</span>
      </Box>
    </Box>
  );
}