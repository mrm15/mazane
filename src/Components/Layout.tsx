import {Outlet} from "react-router-dom"
import SideBar from "./SideBar/SideBar.tsx";
import HeaderDashboard from "./Dashboard/DashboardBody/HeaderDashboard.tsx";
import FooterDashboard from "./Dashboard/DashboardBody/FooterDashboard.tsx";
import './layout.scss'
import useWindowSize from "../hooks/useWindowSize.tsx";
import React from "react";
import DummyData from "./DummyData.tsx";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "../hooks/useAuth.tsx";

const Layout = () => {

    // @ts-ignore
    const isOpenMenu = useSelector(s => s.sidebarReducer.isOpen);

    console.log(isOpenMenu ? "منو بازه" : "منو بسته ")
    const {heightWindowSize} = useWindowSize();



    const number = 1;
    const {auth} = useAuth();
    const isMobile = auth.isMobile;

    if (number === 1) {
        return <main className="main-dashboard0 prevent__horizontal__scroll000 wrapperAllSite">
            {/*<HeaderDashboard/>*/}
            <div className={'dashboard-layout'}>
                {/**/}
                <div className={"layout__header secondary-background-color"}
                     style={{
                         // borderBottomLeftRadius: isMobile ? "20px" : undefined,
                         // borderBottomRightRadius: isMobile ? "20px" : undefined,
                         overflow:"hidden",
                     }}

                >
                    <HeaderDashboard/>

                </div>
                <div className={` layout__body main-background-color  bodyHeight`}

                >
                    <SideBar/>
                    {/**/}
                    <div  className={"main-content px-2 py-2 w-full"} >
                        {/*<div className={ isOpenMenu ? " myResponsiveWidthMenuOpen" : " myResponsiveWidth" }>*/}
                            <Outlet/>
                            {/*<DummyData/>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className={"layout__footer"}
                     style={{
                         // borderTopLeftRadius: isMobile ? "20px" : undefined,
                         // borderTopRightRadius: isMobile ? "20px" : undefined,
                         overflow:"hidden",
                     }}
                >
                    <FooterDashboard/>
                </div>
            </div>
        </main>
    } else {
        return (
            <main className="App">
                {/*<Outlet/>*/}
            </main>
        )
    }

}

export default Layout
