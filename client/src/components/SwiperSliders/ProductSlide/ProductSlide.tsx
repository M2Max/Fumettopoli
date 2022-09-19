import React from "react";
import Slide2 from "../../../Resources/alice.jpg";

import "./ProductSlide.css";

const ProductSlide = () => {
    return (
        <div className="container product-slide text-center">
            <img src={Slide2} alt="" className="img-fluid"/>
            <button className="add-to-cart btn mx-auto mt-5 normal-text">Add to cart</button>
        </div>
    );
}

export default ProductSlide;