import React from 'react';
import Loader3 from "../../Loader/Loader3.tsx";

const ItemTypesList = ({
                         myData, selectedItemType, setSelectedItemType,
                       }) => {
    console.log(JSON.stringify(selectedItemType))

    if (myData?.length === 0) {
        return <Loader3/>
    }

    return <div className={"secondary-background-color rounded p-2 mt-2"}>
        <div className={`w-full  rounded 
  flex flex-wrap  justify-start gap-1   
  `}>
            {myData?.map(singleItem => {
                return <button
                    onClick={() => setSelectedItemType(singleItem)}
                    key={singleItem.id}
                    className={`${singleItem?.id === selectedItemType?.id ? "bg-white text-black " : " bg-333 text-white "}  px-1 rounded border border-amber-50 h-12 flex-1 basis-1/4 `}>
                    {singleItem?.type}
                </button>
            })}
        </div>
    </div>
};

export default ItemTypesList;
