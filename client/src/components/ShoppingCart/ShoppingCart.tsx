import axios from "axios";
import { useEffect, useState } from "react";
import useLoginStatus from "../../Hooks/useLoginStatus";
import ProductSlide from "../SwiperSliders/ProductSlide/ProductSlide";
import CartProductSlide from "./CartProductSlide/CartProductSlide";

interface userObject {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    address: string;
    accessToken: string;
}

interface productObject{
    productInCart: string;
    quantityInCart: number;
    totalPriceCart: number;
}

axios.defaults.baseURL = 'http://localhost:8080/api';
const method = "post";
const headers = {
  "accept": '*/*',
  "Content-type": "application/json"
};

const ShoppingCart = () => {
    useLoginStatus();
    const [response, setResponse] = useState<productObject[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [grid, setGrid] = useState<any>();

    useEffect(() => {
        if(response === null)
            cartFetch();
        let cart = sessionStorage.getItem("user-cart")
        if (cart !== null){
            let jsonCart = JSON.parse(cart) as productObject[];
            let count = 0;
            const temp = jsonCart.map((product: productObject) => {
                console.log(product);
                
                return  <div key={product.productInCart} className="col-md-4">
                            <CartProductSlide productName={product.productInCart} quantity={product.quantityInCart} totalPrice={product.totalPriceCart}/>
                        </div>
            })
            setGrid(temp);
        }
    }, [response])

    const cartFetch = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null){
            let jsonUser = JSON.parse(user) as userObject;                

            const endopoint = "/cart/fetch";
            const body = JSON.stringify({
                id: jsonUser.id,
                accessToken: jsonUser.accessToken,
            })
        
            axios({
                method: method,
                url: endopoint,
                headers: headers,
                data: body
            }).then((res: any) => {
                setResponse(res.data);
                sessionStorage.setItem("user-cart", JSON.stringify(res.data));
                setError('');
                setloading(true);
            })
            .catch((err: any) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });            
        }

    }
    
    return (
        <>
            <div className="container w-50 mt-5">
                <div className="row">
                    {grid}
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;

