import React, {useEffect , ChangeEvent} from 'react';
import {formatNumber} from "../../utils/utilsFunction";
import useObjectDataHolder from "../../hooks/UseObjectDataHolder.tsx";
import InputItemOperator from "./InputItemOperator.tsx";
import {toast} from "react-hot-toast";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.tsx";

const SingleBoxShowOperator = ({item, isMobile}) => {

    const [price, setPrice] = useObjectDataHolder({
        sellPrice: item.sell_price,
        buyPrice: item.buy_price
    })

    useEffect(() => {
        setPrice({
            buyPrice: item.buy_price,
            sellPrice: item.sell_price,
        })
    }, [item]);

    const changePriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const myKey = e.target.name;
        const myValue = (e.target.value)?.replace(/[^\d.]/g, "")
        setPrice({[myKey]: myValue});
    }


    const myAxios = useAxiosPrivate()
    const handleSubmitNewPrice=async () => {

        const yes = window.confirm(`ثبت قیمت جدید:
        ${item.type}
        قیمت خرید: ${formatNumber(price.buyPrice)}
        قیمت فروش: ${formatNumber(price.sellPrice)}
          
          تایید؟
        `)


        if (!yes) {
            return
        }

        const formData = new FormData();
        formData.append("product_id", item.id);
        formData.append("buy_price", price.buyPrice);
        formData.append("sell_price", price.sellPrice);

        let tId
        try {
            tId = toast.loading("در حال ارسال...")

            const response = await myAxios.post('api/operator/change_price/', formData);
            if (response.status === 200) {
                toast.success("قیمت به روز شد")
                console.log(response);
            } else {
                console.error(response.status);
            }
        } catch (error) {
            console.error(error);
        } finally {
            toast.dismiss(tId);
        }
    };


    return (
        <div
            key={item.id}
            style={{width: isMobile ? "calc(50% - 0.5rem)" : "23%"}}
            className={"bg-white rounded flex flex-col gap-2 p-2 "}
        >
            <div className="text-center font-bold">
                {item.type}
            </div>
            <div className="flex justify-between bg-green-700 text-white rounded px-2 py-1">
                <div>خرید</div>
                <div>
                    {/*{formatNumber(item.sell_price)}*/}
                    <InputItemOperator
                        changePriceHandler={changePriceHandler}
                        type={"text"}
                        name={"sellPrice"}
                        value={price.sellPrice}
                    />
                </div>
            </div>
            <div className="flex justify-between bg-red-600 text-white rounded px-2 py-1">
                <div>فروش</div>
                <div>
                    {/*{formatNumber(item.buy_price)}*/}
                    <InputItemOperator
                        changePriceHandler={changePriceHandler}
                        type={"text"}
                        name={"buyPrice"}
                        value={price.buyPrice}
                    />
                </div>
            </div>
            <button

                onClick={handleSubmitNewPrice}
                className={"bg-333 text-white text-center rounded px-2 py-1"}>
                ثبت قیمت
            </button>
        </div>
    );
};

export default SingleBoxShowOperator;
