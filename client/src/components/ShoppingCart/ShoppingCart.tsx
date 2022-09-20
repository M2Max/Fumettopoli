import { useEffect, useState } from "react";
import useLoginStatus from "../../Hooks/useLoginStatus";
import ProductSlide from "../SwiperSliders/ProductSlide/ProductSlide";
import CartProductSlide from "./CartProductSlide/CartProductSlide";

const ShoppingCart = () => {
    useLoginStatus();
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    useEffect(() => {
        cartFetch();
    }, [])

    const cartFetch = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null)
            user = JSON.parse(user);
        
        console.log(user);
        
        
        // const endopoint = "/auth/signin";
        // const body = JSON.stringify({
        //     id: user.id,
        //     accessToken: user.accessToken,
        // })
    
        // axios({
        //     method: method,
        //     url: endopoint,
        //     headers: headers,
        //     data: body
        // }).then((res: any) => {
        //     setResponse(res.data);
        //     sessionStorage.setItem("logged-user", JSON.stringify(res.data));
        //     setError('');
        //     setloading(true);
        // })
        // .catch((err: any) => {
        //     setError(err);
        // })
        // .finally(() => {
        //     setloading(false);
        //     if(sessionStorage.getItem("logged-user") !== null)
        //         navigate("/home");
        // });
    }
    
    return (
        <>
            <div className="container w-50 mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <CartProductSlide productName="prodotto 1" quantity={10} totalPrice={50}/> {/* Substitute with cart slides */}
                    </div>
                    <div className="col-md-4">
                        <ProductSlide/>
                    </div>
                    <div className="col-md-4">
                        <ProductSlide/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;

