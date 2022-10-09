import axios from "axios";
import React, { useState } from "react";
import { productObject } from "../../../Interfaces/productInterfaces";
import { userObject } from "../../../Interfaces/userObject";
import { BASE_URL, CART_REMOVE, HEADERS, METHOD } from "../../../Utilities/Constants";

import "./CartProductSlide.css";


const CartProductSlide = (props: productObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const remove = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null){
            let jsonUser = JSON.parse(user) as userObject;                

            const endopoint = BASE_URL + CART_REMOVE;
            const body = JSON.stringify({
                id: jsonUser.id,
                accessToken: jsonUser.accessToken,
                productName: props.productInCart
            })
        
            axios({
                method: METHOD,
                url: endopoint,
                headers: HEADERS,
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
            let jsonCart = JSON.parse(cart) as productObject[];    
            jsonCart = jsonCart.filter((product: productObject) => {
                return product.productInCart !== props.productInCart;
            });
            sessionStorage.setItem("user-cart", JSON.stringify(jsonCart));
        }
        window.location.reload();
    }

    return (
        <div className="container product-slide text-center">
            <img src={props.Image} alt="" className="img-fluid"/>
            <p className="mx-auto mt-5 normal-text" style={{wordBreak: "break-all", whiteSpace: "nowrap", width: "auto", overflow: "hidden"}}>{props.productInCart} <br/> {props.quantityInCart} <br/> {props.totalPriceCart} </p>
            <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={remove}>Remove</button>
        </div>
    );
}

export default CartProductSlide;