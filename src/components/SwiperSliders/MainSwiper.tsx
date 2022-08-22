import React, { useRef, useState } from "react";
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

import { Pagination, Autoplay } from "swiper";

export default function MainSwiper() {
  return (
    <>
        <Swiper 
            pagination={true} 
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }} 
            modules={[Pagination, Autoplay]} 
            className="main-swiper"
        >
            <SwiperSlide><img src={Slide2} alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img src={Slide3} alt="Slide 3" /></SwiperSlide>
            <SwiperSlide><img src={Slide4} alt="Slide 4" /></SwiperSlide>
            <SwiperSlide><img src={Slide5} alt="Slide 5" /></SwiperSlide>
        </Swiper>
    </>
  );
}