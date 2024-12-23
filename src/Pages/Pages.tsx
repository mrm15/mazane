import {Route, Routes} from "react-router-dom";
import Layout from "../Components/Layout";
import PersistLogin from "../Components/PersistLogin"
import LoginHOOSHRO from "../Components/LoginHOOSHRO.tsx";
import {PAGES} from "./Route-string.tsx"
import {lazy, Suspense} from "react"
import Loader from "../Components/Loader";
import Loader3 from "../Components/Loader/Loader3.tsx";
import UserProfile from "../Components/UserProfile/UserProfile.tsx";
const Orders = lazy(() => import("../Components/Orders/Orders.tsx"))
const Home = lazy(() => import("../Components/Home/Home.tsx"));
const Missing = lazy(() => import('../Components/Missing'));

const Pages = () => {

    return (
        <>

            <Routes>
                {/* pages all people can see and no need to side bar */}
                {/*<Route path="register" element={<RegisterSMS/>}/>*/}

                <Route path={PAGES.LOGIN} element={<LoginHOOSHRO/>}/>


                <Route element={<PersistLogin/>}>
                    <Route path="/" element={<Layout/>}>

                        <Route path={PAGES.homePage} element={
                            <Suspense fallback={<Loader3/>}>
                                <Home/>
                            </Suspense>
                        }/>
                        <Route path={PAGES.orders} element={
                            <Suspense fallback={<Loader3/>}>
                                <Orders/>
                            </Suspense>
                        }/>

                        <Route path={PAGES.userProfile} element={
                            <Suspense fallback={<Loader3/>}>
                                <UserProfile />
                            </Suspense>
                        }/>
                    </Route>





                    {/* catch all */}
                </Route>
                <Route path="*" element={
                    <Suspense fallback={<Loader/>}>
                        <Missing/>
                    </Suspense>
                }/>
            </Routes>
        </>
    );
};

export default Pages;