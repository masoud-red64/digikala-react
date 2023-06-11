const express = require("express");
const digikalaDB = require("../db/digikalaDB");

const nextCartRoutes = express.Router();

nextCartRoutes.get("/", (req, res) => {
  let getAllNextCartProductsQuery = `SELECT * FROM nextcart`;

  digikalaDB.query(getAllNextCartProductsQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});

nextCartRoutes.post("/new-product", (req, res) => {
  console.log(req.body);
  let insertNewProductQuery = `INSERT INTO nextcart (id, userID, productID) VALUES (null,'${req.body.userID}','${req.body.productID}')`;

  digikalaDB.query(insertNewProductQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(JSON.stringify("insert new product successfully"));
    }
  });
});

nextCartRoutes.delete("/remove/:id", (req, res) => {
  console.log(req.body);
  let deleteProductQuery = `DELETE FROM nextcart WHERE productID = '${req.params.id}'`;

  digikalaDB.query(deleteProductQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(JSON.stringify("delete product successfully"));
    }
  });
});
nextCartRoutes.delete("/remove", (req, res) => {
  let deleteAllProductsQuery = `DELETE FROM nextcart`;

  digikalaDB.query(deleteAllProductsQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(JSON.stringify("delete products successfully"));
    }
  });
});

module.exports = nextCartRoutes;
