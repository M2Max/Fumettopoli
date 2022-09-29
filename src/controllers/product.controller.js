const Product = require("../models/product.model");

exports.getList = (req, res) => {

    Product.fetchList(req.body.category, (err, data) => {
        if(err)
            return res.status(500).send({message: "Generic error!"});
        return res.status(200).send(data);
    });

}