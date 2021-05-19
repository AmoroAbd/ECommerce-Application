// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const Product = require("../models/products");
// DECLARATIONS OF GLBAL VARIABLES *********************************************************

// CONTROLLERS **********************************************************************************
// Add Product Controller - "/admin/add-product" - GET
exports.getAddProduct = function (req, res) {
  res.render("add-product.ejs", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};
// Product Controller - "/admin/product" - POST
exports.postAddProduct = function (req, res) {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
// getProduct Controller - "/admin/product" - GET
exports.getProducts = function (req, res) {
  Product.fetchAll((products) => {
    res.render("shop.ejs", {
      pageTitle: "Shop",
      prods: products,
      path: "/",
      activeShop: true,
    });
  });
};
