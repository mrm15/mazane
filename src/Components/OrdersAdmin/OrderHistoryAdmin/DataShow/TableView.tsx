import React from 'react';
import SingleCardView from "./SingleCardView";

const TableView = ({data}) => {
  return (<div className={"w-full rounded p-1 overflow-y-scroll "}
               style={{
                 height: '50vh'
               }}
  >
    جدول
  </div>);
};

export default TableView;
