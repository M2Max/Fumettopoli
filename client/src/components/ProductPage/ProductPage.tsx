import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Form from 'react-bootstrap/Form';
import { useLocation } from "react-router-dom";

interface product{
    Name: string;
    Category: string;
    Description: string;
    Image: string;
    QuantityAvailable: number;
    Price: number;
}

const ProductPage = () => {
    const location = useLocation();
    const data = location.state as product;
    const [price, setPrice] = useState(data.Price);


    const array = Array.from({length: data.QuantityAvailable}, (_, i) => i + 1)
    const quantitySelector = array.map((item,index)=>{
        return <option key={index}>{item}</option>
      })


    const priceCalc = (e: any, basePrice: number) => {
        const selected = e.target.value;
        setPrice(selected * basePrice);
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
        </div>
    );
}



export default ProductPage;