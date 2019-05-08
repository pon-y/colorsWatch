import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas.js'
class App extends Component {
  
  state = {
    clickedColor: null
  }
  
  clickImageHandler = (color) => {
    //console.log(color);
    this.setState({clickedColor: color});
  }

  render () {

    return (
      <div className="App">
      <Canvas onClick={this.clickImageHandler}/>

      <div className="swatch" style={{backgroundColor: this.state.clickedColor}}>  {this.state.clickedColor}</div>
    </div>
  );
}
}

export default App;
