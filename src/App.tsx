import * as React from 'react';
import './App.css';
import MyBottomNavigation from './components/BottomNavigation/BottomNavigation';
import Navigationbar from './components/Navigationbar/Navigationbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';
class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div className='App'>
          <Navigationbar />
          <MyBottomNavigation />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
