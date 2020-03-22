import { createMuiTheme } from '@material-ui/core/styles';

// The custom theme colors for the website
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#424242',
      light: '#6D6D6D',
      dark: '#1B1B1B',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#006772',
      light: '#006772', // No light variation has been set
      dark: '#006772', // No dark variation has been set
      contrastText: '#FFF',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  // If you want to override globally, with Paper as example:
  /* overrides: {
    MuiPaper: {
      root: {
        padding: '0px 20px',
        margin: '20px 0',
        backgroundColor: 'white',
      },
    },
  }, */
});
export default theme;
