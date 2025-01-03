import React from 'react';

const TransActionTypeShow = ({
                               setOrder_type, order_type
                             }) => {


  const transActionType = [{order_type: "sell", text: "خرید"}, {order_type: "buy", text: "فروش"}]
  return (<div className={"secondary-background-color rounded p-1 mt-1"}>
    <hr className={"my-1"}/>
    <div className={"w-full justify-between flex gap-1 my-1 rounded"}>
      {transActionType.map((row, index) => {
        return <button

          className={`${row.order_type === order_type ? " bg-white text-black" : " bg-333 text-white "} w-full p-2 rounded border border-amber-50`}
          key={index}
          onClick={() => setOrder_type(row.order_type)}
        >
          {row.text}
        </button>
      })}

    </div>
    <hr className={"my-1"}/>
  </div>);
};

export default TransActionTypeShow;
