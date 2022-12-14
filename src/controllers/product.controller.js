const Product = require("../models/product.model");

exports.getList = (req, res) => {

    Product.fetchList(req.body.category, (err, data) => {
        if(err)
            return res.status(500).send({message: "Generic error!"});
        return res.status(200).send(data);
    });

}

exports.getProduct = (req, res) => {

    Product.findOne(req.body.name, (err, data) => {
        if (err)
            if(err.kind === 'not_found')
                return res.status(404).send({message: "Product not found"});
        return res.status(200).send(data);
    });

}

exports.searchProducts = (req, res) => {

    Product.search(req.body.search, (err, data) => {
        if (err)
            if(err.kind === 'not_found')
                return res.status(404).send({message: "No Product Found"});
        return res.status(200).send(data);
    });

}

exports.fetchBanners = (req, res) => {

    Product.fetchBanners((err, data) => {
        if(err)
            return res.status(500).send({message: "Generic error!"});
        return res.status(200).send(data);
    })
}