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
import axios from "axios";
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8080/api';
const method = "post";
const headers = {
  "accept": '*/*',
  "Content-type": "application/json"
};
const delay = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
);

function Login() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const [justifyActive, setJustifyActive] = useState('tab1');
  let navigate = useNavigate();

  const handleJustifyClick = (value: any) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const fieldsCheck = () => {
    if (justifyActive === 'tab1'){
      signIn(document.getElementById("loginUsername") as HTMLInputElement, document.getElementById("loginPassword") as HTMLInputElement, invalidation("login"));
    } else {
      signUp(invalidation("signup"));
    }
  }

  const invalidation = (type: string) => {
    const Elements = document.querySelectorAll("input."+type);
    let validFields: boolean = true;

      // eslint-disable-next-line no-cond-assign
      for (var i = 0, element; element = Elements[i] as HTMLInputElement; i++) {
          if(element.value === ""){
            element.classList.add("is-invalid");
            validFields = false;
          }
      }
    return validFields;
  }

  const signUp = async (validFields: boolean) => {
    if (!validFields)
      return;
    const username = document.getElementById("signupUsername") as HTMLInputElement;
    const firstname = document.getElementById("signupName") as HTMLInputElement;
    const lastname = document.getElementById("signupLast") as HTMLInputElement;
    const address = document.getElementById("signupAddress") as HTMLInputElement;
    const password = document.getElementById("signupPassword") as HTMLInputElement;
    let canSignIn: boolean = false;
    
    const endopoint = "/auth/signup";
    const body = JSON.stringify({
      username: username.value,
      password: password.value,
      firstname: firstname.value,
      lastname: lastname.value,
      address: address.value
    })

    axios({
      method: method,
      url: endopoint,
      headers: headers,
      data: body
    }).then((res: any) => {
      setResponse(res.data);
      setError('');
      setloading(true);
      canSignIn = true;
    })
    .catch((err: any) => {
        setError(err);
        canSignIn = false;
    })
    .finally(() => {
        setloading(false);
        if(canSignIn){
          signIn(username, password, true);
        }
    });
    
    
      
  }

  const signIn = (username: HTMLInputElement, password: HTMLInputElement, validFields: boolean) => {
    if (!validFields)
      return;

    const endopoint = "/auth/signin";
    const body = JSON.stringify({
      username: username.value,
      password: password.value,
    })

    axios({
      method: method,
      url: endopoint,
      headers: headers,
      data: body
    }).then((res: any) => {
      setResponse(res.data);
      sessionStorage.setItem("logged-user", JSON.stringify(res.data));
      setError('');
      setloading(true);
    })
    .catch((err: any) => {
        setError(err);
    })
    .finally(() => {
        setloading(false);
        if(sessionStorage.getItem("logged-user") !== null)
          navigate("/home");
    });

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