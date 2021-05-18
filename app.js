// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************

// DECLARATIONS OF GLBAL VARIABLES

// INITIALIZING APP ************************************************************************
const app = express();

// MIDDLEWARE ******************************************************************************
// Rendering static Pages
app.use(express.static(path.join(__dirname, "public")));
// Using body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES ************************************************************************************
// Home Route - "/" - GET
app.get("/", function (req, res) {
  res.send("<h1>Home</h1>");
});

// Add Product Route - "/add-product" - GET
app.get("/add-product", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

// Shop Route - "/shop" - POST
app.post("/shop", function (req, res) {
  // res.send(req.body);
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});

// 404 Route -
app.use(function (req, res) {
  res.send("<h1>Page Not Found</h1>");
});

// STARTING THE SERVER **************************************************************************
const PORT = process.env.PORT || 3000;
app.listen(PORT, function (req, res) {
  console.log(`Server Started on port ${PORT}`);
});
