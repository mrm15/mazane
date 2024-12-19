import React from 'react';
import SingleCardView from "./SingleCardView";

const CardView = ({data}) => {
  return (<div

  >
    {data.map((row, index) => <SingleCardView key={index} row={row}/>)}
  </div>);
};

export default CardView;
