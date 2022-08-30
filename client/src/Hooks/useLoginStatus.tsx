import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function useLoginStatus() {

    let navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("logged-user") === null){
            return navigate("/login");
        }
    }, [navigate]);

    return;
}

export default useLoginStatus;