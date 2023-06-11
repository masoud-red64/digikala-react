const express = require("express");
const digiKalaDB = require("../db/digikalaDB");

const productRoutes = express.Router();

productRoutes.get("/", (req, res) => {
  let getAllProductsQuery = `SELECT * FROM products`;

  digiKalaDB.query(getAllProductsQuery, (err, result) => {
    if (err) {
      res.send(null);
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

productRoutes.get("/:shortname", (req, res) => {
  let shortNameParam = req.params.shortname;
  let getOneProductQuery = `SELECT * FROM products WHERE shortName = '${shortNameParam}'`;

  digiKalaDB.query(getOneProductQuery, (err, result) => {
    if (err) {
      res.send(null);
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
productRoutes.get("/cart/:cartProductID", (req, res) => {
  let idParam = req.params.cartProductID;
  let getOneProductQuery = `SELECT * FROM products WHERE id = '${idParam}'`;

  digiKalaDB.query(getOneProductQuery, (err, result) => {
    if (err) {
      res.send(null);
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
productRoutes.get("/categoryID/:id", (req, res) => {
  let getAllProductWithSameCategoryQuery = `SELECT * FROM products WHERE categoryID = '${req.params.id}'`;

  digiKalaDB.query(getAllProductWithSameCategoryQuery, (err, result) => {
    if (err) {
      res.send(null);
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = productRoutes;
