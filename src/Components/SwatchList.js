import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


//container for list of swatches
function SwatchList ( props ) {
  const { clickedColorsArray } = props;
  let swatchList = clickedColorsArray.map(el => <ListItem clickedColor={el} />);

  return (
    <div className="swatchList">
      {swatchList}
    </div>
  )
}

//Individual list items: 
class ListItem extends Component {

  state = {
    expanded: false,
  };

  // toggleExpand = () => {
  //   this.setState({expanded: !this.state.expanded})
  // }
  render() {

    const {clickedColor} = this.props;

    if(this.state.expanded === false) {

      return (
        <div>
          <div className="swatch" >
            <div> <FontAwesomeIcon icon={faSquare} size="4x" color={clickedColor} style={{paddingRight: '15px'}}/></div>
            {/* <span onClick={this.toggleExpand}> Expand </span> */}
            <span> Color Code:  {clickedColor} </span> 
            <FontAwesomeIcon icon={faTimesCircle} size="1x" color={'grey'} />
          </div>
        <div className="swatchDivider"></div>

        </div>
        )
      }
    // else {
    //   return (
    //     <div className="row">
    //       <div className="swatch" >
    //         <div> <FontAwesomeIcon icon={faSquare} size="4x" color={clickedColor} style={{paddingRight: '15px'}}/></div>
    //         <span onClick={this.toggleExpand}> Expand </span>
    //         <span> Color Code:  {clickedColor} </span> 
    //       </div>
    //     <div className="expandedSwatch" style={{backgroundColor: clickedColor}}></div>
    //     <div className="swatchDivider"></div>
    //     </div>
    //     )
    // }
  } 

  
}
export default SwatchList;