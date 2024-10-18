const fileName = "./src/data/cheese-list.json";
var express = require("express");
var router = express.Router();

var fs = require('fs');

// Reads the list of cheese from cheese-list.json
const cheeseData = fs.readFileSync(fileName, 'utf8');

// Parse the JSON string into an object
const cheeseList = JSON.parse(cheeseData);

// Delete cheese from ID
router.delete("/:id", function (req, res) {
    const { id } = req.params;

    // Check if ID exists in the params
    if (!id) {
        return res.status(400).json({ error: "Missing ID" });
    }
    // Find the index of the cheese with the given ID
    const cheeseIndex = cheeseList.cheeses.findIndex((cheese) => cheese.id == id);

    // Check if cheese exists
    if (cheeseIndex === -1) {   
        return res.status(404).json({ error: "Cheese not found" });
    }

    // Delete cheese
    cheeseList.cheeses.splice(cheeseIndex, 1);
    const updatedCheeseData = JSON.stringify(cheeseList, null, 2);

    // Write updated cheese data to the JSON file
    fs.writeFile(fileName, updatedCheeseData, function (err) {
        if (err) {
            console.log(err);
        }
    });
    return res.json(cheeseList.cheeses);
});

module.exports = router;