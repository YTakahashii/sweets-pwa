import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TopBar } from './components/TopBar/TopBar';
import { Pages } from './pages';
import { BottomNavigationBar } from './components/BottomNavigationBar/BottomNavigationBar';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <TopBar />
        <Pages />
        <BottomNavigationBar />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
