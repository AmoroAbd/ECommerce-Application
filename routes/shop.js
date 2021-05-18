// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const router = express.Router();
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************

// DECLARATIONS OF GLBAL VARIABLES

// Home Route - "/" - GET
router.get("/", function (req, res) {
  res.send("<h1>Home</h1>");
});

// EXPORTING MODULE **********************************************************************
module.exports = router;
