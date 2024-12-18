import React, {useEffect, useState} from 'react';
import useAuth from "../../hooks/useAuth.tsx";
import Loader3 from "../Loader/Loader3.tsx";
import {formatNumber, getCurrentDate} from "../../utils/utilsFunction.tsx";
import "./userHomePage.scss"

const UserHomePage = () => {

    const {auth} =useAuth()
    const myData = auth?.socketData

    const [currentTime, setCurrentTime] = useState({
        date:new Date(),
        persianStringDateTime:"",
    });
    useEffect(() => {
        const interval = setInterval(() => {
            const persianStringDateTime = getCurrentDate(true);
            setCurrentTime({
                date: new Date(),
                persianStringDateTime
            });
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (<>
        <div className='HomeMainCont1'>
            <div className='flex justify-between'>
                <div>
                    آخرین بروزرسانی قیمت
                </div>
                <div>
                    {currentTime.persianStringDateTime}
                </div>
            </div>
            <div className="HomeItemsContainer-cl">
                {/* <div className='HomeItems'> */}
                {myData?.length === 0 && <Loader3/>}
                {myData.map((item, index) => (<div className="homeItem-cl" key={item.id || index}>
                    <p>{item.type}</p>
                    <div className="buyCost-cl">
                        <p>خرید</p>
                        <p>{formatNumber(item.sell_price)}</p>
                    </div>
                    <div className="saleCost-cl">
                        <p>فروش</p>
                        <p>{formatNumber(item.buy_price)}</p>
                    </div>
                </div>))}


                {/* </div> */}
            </div>
            <p className='description-cl'>
                با عرض احترام و خسته نباشید خدمت دوستان و همکاران عزیز جهت حسابداری و جابجایی فیش و دریافت و پرداخت
                پول فقط وفقط و فقط با شماره های تماس زیر تماس بگیرید. ۰۹۱۲۲۳۶۹۲۶۲ ۰۲۱-۳۳۹۳۴۶۲۳ **با سپاس فراوان**
            </p>
        </div>
    </>)
};

export default UserHomePage;
