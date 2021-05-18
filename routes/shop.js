// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************
const adminRoute = require("./admin");
// const rootDir = require("../utils/path");

// DECLARATIONS OF GLBAL VARIABLES ********************************************************

// ROUTES ***********************************************************************************
// Home Route - "/" - GET
router.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  const products = adminRoute.products;
  res.render("shop.ejs", {
    pageTitle: "Shop",
    prods: products,
    path: "/",
    activeShop: true,
  });
});

// EXPORTING MODULE **********************************************************************
module.exports = router;
