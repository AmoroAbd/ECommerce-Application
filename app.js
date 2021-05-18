// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const express = require("express");
const path = require("path");

// IMPORTING INTERNAL FILES OR MODULES - MY OWN MODULES ***********************************
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

// DECLARATIONS OF GLBAL VARIABLES

// INITIALIZING APP ************************************************************************
const app = express();

// MIDDLEWARE ******************************************************************************
// Rendering static Pages
app.use(express.static(path.join(__dirname, "public")));
// Using body-parser
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
=======
app.use(
  express.urlencoded({
    extended: true,
  })
);
>>>>>>> working
app.use(express.json());

// USING ROUTES *****************************************************************************
app.use("/admin", adminRoute);
app.use(shopRoute);

// ROUTES ************************************************************************************

// 404 Route -
app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});

// STARTING THE SERVER **************************************************************************
const PORT = process.env.PORT || 3000;
app.listen(PORT, function (req, res) {
  console.log(`Server Started on port ${PORT}`);
});
