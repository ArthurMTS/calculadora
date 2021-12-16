import { useState } from 'react';
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

  return (
    <Box className={styles.calculator}>
      <h1 className={styles.title}>Calculadora</h1>
      <Box className={styles.inputBox}>
        <Input
          type='number'
          onChange={e => setFirstValue(Number(e.target.value))}
        />
        <Input
          type='number'
          onChange={e => setSecondValue(Number(e.target.value))}
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