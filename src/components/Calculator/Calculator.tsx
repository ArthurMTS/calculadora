import { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';

export const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [total, setTotal] = useState(0);

  function handleSum() {
    setTotal(firstValue + secondValue);
  }

  return (
    <Box>
      <TextField
        type='number'
        variant='outlined'
        value={firstValue}
        onChange={e => setFirstValue(Number(e.target.value))}
      />
      <TextField
        type='number'
        variant='outlined'
        value={secondValue}
        onChange={e => setSecondValue(Number(e.target.value))}
      />
      <Button variant='contained' onClick={handleSum} >+</Button>
      <span>{total}</span>
    </Box>
  );
}