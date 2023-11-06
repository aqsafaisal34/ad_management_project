import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        if(localStorage.getItem("isLogin")){
            if(!pathname.includes("dashboard") && pathname !== "/") navigate(pathname)
            else navigate("/dashboard")
        } else {
            navigate("/")
        }
        // eslint-disable-next-line
    },[])

    return <>{children}</>
};
export default Auth