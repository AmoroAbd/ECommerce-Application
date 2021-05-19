// IMPORTING REQUIRE PACKAGES - CORE MODULES *********************************************
const { getProducts } = require("../controllers/products-controller");

// DECLARATIONS OF GLBAL VARIABLES *******************************************************
const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
