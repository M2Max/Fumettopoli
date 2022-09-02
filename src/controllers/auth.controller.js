const User = require("../models/user.model.js");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js")

exports.signup = (req, res) => {

    let newUser = new User(
        req.body.username,
        bcrypt.hashSync(req.body.password, 8),
        req.body.firstname,
        req.body.lastname,
        req.body.address);

    User.Create(newUser, (err, data) => {
        if(err) {
            res.status(500).send({ message: err.message });
        } else {
            res.send({ message: "User was registered successfully!" });
        }
    });
}

exports.signin = (req, res) => {

    User.findOne(req.body.username, (err, data) => {
        if(err){
            if(err.kind === "not_found")
                return res.status(404).send({
                    message: "User not found!"
                });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            data.Password
          );
        if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: data.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id:             data.ID,
            username:       data.Username,
            firstname:      data.Firstname,
            lastname:       data.Lastname,
            address:        data.Address,
            accessToken:    token
        });
    });
}

exports.getUser = (req, res) => {
    
    User.findOne(req.body.username, (err, data) => {
        if(err)
            if(err.kind === "not_found")
                return res.status(404).send({
                    message: "User not found!"
                });
        return res.status(200).send({
            id: data.id
        })
    })
}
