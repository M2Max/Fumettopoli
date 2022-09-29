const sql = require("../connection/connection.js");

const Product = function(name, description, image, quantityAvailable, price) {
  this.name   = name;
  this.description   = description;
  this.image  = image;
  this.quantityAvailable   = quantityAvailable;
  this.price    = price;
}

Product.findOne = (name, result) => {
  sql.query(`SELECT * FROM product WHERE Name = "${name}"`, (err, res) => {
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

Product.fetchList = (category, result) => {
  sql.query(`SELECT p.Name, p.Image FROM product p WHERE p.CategoryName = "${category}" LIMIT 10`, (err, res) => {
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



module.exports = Product;

