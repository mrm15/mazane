import React, {useState} from 'react';
import CurrentTimeShow from "../CurrentTimeShow/CurrentTimeShow.tsx";
import {RiSendPlaneFill} from "react-icons/ri";
import {MdMenu} from "react-icons/md";
import LastOrdersAdmin from "./LastOrders/LastOrdersAdmin.tsx";



const OrdersAdmin = () => {

    // request   requestList
    const [selectedTab, setSelectedTab] = useState("request")

    const requestTabSelected = selectedTab === "request"
    return (<div className={"text-center flex justify-center w-full"}
    >
        <div
            className={"rounded w-full"}
        >
            <div className={"secondary-background-color rounded p-1"}>
                <div
                    className={"p-1  rounded gap-2 flex justify-around text-center"}>
                    <button
                        className={"py-3 px-2 flex flex-wrap w-1/2 rounded " + (requestTabSelected ? " bg-white text-black " : "  bg-333 text-white ")}
                        onClick={() => setSelectedTab("request")}>

                        <div>
                            <RiSendPlaneFill size={20}
                                             className={!requestTabSelected ? " text-white " : " text-black "}/>
                        </div>
                        {/*{requestTabSelected ? <img src={blackSend} alt={"blackSend"}/> : <img src={whiteSend} alt={"blackSend"}/>}*/}
                        &nbsp;&nbsp;
                        <div>
                            درخواست
                        </div>
                    </button>
                    <button
                        className={"py-3 px-2 flex flex-wrap items-center w-1/2 rounded " + (!requestTabSelected ? " bg-white text-black " : " bg-333 text-white ")}
                        onClick={() => setSelectedTab("requestList")}>
                        <div

                        >
                            <MdMenu size={20} className={requestTabSelected ? " text-white " : " text-black "}/>
                            {/*{!requestTabSelected ? <img style={{width:15}} src={burgerBlack} alt={"blackSend"}/> :<img src={burgerWhite} alt={"blackSend"}/>}*/}

                        </div>
                        <div>
                            &nbsp;&nbsp;

                            لیست درخواست
                        </div>

                    </button>
                </div>
            </div>

            <CurrentTimeShow/>

            <div>
                {selectedTab === "request" ? <LastOrdersAdmin/> : <>
                    {/*<OrderHistory/>*/}
                </>}
            </div>

        </div>
    </div>);
}

export default OrdersAdmin;
