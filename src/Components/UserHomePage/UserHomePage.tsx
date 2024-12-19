import React, {useEffect, useState} from 'react';
import useAuth from "../../hooks/useAuth.tsx";
import Loader3 from "../Loader/Loader3.tsx";
import {formatNumber, getCurrentDate} from "../../utils/utilsFunction.tsx";
import "./userHomePage.scss"
import ContactInfo from "./ContactInfo.tsx";
import ItemsShow from "./ItemsShow.tsx";
import CurrentTimeShow from "../CurrentTimeShow/CurrentTimeShow.tsx";

const UserHomePage = () => {

    const {auth} = useAuth()
    const myData = auth?.socketData
    return (<>
        <div className={"bodyHeightHome"}
        >
            <div
                style={{height: "5%" ,
                overflow:"hidden"
                }}
            >
                <CurrentTimeShow />
            </div>
            <ItemsShow myData={myData} />
            <ContactInfo />
        </div>

    </>)
};

export default UserHomePage;
