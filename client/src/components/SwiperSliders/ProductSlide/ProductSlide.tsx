import React from "react";
import { useNavigate } from "react-router-dom";
import Slide2 from "../../../Resources/alice.jpg";

import "./ProductSlide.css";

interface ProductSlide{
    Name: string;
    Image: string;
}

const ProductSlide = (/*props: ProductSlide*/) => {
    const navigate = useNavigate();

    const loadPage = () => {
        //Function to get data from backend

        navigate('/product', { state: { Name: "Fumetto 1", Category: "Fumetto", Description: "Ciao sono un fumetto", Image: "https://spacenerd.it/wp-content/uploads/2021/08/one-piece-manga-rischio-stop-weekly-shonen-jump-pericolo-v4-445032.jpg.webp", QuantityAvailable: 10, Price: 10 } });
    }

    return (
        <div className="container product-slide text-center">
            <img src={Slide2} alt="" className="img-fluid"/>
            <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={loadPage}>Details</button>
        </div>
    );
}

export default ProductSlide;