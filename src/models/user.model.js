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
  sql.query(`SELECT c.productInCart, c.quantityInCart, c.totalPriceCart FROM user u JOIN cart_user c ON u.id = c.userscart WHERE u.id = "${id}"`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log(res);
        result(null, res);
        return;
      }

      result({ kind: "not_found" }, null);
    });
};



module.exports = User;
