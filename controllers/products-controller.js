exports.getAddProduct = function (req, res) {
  res.render("add-product.ejs", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};
