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
  MDBTabsPane
}
from 'mdb-react-ui-kit';

import "./Login.css";

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value: any) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

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

                  <MDBInput wrapperClass='mb-4 mx-5 w-100 primary-border' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100 primary-border' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

                  <MDBBtn outline className='mx-2 mb-1 px-5 border-0 button-hover text-white bold-text fs-5' color='white' size='lg'>
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

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <MDBRow className='d-flex justify-content-center align-items-center h-100 cormorant-normal'>
            <MDBCol col='12'>

              <MDBCard className='login-form position-absolute top-50 start-50 translate-middle mx-auto text-center' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='card-body p-5 d-flex flex-column align-items-center mx-auto w-100'>

                  <h2 className="mb-2 bold-text text-white fs-1">Signup</h2>
                  <p className="text-white mb-5">Please enter your data</p>

                  <MDBInput wrapperClass='mb-4 mx-5 w-100 primary-border' labelClass='text-white' label='Firstname' id='formControlLg' type='text' size="lg"/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100 primary-border' labelClass='text-white' label='Lastname' id='formControlLg' type='text' size="lg"/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100 primary-border' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100 primary-border' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100 primary-border' labelClass='text-white' label='Repeat Password' id='formControlLg' type='password' size="lg"/>

                  <MDBBtn outline className='mx-2 mb-1 px-5 border-0 button-hover text-white bold-text fs-5' color='white' size='lg'>
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