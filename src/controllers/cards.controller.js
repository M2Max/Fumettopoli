const User = require("../models/user.model.js");

exports.getCards = (req, res) => {
    
    User.fetchCards(req.body.id, (err, data) => {
        if(err)
            if(err.kind === "not_found")
                return res.status(404).send({
                    message: "No cards found"
                });
        return res.status(200).send(data)
    })
}

exports.removeCard = (req, res) => {

    User.removeCard(req.body.id, req.body.cardNumber, (err, data) => {
        if(err)
            return res.status(500).send({message: "Error deleting card"});
        return res.status(200).send(data);
    })

}

exports.addCard = (req, res) => {

    User.addCard(req.body.id, req.body.cardNumber, req.body.cardName, req.body.cardOwner, req.body.cardExp, req.body.cardCVV, (err, data) => {
        if(err)
            return res.status(500).send({message: "Error adding card"});
        return res.status(200).send(data);
    })

}