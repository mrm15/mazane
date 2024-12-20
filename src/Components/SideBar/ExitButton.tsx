import React from 'react';
import {ImExit} from "react-icons/im";
import Cookies from "js-cookie";

const ExitButton = () => {

    const handleLogOut = () => {
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
                position: "absolute",
                bottom: 0,
                marginBottom: 10,
            }}

        >
            <div>
                <div className={"text-black"}>طراحی شده توسط گروه برنامه نویسی
                    &nbsp;
                    <b>هوش رو</b>
                </div>
            </div>
            <div
                className={"flex bg-red-700  w-full p-2 rounded items-center justify-between text-white cursor-pointer"}
            >
                <div><ImExit size={20}/></div>
                <div className={"font-bold text-sm"}>خروج</div>
            </div>
        </div>
    );
};

export default ExitButton;
