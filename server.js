const express = require("express");
const cors = require("cors");
var bcrypt = require("bcryptjs");
var bodyParser = require('body-parser')
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));   

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Empty Message" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./src/routes/auth.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


