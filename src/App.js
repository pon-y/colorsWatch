import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas.js';


class App extends Component {
  
  state = {
    clickedColorsArray: [],
    currentColor: 'white',
    urlValue: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80',
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

  bigColor = (color) => {
    this.setState({currentColor: color});
  }
  render () {
    const { clickedColorsArray, currentColor, urlValue, imgUrl} = this.state;
    return (
      <div className="App">

        <div className="main" >
        <Header clickedColorsArray={clickedColorsArray} currentColor={currentColor}/>
        {/* <div className="bigSwatch" style={{backgroundColor: this.state.currentColor}}> ColorSwatch <div style={{fontSize: '10px'}}>Click anywhere on the picture to get started</div></div> */}
        <Canvas onclick={this.clickImageHandler} updateImage={this.updateImage} handleChange={this.handleChange} imgUrl={imgUrl} urlValue={urlValue} clickedColorsArray={clickedColorsArray} deleteItem={this.deleteItem} bigColor={this.bigColor}/> 
        {/* <SwatchList  clickedColorsArray={this.state.clickedColorsArray} deleteItem={this.deleteItem} bigColor={this.bigColor}/> */}
        </div>
    </div>
  );
}
}

export default App;



function Header ( props ) {
  
  const { currentColor } = props;
  
  return (
    <div className="bigSwatch" style={{backgroundColor: currentColor}}> 
      <div className="bigSwatch-label-main">
        illuminate
      </div>
      <div className="bigSwatch-label-sub">
       <div>
         <a href="https://github.com/pon-y/" target="_blank">github.com/pon-y</a>
       </div>
      </div>
    </div>
  )
}