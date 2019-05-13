import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas.js';
import SwatchList from './Components/SwatchList.js';


class App extends Component {
  
  state = {
    clickedColorsArray: [],
      urlValue: 'input new image url here!',
      imgUrl: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80',
  }
  
  deleteItem = (idx) => {
    let oldArray = [...this.state.clickedColorsArray];
    oldArray.splice(idx, 1);
    this.setState({clickedColorsArray: oldArray});
  }
  clickImageHandler = (color) => {
    let colorArray = [...this.state.clickedColorsArray];
    colorArray.push(color);
    this.setState({clickedColorsArray: colorArray});
  }
  updateImage = () =>  {
    this.setState({imgUrl: this.state.urlValue})
  }
  
  handleChange = (e) => {
    this.setState({urlValue: e.target.value});
  }

  render () {

    return (
      <div className="App">

        <div className="main">
        <Canvas onClick={this.clickImageHandler} updateImage={this.updateImage} handleChange={this.handleChange} imgUrl={this.state.imgUrl} urlValue={this.state.urlValue}/>
        <SwatchList  clickedColorsArray={this.state.clickedColorsArray} deleteItem={this.deleteItem}/>
        </div>
    </div>
  );
}
}

export default App;
