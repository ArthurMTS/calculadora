import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles({
  calculator: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  },
  inputBox: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    backgroundColor: '#B2BDFB',
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#1F53E5',
    color: '#FFF',
    fontSize: '30px',
    padding: '0 35px',
    borderBottomLeftRadius: '20px',
    borderTopRightRadius: '20px',
    opacity: 0.9,
    transition: 'all .2s',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#1F53E5',
    },
  },
  result: {
    marginTop: '20px',
    fontSize: '36px',
    color: '#FFF',
  },
});

export default useStyles;