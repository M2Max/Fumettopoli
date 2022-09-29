import axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Navigate, redirect, useLocation, useNavigate, useNavigationType } from "react-router-dom";
import { fullProductObject } from "../../Interfaces/productInterfaces";
import { userObject } from "../../Interfaces/userObject";
import { BASE_URL, CART_ADD, HEADERS, METHOD } from "../../Utilities/Constants";

const ProductPage = () => {
    const location = useLocation();
    const data = location.state as fullProductObject;
    const [price, setPrice] = useState(data.Price);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const navigate = useNavigate();


    const array = Array.from({length: data.QuantityAvailable}, (_, i) => i + 1)
    const quantitySelector = array.map((item,index)=>{
        return <option key={index}>{item}</option>
      })


    const priceCalc = (e: any, basePrice: number) => {
        let selector = document.getElementById("quantitySelected") as HTMLSelectElement;
        console.log(selector.value);
        const selected = e.target.value;
        setPrice(selected * basePrice);
    }

    const addToCart = () => {
        let user = sessionStorage.getItem("logged-user");
        if (user !== null){
            let objUser = JSON.parse(user) as userObject;
            let selector = document.getElementById("quantitySelected") as HTMLSelectElement;
            let body: string = JSON.stringify({
                accessToken: objUser.accessToken,
                UsersCart: objUser.id,
                ProductInCart: data.Name,
                QuantityInCart: selector.value,
                TotalPriceCart: price

            });

            const endopoint = BASE_URL + CART_ADD;
        
            axios({
                method: METHOD,
                url: endopoint,
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
    
        navigate("/cart", {replace: true});
        
    }

    return (
        <div className="homepage-container w-75 vh-100 pt-2 mx-auto text-center">
            <img src={data.Image} alt="" className="img-fluid"/>
            <h3 className="bold-text">{data.Name}</h3>
            <p className = "cormorant-normal" style={{color: "var(--on-background)"}}>{data.Description}</p>
            <Form.Select aria-label="Quantity" id="quantitySelected" defaultValue={1} onChange={(e: any) => { priceCalc(e, data.Price); }}>
                {quantitySelector}
            </Form.Select>
            <p className = "cormorant-bold" style={{color: "var(--on-background)"}}>{price} €</p>
            <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={addToCart}>Add to Cart</button>
        </div>
    );
}



export default ProductPage;