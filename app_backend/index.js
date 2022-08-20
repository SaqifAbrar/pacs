const express = require("express");
//const dotenv = require("dotenv");
const app = express();
const apiRoutes = require("./src/routes/routes");

require("dotenv").config();
//app.use(express.json());

app.get("/", (req, res) => res.send({ message: "accessed backend" }));

// pacs routes
app.use("/api/v1", apiRoutes);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`pacs server is listening on port ${port}`));
