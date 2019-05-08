import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas.js'
class App extends Component {
  
  state = {
    clickedColors : []
  }
  
  render () {

    return (
      <div className="App">
      <Canvas />
    </div>
  );
}
}

export default App;
