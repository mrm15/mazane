import './DashboardBody.scss';
import {useEffect, useState} from "react";
import {getCurrentDate} from "../../../utils/utilsFunction.tsx";
import useAuth from "../../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

import home from '../../../assets/icons/home.png'
import wallet from '../../../assets/icons/wallet.png'
import edit from '../../../assets/icons/edit.png'
import clip from '../../../assets/icons/clip.png'
import rotateRight from '../../../assets/icons/rotate-right.png'
import idBadge from '../../../assets/icons/id-badge.png'
import documentAddressString from '../../../assets/icons/document.png'
import {PAGES} from "../../../Pages/Route-string.tsx";


const FooterDashboard = () => {


    const {auth} = useAuth()
    const isMobile = auth?.isMobile;
    const [currentTime, setCurrentTime] = useState({
        date: new Date(),
        persianStringDateTime: "",
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const persianStringDateTime = getCurrentDate(true);
            setCurrentTime({
                date: new Date(),
                persianStringDateTime
            });
        }, 1000);

        return () => clearInterval(interval);

    }, []);
    const navigateTo = useNavigate()
    const handleNavigateTo = (input) => {
        navigateTo(input)
    }
    try {
        if (isMobile) {
            return (
                <div className="text-center thisIsFooterToKnow flex justify-center gap-2">
                    <div className="flex justify-between px-2 py-1 w-full">
                        <img src={wallet} className="footer-icon" alt={""}/>
                        <img src={edit} className="footer-icon" alt={""}/>
                        <img src={clip} className="footer-icon" alt={""}/>
                        <img
                            onClick={() => {
                                window.location.reload()
                            }}
                            src={rotateRight}
                            className="footer-icon" alt={""}/>
                        <img src={idBadge} className="footer-icon" alt={""}/>
                        <img onClick={() => {
                            navigateTo(PAGES.orders)

                        }}
                             src={documentAddressString}
                             className="footer-icon" alt={""}
                        />
                        <img onClick={() => handleNavigateTo("/")} src={home} className="footer-icon" alt={""}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    className="text-center thisIsFooterToKnow flex justify-center gap-2 secondary-background-color text-black">
                    <div>
                        &nbsp;
                    </div>
                    <div>
                        تمامی حقوق محفوظ است. ©
                    </div>
                    <div className={"ltr min-w-32 max-w-32  w-32 overflow-hidden font-mono"}>

                        <time dateTime={currentTime.date.toISOString()}>
                            {currentTime.persianStringDateTime}
                        </time>
                    </div>
                </div>
            );
        }


    } catch (error) {
        return (<>{error.toString()}</>)
    }

};

export default FooterDashboard;