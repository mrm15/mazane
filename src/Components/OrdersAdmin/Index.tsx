import React, {useState} from 'react';
import LastOrders from "./LastOrders/LastOrders";
import OrderHistory from "./OrderHistory/OrderHistory";
import BoxRounded from "../../../Components/UI/BoxRounded/BoxRounded";
import whiteSend from '../../../assets/icons/whiteSend.png';
import blackSend from '../../../assets/icons/blackSent.png';
import burgerWhite from '../../../assets/icons/menu-burger-white.png';
import burgerBlack from '../../../assets/icons/menu-burger.png';
import ShowTimeSection from "./ShowTimeSection";

const ClientRequestPageNew = () => {

  // request   requestList
  const [selectedTab, setSelectedTab] = useState("request")

  const requestTabSelected = selectedTab === "request"
  return (<div className={"w-screen mx-auto text-center flex justify-center "}

  >
    <div
      className={"w-11/12 px-1 rounded lg:w-1/2 lg:mr-72"}

    >
      <BoxRounded>
        <div
          className={"p-1  rounded gap-2 flex justify-around text-center"}>
          <button
            className={`py-3 px-2 flex flex-wrap w-1/2 rounded  ${requestTabSelected ? " bg-white text-black " : " bg-333 text-white "}` }

            onClick={() => setSelectedTab("request")}>

            {requestTabSelected ? <img src={blackSend} alt={"blackSend"}/> : <img src={whiteSend} alt={"blackSend"}/>}
            &nbsp;&nbsp;
            <div>
              آخرین سفارشات
            </div>
          </button>
          <button
            className={`py-3 px-2 flex flex-wrap w-1/2 rounded ${!requestTabSelected ? " bg-white text-black " : " bg-333 text-white "} ` }

            onClick={() => setSelectedTab("requestList")}>
            <div>
              {!requestTabSelected ? <img style={{width:15}} src={burgerBlack} alt={"blackSend"}/> :
                <img src={burgerWhite} alt={"blackSend"}/>}

            </div>
            <div>
              &nbsp;&nbsp;

              تاریخچه              </div>

          </button>
        </div>
      </BoxRounded>

      <ShowTimeSection />

        {selectedTab === "request" ? <LastOrders/> : <OrderHistory/>}

    </div>
  </div>);
}

export default ClientRequestPageNew;
