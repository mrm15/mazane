import React from 'react';
import Loader3 from "../Loader/Loader3";
import {formatNumber} from "../../utils/utilsFunction";
import useAuth from "../../hooks/useAuth.tsx";

const ItemsShow = ({myData}) => {

    const {auth} = useAuth()
    const isMobile = auth?.isMobile
    return (
        <div
            className={"secondary-background-color overflow-scroll rounded"}
            style={{height: "80%"}}
        >
            <div className={"h-auto  flex flex-wrap gap-2 w-full p-2 items-start" + (isMobile ? "" : "  justify-center ")}>
                {myData?.length === 0 && (
                    <div>
                        <Loader3/>
                    </div>
                )}
                {myData?.map((item, index) => (
                    <div
                        key={item.id || index}
                        style={{width: isMobile ? "calc(50% - 0.5rem)" : "23%"}}
                        className={"bg-white rounded flex flex-col gap-2 p-2 " }
                    >
                        <div className="text-center font-bold">
                            {item.type}
                        </div>
                        <div className="flex justify-between bg-green-700 text-white rounded px-2 py-1">
                            <div>فروش</div>
                            <div>{formatNumber(item.sell_price)}</div>
                        </div>
                        <div className="flex justify-between bg-red-600 text-white rounded px-2 py-1">
                            <div> خرید</div>
                            <div>{formatNumber(item.buy_price)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemsShow;
