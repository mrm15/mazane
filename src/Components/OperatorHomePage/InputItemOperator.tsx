import React from 'react';
import {formatNumber} from "../../utils/utilsFunction.tsx";

const InputItemOperator =({type,name,value,changePriceHandler}) => {


    return <input
        className={"w-full bg-transparent text-left rounded px-2 ltr focus:outline-0"}
        type={type}
        name={name}
        value={formatNumber(value)}
        onChange={changePriceHandler}
        onClick={(e: any) => e.target.select()}
    />
}

export default InputItemOperator;
