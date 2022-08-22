import React from "react";
import MainSwiper from "../SwiperSliders/MainSwiper";
import SmallSwiper from "../SwiperSliders/SmallSwiper";

export const Homepage = () => {
    return (
        <div className="homepage-container w-75 vh-100 pt-2 mx-auto text-center">
            <MainSwiper></MainSwiper>
            <h1 className="bold-text">Nuove uscite</h1>
            <SmallSwiper></SmallSwiper>
            <h1 className="bold-text">Offerte</h1>
            <SmallSwiper></SmallSwiper>
            <h1 className="bold-text">Più venduti</h1>
            <SmallSwiper></SmallSwiper>
        </div>
    );
}