import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


//container for list of swatches
function SwatchList ( props ) {
  const { clickedColor } = props;

  return (
    <div className="swatchList">

     <ListItem clickedColor={clickedColor} />

    </div>
  )
}

//each list item
function ListItem ( props ) {
  const { clickedColor } = props;
  return (
    <div>
      <div className="swatch" >
        <div> <FontAwesomeIcon icon={faSquare} size="4x" color={clickedColor} style={{paddingRight: '15px'}}/></div>
        Color Code:  {clickedColor}  |   <i>  Color changes the color the image is clicked at</i>
      </div>
      <div className="swatchDivider"></div>


    </div>
  )
}
export default SwatchList;