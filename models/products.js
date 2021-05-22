// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const fs = require("fs");
const path = require("path");

// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
// const { getProducts } = require("../controllers/products-controller");

// DECLARATIONS OF GLBAL VARIABLES *******************************************************
const mypath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = function (callback) {
  fs.readFile(mypath, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(mypath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
