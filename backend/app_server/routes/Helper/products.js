const router = require("express").Router();
const productController = require("../../controllers/Helper/productsController");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);
router.get("/search/:key", productController.searchProduct);

router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProductbyId);

module.exports = router;
