const fileName = "./src/data/cheese-list.json";
var express = require("express");
var router = express.Router();

var fs = require('fs');
const cheeseData = fs.readFileSync(fileName, 'utf8');

// Parse the JSON string into an object
const cheeseList = JSON.parse(cheeseData);

// Delete cheese from ID
router.delete("/:id", function (req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Missing ID" });
    }
    const cheeseIndex = cheeseList.cheeses.findIndex((cheese) => cheese.id == id);

    if (cheeseIndex === -1) {   
        return res.status(404).json({ error: "Cheese not found" });
    }

    cheeseList.cheeses.splice(cheeseIndex, 1);
    const updatedCheeseData = JSON.stringify(cheeseList, null, 2);

    fs.writeFile(fileName, updatedCheeseData, function (err) {
        if (err) {
            console.log(err);
        }
    });
    return res.json(cheeseList.cheeses);
});

module.exports = router;