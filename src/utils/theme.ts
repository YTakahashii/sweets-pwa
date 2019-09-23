import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3498DB',
    },
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        height: 'calc(56px + env(safe-area-inset-bottom))',
      },
    },
  },
});
