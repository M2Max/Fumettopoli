// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SmallSwiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import ProductSlide from "./ProductSlide/ProductSlide";

export default function SmallSwiper() {
  return (
    <>
        <Swiper
            slidesPerView='auto'
            loopedSlides={5}
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
            <SwiperSlide><ProductSlide/></SwiperSlide>
            <SwiperSlide><ProductSlide/></SwiperSlide>
            <SwiperSlide><ProductSlide/></SwiperSlide>
        </Swiper>
        </>
  );
}
