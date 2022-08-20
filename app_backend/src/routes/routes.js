const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send({ message: "accessed api route" }));

module.exports = router;
