// Express Setup
const express = require("express");
const app = express();
var cors = require("cors");

// Swagger Setup
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./docs/swagger.json");

// Routes
const cheesesRouter = require("./routes/cheeses");
const newCheeseRouter = require("./routes/new_cheese");
const updateCheeseRouter = require("./routes/update_cheese");
const deleteCheeseRouter = require("./routes/delete_cheese");

// Allow CORS
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/cheeses", cheesesRouter);
app.use("/new_cheese", newCheeseRouter);
app.use("/update_cheese", updateCheeseRouter);
app.use("/delete_cheese", deleteCheeseRouter);




module.exports = app.listen(3000);
