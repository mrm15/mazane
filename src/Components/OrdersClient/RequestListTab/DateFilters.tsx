import React from 'react';
import MyDatePicker from "../../MyDatePicker";
import MyDatePicker2 from "../../myDatePicker2/MyDatePicker2.tsx";

const DateFilters = ({
                       dateFilter, setDateFilter,setFilterType
                     }) => {
  return (<div className={"flex  w-full "}>

    <div className={"flex items-center"}></div>
    <div className={"h-10"}>
      <MyDatePicker2
        placeholder={"از تاریخ "}
        value={dateFilter.startDate}
        onChange={(date) => {
          setDateFilter(ps => ({...ps, startDate: date.persianDateEnDigits,}))
        }}
      />
    </div>
    <div>
      <MyDatePicker2
        placeholder={"تا تاریخ "}

        value={dateFilter.endDate}
        onChange={(date) => {
          setDateFilter(ps => ({...ps, endDate: date.persianDateEnDigits,}))
        }}
      />
    </div>
  </div>);
};

export default DateFilters;
