import axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useLocation } from "react-router-dom";
import { product } from "../../Interfaces/productInterfaces";
import { userObject } from "../../Interfaces/userObject";

axios.defaults.baseURL = 'http://localhost:8080/api';
const method = "post";
const headers = {
  "accept": '*/*',
  "Content-type": "application/json"
};


const ProductPage = () => {
    const location = useLocation();
    const data = location.state as product;
    const [price, setPrice] = useState(data.Price);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);


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

            const endopoint = "/cart/add";
        
            axios({
                method: method,
                url: endopoint,
                headers: headers,
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
    }

    return (
        <div className="homepage-container w-75 vh-100 pt-2 mx-auto text-center">
            <img src={data.Image} alt="" className="img-fluid"/>
            <h3 className="normal-text ">{data.Name}</h3>
            <p>{data.Description}</p>
            <Form.Select aria-label="Quantity" id="quantitySelected" defaultValue={1} onChange={(e: any) => { priceCalc(e, data.Price); }}>
                {quantitySelector}
            </Form.Select>
            <p>{price} €</p>
            <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={addToCart}>Add to Cart</button>
        </div>
    );
}



export default ProductPage;