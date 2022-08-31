module.exports = app => {
    const testing = require("../controllers/user.controller.ts");
    var router = require("express").Router();
    // Find Artist by name
    router.get("/", testing.getAll);
    router.get("/:name", testing.getArtist);

    app.use('/api/testing', router);
  };