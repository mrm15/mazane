import './DashboardBody.scss';
import {useLocation} from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';

import useAuth from "../../../hooks/useAuth.tsx";
import {useDispatch, useSelector} from "react-redux";
import {sidebarActions} from "../../../store/sidebarReducer/sidebarReducer.tsx";
import {useEffect} from "react";


const HeaderDashboard = () => {

    // @ts-ignore
    const {auth} = useAuth();
    console.log(auth)

    const showUserStatus = auth?.userInfo?.roleAccessList?.includes('userStatusInDashboard')
    const location = useLocation();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    // const title = location.state?.title !== undefined ? location.state.title : "پیشخوان";



    const dispatch = useDispatch();
    // @ts-ignore
    const isOpenSidebar = useSelector(s => s.sidebarReducer.isOpen);
    // @ts-ignore
    const isMobile = window.innerWidth <= 768

    const toggleSidebar = () => {
        //dispatch(sellFactorActions.changeNumberHandler({id, column, event}))
        // @ts-ignore
        dispatch(sidebarActions.fillInput({isOpen:!isOpenSidebar}));
    };

    useEffect(() => {
        if(!isMobile){
            // @ts-ignore
            dispatch(sidebarActions.fillInput({isOpen:true}));
        }
    }, [dispatch, isMobile]);

    try {
        return (
            <div className="w-full flex  text-black"
            >
                {<div className={'p-3 text-white'}
                      onClick={toggleSidebar}
                >
                    {isOpenSidebar ? <FaTimes className={"text-black"} size={24}/> : <FaBars className={"text-black"} size={24}/>}
                </div>}
                <div className="title-side w-full flex justify-between items-center select-none">
                    <div className={'flex justify-between align-middle'}>
                    </div>
                    <div className={'flex gap-2'}>
                        <h6 className={"fontSize075rem font-bold"}>
                           مظنه
                        </h6>
                    </div>
                    <div></div>
                    {/*<ProfileInHeader/>*/}
                </div>
                <hr/>
            </div>
        );
    } catch (error) {
        return <div>{error.toString()}</div>
    }
};

export default HeaderDashboard;