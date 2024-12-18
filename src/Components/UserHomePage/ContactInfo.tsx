import { FiPhone } from 'react-icons/fi';
import {FaStar} from "react-icons/fa6";

const ContactInfo = () => {
    return (
        <div className="rounded  text-white text-center" style={{ minHeight: "15%" }}>
            <h2 className=" mb-1 ">
                با عرض احترام و خسته نباشید خدمت دوستان و همکاران عزیز
            </h2>
            <p className="">
                جهت حسابداری و جابجایی فیش و دریافت و پرداخت پول فقط و فقط با شماره های زیر تماس بگیرید:
            </p>
            <div className="flex justify-around">
                <div className="flex items-center rtl:space-x-reverse">
                    <FiPhone  className="text-white" /> &nbsp;
                    <a href={"tel:09122369262"} className="font-medium text-base">09122369262</a>
                </div>
                <div className="flex items-center  rtl:space-x-reverse">
                    <FiPhone className="text-white" />
                    &nbsp;
                    <a href={"tel:02133934623"} className="font-medium text-base">021-33934623</a>
                </div>
            </div>
            <div className="flex justify-center">
                <FaStar className="text-white"  />
               <div> با سپاس فراوان</div>
                <FaStar className="text-white" />
            </div>
        </div>
    );
};

export default ContactInfo;
