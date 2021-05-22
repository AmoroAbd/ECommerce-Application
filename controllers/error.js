exports.get404 = function (req, res) {
  res.status(404).render("../views/404.ejs", {
    pageTitle: "Page Not Found",
    path: "../views/404.ejs",
  });
};
