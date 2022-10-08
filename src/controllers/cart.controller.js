const User = require("../models/user.model.js");

exports.getCart = (req, res) => {
    
    User.fetchCart(req.body.id, (err, data) => {
        if(err)
            if(err.kind === "not_found")
                return res.status(404).send({
                    message: "Cart not found!"
                });
        return res.status(200).send(data)
    });
}

exports.removeItem = (req, res) => {

    User.removeFromCart(req.body.id, req.body.productName, (err, data) => {
        if(err)
            return res.status(500).send({message: "Error deleting product"});
        return res.status(200).send(data);
    })

}

exports.addItem = (req, res) => {
    User.addToCart(req.body.UsersCart, req.body.ProductInCart, req.body.QuantityInCart, req.body.TotalPriceCart, (err, data) => {
        if(err)
            return res.status(500).send({message: "Error adding product"});
        return res.status(200).send(data);
    })
}

exports.updateItem = (req, res) => {
    User.updateCartItem(req.body.ProductInCart, req.body.UsersCart, req.body.QuantityInCart, req.body.TotalPriceCart, (err, data) => {
        if(err)
            return res.status(500).send({message: "Unexpected error"});
        return res.status(200).send(data);
    })
}

exports.cartDeletion = (req, res) => {
    User.emptyCart(req.body.id, (err, data) => {
        if(err)
            return res.status(500).send({message: "Error deleting product"});
        return res.status(200).send(data);
    }); 
}