import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas.js';
import SwatchList from './Components/SwatchList.js';


class App extends Component {
  
  state = {
    clickedColor: 'lightgrey',
    clickedColorsArray: ['white'],
  }
  
  clickImageHandler = (color) => {
    //console.log(color);
    this.setState({clickedColor: color});
  }

  render () {

    return (
      <div className="App">
      {/* <div className="App-header"> colorSwatch by @pon-y</div> */}
      <Canvas onClick={this.clickImageHandler}/>
      <SwatchList clickedColor={this.state.clickedColor} />
      
    </div>
  );
}
}

export default App;
