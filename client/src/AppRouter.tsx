import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <Homepage/>} />
                <Route path="/login" element={ <Login />} />
                <Route path="/cart" element={ <ShoppingCart />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;