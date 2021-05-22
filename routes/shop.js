// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");
const { getProducts } = require("../controllers/shop-controller");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************
const shopController = require("../controllers/shop-controller");
// const rootDir = require("../utils/path");

// DECLARATIONS OF GLBAL VARIABLES ********************************************************

// ROUTES ***********************************************************************************
// Home Route - "/" - GET
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

// EXPORTING MODULE **********************************************************************
module.exports = router;
