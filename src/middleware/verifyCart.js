const User = require("../models/user.model.js");
const cartController = require("../controllers/cart.controller.js");

const checkDuplicateProductInCart = (req, res, next) => {

    User.retrieveFromCart(req.body.ProductInCart, req.body.UsersCart, (err, data) => {
        if(err) {
            if (err.kind === "not_found") {
                req.runUpdate = false;
                next();
            } else {
                res.status(500).send({
                    message: "Unexpected error"
                });
            }
        } else {
            req.runUpdate = true;
            next();
        }
    });
};

const verifyCart = {
  checkDuplicateProductInCart: checkDuplicateProductInCart,
};
module.exports = verifyCart;
