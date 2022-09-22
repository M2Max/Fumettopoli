import axios from "axios";
import React, { useState } from "react";
import useForceUpdate from "../../../Hooks/useForceUpdate";
import { userObject } from "../../../Interfaces/userObject";

import "./CartProductSlide.css";

interface productInformation {
    productInCart: string;
    Image: string;
    quantityInCart: number;
    totalPriceCart: number;
}

axios.defaults.baseURL = 'http://localhost:8080/api';
const method = "post";
const headers = {
  "accept": '*/*',
  "Content-type": "application/json"
};

const CartProductSlide = (props: productInformation) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const remove = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null){
            let jsonUser = JSON.parse(user) as userObject;                

            const endopoint = "/cart/remove";
            const body = JSON.stringify({
                id: jsonUser.id,
                accessToken: jsonUser.accessToken,
                productName: props.productInCart
            })
        
            axios({
                method: method,
                url: endopoint,
                headers: headers,
                data: body
            }).then((res: any) => {
                setResponse(res.data);
                removeStored()
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

    const removeStored = () => {
        let cart = sessionStorage.getItem("user-cart")
        if(cart !== null){
            let jsonCart = JSON.parse(cart) as productInformation[];    
            jsonCart = jsonCart.filter((product: productInformation) => {
                return product.productInCart !== props.productInCart;
            });
            sessionStorage.setItem("user-cart", JSON.stringify(jsonCart));
        }
    }

    return (
        <div className="container product-slide text-center">
            <img src={props.Image} alt="" className="img-fluid"/>
            <p className="mx-auto mt-5 normal-text">{props.productInCart} <br/> {props.quantityInCart} <br/> {props.totalPriceCart} </p>
            <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={remove}>Remove</button>
        </div>
    );
}

export default CartProductSlide;