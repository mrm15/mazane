import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
import useLocalStorage from "../hooks/useLocalStorage";
import Loader from "./Loader";
import {PAGES} from "../Pages/Route-string.tsx";
import FullLoader from "./Loader/FullLoader.tsx";
import useWebSocket from "../hooks/useWebSocket.tsx";

const PersistLogin = () => {

    const myLocation = useLocation()
    const navigateTo = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    // @ts-ignore
    const {auth , setAuth} = useAuth();
    const [persist] = useLocalStorage('persist', false);


    const {socket, myData} = useWebSocket();
    useEffect(() => {
        setAuth({socketData:myData})
    }, [myData, setAuth]);


    // @ts-ignore
    useEffect(() => {


        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.log("رفرش توکن مورد تایید نیست.");
                navigateTo(PAGES.LOGIN, {state:{from:myLocation}})
                console.error(err);
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        // !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
        if (!auth.accessToken) {
            setIsLoading(true)
            void verifyRefreshToken()
        } else {
            setIsLoading(false)
        }

        return () => isMounted = false;
    }, [])

    const userType = auth?.userInfo?.type;
    const isMobile = auth?.isMobile;

    if (userType === "client" && isMobile===false) {

        // Redirect to the root path if the types don't match
        return <Navigate to="/NotFound"  />;
    }

    return (
        <>
            {!persist
                ? <Outlet/>
                : isLoading
                    ? <FullLoader/>
                    : <Outlet/>
            }
        </>
    )
}

export default PersistLogin