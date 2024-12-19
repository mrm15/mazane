import React from 'react';
import gold from "../../../../assets/icons/gold-ingots.png";
import weight1 from "../../../../assets/icons/weight1.png";
import priceTag from "../../../../assets/icons/price-tag.png";
import money1 from "../../../../assets/icons/money 1.png";
import calendar2 from "../../../../assets/icons/calendar (2).png";

const SingleCardView = ({row}) => {

    const bg_basedStatus =//
        row?.status === "pending" ? " bg-amber-200  border-r-amber-500 " ://
            row?.status === "accept" ? " bg-green-600 border-r-green-800 " ://
                row?.status === "reject" ? " bg-red-500  border-r-red-800 " : " bg-gray-500 "//

    const statusText =//
        row?.status === "pending" ? " در حال بررسی " ://
            row?.status === "accept" ? " تایید شده " ://
                row?.status === "reject" ? " رد شده " : " نامشخص "//


    const transaction_type = row?.transaction_type === "buy" ? " خرید " : row?.transaction_type === "sell" ? "فروش  " : " نامشخص "//


    return (<div className={`px-2 rounded my-1  border-r-4 ${bg_basedStatus}  last__orders__cards`}
                 style={{fontSize: 12}}
    >
        <ul className={"flex w-full justify-between"}>
            <li>
                <div className={"flex"}>
                    <img src={gold} alt=""/>
                    <div>  &nbsp; سفارش</div>
                </div>
            </li>
            <li></li>
            <li>{transaction_type}</li>
        </ul>
        <ul className={"flex w-full justify-between"}>
            <li>
                <div className={"flex "}>
                    <img src={weight1} alt=""/>
                    <div>
                        &nbsp;
                        مشتری:
                    </div>
                </div>
            </li>
            <li>{row?.full_name}</li>
            <li>{"  "}</li>
        </ul>
        <ul className={"flex w-full justify-between"}>
            <li>
                <div className={"flex"}>
                    <img src={gold} alt=""/>
                    <div>  &nbsp; کالا</div>
                </div>
            </li>
            <li>{row?.product_name}</li>
            <li> {statusText}</li>
        </ul>
        <ul className={"flex w-full justify-between"}>
            <li>
                <div className={"flex "}>
                    <img src={weight1} alt=""/>
                    <div>
                        &nbsp;
                        وزن
                    </div>
                </div>
            </li>
            <li>{row?.unit}</li>
            <li>{" گرم "}</li>
        </ul>

        <ul className={"flex w-full justify-between"}>
            <li>
                <div className={"flex"}>
                    <img src={priceTag} alt=""/>
                    <div>
                        &nbsp;
                        فی
                    </div>
                </div>
            </li>
            <li>{(row?.request_amount / row.unit).toFixed(0)}</li>
            <li>{"تومان"}</li>
        </ul>
        <ul className={"flex w-full justify-between"}>
            <li>
                <div className={"flex"}>
                    <img src={money1} alt=""/>
                    <div>
                        &nbsp;
                        مبلغ کل:
                    </div>
                </div>
            </li>
            <li>{row?.request_amount}</li>
            <li>{"تومان"}</li>
        </ul>
        <ul className={"flex w-full justify-between"}>
            <li>
                <div className={"flex"}>
                    <img src={calendar2} alt=""/>
                    <div>
                        &nbsp;
                        تاریخ
                    </div>
                </div>
            </li>
            <li>
                <div className={"ltr"}>
                    {row?.create_at}
                </div>
            </li>
        </ul>
        {/*<ul className={"flex w-full justify-between"}>*/}
        {/*  <li>شماره فاکتور: {row.unit}</li>*/}
        {/*  <li>شماره ردیف سند: {row.unit}</li>*/}
        {/*</ul>*/}
    </div>);
};

export default SingleCardView;
