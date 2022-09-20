import React from "react";
import Slide2 from "../../../Resources/alice.jpg";

import "./CartProductSlide.css";

interface productInformation {
    productName: string;
    quantity: number;
    totalPrice: number;
}

const CartProductSlide = (props: productInformation) => {
    return (
        <div className="container product-slide text-center">
            <img src={Slide2} alt="" className="img-fluid"/>
            <p className="add-to-cart btn mx-auto mt-5 normal-text">{props.productName} <br/> {props.quantity} <br/> {props.totalPrice} </p>
        </div>
    );
}

export default CartProductSlide;