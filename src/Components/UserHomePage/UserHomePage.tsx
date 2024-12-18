import React, {useEffect, useState} from 'react';
import useAuth from "../../hooks/useAuth.tsx";
import Loader3 from "../Loader/Loader3.tsx";
import {formatNumber, getCurrentDate} from "../../utils/utilsFunction.tsx";
import "./userHomePage.scss"
import ContactInfo from "./ContactInfo.tsx";

const UserHomePage = () => {

    const {auth} = useAuth()
    const myData = auth?.socketData

    const [currentTime, setCurrentTime] = useState({
        date: new Date(),
        persianStringDateTime: "",
        persianDate: "",
        persianTime: "",
    });
    useEffect(() => {
        const interval = setInterval(() => {
            const persianStringDateTime = getCurrentDate(true);
            const persianStringDateTimeSplitArray = persianStringDateTime?.split(",")
            setCurrentTime({
                date: new Date(),
                persianStringDateTime,
                persianDate: persianStringDateTimeSplitArray[0],
                persianTime: persianStringDateTimeSplitArray[1],
            });
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (<>
        <div className={"bodyHeightHome"}
        >
            <div className={'flex justify-between text-white'}
                 style={{height: "5%"}}
            >
                <div>
                    آخرین بروزرسانی قیمت
                </div>
                <div className={"rtl flex flex-row-reverse "}>
                    <div>  {currentTime.persianDate}</div>
                    <div>&nbsp;</div>
                    <div> {currentTime.persianTime}</div>

                </div>
            </div>
            <div className={"secondary-background-color rounded grid grid-cols-2 gap-2 w-full p-2 shadow overflow-scroll"}
                 style={{height: "80%"}}
            >
                {myData?.length === 0 && <div><Loader3/></div>}
                {myData?.map((item, index) => (
                    <div className="bg-white rounded flex flex-col gap-2 h-32" key={item.id || index}>
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

            <ContactInfo />
        </div>

    </>)
};

export default UserHomePage;
