const router = require("express").Router();
const paymentController = require("../controllers/paymentController");

router.get("/:id", paymentController.getPaymentById);
router.get("/", paymentController.getAllPayments); // get all


module.exports = router;
