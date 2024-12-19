import React, {Fragment,  useEffect, useState} from 'react';
import gold from "../../../assets/icons/gold-ingots.png";
import customer from "../../../assets/icons/office-man.png";
import license from "../../../assets/icons/license-plate.png";
import weight1 from "../../../assets/icons/weight1.png";
import priceTag from "../../../assets/icons/price-tag.png";
import money1 from "../../../assets/icons/money 1.png";
import calendar2 from "../../../assets/icons/calendar (2).png";
import "./last__orders__cards.scss"
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth.tsx";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate.tsx";
import Loader3 from "../../Loader/Loader3.tsx";
import {formatNumber} from "../../../utils/utilsFunction.tsx";

const LastOrdersAdmin = () => {
    const {auth} = useAuth()
    const myAxios = useAxiosPrivate()
  const {myData} = auth.socketData;
  // buy or sell
  const [lastOrderList, setLastOrderList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(0);

  const sendRequestToApprove = async (inputType, row) => {
    const submitText = "تایید کردن"
    const rejectText = " رد کردن"

    const textShow = inputType === 0 ? rejectText : submitText
    const yes = window.confirm(`
    شما در حال  ${textShow}   هستید.
    
    نام مشتری: ${row.full_name} 
    نوع: ${row.transaction_type}
    سفارش: ${row.product_name} 
    مبلغ کل: ${row.request_amount}
    
    
    `)

    if (!yes) {
      return
    }
    let url = "orders/AcceptRequest/"
    if (inputType === 0) {
      url = "orders/RejectRequest/"
    }
    const formData = new FormData();
    formData.append("order_id", row.order_id);
    //
    const tid = toast.loading("در حال ارسال...")
    const response111 = await myAxios.post( url, formData);
    toast.dismiss(tid)
    if (response111?.status === 200) {
      setReload(reload + 1)
      toast.success(response111?.data?.detail)
    }
  }

  useEffect(() => {

    const send = async () => {

      const url = "orders/GetRequestForAction/"
      setIsLoading(true)
      const responsee = await myAxios.get(url)
      setIsLoading(false)
      console.log(responsee)

      if (responsee?.data?.detail) {
        console.log(responsee.data.detail)

        setLastOrderList(responsee.data.detail)
      }
    }

    void send()


  }, [reload]);

  return (
    <div className={"secondary-background-color rounded p-1"}>
      <div
        className={""}
        style={{
          height: '65vh', overflowY: "scroll",
        }}
      >
        {isLoading && <Loader3/>}
        {lastOrderList?.length===0 &&  isLoading===false && <div className={"mt-48"}>
          هیچ سفارشی موجود نیست.
        </div>}
        {lastOrderList?.map((row, index) => {


          const bg_basedStatus =//
            row?.status === "pending" ? " bg-amber-200  border-r-amber-500 " ://
              row?.status === "accept" ? " bg-green-600 border-r-green-800 " ://
                row?.status === "reject" ? " bg-red-500  border-r-red-800 " : " bg-gray-500 "//
          return <Fragment key={index}>
            <div className={`last__orders__cards ${bg_basedStatus} my-2 rounded`}>
              <ul>
                <li>
                  <div className={"flex"}>
                    <img src={gold} alt=""/>
                    <div>
                      کالا
                    </div>
                  </div>
                </li>
                <li>{row?.product_name}</li>
                <li> {row?.transaction_type === "buy" ? "خرید" : "فروش"} </li>
              </ul>
              <ul>
                <li>
                  <div className={"flex"}>
                    <img src={customer} alt=""/>
                    <div>نام مشتری</div>
                  </div>
                </li>
                <li>{row?.full_name}</li>
                <li></li>
              </ul>
              <ul>
                <li>
                  <div className={"flex "}>
                    <img src={license} alt=""/>
                    شماره مشتری:
                  </div>
                </li>
                <li>{row?.client_id}</li>
                <li></li>
              </ul>
              <ul>
                <li>
                  <div className={"flex "}>
                    <img src={weight1} alt=""/>
                    <div>وزن</div>
                  </div>
                </li>
                <li>{row?.unit}</li>
                <li>گرم</li>
              </ul>
              <ul>
                <li>
                  <div className={"flex"}>
                    <img src={priceTag} alt=""/>
                    <div>فی</div>
                  </div>
                </li>
                <li>{(row?.request_amount / row?.unit).toFixed(0)}</li>
                <li>ريال</li>
              </ul>
              <ul>
                <li>
                  <div className={"flex"}>
                    <img src={money1} alt=""/>
                    <div>مبلغ کل:</div>
                  </div>
                </li>
                <li>{formatNumber(row?.request_amount)}</li>
                <li>ريال</li>
              </ul>
              <ul>
                <li>
                  <div className={"flex"}>
                    <img src={calendar2} alt=""/>
                    <div>تاریخ</div>
                  </div>
                </li>
                <li>{row?.create_at || "row.create_at"}</li>
                <li></li>
              </ul>
              <div>
                <div className='flex p-2 justify-between gap-2'>
                  <button onClick={() => sendRequestToApprove(1, row)} className={'w-full px-2 py-2 bg-green-700 rounded'}>تایید
                  </button>
                  <button onClick={() => sendRequestToApprove(0, row)} className={'w-full  px-2 py-2 bg-red-700 rounded'}>رد</button>
                </div>
              </div>
            </div>
          </Fragment>
        })}
      </div>
    </div>
  );
};

export default LastOrdersAdmin;
