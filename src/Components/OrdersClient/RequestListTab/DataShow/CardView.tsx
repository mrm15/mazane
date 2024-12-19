import React from 'react';
import SingleCardView from "./SingleCardView";

const CardView = ({data}) => {
  return (<div
    className={"w-full rounded p-1 overflow-y-scroll  last__orders__cards"}
    style={{height: "55vh" }}
  >
    {data.map((row, index) => <SingleCardView key={index} row={row}/>)}
  </div>);
};

export default CardView;
