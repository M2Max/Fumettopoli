import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SmallSwiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function SmallSwiper() {
  return (
    <>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
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
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </>
  );
}
