import React from 'react';
import Loader3 from "../Loader/Loader3";
import {formatNumber} from "../../utils/utilsFunction";

const ItemsShow = ({myData}) => {
    return (
        <div
            className={"secondary-background-color rounded float-right  gap-2 w-full p-2 overflow-scroll"}
            style={{height: "80%"}}
        >
            {myData?.length === 0 && <div><Loader3/></div>}
            {myData?.map((item, index) => (
                <div className="w-1/4 bg-white rounded flex flex-col gap-2 h-32" key={item.id || index}>
                    <div className={"text-center font-bold mx-1  px-2 py-2 rounded"}>{item.type}</div>
                    <div className="flex  justify-between bg-green-700 mx-1 px-2 py-2 rounded  text-white">
                        <div>خرید</div>
                        <div>{formatNumber(item.sell_price)}</div>
                    </div>
                    <div className="flex  justify-between bg-red-600 mx-1 px-2 py-2 rounded text-white">
                        <div>فروش</div>
                        <div>{formatNumber(item.buy_price)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemsShow;
