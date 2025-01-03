import React, {useContext, useEffect, useState} from 'react';
import DateFilters from "./DateFilters";
import ShowItemType from "./ShowItemType";
import ShowSomeDate from "./ShowSomeDate";
import DataShow from "./DataShow/DataShow";
import toast from "react-hot-toast";
import ShowClientsSection from "./ShowClientsSection";
import {p2e} from "../../../utils/NumericFunction.tsx";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate.tsx";


const OrderHistoryAdmin = () => {

  const currentDate = new Date().toLocaleDateString('fa-ir')
  const currentDateEnDigits = p2e(currentDate)
  // multiDate singleDate
  const [filterType, setFilterType] = useState("multi");
  const [dateFilter, setDateFilter] = useState({
    startDate: currentDateEnDigits, endDate: currentDateEnDigits,
  })


  const [selectedClient, setSelectedClient] = useState({client_id : -1})
  const [singleDate, setSingleDate] = useState(undefined)

  //cardShow tableShow
  const [showType, setShowType] = useState("cardShow")

  // گرمی /  سکه|گرمی /  سکه
  //gram both sekke
  const [itemType, setItemType] = useState("both")


  const [data, setData] = useState([])

const myAxios = useAxiosPrivate()
  useEffect(() => {
    const send = async () => {
      //اول ببینیم تاریخ فازش چیه؟
      // اگه مولتی بود ینی باید تاریخ شروع و پایان رو نگاه کنیم و بفرستیم بک
      // اگه سینگل بود باید بریم مقدار سینگل دیت رو بگیریم و برای  شروع و پایان ست کنیم و بفرستیم بک
      const sendBackDate = {
        startDate: "", endDate: "",
      }

      if (filterType === "single") {
        if (!singleDate) {
          return
        }
        sendBackDate.startDate = singleDate?.value;
        sendBackDate.endDate = singleDate?.value
      } else if (filterType === "multi") {
        sendBackDate.startDate = dateFilter.startDate;
        sendBackDate.endDate = dateFilter.endDate
      } else {
        console.log("خطا در مقدار تاریخ..")
        return
      }
      const formData = new FormData();
      formData.append("start_date", sendBackDate.startDate);
      formData.append("end_date", sendBackDate.endDate);
      if(selectedClient.client_id!==-1) {
        // @ts-ignore
          formData.append("client_id", selectedClient.client_id);
      }
      const url = "https://hoshro.com/orders/ClientGetRequestHistory/";
      toast.dismiss()
      const tId = toast.loading("در حال به روز رسانی اطلاعات...")
      try {
        const response = await myAxios.post(url, formData)
        console.log(response?.data?.detail)
        if (response?.data?.detail) {

          let tempData = response?.data?.detail
          if (itemType !== "both") {
            tempData = tempData.filter(row => {
              return (row.unit_type === itemType)
            })
          }
          setData(tempData)
        }
      } catch (error) {
        console.log("error:   ", error)
      } finally {
        toast.dismiss(tId)
      }
    }
    void send()

  }, [singleDate, dateFilter.startDate, dateFilter.endDate, filterType, itemType,selectedClient])

  return (<div>

    <div className={"secondary-background-color rounded p-1 "}>
      <ShowClientsSection selectedClient={selectedClient} setSelectedClient={setSelectedClient}/>

      <DateFilters setFilterType={setFilterType} dateFilter={dateFilter} setDateFilter={setDateFilter}/>
      <ShowItemType itemType={itemType} setItemType={setItemType}/>
      <ShowSomeDate setDateFilter={setDateFilter} setFilterType={setFilterType} singleDate={singleDate} setSingleDate={setSingleDate}/>

      <DataShow data={data} showType={showType}/>
    </div>
  </div>);
};

export default OrderHistoryAdmin;
