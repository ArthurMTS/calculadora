import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  button: {
    marginTop: '20px',
    backgroundColor: '#1F53E5',
    color: '#FFF',
    cursor: 'pointer',
    fontSize: '36px',
    padding: '0 35px',
    border: 'none',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '10px',
    opacity: 0.9,
    transition: 'all .2s',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#1F53E5',
    },
  },
});