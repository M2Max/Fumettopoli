import React from "react";
import { useNavigate } from "react-router-dom"

export const RedirectLogin = () => {
    var redirect = useNavigate();
    redirect('/contacts', {replace: true});
}
