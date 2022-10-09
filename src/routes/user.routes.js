const tokenCheck    = require("../middleware/authJwt.js");
const verifyCart    = require("../middleware/verifyCart.js");
const cartController = require("../controllers/cart.controller.js");
const cardsController = require("../controllers/cards.controller.js");
const ordersController = require("../controllers/orders.controller.js");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/cart/fetch", [tokenCheck.verifyToken , cartController.getCart]);
  app.post("/api/cart/remove", [tokenCheck.verifyToken, cartController.removeItem]);
  app.post("/api/cart/add", [tokenCheck.verifyToken, verifyCart.checkDuplicateProductInCart, (req, res) => {if(req.runUpdate) {cartController.updateItem(req, res)} else {cartController.addItem(req, res)}}]);
  app.post("/api/cart/empty", [tokenCheck.verifyToken, cartController.cartDeletion]);

  app.post("/api/cards/fetch", [tokenCheck.verifyToken, cardsController.getCards]);
  app.post("/api/cards/remove", [tokenCheck.verifyToken, cardsController.removeCard]);
  app.post("/api/cards/add", [tokenCheck.verifyToken, cardsController.addCard]);

  app.post("/api/orders/checkout", [tokenCheck.verifyToken, ordersController.createOrder]);
  app.post("/api/orders/fetch", [tokenCheck.verifyToken, ordersController.fetchOrders]);
};
