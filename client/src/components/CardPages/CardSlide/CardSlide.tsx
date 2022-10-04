import axios from "axios";
import { useState } from "react";
import { cardObject } from "../../../Interfaces/cardInterfaces";
import { userObject } from "../../../Interfaces/userObject";
import CardImage from "../../../Resources/creditCard.png";
import { BASE_URL, CARDS_REMOVE, HEADERS, METHOD } from "../../../Utilities/Constants";

const CardSlide = (props: cardObject) => {
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
                console.log(card.CardNumber);
                console.log(props.CardNumber);
                return card.CardNumber !== props.CardNumber;
            });
            console.log(jsonCards);
            
            sessionStorage.setItem("user-cart", JSON.stringify(jsonCards));
        }
        window.location.reload();
    }

    return (
        <>
            <div className="container product-slide text-center">
                <img src={CardImage} alt="" className="img-fluid"/>
                <p className="mx-auto mt-5 normal-text">{props.CardName} <br/> {props.CardNumber} </p>
                <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={removeCard}>Remove</button>
            </div>
        </>
    );
}

export default CardSlide;