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
  result: {
    marginTop: '20px',
    fontSize: '36px',
    color: '#FFF',
  },
});

export default useStyles;