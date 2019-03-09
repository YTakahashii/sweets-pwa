import * as React from 'react';
import './App.css';
import MyBottomNavigation from './components/BottomNavigation/BottomNavigation';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <MyBottomNavigation />
      </div>
    );
  }
}

export default App;
