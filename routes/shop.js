// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");
const { getProducts } = require("../controllers/products-controller");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************
const productsController = require("../controllers/products-controller");
// const rootDir = require("../utils/path");

// DECLARATIONS OF GLBAL VARIABLES ********************************************************

// ROUTES ***********************************************************************************
// Home Route - "/" - GET
router.get("/", productsController.getProducts);

// EXPORTING MODULE **********************************************************************
module.exports = router;
