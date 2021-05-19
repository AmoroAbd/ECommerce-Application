exports.get404 = function (req, res) {
  res.status(404).render("404.ejs", { pageTitle: "Page Not Found" });
};
