import React from "react";
import MainSwiper from "../SwiperSliders/MainSwiper";
import SmallSwiper from "../SwiperSliders/SmallSwiper";

export const Homepage = () => {
    return (
        <div className="homepage-container w-75 vh-100 pt-2 mx-auto text-center">
            <MainSwiper></MainSwiper>
            <h1 className="bold-text">Fumetti</h1>
            <SmallSwiper category="Fumetto"></SmallSwiper>
            <h1 className="bold-text">Action Figure</h1>
            <SmallSwiper category="Action Figure"></SmallSwiper>
        </div>
    );
}