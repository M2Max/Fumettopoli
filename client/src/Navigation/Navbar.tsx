import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
import Darkmode from "./Darkmode";
import logo from "../Resources/logo.png";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [logged, setLogged] = useState(true);


    useEffect(() => {
        if(sessionStorage.getItem("logged-user") === null)
            setLogged(false);
        else
            setLogged(true);
    }, [logged])

    const logout = () => {
        sessionStorage.removeItem("logged-user");
        sessionStorage.removeItem("user-cart");
        sessionStorage.removeItem("total-cart-sum");
        sessionStorage.removeItem("card-selected");
        sessionStorage.removeItem("user-cards");
        setLogged(false);
    }

    const search = () => {
        let data = document.getElementById("searchInput") as HTMLInputElement;
        sessionStorage.removeItem("search-data");
        sessionStorage.setItem("search-data", data.value);
        window.location.href="/search";
    }

    return(
        <MDBNavbar sticky expand='md' light bgColor='light' className="block-container justify-content-center w-75 mx-auto">
        <MDBContainer fluid>
            <MDBNavbarBrand href='home'>
                <img src={logo} alt="logo" className="img-fluid" style={{height: "5vh"}}/>
            </MDBNavbarBrand>
            
            <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
            <FaBars style={{color: "var(--on-primary)"}}/>
        </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
            
            <MDBNavbarItem float-end className = "d-flex w-auto ms-auto me-2 my-2 align-items-center">
                <Darkmode/>
                {logged ? ( <MDBNavbarLink active aria-current='page' onClick={logout} className="link-hover mx-1">
                                <FiLogOut size={28}/>
                            </MDBNavbarLink>) 
                            : 
                          ( <MDBNavbarLink active aria-current='page' href='login' className="link-hover mx-1">
                                <FaUserCircle size={28}/>
                            </MDBNavbarLink>)
                }
                <MDBNavbarLink active aria-current='page' href='cart' className="link-hover mx-1">
                    <FaShoppingCart size={28}/>
                </MDBNavbarLink>
            </MDBNavbarItem>

            {/* <MDBNavbarItem className = "d-flex w-auto me-2 my-2" href="login">
                
            </MDBNavbarItem> */}

            
            <MDBInputGroup tag="div" className='d-flex w-auto mb-2 my-2'>
                <input className='form-control search-bar' placeholder="" aria-label="Search" id="searchInput"/>
                <MDBBtn className="search-button normal-text" onClick={search}>Search</MDBBtn>
            </MDBInputGroup>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}

export default Navbar;