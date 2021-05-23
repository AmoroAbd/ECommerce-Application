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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
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
