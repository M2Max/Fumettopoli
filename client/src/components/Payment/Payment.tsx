import axios from "axios";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardObject } from "../../Interfaces/cardInterfaces";
import { productObject } from "../../Interfaces/productInterfaces";
import { userObject } from "../../Interfaces/userObject";
import { BASE_URL, HEADERS, METHOD, ORDER_CHECKOUT } from "../../Utilities/Constants";
import ElementToPay from "./ElementToPay/ElementToPay";

const Payment = () => {
    const navigate = useNavigate();
    const [response, setResponse]   = useState(null);
    const [error, setError]         = useState('');
    const [loading, setloading]     = useState(true);
    const [table, setTable] = useState<any>();
    const total = sessionStorage.getItem("total-cart-sum");
    const cart = sessionStorage.getItem("user-cart");
    const card = sessionStorage.getItem("card-selected");

    useEffect(() => {
        if(card === null || cart === null)
            navigate("/cart");
        else {
            const jsonCart = JSON.parse(cart) as productObject[];
            const temp = jsonCart.map((product: productObject) => {
                return <ElementToPay productInCart={product.productInCart} Image={product.Image} quantityInCart={product.quantityInCart} totalPriceCart={product.totalPriceCart}></ElementToPay>;
            });
            setTable(temp);
        }

    }, [navigate]);

    const checkout = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null && cart !== null && card !== null){
            let jsonCart = JSON.parse(cart) as productObject[];
            let jsonCard = JSON.parse(card) as cardObject;
            let jsonUser = JSON.parse(user) as userObject;                
            

            const endpoint = BASE_URL + ORDER_CHECKOUT;
            const body     = JSON.stringify({
                id: jsonUser.id,
                accessToken: jsonUser.accessToken,
                cart: jsonCart,
                total: total,
                card: jsonCard.CardNumber
            });

            axios({
                method: METHOD,
                url: endpoint,
                headers: HEADERS,
                data: body,
            }).then((res: any) => {
                setResponse(res.data);
                setError('');
                setloading(true);
                sessionStorage.removeItem("card-selected");
                sessionStorage.removeItem("user-cart");
                navigate("/home");
            })
            .catch((err: any) => {
                alert("There was an error completing your order \n Try again later please");
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });            
        }
    }
    
    return (
    <MDBContainer className="py-4 w-50">
        <MDBRow>
            <MDBCol md="8">

                <MDBTable align='middle' responsive>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {table}
                    </MDBTableBody>
                </MDBTable>

            </MDBCol>
            <MDBCol md="4" className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardHeader className="py-3">
                    <h5 className="mb-0">Summary</h5>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <MDBListGroup flush>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>€ {total}</span>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Shipping
                        <span>FREE</span>
                        </MDBListGroupItem>
                        <hr className="my-2"></hr>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <div>
                            <strong>Total amount</strong>
                            <strong>
                            <p className="mb-0">(including VAT)</p>
                            </strong>
                        </div>
                        <span>
                            <strong>€ {total}</strong>
                        </span>
                        </MDBListGroupItem>
                    </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBBtn size="sm" className="add-to-cart btn mx-auto mt-5 normal-text w-25" block onClick={checkout}>
                Checkout
            </MDBBtn>
        </MDBRow>
    </MDBContainer>
    );
}

export default Payment;