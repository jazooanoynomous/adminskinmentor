const skintipController = require('../controllers/skintipController');

const router=require( 'express').Router();

router.get("/",skintipController.getAllSkinTips);
router.get("/:id",skintipController.getSkinTipById);
router.post('/',skintipController.createSkinTip);
router.delete("/:id",skintipController.deleteSkinTipById);
router.put("/:id",skintipController.updateSkinTipById);
module.exports=router;
