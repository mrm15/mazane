import useAuth from "../../hooks/useAuth.tsx";
import UserHomePage from "../UserHomePage/UserHomePage.tsx";
import OperatorHomePage from "../OperatorHomePage/OperatorHomePage.tsx";



const Home = () => {
    const { auth } = useAuth();
    console.log(auth)
    const userType = auth.userInfo?.type;
    console.log(userType)
    // userType might be 'user', 'operator', or something else

    try {
        return (
            <>
                {userType === 'client' && <UserHomePage />}
                {userType === 'operator' && <OperatorHomePage />}
                {/*{!userType && <EmptyHomePage />}*/}
            </>
        );
    } catch (error: any) {
        return error?.toString() || "An error occurred";
    }
}

export default Home;
