const fileName = "./src/data/cheese-list.json";
var express = require("express");
var router = express.Router();

var fs = require('fs');
const cheeseData = fs.readFileSync(fileName, 'utf8');

// Parse the JSON string into an object
const cheeseList = JSON.parse(cheeseData);

/* GET cheese listing. */
router.post("/", function (req, res, next) {

  const { name, colour, price_per_kilo } = req.body;

  if (!name || !colour) {
    return res.status(400).json({ error: "Missing name or colour" });
  }

  const newCheese = {
    id: Math.max(...cheeseList.cheeses.map(cheese => cheese.id)) + 1,
    name: name,
    colour: colour,
    price_per_kilo: price_per_kilo,
  };
  console.log("yoyoyo");

  cheeseList.cheeses.push(newCheese);
  const updatedCheeseData = JSON.stringify(cheeseList, null, 2); // Pretty formatted JSON

  try {
    fs.writeFileSync(fileName, updatedCheeseData, 'utf8');
    res.status(201).json({ message: "Cheese added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add cheese" });
  }
});

module.exports = router;
