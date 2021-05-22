// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************
const adminController = require("../controllers/admin-controller");

// const rootDir = require("../utils/path");

// DECLARATIONS OF GLBAL VARIABLES *********************************************************

// ROUTES **********************************************************************************
// Add Product Route - "/admin/add-product" - GET
router.get("/add-product", adminController.getAddProduct);
// Admin Product Route - "/admin/products" - GET
router.get("/products", adminController.getProducts);

// Product Route - "/admin/product" - POST
router.post("/add-product", adminController.postAddProduct);

// EXPORTING MODULE **********************************************************************
module.exports = router;
// exports.routes = router;
// exports.products = products;
