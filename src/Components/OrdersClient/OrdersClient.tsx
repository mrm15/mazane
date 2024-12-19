import React, {useState} from 'react';
import whiteSend from '../../assets/icons/whiteSend.png';
import blackSend from '../../assets/icons/blackSent.png';
import burgerWhite from '../../assets/icons/menu-burger-white.png';
import burgerBlack from '../../assets/icons/menu-burger.png';
import RequestTabClient from "./RequestTab/RequestTabClient.tsx";
import RequestListTabClient from "./RequestListTab/RequestListTabClient.tsx";

const OrdersClient = () => {

    // request   requestList
    const [selectedTab, setSelectedTab] = useState("request")

    const requestTabSelected = selectedTab === "request"
    return (<div className={"text-center flex justify-center w-full"}>
        <div className={"rounded w-full"}>
            <div className={"secondary-background-color rounded p-1"}>
                <div
                    className={"p-1  rounded gap-2 flex justify-around text-center"}>
                    <button
                        className={"py-3 px-2 flex flex-wrap w-1/2 rounded " + (requestTabSelected ? " bg-white text-black " : "  bg-333 text-white ")}
                        onClick={() => setSelectedTab("request")}>

                        {requestTabSelected ? <img src={blackSend} alt={"blackSend"}/> : <img src={whiteSend} alt={"blackSend"}/>}
                        &nbsp;&nbsp;
                        <div>
                            درخواست
                        </div>
                    </button>
                    <button
                        className={"py-3 px-2 flex flex-wrap w-1/2 rounded " + (!requestTabSelected ? " bg-white text-black " : " bg-333 text-white ")}
                        onClick={() => setSelectedTab("requestList")}>
                        <div

                        >
                            {!requestTabSelected ? <img style={{width:15}} src={burgerBlack} alt={"blackSend"}/> :
                                <img src={burgerWhite} alt={"blackSend"}/>}

                        </div>
                        <div>
                            &nbsp;&nbsp;

                            لیست درخواست             </div>

                    </button>
                </div>
            </div>
            <div>
                {selectedTab === "request" ? <RequestTabClient/> : <RequestListTabClient/>}
            </div>
        </div>
    </div>);
};

export default OrdersClient;
