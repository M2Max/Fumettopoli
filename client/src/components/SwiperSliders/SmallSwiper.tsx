// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SmallSwiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import ProductSlide from "./ProductSlide/ProductSlide";
import { useEffect, useState } from "react";
import { BASE_URL, HEADERS, METHOD, SWIPER_FETCH } from "../../Utilities/Constants";
import { userObject } from "../../Interfaces/userObject";
import axios from "axios";
import { productSlideObject } from "../../Interfaces/productInterfaces";
import { setgid } from "process";
import { setOriginalNode } from "typescript";

export default function SmallSwiper(props: any) {
    const [response, setResponse] = useState<productSlideObject[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [list, setList] = useState<any>(null);

    useEffect(() => {
        if(response === null)
            getList();
        else{
            const temp = response.map((product: productSlideObject) => {
                return <SwiperSlide><ProductSlide Image={product.Image} Name={product.Name}/></SwiperSlide>
            })
            setList(temp);
        }

    }, [response])

    const getList = () => {

        const endpoint = BASE_URL + SWIPER_FETCH;
        const body = JSON.stringify({
            category: props.category
        });

        axios({
            method: METHOD,
            url: endpoint,
            headers: HEADERS,
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
            <Swiper
                slidesPerView='auto'
                loopedSlides={10}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                clickable: true,
                dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                className="small-swiper"
            >
                {list}
            </Swiper>
        </>
  );
}
