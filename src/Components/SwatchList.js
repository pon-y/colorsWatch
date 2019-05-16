import React from 'react';
import ListItem from './ListItem';

function SwatchList ( props ) {
  const { clickedColorsArray, deleteItem, bigColor } = props;
  let swatchList = clickedColorsArray.map((el, idx) => <ListItem clickedColor={el[0]} imgURL={el[1]} key={`${el},${idx}`} idx={idx} deleteItem={deleteItem} bigColor={bigColor}/>);

  return (
    <div className="swatchList">
      {swatchList}
    </div>
  )
}

export default SwatchList;