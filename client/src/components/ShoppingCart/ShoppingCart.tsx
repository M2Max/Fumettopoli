import axios from "axios";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginStatus from "../../Hooks/useLoginStatus";
import { productObject } from "../../Interfaces/productInterfaces";
import { userObject } from "../../Interfaces/userObject";
import { BASE_URL, CART_FETCH, HEADERS, METHOD } from "../../Utilities/Constants";
import ProductSlide from "../SwiperSliders/ProductSlide/ProductSlide";
import CartProductSlide from "./CartProductSlide/CartProductSlide";

const ShoppingCart = () => {
    const { checkLogin } = useLoginStatus();
    const navigate = useNavigate();
    const [response, setResponse] = useState<productObject[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [grid, setGrid] = useState<any>();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        checkLogin();
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
            cartTotal();
        }
    }, [response])

    const cartFetch = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null){
            let jsonUser = JSON.parse(user) as userObject;                

            const endpoint = BASE_URL + CART_FETCH;
            const body = JSON.stringify({
                id: jsonUser.id,
                accessToken: jsonUser.accessToken,
            })
        
            axios({
                method: METHOD,
                url: endpoint,
                headers: HEADERS,
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

    const cartTotal = () => {
        let cart = sessionStorage.getItem("user-cart")
        if (cart !== null){
            let jsonCart = JSON.parse(cart) as productObject[];
            let sum = 0;
            jsonCart.map((product : productObject) => {
                sum += product.totalPriceCart;
            })
            setTotal(sum);
            
        }
    }

    const loadCardPage = () => {
        navigate("/cards");
    }
    
    return (
        <>
            <div className="container w-50 mt-5">
                <MDBRow>
                    {grid}
                </MDBRow>
                <MDBRow className="mt-5">
                    <MDBCol>
                        <p className="cormorant-bold on-background-text fs-3">Cart total is {total}</p>
                    </MDBCol>
                    <MDBCol>
                        <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={loadCardPage}>Place Order</button>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}

export default ShoppingCart;

