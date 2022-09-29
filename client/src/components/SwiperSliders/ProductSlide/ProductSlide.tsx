import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fullProductObject, productSlideObject } from "../../../Interfaces/productInterfaces";
import { BASE_URL, HEADERS, METHOD, PRODUCT_FETCH } from "../../../Utilities/Constants";

import "./ProductSlide.css";


const ProductSlide = (props: productSlideObject) => {
    const [response, setResponse] = useState<fullProductObject | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(response !== null)
            navigate('/product', { state: { Name: response?.Name, Category: response?.Category, Description: response?.Description, Image: response?.Image , QuantityAvailable: response?.QuantityAvailable, Price: response?.Price } });
    }, [response])

    const loadPage = () => {
        const endpoint = BASE_URL + PRODUCT_FETCH;
        const body = JSON.stringify({
            name: props.Name
        });

        axios({
            method: METHOD,
            url: endpoint,
            headers: HEADERS,
            data: body
        }).then((res: any) => {
            setResponse(res.data);
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

    return (
        <div className="container product-slide text-center">
            <img src={props.Image} alt="" className="img-fluid"/>
            <p className="normal-text" style={{wordBreak: "break-all", whiteSpace: "nowrap", width: "auto", overflow: "hidden"}}>{props.Name}</p>
            <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={loadPage}>Details</button>
        </div>
    );
}

export default ProductSlide;