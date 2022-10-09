import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { orderObject } from "../../../Interfaces/orderInterfaces";

const ElementToPay = (props: orderObject) => {

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
                        <p className='fw-bold mb-1 text-nowrap'>{props.ProductName}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>{props.QuantityOrdered}</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>€ {props.TotalProduct}</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>{props.Category}</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>{props.OrderID}</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>{props.OrderStatus ? "Delivered" : "Processing/Shipping"}</p>
            </td>
        </tr>

    );
}

export default ElementToPay;