import React, { Component } from 'react';
import Calculator from './components/Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: '100vh', width: '100%' }}>
          <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;
