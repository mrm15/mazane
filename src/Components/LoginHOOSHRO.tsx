import "./LoginHOOSHRO.scss"
import LockIcon from "../assets/icons/lock.png"
import enterIcon from "../assets/icons/enter.png"
import userIcon from "../assets/icons/user.png"
import axios from '../api/axios';
import React, {useRef, useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import {useLocation, useNavigate} from 'react-router-dom';
import useRefreshToken from "../hooks/useRefreshToken.tsx";
import FullLoader from "./Loader/FullLoader.tsx";
import HOOSHROLogo from "../assets/Svg/HOOSHROLogo.tsx";
import useObjectDataHolder from "../hooks/UseObjectDataHolder.tsx";
import {PAGES} from "../Pages/Route-string.tsx";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';


const LOGIN_URL = '/auth/login/';

const LoginHOOSHRO: React.FC = () => {
    const {setAuth} = useAuth();
    const navigateTo = useNavigate();
    const tryToRefresh = useRefreshToken()
    const myLocation = useLocation()
    const from = myLocation?.state?.from?.pathname || PAGES.DASHBOARD;
    const userRef = useRef();

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        userRef?.current?.focus();
    }, [isLoading])


    const [loginData, setLoginData] = useObjectDataHolder({
        username: "",
        password: "",
    })


    const handleLogin = async () => {

        if(loginData.password==="" || loginData.username===""){
            toast.dismiss()
            toast.error("نام کاربری و رمز نباید خالی باشد.")
            return
        }
        const formData = new FormData();
        formData.append("username", loginData.username);
        formData.append("password", loginData.password);


        let tid = undefined
        try {



            tid = toast.loading("در حال ورود...")

            const axiosConfig = {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
            };

            const response = await axios.post(LOGIN_URL, formData, axiosConfig);
            if (response.status === 200) {

                Cookies.set('jwttoken', response.data.token);


                setAuth({
                    userType: response.data.type
                })
                navigateTo(from, {replace: true});


            } else {
                console.error("Login failed with status:", response.status);
            }
        } catch (error) {
            console.error('There was an error during login:', error);
        } finally {
            toast.dismiss(tid)
        }
    };
    useEffect(() => {
        tryToRefresh().then(r => {
            navigateTo(from)
        }).catch((err: Error) => {
            console.log(err?.toString())
            setIsLoading(false)
        })
    }, []);

    if (isLoading) {
        return <FullLoader/>
    }

    try {
        return (
            <div className={"login__container"}>
                <nav className="loginBtnContainer">
                    <HOOSHROLogo/>
                    <div className='inputGroup'>
                        <div className='inputContainer'>
                            <input
                                value={loginData.username}
                                onChange={(e) => setLoginData({username: e.target.value})}
                                className='loginInput'
                                type="text"
                                placeholder='نام کاربری'
                            />
                            <img className='inputIcon' src={userIcon} alt=""/>
                        </div>
                        <div className='inputContainer'>
                            <input
                                value={loginData.password}
                                onChange={(e) => setLoginData({password: e.target.value})}
                                className='loginInput'
                                type="password"
                                placeholder='رمز عبور'
                            />
                            <img className='inputIcon' src={LockIcon} alt=""/>
                        </div>
                    </div>
                    <div className="loginBtn" onClick={handleLogin}>
                        <img src={enterIcon} className="loginBtnIcon" alt={""}/>
                        <div className={"select-none"}>ورود</div>
                    </div>
                </nav>
            </div>
        );
    } catch (error) {
        return <>{error.toString()}</>
    }
}

export default LoginHOOSHRO
