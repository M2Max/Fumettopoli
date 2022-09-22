const verifySignUp  = require("../middleware/verifySignup.js");
const tokenCheck    = require("../middleware/authJwt.js");
const authController = require("../controllers/auth.controller.js");
const cartController = require("../controllers/cart.controller.js");
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
  app.post("/api", (req, res, next) => {
    res.status(400).send({message: "Use /api/auth/signin or /api/auth/signup"});
  })
  //app.get("/api/user", controller.getUser);
};
