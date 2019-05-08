import React, { Component } from 'react';

class Canvas extends Component {
  
  canvasRef = React.createRef();


  draw = () => {
    var canvas = this.canvasRef.current;
    
    canvas.addEventListener('click', (e) => {
      const xCoord = e.offsetX;
      const yCoord = e.offsetY;
      const canvasWidth = 600;
      const myImageData = ctx.getImageData(0, 0, 600, 600);
      const getColorIndicesForCoord = (x, y, width) => {
        const red = y * (width * 4) + x * 4;
        return [red, red + 1, red + 2, red + 3];
      };

      const colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);

      const colorValues = colorIndices.map(el => myImageData.data[el]);

      const color = `rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, ${colorValues[3]})`;

      this.props.onClick(color);
    });


    if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

      //bakarinaa
      var img = new Image();
      img.addEventListener('load', function () {
        ctx.drawImage( img, 0,0)
      })
      img.crossOrigin = "anonymous"
      img.src = 'https://i1.wp.com/thatnovelcorner.com/wp2/wp-content/uploads/2019/05/102251.jpeg?w=350&ssl=1';

      
    }
}

componentDidMount() {
  this.draw();
}


render () {

  return (
    <canvas ref={this.canvasRef} id="userImage" width="400" height="400"></canvas>
    )
  }
}

export default Canvas;