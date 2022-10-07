import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginStatus from "../../Hooks/useLoginStatus";
import { cardObject } from "../../Interfaces/cardInterfaces";
import { userObject } from "../../Interfaces/userObject";
import { BASE_URL, CARDS_FETCH, HEADERS, METHOD } from "../../Utilities/Constants";
import CardSlide from "./CardSlide/CardSlide";

const CardPage = () => {
    const { checkLogin }            = useLoginStatus();
    const navigate = useNavigate();
    const [response, setResponse]   = useState(null);
    const [error, setError]         = useState('');
    const [loading, setloading]     = useState(true);
    const [grid, setGrid]           = useState<any>();

    useEffect(() => {
        if(response === null)
            sessionStorage.removeItem("user-cards");
        checkLogin();
        cardsFetch();
        let cards = sessionStorage.getItem("user-cards")
        if (cards !== null){
            let jsonCart = JSON.parse(cards) as cardObject[];
            const temp = jsonCart.map((card: cardObject) => {
                return  <div key={card.CardName} className="col-md-4">
                            <CardSlide CardName={card.CardName} CardNumber={card.CardNumber}/>
                        </div>
            })
            setGrid(temp);
        }
    }, [response]);

    const cardsFetch = () => {
        let user = sessionStorage.getItem("logged-user")
        if(user !== null){
            let jsonUser = JSON.parse(user) as userObject;                
            

            const endpoint = BASE_URL + CARDS_FETCH;
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
                sessionStorage.setItem("user-cards", JSON.stringify(res.data));
                setError('');
                setloading(true);
            })
            .catch((err: any) => {
                navigate("/cards/create");
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });            
        }
    }

    return (
        <>
        <div className="homepage-container w-50 vh-100 pt-2 mx-auto text-center">
            <div className="row">
                {grid}
            </div>
            <button className="add-to-cart btn mx-auto mt-5 normal-text" onClick={() => {navigate("/cards/create");}}>Add Card</button>
        </div>
        </>
    );
}

export default CardPage;