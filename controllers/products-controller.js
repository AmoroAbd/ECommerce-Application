// DECLARATIONS OF GLBAL VARIABLES *********************************************************
const products = [];

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
  products.push({ title: req.body.title });
  res.redirect("/");
};
// getProduct Controller - "/admin/product" - GET
exports.getProducts = function (req, res) {
  res.render("shop.ejs", {
    pageTitle: "Shop",
    prods: products,
    path: "/",
    activeShop: true,
  });
};
