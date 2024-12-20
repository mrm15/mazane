import {MdAssignmentAdd, MdLocalFireDepartment, MdOutlineDashboard, MdOutlineSavings} from "react-icons/md";
import {PAGES} from "../../Pages/Route-string";
import {RiBillLine} from "react-icons/ri";
import {BsBuildingFill, BsFillModemFill, BsPersonVideo2, BsPiggyBank} from "react-icons/bs";
import {FaShapes} from "react-icons/fa6";
import {MdAssignmentTurnedIn} from "react-icons/md";
import {FaBeer, FaEnvelope, FaPiggyBank} from "react-icons/fa";
import {HiInboxArrowDown} from "react-icons/hi2";
import {FaFileAlt, FaShareSquare} from "react-icons/fa";
import {AiFillSetting, AiOutlineOrderedList} from "react-icons/ai";
import {IconType} from "react-icons";
import {ROLES} from "../../Pages/ROLES.tsx";
import {RiShareForward2Fill} from "react-icons/ri";


type CustomIconType = {
    icon: IconType;
    size: string;
}


type MenuType = {
    name: string;
    link: string;
    icon?: any | CustomIconType;
    margin?: boolean;
    showItem?: boolean;
}[]


export const getAdminMenu = (): MenuType => [
    {
        name: "خانه",
        link: '/',
        icon: MdOutlineDashboard,
        margin: false,
        showItem: true,
    },
    {
        name: "درخواست های من",
        link: PAGES.orders,
        icon: RiBillLine,
        showItem: true,
    },
    {
        name: "احراز هویت",
        link: PAGES.homePage,
        icon: RiBillLine,
        showItem: true,
    },
    {
        name: "ارسال فیش و فایل",
        link: PAGES.homePage,
        icon: RiBillLine,
        showItem: true,
    },
    {
        name: "شرایط و قوانین",
        link: PAGES.homePage,
        icon: RiBillLine,
        showItem: true,
    },


    //
    {
        name: "درباره ما",
        link: PAGES.homePage,
        icon: MdAssignmentAdd,
        showItem: true,
    },
    {
        // اگه دسترسی ثبت سفارسش داشت پس باید دسترسی پیگیری سفارش هم داشته باشه
        name: "مانده حساب",
        link: PAGES.homePage,
        icon: MdAssignmentTurnedIn,
        showItem: true,
    },



];
