import React, { useEffect, useState} from 'react';
import useAuth from "../../../hooks/useAuth.tsx";
import ItemTypesList from "../RequestListTab/ItemTypesList.tsx";
import TransActionTypeShow from "../RequestListTab/TransActionTypeShow.tsx";
import SubmitBox from "../RequestListTab/SubmitBox.tsx";


const RequestTabClient = () => {
const {auth} = useAuth()
    const socketData = auth?.socketData
  // buy or sell
  const [order_type, setOrder_type] = useState("buy");

  const [selectedItemType, setSelectedItemType] = useState(undefined);
  useEffect(() => {
    if (socketData?.length > 0) {
      if (!selectedItemType) {
        setSelectedItemType(socketData[0])
      }
    }
  }, [socketData])
  return (<div>

    <ItemTypesList
      myData={socketData}
      selectedItemType={selectedItemType}
      setSelectedItemType={setSelectedItemType}
    />
    <TransActionTypeShow
      order_type={order_type}
      setOrder_type={setOrder_type}
    />
    <SubmitBox
      order_type={order_type}
      selectedItemType={selectedItemType}
    />


  </div>);
};

export default RequestTabClient;
