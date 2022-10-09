import axios from "axios";
import ProductSlide from "../SwiperSliders/ProductSlide/ProductSlide";
import { useEffect, useState } from "react";
import { productSlideObject } from "../../Interfaces/productInterfaces";
import { BASE_URL, HEADERS, METHOD, SEARCH } from "../../Utilities/Constants";

import "./SearchResults.css";


const SearchResults = () => {
    const [response, setResponse] = useState<productSlideObject[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [grid, setGrid] = useState<any>();

    useEffect(() => {
        window.scroll(0,0);
        if (response === null){
            let searchData = sessionStorage.getItem("search-data") as string;
            fetchResults(searchData);
        } else {
            const temp = response.map((product: productSlideObject) => {
                return <div key={product.Name} className="col-md-4 mb-5"><ProductSlide Name={product.Name} Image={product.Image}/></div>
            });
            setGrid(temp);
        }

    }, [response])

    const fetchResults = (searchData: string) => {
        const endpoint = BASE_URL + SEARCH;
        const body = JSON.stringify({
            search: searchData 
        });

        axios({
            method: METHOD,
            headers: HEADERS,
            url: endpoint,
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
        <>
            <div className="container search-container w-50 mt-5 mb-5">
                <div className="row">
                    {grid}
                </div>
            </div>
        </>
    );
}

export default SearchResults;