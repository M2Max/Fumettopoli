const User = require("../models/user.model.js");

const checkDuplicateUsername = (req, res, next) => {

    User.findOne(req.body.username, (err, data) => {
        if(err) {
            if (err.kind === "not_found") {
                next();
            } else {
                res.status(500).send({
                    message: "Unexpected error"
                });
            }
        } else {
            res.status(400).send ({
                message: "Failed! Username is already in use!"
            });
            next('route');
        }
    });
};

const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername,
};
module.exports = verifySignUp;
