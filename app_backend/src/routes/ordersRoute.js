const router = require("express").Router();

router.get("/", (req, res) => {
	res.send({ message: "accessed order route" });
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
