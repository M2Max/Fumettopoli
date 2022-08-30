import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTabsContent,
  MDBTabsPane,
  MDBValidationItem
}
from 'mdb-react-ui-kit';

import "./Login.css";
import e from 'express';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value: any) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const fieldsCheck = () => {
    if (justifyActive === 'tab1'){
      invalidation("login");
    } else {
      invalidation("signup");
    }
  }

  const invalidation = (type: string) => {
    const Elements = document.querySelectorAll("input."+type);

      for (var i = 0, element; element = Elements[i] as HTMLInputElement; i++) {
          if(element.value === "")
            element.classList.add("is-invalid");
      }
  }

  return (
    <MDBContainer fluid>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <MDBRow className='d-flex justify-content-center align-items-center h-100 cormorant-normal'>
            <MDBCol col='12'>

              <MDBCard className='login-form position-absolute top-50 start-50 translate-middle mx-auto text-center' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='card-body p-5 d-flex flex-column align-items-center mx-auto w-100'>

                  <h2 className="mb-2 bold-text text-white fs-1">Login</h2>
                  <p className="text-white mb-5">Please enter your username and password!</p>
                  <MDBValidationItem className='w-100' invalid feedback='Please enter valid username'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='login' labelClass='text-white' label='Username' id='loginUsername' type='email' size="lg"/>
                  </MDBValidationItem>
                  <MDBValidationItem className='w-100 mb-1' invalid feedback='Please enter valid password'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='login' labelClass='text-white' label='Password' id='loginPassword' type='password' size="lg"/>
                  </MDBValidationItem>

                  <MDBBtn outline className='mx-2 mb-1 px-5 border-0 button-hover text-white bold-text fs-5' color='white' size='lg' onClick={fieldsCheck}>
                    Login
                  </MDBBtn>

                  <div>
                    <p className="mb-0">Don't have an account? <br className='break' /> <a href="#!" className="text-white-50 bold-text sign-up-hover" onClick={() => {handleJustifyClick('tab2')}}>Sign Up</a></p>

                  </div>
                </MDBCardBody>
              </MDBCard>

            </MDBCol>
          </MDBRow>

        </MDBTabsPane>

        <MDBTabsPane id='signup-tab' show={justifyActive === 'tab2'}>

          <MDBRow className='d-flex justify-content-center align-items-center h-100 cormorant-normal'>
            <MDBCol col='12'>

              <MDBCard className='login-form position-absolute top-50 start-50 translate-middle mx-auto text-center' style={{borderRadius: '1rem', width: '400px'}}>
                <MDBCardBody className='card-body p-5 d-flex flex-column align-items-center mx-auto w-100'>

                  <h2 className="mb-2 bold-text text-white fs-1">Signup</h2>
                  <p className="text-white mb-5">Please enter your data</p>

                  <MDBValidationItem className='w-100' invalid feedback='Please enter your first name'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='signup' labelClass='text-white' label='Firstname' id='signupName' type='text' size="lg"/>
                  </MDBValidationItem>
                  
                  <MDBValidationItem className='w-100' invalid feedback='Please enter your last name'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='signup' labelClass='text-white' label='Lastname' id='signupLast' type='text' size="lg"/>
                  </MDBValidationItem>
                  
                  <MDBValidationItem className='w-100' invalid feedback='Please enter a valid username'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='signup' labelClass='text-white' label='Username' id='signupUsername' type='text' size="lg"/>
                  </MDBValidationItem>

                  <MDBValidationItem className='w-100' invalid feedback='Please enter a valid address'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='signup' labelClass='text-white' label='Address' id='signupAddress' type='text' size="lg"/>
                  </MDBValidationItem>

                  <MDBValidationItem className='w-100' invalid feedback='Please enter a valid password'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='signup' labelClass='text-white' label='Password' id='signupPassword' type='password' size="lg"/>
                  </MDBValidationItem>

                  <MDBValidationItem className='w-100' invalid feedback='Please enter the same password'>
                    <MDBInput wrapperClass='mb-4 w-100 primary-border' className='signup' labelClass='text-white' label='Repeat Password' id='signupPassword2' type='password' size="lg"/>
                  </MDBValidationItem>

                  <MDBBtn outline className='mx-2 mb-1 px-5 border-0 button-hover text-white bold-text fs-5' color='white' size='lg' onClick={fieldsCheck}>
                    Signup
                  </MDBBtn>

                  <div>
                    <p className="mb-0">Already have an account? <br className='break' /> <a href="#!" className="text-white-50 bold-text sign-up-hover" onClick={() => {handleJustifyClick('tab1')}}>Login</a></p>
                  </div>
                  
                </MDBCardBody>
              </MDBCard>

            </MDBCol>
          </MDBRow>
          
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;