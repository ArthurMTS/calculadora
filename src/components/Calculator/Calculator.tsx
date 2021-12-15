import { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';

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
      <Box className={styles.inputBox}>
        <TextField
          className={styles.input}
          type='number'
          variant='outlined'
          onChange={e => setFirstValue(Number(e.target.value))}
        />
        <TextField
          className={styles.input}
          type='number'
          variant='outlined'
          onChange={e => setSecondValue(Number(e.target.value))}
        />
      </Box>
      <Button 
        className={styles.button}
        variant='contained'
        onClick={handleSum}
      >
        +
      </Button>
      <Box className={styles.result}>
        <span>{total}</span>
      </Box>
    </Box>
  );
}