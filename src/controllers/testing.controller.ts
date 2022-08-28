const Testing = require("../models/testing.model.ts");

// Get artist by name
exports.getArtist   = (req, res) => {
    Testing.getArtist(req.params.name, (err, data) => {
        if(err) {
            if (err.kind === "not found") {
                res.status(404).send({
                    message: `Not found Artist with name: ${req.params.name}.`
                }); 
            } else {
                res.status(500).send({
                    message: "Error retrieving Artist with name: " + req.params.name
                  });
            }
        } else res.send(data);
    });
};

exports.getAll      = (req, res) => {
    Testing.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};