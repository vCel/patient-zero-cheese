// Express Setup
const express = require("express");
const app = express();
var cors = require("cors");

// Swagger Setup
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../docs/swagger.json");

// Routes
const cheesesRouter = require("../routes/cheeses");
const cheeseRouter = require("../routes/cheese");

app.use(cors());

app.use('/api', swaggerUi.serve);
app.get('/api', swaggerUi.setup(swaggerDoc));

app.use("/cheeses", cheesesRouter);
app.use("/cheese", cheeseRouter);

app.listen(3000);
