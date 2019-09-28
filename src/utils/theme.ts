import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3498DB',
    },
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 416,
      md: 768,
      lg: 960,
      xl: 1200,
    },
  },
});
