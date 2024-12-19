import React from 'react';
import useAuth from "../../hooks/useAuth.tsx";
import CurrentTimeShow from "../CurrentTimeShow/CurrentTimeShow.tsx";
import ItemsShowOperator from "./ItemsShowOperator.tsx";

const OperatorHomePage = () => {

    const {auth} = useAuth()
    const myData = auth?.socketData
    return (<>
        <div className={"bodyHeightHome"}
        >
            <div
                style={{height: "5%" ,
                    overflow:"hidden"
                }}
            >
                <CurrentTimeShow />
            </div>
                <ItemsShowOperator myData={myData} />
            </div>

    </>)
};

export default OperatorHomePage;
