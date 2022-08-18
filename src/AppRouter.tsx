import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <Homepage/>} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;