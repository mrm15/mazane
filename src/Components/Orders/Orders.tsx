import React from 'react';
import useAuth from "../../hooks/useAuth";
import UserHomePage from "../UserHomePage/UserHomePage";
import OperatorHomePage from "../OperatorHomePage/OperatorHomePage";
import OrdersAdmin from "../OrdersAdmin/OrdersAdmin";
import OrdersClient from "../OrdersClient/OrdersClient";

const Orders = () => {
    const { auth } = useAuth();
    console.log(auth)
    const userType = auth.userInfo?.type;
    console.log(userType)
    // userType might be 'user', 'operator', or something else

    try {
        return (
            <>
                {userType === 'client' && <OrdersClient />}
                {/*{userType === 'operator' && <OrdersAdmin />}*/}
            </>
        );
    } catch (error: any) {
        return error?.toString() || "An error occurred";
    }
};

export default Orders;
