import React, {useState} from 'react';

import toast from "react-hot-toast";
import {formatNumber} from "../../../utils/utilsFunction.tsx";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate.tsx";

const SubmitBox = ({
                       selectedItemType, order_type
                   }) => {

    const myAxios = useAxiosPrivate()
    const [value, setValue] = useState("")
    const showPrice = order_type === "buy" ? selectedItemType?.sell_price : selectedItemType?.buy_price
    const numericValue = parseFloat(value) || 0;
    const totalPrice = numericValue * showPrice;

    const change_price = async () => {

        if (!value) {
            toast.dismiss()
            toast("لطفا مقدار را وارد کنید")
            return
        }
        const yes = window.confirm(`
    نوع درخواست:    ${order_type === "buy" ? " خرید" : "فروش "} 
     اندازه:      ${value}
     دارایی:       ${selectedItemType.type}
     
     آیا تایید میکنید؟
    `)

        if (!yes) {
            return
        }

        const url = `orders/GoldRequest/`;
        const formData = new FormData();
        formData.append("product_id", selectedItemType.id);
        formData.append("order_type", order_type);
        formData.append("unit", value + "");

        let tId = undefined
        try {
            tId = toast.loading("در حال ثبت درخواست...")

            const response = await myAxios.post(url, formData)

            if (response.status === 200) {
                toast.success("در خواست ثبت شد.")
                setValue("")
            }

        } catch (error) {
            console.log(error)
        } finally {
            toast.dismiss(tId)
        }

    }

    const bgColor = (order_type === "sell" ? " bg-red-400 " : " bg-green-400 ") + " rounded py-2"
    return (
        <div className={"secondary-background-color rounded p-1 my-2"}>
            <div className={"w-full   p-4 rounded flex flex-col gap-2"}>
                <div>
                    <input
                        placeholder={"مقدار یا تعداد را وارد کنید"}
                        type="text"
                        value={value}
                        className={"w-full px-4 py-2 rounded text-center bg-gray-200"}
                        onClick={(e: any) => e?.target?.select()}
                        onChange={(e: any) => setValue(e.target.value)}
                    />
                </div>
                <div className={bgColor}>
                    مبلغ واحد:
                    {formatNumber(showPrice)}
                </div>
                <div className={bgColor}>
                    مبلغ کل:
                    &nbsp;
                    {formatNumber(totalPrice)}
                </div>
                <button

                    onClick={change_price}
                    className={"bg-gray-800 text-white w-full rounded py-2"}>
                    تایید سفارش
                </button>
            </div>
        </div>
    )
};

export default SubmitBox;
