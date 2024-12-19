import React from 'react';
import MyDatePicker from "../../../../Components/DatePicker/MyDatePicker";

const DateFilters = ({
                       dateFilter, setDateFilter,setFilterType
                     }) => {
  return (<div className={"flex  w-full "}>

    <div className={"flex items-center"}></div>
    <div className={"h-10"}>
      <MyDatePicker
        placeholder={"از تاریخ "}
        value={dateFilter.startDate}
        onChange={(date) => {
          setFilterType("multi")

          setDateFilter(ps => ({...ps, startDate: date.persianDateEnDigits,}))
        }}
      />
    </div>
    <div>
      <MyDatePicker
        placeholder={"تا تاریخ "}

        value={dateFilter.endDate}
        onChange={(date) => {
          setFilterType("multi")
          setDateFilter(ps => ({...ps, endDate: date.persianDateEnDigits,}))
        }}
      />
    </div>

  </div>);
};

export default DateFilters;
