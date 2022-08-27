import { useEffect } from "react";
import { RedirectLogin } from "../../Auth/AuthenticationUtilities";

const ShoppingCart = () => {

    useEffect(() => {
        RedirectLogin();
    }, [])

    return (
        <>
        </>
    );
}

export default ShoppingCart;

