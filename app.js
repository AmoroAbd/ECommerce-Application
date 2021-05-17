// IMPORTING REQUIRE MODULES - CORE MODULES
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES

// DECLARATIONS OF GLBAL VARIABLES

// INITIALIZING APP
const app = express();

// MIDDLEWARE
// Rendering static Pages
app.use(express.static(path.join(__dirname, "public")));
// Using body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
// Home Route
app.get("/", function (req, res) {
  res.send("<h1>Home</h1>");
});

// STARTING THE SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, function (req, res) {
  console.log(`Server Started on port ${PORT}`);
});
