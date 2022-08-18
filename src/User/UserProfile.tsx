import React from "react";

let UserProfile = () => {
    let firstName: string   = "";
    let lastName: string    = "";
    let username: string    = "";
    var shoppingCart: { [productID: string] : number; } = {};

    let UserCretion = (first: string, last: string, user: string, cart: { [productID: string] : number; }) => {
        firstName       = first;
        lastName        = last;
        username        = user;
        shoppingCart    = cart;
    }
  
    let getName = function() {
        return firstName;    // Or pull this from cookie/localStorage
    };
  
    let setName = function(name: any) {
        firstName = name;     
        // Also set this in cookie/localStorage
    };

    let getLastName = function() {
        return lastName;    // Or pull this from cookie/localStorage
      };
    
    let setLastName = function(last: string) {
        lastName = last;     
        // Also set this in cookie/localStorage
    };

      let getUsername = function() {
        return username;    // Or pull this from cookie/localStorage
      };
    
      let setUsername = function(user: string) {
        username = user;     
        // Also set this in cookie/localStorage
      };

      let getCart = function() {
        return shoppingCart;    // Or pull this from cookie/localStorage
      };
    
      let setCart = function(cart:  { [productID: string] : number; }) {
        shoppingCart = cart;     
        // Also set this in cookie/localStorage
      };
  
    return {
      getName: getName,
      getLastName: getLastName,
      getUsername: getUsername,
      getCart: getCart,
      setName: setName,
      setLastName: setLastName,
      setUsername: setUsername,
      setCart: setCart
    }
  
  };
  
  export default UserProfile;