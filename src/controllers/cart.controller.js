const User = require("../models/user.model.js");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js")

exports.getCart = (req, res) => {
    
    User.fetchCart(req.body.id, (err, data) => {
        if(err)
            if(err.kind === "not_found")
                return res.status(404).send({
                    message: "User not found!"
                });
        return res.status(200).send(data)
    })
}
