// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************
// const rootDir = require("../utils/path");

// DECLARATIONS OF GLBAL VARIABLES *********************************************************

// ROUTES **********************************************************************************
// Add Product Route - "/admin/add-product" - GET
router.get("/add-product", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// Product Route - "/admin/product" - POST
router.post("/add-product", function (req, res) {
  console.log(req.body);
  //   res.sendFile(path.join(__dirname, "views", "shop.html"));
  res.redirect("/");
});

// EXPORTING MODULE **********************************************************************
module.exports = router;
