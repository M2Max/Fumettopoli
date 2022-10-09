
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

  app.post("/api/product/show", productController.getList);
  app.post("/api/banners/fetch", productController.fetchBanners);
  app.post("/api/product/info", productController.getProduct);
  app.post("/api/search", productController.searchProducts);

};
