import { MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(sessionStorage.getItem("card-selected") === null)
            navigate("/cart");
    }, [])
    
    return (
    <MDBContainer className="py-4 w-50">
        <MDBCol>

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
                    <span>$53.98</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>Gratis</span>
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
                        <strong>$53.98</strong>
                    </span>
                    </MDBListGroupItem>
                </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBContainer>
    );
}

export default Payment;