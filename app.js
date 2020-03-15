const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require("./routes/index");


// Set default file extention to ejs
app.set("view engine", "ejs");
// Set your middleware directory
app.use(express.static("public"));
// For post routes we get parameters in request.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(indexRoutes);

app.listen(process.env.PORT || 3000, function () {
    console.log("Varun Portfolio Server Started!")
});