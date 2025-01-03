import useWindowSize from "../../hooks/useWindowSize.tsx";
import React from "react";
import "./fullLoader.scss"
import HOOSHROLogo from "../../assets/Svg/HOOSHROLogo.tsx";

const FullLoader = ({text = ""}) => {
    const {widthWindowSize} = useWindowSize()

    const styles: React.CSSProperties = {
        width: `${widthWindowSize}px`

    }
    return <>
        <div style={styles}
             className={"loading-logo"}
        >
            <div>
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="loading-logo">
                        {/*<img src={namarangLogo} alt={""}/>*/}
                        <HOOSHROLogo height={256} width={256}/>
                        {/*<span style="color: #FFFFFF;">2.0.62</span>*/}
                        <div className="loader"></div>
                    </div>
                </div>
                {text && <div>{text}</div>}
            </div>

        </div>
    </>;
}

export default FullLoader;