// IMPORTING REQUIRE MODULES - CORE MODULES
const express = require("express");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES

// DECLARATIONS OF GLBAL VARIABLES

// INITIALIZING APP
const app = express();

// MIDDLEWARE

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
