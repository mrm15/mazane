import React from 'react';
import MyDatePicker from "../../MyDatePicker";
import MyDatePicker2 from "../../myDatePicker2/MyDatePicker2.tsx";

const DateFilters = ({
                       dateFilter, setDateFilter,setFilterType
                     }) => {
  return (<div className={"flex flex-wrap justify-between w-full "}>

    <div className={"calc50-05rem"}>
      <MyDatePicker2
        placeholder={"از تاریخ "}
        value={dateFilter.startDate}
        onChange={(date) => {
          setDateFilter(ps => ({...ps, startDate: date.persianDateEnDigits,}))
        }}
      />
    </div>
    <div className={"calc50-05rem"}>
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
