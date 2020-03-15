const express = require('express');

let router = express.Router();

//Home Page
router.get("/", function (req, res) {
    res.render("home");
});

module.exports = router;