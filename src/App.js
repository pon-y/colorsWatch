import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas.js';
import SwatchList from './Components/SwatchList.js';


class App extends Component {
  
  state = {
    clickedColorsArray: [],
    currentColor: 'white',
      urlValue: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80',
      imgUrl: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80',
  }

  //Methods for SwatchList

  //deletes an item from the list
  deleteItem = (idx) => {
    let oldArray = [...this.state.clickedColorsArray];
    oldArray.splice(idx, 1);
    this.setState({clickedColorsArray: oldArray});
  }

  //Methods for Canvas component 

  //Adds a RGBA value from the Canvas component to the array to render to SwatchList
  clickImageHandler = (color) => {
    let colorArray = [...this.state.clickedColorsArray];
    colorArray.push(color);
    this.setState({clickedColorsArray: colorArray});
  }

  //Updates image url 
  updateImage = () =>  {
    this.setState({imgUrl: this.state.urlValue})
  }
  
  handleChange = (e) => {
    this.setState({urlValue: e.target.value});
  }

  bigColor = (color) => {
    this.setState({currentColor: color});
  }
  render () {

    return (
      <div className="App">

        <div className="main" >
        <Header clickedColorsArray={this.state.clickedColorsArray} currentColor={this.state.currentColor}/>
        {/* <div className="bigSwatch" style={{backgroundColor: this.state.currentColor}}> ColorSwatch <div style={{fontSize: '10px'}}>Click anywhere on the picture to get started</div></div> */}
        <Canvas onClick={this.clickImageHandler} updateImage={this.updateImage} handleChange={this.handleChange} imgUrl={this.state.imgUrl} urlValue={this.state.urlValue} clickedColorsArray={this.state.clickedColorsArray} deleteItem={this.deleteItem} bigColor={this.bigColor}/> 
        {/* <SwatchList  clickedColorsArray={this.state.clickedColorsArray} deleteItem={this.deleteItem} bigColor={this.bigColor}/> */}
        </div>
    </div>
  );
}
}

export default App;



function Header ( props ) {
  
  const { clickedColorsArray, currentColor } = props;
  let directionText = 'Click anywhere on the image to begin';
  if(clickedColorsArray.length > 0) {
    directionText = null;
  } 
  return (
    <div className="bigSwatch" style={{backgroundColor: props.currentColor}}> 
      <div style={{color: ~props.currentColor}}>
        colorSwatch
      </div>
      <div>
       <div style={{fontSize: '15px'}}> 
        {directionText};
       </div>
       <div style={{fontSize: '15px'}}>
         github.com/pon-y
       </div>
      </div>
    </div>
  )
}