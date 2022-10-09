// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide2 from "../../Resources/Slide2.jpg";
import Slide3 from "../../Resources/Slide3.jpg";
import Slide4 from "../../Resources/Slide4.jpg";
import Slide5 from "../../Resources/Slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./MainSwiper.css";

import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { productSlideObject } from "../../Interfaces/productInterfaces";
import { BANNER_FETCH, BASE_URL, HEADERS, METHOD } from "../../Utilities/Constants";
import axios from "axios";

export default function MainSwiper() {
  const [response, setResponse] = useState<productSlideObject[] | null>(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const [list, setList] = useState<any>(null);

  useEffect(() => {
      if(response === null)
          getList();
      else{
          const temp = response.map((product: productSlideObject) => {
              return <SwiperSlide key={product.Name}><img src={product.Image} alt={product.Name}/></SwiperSlide>
          })
          setList(temp);
      }

  }, [response])

  const getList = () => {

      const endpoint = BASE_URL + BANNER_FETCH;

      axios({
          method: METHOD,
          url: endpoint,
          headers: HEADERS,
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
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }} 
            modules={[Autoplay]} 
            className="main-swiper"
        >
            {list}
        </Swiper>
    </>
  );
}