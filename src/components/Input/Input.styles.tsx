import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  input: {
    backgroundColor: '#B2BDFB',
    width: '200px',
    textAlign: 'center',
    color: '#FFF',
    fontSize: '36px',
    padding: '10px',
    border: '1px solid #152266',
    borderRadius: '5px',
    '&:focus': {
      outline: '1px solid #72CEDD',
    },
  },
});