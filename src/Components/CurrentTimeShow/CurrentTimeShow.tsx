import React, {useEffect, useState} from 'react';
import {getCurrentDate} from "../../utils/utilsFunction.tsx";

const CurrentTimeShow = () => {
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

    return (
        <div className={'flex justify-between text-white'}>
            <div>
                آخرین بروزرسانی قیمت
            </div>
            <div className={"rtl flex flex-row-reverse "}>
                <div>  {currentTime.persianDate}</div>
                <div>&nbsp;</div>
                <div> {currentTime.persianTime}</div>

            </div>
        </div>
    )
};

export default CurrentTimeShow;
