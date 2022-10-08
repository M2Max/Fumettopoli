import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fullProductObject, productObject } from "../../../Interfaces/productInterfaces";
import { BASE_URL, HEADERS, METHOD, PRODUCT_FETCH } from "../../../Utilities/Constants";

const ElementToPay = (props: productObject) => {
    const navigate = useNavigate();
    const [response, setResponse] = useState<fullProductObject | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    useEffect(() => {
        if(response !== null)
            navigate('/product', { state: { Name: response?.Name, Category: response?.Category, Description: response?.Description, Image: response?.Image , QuantityAvailable: response?.QuantityAvailable, Price: response?.Price } });
    }, [response, navigate])

    const loadPage = () => {
        const endpoint = BASE_URL + PRODUCT_FETCH;
        const body = JSON.stringify({
            name: props.productInCart
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

        <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <img
                        src={props.Image}
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                    />
                    <div className='ms-3'>
                        <p className='fw-bold mb-1 text-nowrap'>{props.productInCart}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>{props.quantityInCart}</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>{props.totalPriceCart}</p>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm' onClick={loadPage}>
                Details
                </MDBBtn>
            </td>
        </tr>

    );
}

export default ElementToPay;