import React from 'react';
import CardView from "./CardView";
import TableView from "./TableView";

const DataShow = ({data, showType}) => {

  if (data?.length === 0) {
    return <div className={" w-full bg-white p-4 rounded my-2"}>
      هیچ سندی یافت نشد
    </div>
  }
  return (<div>{showType === "cardShow" ? <CardView data={data}/> : <TableView data={data}/>}</div>);
};

export default DataShow;
