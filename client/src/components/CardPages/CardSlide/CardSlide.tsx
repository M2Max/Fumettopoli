import axios from "axios";
import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardObject } from "../../../Interfaces/cardInterfaces";
import { userObject } from "../../../Interfaces/userObject";
import CardImage from "../../../Resources/creditCard.png";
import { BASE_URL, CARDS_REMOVE, HEADERS, METHOD } from "../../../Utilities/Constants";

import "./CardSlide.css";

const CardSlide = (props: cardObject) => {
    const navigate = useNavigate();
    const [response, setResponse]   = useState(null);
    const [error, setError]         = useState('');
    const [loading, setloading]     = useState(true);

    const removeCard = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null){
            let jsonUser = JSON.parse(user) as userObject;                
            

            const endpoint = BASE_URL + CARDS_REMOVE;
            const body     = JSON.stringify({
                id: jsonUser.id,
                accessToken: jsonUser.accessToken,
                cardNumber: props.CardNumber,
            });

            axios({
                method: METHOD,
                url: endpoint,
                headers: HEADERS,
                data: body,
            }).then((res: any) => {
                setResponse(res.data);
                removeStored();
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

    const removeStored = () => {
        let cards = sessionStorage.getItem("user-cards")
        if(cards !== null){
            let jsonCards = JSON.parse(cards) as cardObject[];    
            jsonCards = jsonCards.filter((card: cardObject) => {
                return card.CardNumber !== props.CardNumber;
            });
            
            sessionStorage.setItem("user-cart", JSON.stringify(jsonCards));
        }
        window.location.reload();
    }

    const selectCard = () => {
        let card = props as cardObject;
        sessionStorage.setItem("card-selected", JSON.stringify(card));
        navigate("/checkout");
    }

    return (
        <>
            <div className="container product-slide text-center">
                <img src={CardImage} alt="" className="img-fluid card-image"/>
                <p className="mx-auto mt-5 normal-text">{props.CardName} <br/> {props.CardNumber} </p>
                <MDBRow>
                    <MDBCol className="col-md-6">
                        <MDBBtn size="sm" className="add-to-cart btn me-1 mt-5 normal-text button-card" onClick={removeCard}>Remove</MDBBtn>
                    </MDBCol>
                    <MDBCol className="col-md-6">
                        <MDBBtn size="sm" className="add-to-cart btn ms-1 mt-5 normal-text button-card" onClick={selectCard}>Select</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}

export default CardSlide;