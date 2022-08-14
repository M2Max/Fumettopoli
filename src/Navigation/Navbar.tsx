import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
import Darkmode from "./Darkmode";

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);

    return(
        <MDBNavbar expand='lg' light bgColor='light' className="block-container">
        <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
            

            <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link'>
                    Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem>
                        <MDBDropdownLink>Action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink>Another action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink>Something else here</MDBDropdownLink>
                    </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBNavbarNav>
            
            <MDBNavbarItem className = "d-flex w-auto mb-2 me-2">
                <Darkmode />
            </MDBNavbarItem>
            
            <MDBInputGroup tag="form" className='d-flex w-auto mb-2'>
                <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                <MDBBtn outline>Search</MDBBtn>
            </MDBInputGroup>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}

export default Navbar;