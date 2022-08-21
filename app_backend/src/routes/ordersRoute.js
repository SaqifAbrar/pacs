const router = require("express").Router();
const dummyData = require("../model/dashboard_data.json");

router.get("/", (req, res) => {
	res.send({ message: "accessed order route" });
});

router.get("/initial", (req, res) => {
	res.send({ data: dummyData });
});

router.get("/:id", (req, res) => {
	const orderId = req.params.id;
	res.send({ message: "recieving order information of id: " + orderId });
});

router.get("/:id/:orderFilter", (req, res) => {
	const filter = req.params.orderFilter;
	res.send({ message: "recieving orders of filter type: " + filter });
});

module.exports = router;
