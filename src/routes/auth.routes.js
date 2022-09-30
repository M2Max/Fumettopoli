const verifySignUp  = require("../middleware/verifySignup.js");
const tokenCheck    = require("../middleware/authJwt.js");
const verifyCart    = require("../middleware/verifyCart.js");
const authController = require("../controllers/auth.controller.js");
const cartController = require("../controllers/cart.controller.js");
const productController = require("../controllers/product.controller.js");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsername, authController.signup]);
  app.post("/api/auth/signin", authController.signin);

  app.post("/api/cart/fetch", [tokenCheck.verifyToken , cartController.getCart]);
  app.post("/api/cart/remove", [tokenCheck.verifyToken, cartController.removeItem]);
  app.post("/api/cart/add", [tokenCheck.verifyToken, verifyCart.checkDuplicateProductInCart, (req, res) => {if(req.runUpdate) {cartController.updateItem(req, res)} else {cartController.addItem(req, res)}}]);

  app.post("/api/product/show", productController.getList);
  app.post("/api/product/info", productController.getProduct);
  app.post("/api/search", productController.searchProducts);
};
