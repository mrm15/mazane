import React from 'react';

const ShowTypeSection = ({
                           setShowType, showType
                         }) => {
  return (<div className={"flex flex-wrap  rounded"}>
    <button onClick={() => setShowType("cardShow")}
            className={` py-2 w-1/2 rounded ${showType === "cardShow" ? "bg-white" : " "}`}>کارت
    </button>
    <button onClick={() => setShowType("tableShow")}
            className={` py-2 w-1/2 rounded ${showType === "tableShow" ? "bg-white" : " "}`}>جدول
    </button>
  </div>);
};

export default ShowTypeSection;
