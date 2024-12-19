import React from 'react';
import CardView from "./CardView";
import TableView from "./TableView";

const DataShow = ({data, showType}) => {


  const ShowIfNoData = data?.length === 0 ? <div className={" w-full bg-white p-4 rounded my-2"}>
    هیچ سندی یافت نشد
  </div> : <></>

  return (<div
    className={"w-full rounded p-1 overflow-y-scroll "}
    style={{height: '45vh'}}
  >
    {ShowIfNoData}
    {showType === "cardShow" ? <CardView data={data}/> : <TableView data={data}/>}</div>);
};

export default DataShow;
