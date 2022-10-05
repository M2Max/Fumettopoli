import { MDBRow, MDBCol, MDBInput, MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBListGroup, MDBListGroupItem, MDBContainer, MDBRadio, MDBCheckbox } from "mdb-react-ui-kit";

import "./CardCreation.css";

const CardCreation = () => {
    return (
        <MDBContainer className="py-5">
            <MDBCard className="mb-4 mt-5 card-form">

                <MDBCardHeader className="py-3">
                <h5 className="mb-0 cormorant-bolde">Credit Card Information</h5>
                </MDBCardHeader>
                
                <MDBCardBody className="cormorant-normal">

                <MDBRow>
                    <MDBCol>
                    <MDBInput
                        label="Owner's "
                        id="form6"
                        type="text"
                        wrapperClass="mb-4"
                    />
                    </MDBCol>
                    
                </MDBRow>

                <MDBRow>
                    <MDBCol>
                    <MDBInput
                        label="Card's Number"
                        id="form7"
                        type="text"
                        wrapperClass="mb-4"
                    />
                    </MDBCol>
                    <MDBCol md="3">
                    <MDBInput
                        label="Expiration"
                        id="form8"
                        type="date"
                        wrapperClass="mb-4"
                    />
                    </MDBCol>
                    <MDBCol md="3">
                    <MDBInput
                        label="CVV"
                        id="form8"
                        type="password"
                        wrapperClass="mb-4"
                    />
                    </MDBCol>
                </MDBRow>

                <MDBBtn size="sm" className="cormorant-bold button-hover" block>
                    Add Card
                </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default CardCreation;