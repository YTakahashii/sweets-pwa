import * as React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme';
import NavigationController from './components/NavigationController/NavigationController';
class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div className='App'>
          <NavigationController />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
