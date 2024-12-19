import React from 'react';
import useAuth from "../../hooks/useAuth";

import OrdersClient from "../OrdersClient/OrdersClient";
import OrdersAdmin from "../OrdersAdmin/OrdersAdmin.tsx";

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
                {userType === 'operator' && <OrdersAdmin />}
            </>
        );
    } catch (error: any) {
        return error?.toString() || "An error occurred";
    }
};

export default Orders;
