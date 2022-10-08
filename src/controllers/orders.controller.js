const User = require("../models/user.model.js");

exports.createOrder = (req, res) => {
    
    User.addOrder(req.body.id, req.body.card, req.body.total, (err, data) => {
        if(err)
            return res.status(500).send({message: "Error creating order"});

        
        req.body.cart.map((product) => {
            User.addProductToOrder(data.insertId, product.productInCart, product.quantityInCart, product.totalPriceCart, (err, data) => {
                if(err)
                    return res.status(500).send({message: "Error adding products to order"});
                return;
            });
        });

        return res.status(200).send({message: "Created order successfully"});

    });
}

exports.fetchOrders = (req, res) => {
    
    User.fetchOrders(req.body.id, (err, data) => {
        if(err)
            if(err.kind === "not_found")
                return res.status(404).send({
                    message: "Orders not found!"
                });
        return res.status(200).send(data)
    });

}
