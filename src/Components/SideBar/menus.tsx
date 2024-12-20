import {MdAssignmentAdd, MdLocalFireDepartment, MdOutlineDashboard, MdOutlineSavings} from "react-icons/md";
import {PAGES} from "../../Pages/Route-string";
import {RiBillLine} from "react-icons/ri";
import {BsBuildingFill, BsFillModemFill, BsPersonVideo2, BsPiggyBank} from "react-icons/bs";
import {FaShapes} from "react-icons/fa6";
import { MdAssignmentTurnedIn } from "react-icons/md";
import {FaBeer, FaEnvelope, FaPiggyBank} from "react-icons/fa";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaFileAlt, FaShareSquare} from "react-icons/fa";
import {AiFillSetting, AiOutlineOrderedList} from "react-icons/ai";
import {IconType} from "react-icons";
import {ROLES} from "../../Pages/ROLES.tsx";
import { RiShareForward2Fill } from "react-icons/ri";


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


export const getMenus=(): MenuType => [
    {name: "داشبورد", link: '/', icon: MdOutlineDashboard, margin: false, showItem: true,},
    {
        name: "گزارش مدیر",
        link: PAGES.adminReport,
        icon: RiBillLine,
        showItem: true,
    },
    {
        name: "خروجی انبار",
        link: PAGES.reportBill,
        icon: RiBillLine,
        showItem: true,
    },
    {
        name: "لیست فاکتور",
        link: PAGES.basted_bandi_ersal,
        icon: RiBillLine,
        showItem: true ,
    },
    {
        name: "فاکتورهای من",
        link: PAGES.showMyBillListForCustomer,
        icon: RiBillLine,
        showItem: true,
    },



    //
    {
        name: "ثبت سفارش",
        link: PAGES.ticket_Create,
        icon: MdAssignmentAdd,
        showItem:true,
    },
    {
        // اگه دسترسی ثبت سفارسش داشت پس باید دسترسی پیگیری سفارش هم داشته باشه
        name: "پیگیری سفارش",
        link: PAGES.ticket_created_by_me,
        icon: MdAssignmentTurnedIn,
        showItem: true,
    },
    {
        name: "محاسبه قیمت",
        link: PAGES.submit_bill,
        icon: FaBeer,
        showItem: true,
    },

    {
        name: "قلک من",
        link: PAGES.myBank,
        icon: BsPiggyBank,
        showItem: true,
    },
    {
        name: "قلک کلی",
        link: PAGES.allBanks,
        icon: MdOutlineSavings,
        showItem: true,
    },
    {
        name: "قلک مدیر",
        link: PAGES.myBankDepartment,
        icon: FaPiggyBank,
        showItem: true,
    },
    // {
    //     name: "کل تیکت های من",
    //     link: PAGES.ticket_read_my_all_tickets,
    //     icon: FaBarsStaggered,
    //     showItem: roleAccessList?.includes('ticketReadOwnReceived'),
    // },

    {
        // اگه کاربری ادمین دپارتمان باشه میتونه اینو ببینه. به همین سادگی
        name: "ورودی دپارتمان",
        link: PAGES.ticket_read_department_tickets,
        icon: HiInboxArrowDown ,
        showItem: true,
    },
    {
        name: "لیست سفارش ها",
        // link: PAGES.ticket_Read_Own,
        link: PAGES.MyTicketList,
        icon: AiOutlineOrderedList ,
        showItem: true,
    },
    {
        name: "صندوق ورودی",
        // link: PAGES.ticket_Read_Own,
        link: PAGES.ticket_read_assign_tickets_inbox,
        icon: FaEnvelope,
        showItem: true,
    },
    {
        name: "ارجاع شده ها",
        link: PAGES.ticket_read_assign_tickets_outbox,
        icon: FaShareSquare,
        showItem: true,
    },
    {
        name: "کل ارجاعات",
        link: PAGES.ticket_read_assign_tickets_all,
        icon: RiShareForward2Fill,
        showItem: true,
        margin:true,
    },
    {
        name: "کل سفارشات سامانه",
        link: PAGES.ticket_Read_All,
        icon: MdLocalFireDepartment,
        showItem: true,
    },
    //
    {
        name: "تنظیمات مدیر",
        link: PAGES.admin_settings,
        icon: AiFillSetting,
        showItem:true,
    },
    // {
    //     name: "افزودن کاربر",
    //     link: PAGES.USER_ADD_EDIT,
    //     icon: IoPersonAddSharp,
    //     showItem: roleAccessList?.includes('userCreate'),
    // },
    {
        name: "مشاهده کاربر",
        link: PAGES.USER_LIST,
        icon: BsPersonVideo2,
        showItem: true,
    },



];
