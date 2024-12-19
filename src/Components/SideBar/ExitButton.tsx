import React from 'react';
import {ImExit} from "react-icons/im";
import Cookies from "js-cookie";

const ExitButton = () => {

    const handleLogOut=()=>{
        const yes = window.confirm("شما در حال خروج از برنامه هستید. آیا مطمئنید؟")
        if (yes) {
            Cookies.remove('jwttoken');
            window.location.href = '/login';
            window.location.reload()
        }
    }

    return (
        <div
            onClick={handleLogOut}
            style={{
            background:"red",
            position:"absolute",
            bottom:0,
            marginBottom:10,
        }}
        className={"flex  w-full p-2 rounded items-center justify-between text-white"}
        >
            <div><ImExit size={20} /></div>
            <div className={"font-bold text-sm"}>خروج</div>
        </div>
    );
};

export default ExitButton;
