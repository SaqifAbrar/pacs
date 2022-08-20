const router = require("express").Router();

router.get("/:id", (req, res) => {
	const orderInfo = req.params.id;
	res.send({ message: "recieving order information of id: " + locationId });
});

module.exports = router;
