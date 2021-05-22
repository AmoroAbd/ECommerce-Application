// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const Product = require("../models/products");
// DECLARATIONS OF GLBAL VARIABLES *********************************************************

// CONTROLLERS **********************************************************************************

// getProduct Controller - "/admin/product" - GET
exports.getProducts = function (req, res) {
  Product.fetchAll((products) => {
    res.render("shop/product-list.ejs", {
      pageTitle: "All Products",
      prods: products,
      path: "/products",
      activeShop: true,
    });
  });
};
exports.getIndex = function (req, res) {
  Product.fetchAll((products) => {
    res.render("shop/index.ejs", {
      pageTitle: "Shop",
      prods: products,
      path: "/",
    });
  });
};
exports.getCart = function (req, res) {
  res.render("shop/cart.ejs", {
    pageTitle: "Your Cart",
  
    path: "/cart",
  });
};
exports.getCheckout = function (req, res) {
  res.render("shop/checkout", {
    path:"/checkout",
    pageTitle:"Checkout"
  })
};
