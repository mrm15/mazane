import axios from '../api/axios';
import useAuth from './useAuth';
import Cookies from "js-cookie";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        let attempts = 0;
        const maxAttempts = 3;

        while (attempts < maxAttempts) {
            try {

                const token = Cookies.get('jwttoken');
                if(!token){
                    // window.location.href = '/login';
                    Cookies.remove('jwttoken');
                    throw new Error('Error');

                }


                const headers = {
                    'Authorization': `Bearer ${token}`
                };
                const url  = '/auth/get_user'
                const response = await axios.get(url, {
                    // withCredentials: true,
                    headers,
                });


                console.log("==============================")
                console.log(response)
                console.log("==============================")
                setAuth({
                    userInfo: response.data,
                    accessToken: token
                });
                return response.data.accessToken;
            } catch (error) {
                attempts++;
                if (attempts === maxAttempts) {
                    // Handle the error after 3 attempts
                    console.error("Failed to refresh token:", error);
                    throw error; // or handle the error as needed
                }
            }
        }
    };

    return refresh;
};

export default useRefreshToken;
