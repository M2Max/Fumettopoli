import userEvent from "@testing-library/user-event";
import axios from "axios";
import { MDBCol, MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit"
import { useEffect, useState } from "react";
import useLoginStatus from "../../Hooks/useLoginStatus";
import { orderObject } from "../../Interfaces/orderInterfaces";
import { userObject } from "../../Interfaces/userObject";
import { BASE_URL, HEADERS, METHOD, ORDERS_FETCH } from "../../Utilities/Constants";
import OrderedItems from "./OrderedItems/OrderedItems";
import "./OrdersPage.css";

const OrdersPage = () => {
    const { checkLogin } = useLoginStatus();
    const [table, setTable] = useState<any>();
    const [response, setResponse]   = useState(null);
    const [error, setError]         = useState('');
    const [loading, setloading]     = useState(true);

    useEffect(() => {
        checkLogin();
        if(response === null)
            loadOrders();
        else{
            const jsonOrders = response as orderObject[];
            const temp = jsonOrders.map((ord: orderObject) => {
                return <OrderedItems 
                    ProductName={ord.ProductName} 
                    OrderID={ord.OrderID}
                    QuantityOrdered={ord.QuantityOrdered}
                    Image={ord.Image}
                    TotalProduct={ord.TotalProduct}
                    Category={ord.Category}
                    OrderStatus={ord.OrderStatus}
                ></OrderedItems>;
            });
            setTable(temp);
        }

    }, [response])

    const loadOrders = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null){
            let jsonUser = JSON.parse(user) as userObject;                

            const endpoint = BASE_URL + ORDERS_FETCH;
            const body     = JSON.stringify({
                id: jsonUser.id,
                accessToken: jsonUser.accessToken,
            });
            

            axios({
                method: METHOD,
                url: endpoint,
                headers: HEADERS,
                data: body,
            }).then((res: any) => {
                setResponse(res.data);
                console.log(res.data);
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
        <MDBContainer className="py-4 w-50 orders-container">
            <MDBCol>

                <MDBTable align='middle' responsive>
                    <MDBTableHead>
                        <tr className="on-background-text">
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Order ID</th>
                            <th scope='col'>Order Status</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody className="on-background-text">
                        {table}
                    </MDBTableBody>
                </MDBTable>

            </MDBCol>
        </MDBContainer>
    );
}

export default OrdersPage;