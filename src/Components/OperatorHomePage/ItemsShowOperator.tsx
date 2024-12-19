import React from 'react';
import useAuth from "../../hooks/useAuth.tsx";
import Loader3 from "../Loader/Loader3.tsx";
import {formatNumber} from "../../utils/utilsFunction.tsx";
import SingleBoxShowOperator from "./SingleBoxShowOperator.tsx";

const ItemsShowOperator = ({myData}) => {

    const {auth} = useAuth()
    const isMobile = auth?.isMobile
    return (
        <div
            className={"secondary-background-color overflow-scroll rounded"}
            style={{height: "95%"}}
        >
            <div className={"h-auto  flex flex-wrap gap-2 w-full p-2 items-start" + (isMobile ? "" : "  justify-center ")}>
                {myData?.length === 0 && (
                    <div>
                        <Loader3/>
                    </div>
                )}
                {myData?.map((item:any) => (<SingleBoxShowOperator key={item?.id} item={item} isMobile={isMobile} />))}
            </div>
        </div>
    );
}

export default ItemsShowOperator;
