import {Link, useNavigate} from "react-router-dom"
import {useCallback, useEffect, useState} from "react";
const pageStyle = `
.not-found-container {.not-found-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f9f9f9;
    color: #333;
}

.not-found-container h1 {
    font-size: 6rem;
    color: #d32f2f;
    margin-bottom: 20px;
}

.not-found-container p {
    font-size: 1.5rem;
    margin-bottom: 30px;
}

.home-link {
    font-size: 1.2rem;
    color: #1976d2;
    text-decoration: none;
    border: 1px solid #1976d2;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.home-link:hover {
    background-color: #1976d2;
    color: white;
}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f9f9f9;
    color: #333;
}

.not-found-container h1 {
    font-size: 6rem;
    color: #d32f2f;
    margin-bottom: 20px;
}

.not-found-container p {
    font-size: 1.5rem;
    margin-bottom: 30px;
}

.home-link {
    font-size: 1.2rem;
    color: #1976d2;
    text-decoration: none;
    border: 1px solid #1976d2;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.home-link:hover {
    background-color: #1976d2;
    color: white;
}

`

const Missing = () => {

    const [counter, setCounter] = useState(15)
    const navigateTo = useNavigate();

    const handleFunction = useCallback(() => {
        if (counter < 1) {
            navigateTo(-1);
        } else {
            setCounter(ps => ps - 1);
        }

    }, [counter]);

    useEffect(() => {
        const temp = setInterval(handleFunction, 1000);
        return () => {
            clearInterval(temp)
        }
    }, [handleFunction]);


    return (
        <div>
            <style>
                {pageStyle}
            </style>
            <div className="not-found-container">
                <h1>404</h1>
                <p>صفحه‌ای که به دنبال آن هستید پیدا نشد.</p>
                <Link to="/" className="home-link">بازگشت به صفحه اصلی
                    <span>({counter})</span>
                </Link>
            </div>
        </div>
    )
}

export default Missing
