import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import MainSwiper from "../SwiperSliders/MainSwiper";
import SmallSwiper from "../SwiperSliders/SmallSwiper";
import "./Homepage.css";

export const Homepage = () => {
    return (
        <MDBContainer className="homepage-container w-75 vh-100 pt-2 mx-auto text-center">
            <MDBRow>
                <MainSwiper></MainSwiper>
            </MDBRow>
            <MDBRow>
                <h1 className="bold-text">Fumetti</h1>
                <SmallSwiper category="Fumetto"></SmallSwiper>
            </MDBRow>
            <MDBRow style={{marginBottom: "5rem"}}>
                <h1 className="bold-text">Action Figure</h1>
                <SmallSwiper category="Action Figure"></SmallSwiper>
            </MDBRow>
        </MDBContainer>
    );
}