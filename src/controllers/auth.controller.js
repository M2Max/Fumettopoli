const User = require("../models/user.model.js");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    let newUser = User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address
    });
    
    console.log(newUser);
    

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
            data.password
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
            id:             data.id,
            username:       data.username,
            firstname:      data.firstname,
            lastname:       data.lastname,
            address:        data.lastname,
            accessToken:    token
        });
    });
}
