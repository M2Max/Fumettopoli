import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CardCreation from "./components/CardPages/CardCreation/CardCreation";
import CardPage from "./components/CardPages/CardPage";
import { Homepage } from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import ProductPage from "./components/ProductPage/ProductPage";
import SearchResults from "./components/SearchResults/SearchResults";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <Homepage/>} />
                <Route path="/login" element={ <Login />} />
                <Route path="/cart" element={ <ShoppingCart />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/cards" element={<CardPage />}/>
                <Route path="/cards/create" element={<CardCreation />}/>
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;