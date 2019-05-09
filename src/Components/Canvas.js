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

      var img = new Image();
      img.addEventListener('load', function () {
        // ctx.drawImage( img, 0,0)
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      })
      img.crossOrigin = "anonymous"
      img.src = 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80';      
    }
}

componentDidMount() {
  this.draw();
}


render () {

  return (
    <div className="canvasContainer">
      <canvas ref={this.canvasRef} id="userImage" width="400" height="400"></canvas>
      <div className="canvasHelpText"> Click any point on the above image to get started.
      
      <p>
        Photo by Sharon Pittaway on Unsplash
      </p>
      </div>
    </div>
    )
  }
}

export default Canvas;