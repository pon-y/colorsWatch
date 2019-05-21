import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class ListItem extends Component {

  state = {
    originalImgUrl: this.props.imgURL,
  };

  render() {

    const {clickedColor, deleteItem, idx, bigColor} = this.props;

      return (
        <div value={idx}>
          <div className="swatch"  >
            <div className="swatch-square" onClick={() => bigColor(clickedColor)}> <FontAwesomeIcon icon={faSquare} size="4x" color={clickedColor} style={{paddingRight: '15px'}}/></div>
            <div className="swatch-text">
              <span> Color Code:  {clickedColor} </span> 
              {/* <div> <u>Click To Load Original Image </u></div> */}
            </div>
              <span className="swatch-delete" onClick={()=>deleteItem(idx)}  color={'grey'}> X </span>
            <div>

            </div>
          </div>
          <div className="swatchDivider"></div>

        </div>
        )
      }
  
}

export default ListItem;