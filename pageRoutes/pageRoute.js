let express = require("express");
const { join } = require("path");
let router = express.Router();
let path = require('path');

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"));
})

module.exports = router;