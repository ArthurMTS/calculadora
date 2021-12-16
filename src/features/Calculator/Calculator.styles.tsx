import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles({
  calculator: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    backgroundColor: '#152266',
    height: '100vh',
  },
  title: {
    color: '#fff',
    padding: '20px 0',
  },
  inputBox: {
    display: 'flex',
    gap: '15px',
  },
  button: {
    marginTop: '20px',
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