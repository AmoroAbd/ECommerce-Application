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
// get 1 product
exports.getProduct = function (req, res) {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("../views/shop/product-detail.ejs", {
      product: product,
      path: "/products",
      pageTitle: product.title,
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
// post cart
exports.postCart = function (req, res) {
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect("/");
};

exports.getOrders = function (req, res) {
  res.render("shop/orders.ejs", {
    pageTitle: "Your Orders",

    path: "/orders",
  });
};

exports.getCheckout = function (req, res) {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
