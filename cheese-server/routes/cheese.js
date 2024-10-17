const cheeseList = require("../data/cheese-list.json");

var express = require("express");
var router = express.Router();

/* GET cheese listing. */
router.get("/", function (req, res, next) {
    return JSON.stringify(cheeseList);
})

module.exports = router;