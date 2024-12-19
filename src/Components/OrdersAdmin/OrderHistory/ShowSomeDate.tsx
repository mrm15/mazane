import React, {useState} from 'react';
import {p2e} from "../../../../utils/Functions/NumericFunction";

const ShowSomeDate = ({setSingleDate, singleDate, setFilterType,setDateFilter}) => {
  const calculateDates = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const dayBeforeYesterday = new Date(today);
    dayBeforeYesterday.setDate(today.getDate() - 2);

    const twoDaysBeforeYesterday = new Date(today);
    twoDaysBeforeYesterday.setDate(today.getDate() - 3);

    const yesterdayEnDigits = p2e(yesterday.toLocaleDateString('fa-ir'))
    const dayBeforeYesterdayEnDigits = p2e(dayBeforeYesterday.toLocaleDateString('fa-ir'))
    const twoDaysBeforeYesterdayEnDigits = p2e(twoDaysBeforeYesterday.toLocaleDateString('fa-ir'))


    return [{id: 1, value: yesterdayEnDigits, text: "دیروز"}, {
      id: 2, value: dayBeforeYesterdayEnDigits, text: "پری روز"
    }, {id: 3, value: twoDaysBeforeYesterdayEnDigits, text: "پس پری روز"},];
  };

  const types = calculateDates();

  return (<div className="flex w-full gap-2">
    {types.map((row) => {
      return (<button
        key={row.id + "sampleThis"} // Use row.id for unique keys
        className={`flex-1 basis-1/3 px-1 py-2 border rounded  ${row.id === singleDate?.id ? " bg-white text-black " : "  bg-333 text-white "}`}
        onClick={() => {
          setFilterType("single")
          setSingleDate(row)
          setDateFilter({
            startDate: row.value,
            endDate: row.value,
          })

        }}
      >
        {row.text}
      </button>);
    })}
  </div>);
};

export default ShowSomeDate;
