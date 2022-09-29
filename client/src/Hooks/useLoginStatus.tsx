import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useLoginStatus = () => {

    let navigate = useNavigate();

    const checkLogin = () => {
        if (sessionStorage.getItem("logged-user") === null){
            navigate("/login");
        }
   
    }
    return { checkLogin };
}

export default useLoginStatus;