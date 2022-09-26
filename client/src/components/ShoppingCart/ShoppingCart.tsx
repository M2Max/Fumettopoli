import axios from "axios";
import { useEffect, useState } from "react";
import useLoginStatus from "../../Hooks/useLoginStatus";
import { productObject } from "../../Interfaces/productInterfaces";
import { userObject } from "../../Interfaces/userObject";
import ProductSlide from "../SwiperSliders/ProductSlide/ProductSlide";
import CartProductSlide from "./CartProductSlide/CartProductSlide";


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
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if(response === null)
            cartFetch();
        let cart = sessionStorage.getItem("user-cart")
        if (cart !== null){
            let jsonCart = JSON.parse(cart) as productObject[];
            const temp = jsonCart.map((product: productObject) => {
                return  <div key={product.productInCart} className="col-md-4">
                            <CartProductSlide productInCart={product.productInCart} Image={product.Image} quantityInCart={product.quantityInCart} totalPriceCart={product.totalPriceCart}/>
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

        cartTotal();

    }

    const cartTotal = () => {
        let cart = sessionStorage.getItem("user-cart")
        if (cart !== null){
            let jsonCart = JSON.parse(cart) as productObject[];
            let sum = 0;
            jsonCart.map((product : productObject) => {
                sum += product.totalPriceCart;
            })
            setTotal(sum);
            console.log(sum);
            
        }
    }
    
    return (
        <>
            <div className="container w-50 mt-5">
                <div className="row">
                    {grid}
                </div>
            </div>
            <div className="container w-50">
                <p className="cormorant-bold text-black">Cart total is {total}</p>
            </div>
        </>
    );
}

export default ShoppingCart;

