import React from "react";
import MainSwiper from "../SwiperSliders/MainSwiper";
import SmallSwiper from "../SwiperSliders/SmallSwiper";

export const Homepage = () => {
    return (
        <div className="w-75 h-100 pt-2 mx-auto text-center">
            <MainSwiper></MainSwiper>
            <h1 style={{color: "var(--on-background)"}}>Nuove uscite</h1>
            <SmallSwiper></SmallSwiper>
            <h1 style={{color: "var(--on-background)"}}>Offerte</h1>
            <SmallSwiper></SmallSwiper>
            <h1 style={{color: "var(--on-background)"}}>Più venduti</h1>
            <SmallSwiper></SmallSwiper>
        </div>
    );
}