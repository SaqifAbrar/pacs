const express = require("express");
const router = express.Router();

const ordersRouter = require("./ordersRoute");

router.get("/", (req, res) => res.send({ message: "accessed api route" }));

router.use("/orders", ordersRouter);

module.exports = router;
