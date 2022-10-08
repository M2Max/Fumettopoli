const User = require("../models/user.model.js");

exports.createOrder = (req, res) => {
    
    User.addOrder(req.body.id, req.body.card, req.body.total, (err, data) => {
        if(err)
            return res.status(500).send({message: "Error creating order"});
        next();
    });
}

exports.addProducts = (req, res) => {
    
    

}
