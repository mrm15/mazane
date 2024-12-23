import React, {useEffect} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {Link, useNavigate} from "react-router-dom";
import "./SideBar.scss"
import {useDispatch, useSelector} from "react-redux";
import {sidebarActions} from "../../store/sidebarReducer/sidebarReducer.tsx";
import useAuth from "../../hooks/useAuth.tsx";
import ExitButton from "./ExitButton.tsx";
import personIcon from "../../assets/icons/personIcon.png"
import {getMenus} from "./menus.tsx";
import {getClientMenu} from "./getClientMenu.tsx";
import {getAdminMenu} from "./getAdminMenu.tsx";
import {PAGES} from "../../Pages/Route-string.tsx";

const Sidebar = () => {

    const dispatch = useDispatch();
    // @ts-ignore
    const isOpen = useSelector(s => s.sidebarReducer.isOpen);
    // @ts-ignore
    const isMobile = useSelector(s => s.sidebarReducer.isMobile);
    //const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    const updateDimensions = () => {
        const isMobile = window.innerWidth <= 768
        // @ts-ignore
        dispatch(sidebarActions.fillInput({isMobile}));
    };
    const toggleSidebar = () => {
        //dispatch(sellFactorActions.changeNumberHandler({id, column, event}))
        // @ts-ignore
        dispatch(sidebarActions.fillInput({isOpen: !isOpen}));
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    // @ts-ignore
    const {auth} = useAuth();

    const user_name = auth?.userInfo?.first_name + " " + auth?.userInfo?.last_name
    const user_mobile = auth?.userInfo?.mobile
    const userType = auth?.userInfo?.type
    const menus = userType === "client" ? getClientMenu() : getAdminMenu()
    const navigateTo = useNavigate()

    try {
        return (
            <section className={`side__bar__styles0 z-30`}>
                <div

                    className={`absolute secondary-background-color  
                ${isOpen ? "w-44 px-1 " : "width__0"}
                 duration-500  `}
                >
                    <div className={"relative bodyHeight "}>
                        {/*<div className="py-3 flex justify-end">*/}
                        {/*    <HiMenuAlt3*/}
                        {/*        size={26}*/}
                        {/*        className="cursor-pointer"*/}
                        {/*        onClick={toggleSidebar}*/}
                        {/*    />*/}
                        {/*</div>*/}

                        <div
                            onClick={()=>navigateTo(PAGES.userProfile)}
                            className="border-t-2 border-b-2 border-black">
                            <div className="flex justify-start items-center gap-3">
                                <div
                                    className="object-fill"
                                    style={{width: 50}}
                                >
                                    <img src={personIcon} alt=""/>
                                </div>
                                <div>
                                    <div>{user_name}</div>
                                    {/* <div>{user_mobile}</div> */}
                                </div>
                            </div>
                        </div>

                        <div className={"overflow-y-scroll h-auto"}>
                            <div className="mt-4 flex flex-col gap-4 relative overflow-visible">
                                {menus?.filter(row => row.showItem === true).map((menu, i) => {

                                    const hasMargin = menu?.margin
                                    return <Link
                                        to={menu?.link}
                                        key={i}
                                        className={` ${hasMargin ? "mt-5" : " "} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-200  rounded-md`}
                                    >
                                        <div>{React.createElement(menu?.icon, {size: "20"})}</div>
                                        <h2
                                            style={{
                                                transitionDelay: `${i + 3}00ms`,
                                            }}
                                            // className={`whitespace-pre duration-500 ${
                                            //     !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                                            // }`}
                                            className={`whitespace-pre `}
                                        >
                                            {menu?.name}
                                        </h2>
                                        <h2
                                            className={`${
                                                isOpen && "hidden"
                                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                        >
                                            {menu?.name}
                                        </h2>
                                    </Link>
                                })}
                            </div>
                        </div>


                        <ExitButton/>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        return <>{error.toString()}</>
    }
};

export default Sidebar;
