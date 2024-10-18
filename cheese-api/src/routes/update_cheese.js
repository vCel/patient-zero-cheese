const fileName = "./src/data/cheese-list.json";
var express = require("express");
var router = express.Router();

var fs = require('fs');

// Reads the list of cheese from cheese-list.json
const cheeseData = fs.readFileSync(fileName, 'utf8');

// Parse the JSON string into an object
const cheeseList = JSON.parse(cheeseData);

router.patch("/:id", function (req, res) {
    const { id } = req.params;
    const { name, colour, price_per_kilo, image, description } = req.body;

    // Check if ID exists in the params
    if (!id) {
        return res.status(400).json({ error: "Missing ID" });
    }
    
    const cheeseIndex = cheeseList.cheeses.findIndex((cheese) => cheese.id == id);

    // Check if cheese exists
    if (cheeseIndex === -1) {
        return res.status(404).json({ error: "Cheese not found" });
    }

    // Update cheese
    cheeseList.cheeses[cheeseIndex] = {
        ...cheeseList.cheeses[cheeseIndex],
        name: name || cheeseList.cheeses[cheeseIndex].name,
        colour: colour || cheeseList.cheeses[cheeseIndex].colour,
        price_per_kilo: price_per_kilo || cheeseList.cheeses[cheeseIndex].price_per_kilo,
        image: image || cheeseList.cheeses[cheeseIndex].image,
        description: description || cheeseList.cheeses[cheeseIndex].description,
    };

    const updatedCheeseData = JSON.stringify(cheeseList, null, 2);
    fs.writeFileSync(fileName, updatedCheeseData);
    return res.json(cheeseList.cheeses[cheeseIndex]);
});

module.exports = router;