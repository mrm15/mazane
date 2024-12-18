import React, {useEffect, useState} from 'react';
import useAuth from "../../hooks/useAuth.tsx";
import Loader3 from "../Loader/Loader3.tsx";
import {formatNumber, getCurrentDate} from "../../utils/utilsFunction.tsx";
import "./userHomePage.scss"
import ContactInfo from "./ContactInfo.tsx";
import ItemsShow from "./ItemsShow.tsx";

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
            <ItemsShow myData={myData} />
            <ContactInfo />
        </div>

    </>)
};

export default UserHomePage;
