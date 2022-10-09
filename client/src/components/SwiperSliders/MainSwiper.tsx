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
//import { productSlideObject } from "../../Interfaces/productInterfaces";

//export default function MainSwiper(props: productSlideObject) {
export default function MainSwiper() {
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
            <SwiperSlide><img src={Slide2} alt="Slide 2" style={{borderRadius: "5px"}} /></SwiperSlide>
            <SwiperSlide><img src={Slide3} alt="Slide 3" style={{borderRadius: "5px"}} /></SwiperSlide>
            <SwiperSlide><img src={Slide4} alt="Slide 4" style={{borderRadius: "5px"}} /></SwiperSlide>
            <SwiperSlide><img src={Slide5} alt="Slide 5" style={{borderRadius: "5px"}} /></SwiperSlide>
        </Swiper>
    </>
  );
}