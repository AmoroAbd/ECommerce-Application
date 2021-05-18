// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************

// DECLARATIONS OF GLBAL VARIABLES
// Add Product Route - "/add-product" - GET
router.get("/add-product", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// Shop Route - "/shop" - POST
router.post("/product", function (req, res) {
  console.log(req.body);
  //   res.sendFile(path.join(__dirname, "views", "shop.html"));
  res.redirect("/");
});

// EXPORTING MODULE **********************************************************************
module.exports = router;
