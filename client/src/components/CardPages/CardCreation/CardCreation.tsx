import axios from "axios";
import { MDBRow, MDBCol, MDBInput, MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBListGroup, MDBListGroupItem, MDBContainer, MDBRadio, MDBCheckbox, MDBValidationItem } from "mdb-react-ui-kit";
import { useState } from "react";
import useLoginStatus from "../../../Hooks/useLoginStatus";
import { userObject } from "../../../Interfaces/userObject";
import { BASE_URL, CARD_ADD, HEADERS, METHOD } from "../../../Utilities/Constants";

import "./CardCreation.css";

const CardCreation = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const { checkLogin } = useLoginStatus();

    const addCard = () => {
        if(!invalidation())
            return;
        else{
            checkLogin();
            const cardOwner = document.getElementById("cardOwner") as HTMLInputElement;
            const cardName = document.getElementById("cardName") as HTMLInputElement;
            const cardNumber = document.getElementById("cardNumber") as HTMLInputElement;
            const cardExpirationDate = document.getElementById("cardExp") as HTMLInputElement;
            const cardCVV = document.getElementById("cardCVV") as HTMLInputElement;
            let user = sessionStorage.getItem("logged-user");
            if (user !== null){
                let objUser = JSON.parse(user) as userObject;
                let body: string = JSON.stringify({
                    accessToken: objUser.accessToken,
                    id: objUser.id,
                    cardOwner: cardOwner.value,
                    cardName: cardName.value,
                    cardNumber: cardNumber.value,
                    cardExp: cardExpirationDate.value,
                    cardCVV: cardCVV.value
                });

                const endopoint = BASE_URL + CARD_ADD;
            
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
                    alert("This card already exists");
                })
                .finally(() => {
                    setloading(false);
                });            
            }
        }

    }

    const invalidation = () => {
        const Elements = document.querySelectorAll("input.add");
        let validFields: boolean = true;
    
          // eslint-disable-next-line no-cond-assign
          for (var i = 0, element; element = Elements[i] as HTMLInputElement; i++) {
              if(element.value === ""){
                
                
                element.classList.add("is-invalid");
                validFields = false;
              }
          }
        return validFields;
      }

    return (
        <MDBContainer className="py-5">
            <MDBCard className="mb-4 mt-5 card-form w-50 mx-auto">

                <MDBCardHeader className="py-3 border-0">
                    <h5 className="mb-0 cormorant-bold text-white">Credit Card Information</h5>
                </MDBCardHeader>
                
                <MDBCardBody className="cormorant-normal">

                <MDBRow>
                    <MDBCol>
                        <MDBValidationItem className='w-100' invalid feedback="Please enter Owner's Name">
                            <MDBInput
                                label="Owner's "
                                labelClass="text-white"
                                id="cardOwner"
                                type="text"
                                wrapperClass="mb-4"
                                className="text-white add"
                            />
                        </MDBValidationItem>
                    </MDBCol>
                    <MDBCol>
                        <MDBValidationItem className='w-100' invalid feedback='Please enter valid card name'>
                            <MDBInput
                                label="Card Name"
                                labelClass="text-white"
                                id="cardName"
                                type="text"
                                wrapperClass="mb-4"
                                className="text-white add"
                            />
                        </MDBValidationItem>
                    </MDBCol>
                    
                </MDBRow>

                <MDBRow className="mt-3">
                    <MDBCol>
                        <MDBValidationItem className='w-100' invalid feedback='Please enter valid card number'>
                            <MDBInput
                                label="Card's Number"
                                labelClass="text-white"
                                id="cardNumber"
                                type="text"
                                wrapperClass="mb-4"
                                className="text-white add"
                                maxLength={16}
                            />
                        </MDBValidationItem>
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBValidationItem className='w-100' invalid feedback='Please enter valid expiration date'>
                            <MDBInput
                                label="Expiration"
                                labelClass="text-white"
                                id="cardExp"
                                type="date"
                                wrapperClass="mb-4"
                                className="text-white add"
                            />
                        </MDBValidationItem>
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBValidationItem className='w-100' invalid feedback='Please enter valid cvv'>
                            <MDBInput
                                label="CVV"
                                labelClass="text-white"
                                id="cardCVV"
                                type="password"
                                wrapperClass="mb-4"
                                className="text-white add"
                                maxLength={3}
                            />
                        </MDBValidationItem>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="mt-5">
                    <MDBBtn size="sm" className="cormorant-bold secondary-back mx-auto w-25 border-0 shadow-none" block onClick={addCard}>
                        Add Card
                    </MDBBtn>
                </MDBRow>
                </MDBCardBody>
            </MDBCard>

         
        </MDBContainer>
    );
}

export default CardCreation;