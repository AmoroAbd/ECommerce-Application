// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************
// const rootDir = require("../utils/path");

// DECLARATIONS OF GLBAL VARIABLES ********************************************************

// ROUTES ***********************************************************************************
// Home Route - "/" - GET
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

// EXPORTING MODULE **********************************************************************
module.exports = router;
