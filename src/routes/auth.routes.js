const verifySignUp  = require("../middleware/verifySignup.js")
const controller = require("../controllers/auth.controller.js");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsername, controller.signup]);
  app.post("/api/auth/signin", controller.signin)
  app.post("/api", (req, res, next) => {
    res.status(400).send({message: "Use /api/auth/signin or /api/auth/signup"});
  })
  //app.get("/api/user", controller.getUser);
};
