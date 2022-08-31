const sql = require("../connection/connection.js");
// constructor
const User = function(user) {
  this.username   = user.username;
  this.password   = user.password;
  this.firstname  = user.firstname;
  this.lastname   = user.lastname;
  this.address    = user.address;
};

User.findOne = (username, result) => {
  sql.query(`SELECT * FROM user WHERE Username = "${username}"`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("Found User: ", res[0]);
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
    console.log("created tutorial: ", { id: res.insertId, ...user });
    result(null, { id: res.insertId, ...user });
  });
}


module.exports = User;
