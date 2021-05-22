// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const Product = require("../models/products");
// Add Product Controller - "/admin/add-product" - GET
exports.getAddProduct = function (req, res) {
  res.render("admin/add-product.ejs", {
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
exports.getProducts = function (req, res) {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      pageTitle: "Admin Products",
      prods: products,
      path: "/admin/products",
    });
  });
};
