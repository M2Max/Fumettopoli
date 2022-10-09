import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from "react-router-dom";
import useLoginStatus from "../../Hooks/useLoginStatus";
import { fullProductObject } from "../../Interfaces/productInterfaces";
import { userObject } from "../../Interfaces/userObject";
import { BASE_URL, CART_ADD, HEADERS, METHOD } from "../../Utilities/Constants";

const ProductPage = () => {
    const { checkLogin } = useLoginStatus();
    const location = useLocation();
    const data = location.state as fullProductObject;
    const [price, setPrice] = useState(data.Price);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0);
    }, [])


    const array = Array.from({length: data.QuantityAvailable}, (_, i) => i + 1)
    const quantitySelector = array.map((item,index)=>{
        return <option key={index}>{item}</option>
      })


    const priceCalc = (e: any, basePrice: number) => {
        let selector = document.getElementById("quantitySelected") as HTMLSelectElement;
        console.log(selector.value);
        const selected = e.target.value;
        const value: number = selected * basePrice;
        setPrice(Number(value.toFixed(2)));
    }

    const addToCart = () => {
        checkLogin();
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
        <MDBContainer className="py-5">
            
                <MDBRow>
                    <div className="col-sm-6 col-sm-push-12">
                        <img src={data.Image} alt="" className="img-fluid"/>
                    </div>
                    <MDBCol>
                        <MDBRow>
                            <h3 className="bold-text">{data.Name}</h3>
                        </MDBRow>
                        <MDBRow>
                            <p className = "cormorant-normal" style={{color: "var(--on-background)", whiteSpace: "pre-line"}}>{data.Description}</p>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="mt-4">
                    <MDBCol>
                        <Form.Select aria-label="Quantity" id="quantitySelected" defaultValue={1} onChange={(e: any) => { priceCalc(e, data.Price); }}>
                            {quantitySelector}
                        </Form.Select>
                    </MDBCol>
                    <MDBCol className="ms-5">
                        <p className = "cormorant-bold" style={{color: "var(--on-background)"}}>{price} €</p>
                        <button className="add-to-cart btn normal-text" onClick={addToCart}>Add to Cart</button>
                    </MDBCol>
                </MDBRow>

        </MDBContainer>
    );
}



export default ProductPage;