const sql = require("../connection/connection.js");

const User = function(username, password, firstname, lastname, address) {
  this.username   = username;
  this.password   = password;
  this.firstname  = firstname;
  this.lastname   = lastname;
  this.address    = address;
}

User.findOne = (username, result) => {
  sql.query(`SELECT * FROM user WHERE Username = "${username}"`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    });
};

User.Create = (user, result) => {
  let query = "INSERT INTO `user` (`ID`, `Username`, `Password`, `Firstname`, `Lastname`, `Address`) VALUES (NULL, ?, ?, ?, ?, ?);";
  sql.query(query, [user.username, user.password, user.firstname, user.lastname, user.address],(err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...user });
  });
}

User.fetchCart = (id, result) => {
  sql.query(`SELECT c.productInCart, p.Image, c.quantityInCart, c.totalPriceCart FROM user u JOIN cart_user c ON u.id = c.userscart JOIN product p ON p.name = c.productincart WHERE u.id = "${id}"`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }

      result({ kind: "not_found" }, null);
    });
};


User.removeFromCart = (id, productName, result) => {
    sql.query(`DELETE FROM cart_user WHERE cart_user.UsersCart = "${id}" AND cart_user.ProductInCart = "${productName}"`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }

      result(null, { message: "Deleted successfully" });
    });
}

User.addToCart = (id, productName, quantity, totalPrice, result) => {
  let query = "INSERT INTO `cart_user` (`UsersCart`, `ProductInCart`, `QuantityInCart`, `TotalPriceCart`) VALUES (?, ?, ?, ?);"    
  sql.query(query, [id, productName, quantity, totalPrice], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    result(null, { message: "Added to cart successfully"});
  });
}

User.retrieveFromCart = (name, id, result) => {
  sql.query(`SELECT * FROM  cart_user c WHERE c.userscart = "${id}" AND c.productincart = "${name}"`, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
}

User.updateCartItem = (name, id, quantity, price,  result) => {
  sql.query(`UPDATE cart_user SET QuantityInCart = QuantityInCart + "${quantity}", TotalPriceCart = TotalPriceCart + "${price}" WHERE UsersCart = "${id}" AND ProductInCart = "${name}"`, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    result(null, { message: "Updated cart successfully"});
  })
}

User.fetchCards = (id, result) => {
  sql.query(`SELECT * FROM cards WHERE UserCard = "${id}"`, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });

}

User.removeCard = (id, cardNumber, result) => {
  sql.query(`DELETE FROM cards WHERE cards.UserCard = "${id}" AND cards.CardNumber = "${cardNumber}"`, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    result(null, { message: "Deleted successfully" });
  });
}

User.addCard = (id, cardNumber, cardName, cardOwner, cardExp, cardCVV, result) => {
  let query = "INSERT INTO `cards` (`OwnerName`, `CardName`, `CardNumber`, `CardExpiration`, `CardCVV`, `UserCard`) VALUES (?, ?, ?, ?, ?, ?)";
  sql.query(query, [cardOwner, cardName, cardNumber,  cardExp, cardCVV, id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    result(null, { message: "Added to cart successfully"});
  });
}

module.exports = User;

