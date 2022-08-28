const sql = require("../connection/connection.ts");
// constructor
const Testing = function(testing) {
  this.name   = testing.name;
  this.nation = testing.nation;
};

Testing.getArtist = (name, result) => {
    sql.query(`SELECT * FROM artist WHERE Name = "${name}"`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("found testing: ", res[0]);
          result(null, res[0]);
          return;
        }
        // not found Testing with the id
        result({ kind: "not_found" }, null);
      });
};

Testing.getAll = (result) => {
  let query = "SELECT * FROM artist";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("testings: ", res);
    result(null, res);
  });
};


module.exports = Testing;
