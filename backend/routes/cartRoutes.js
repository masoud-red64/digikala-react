const express = require("express");
const digikalaDB = require("../db/digikalaDB");

const cartRoutes = express.Router();

cartRoutes.get("/", (req, res) => {
  let getAllProductCartQuery = `SELECT * FROM cart GROUP BY productID`;

  digikalaDB.query(getAllProductCartQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});
cartRoutes.post("/new-product", (req, res) => {
  console.log(req.body);
  let insertNewProductQuery = `INSERT INTO cart(id, userID, productID) VALUES (null,'${req.body.userID}','${req.body.productID}')`;

  digikalaDB.query(insertNewProductQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(JSON.stringify("insert new product successfully"));
    }
  });
});
cartRoutes.post("/", (req, res) => {
  console.log(req.body);
  let insertAllProductFromNextCartQuery = `INSERT INTO cart( userID, productID) SELECT userID, productID FROM nextcart`;

  digikalaDB.query(insertAllProductFromNextCartQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(JSON.stringify("insert producs successfully"));
    }
  });
});
cartRoutes.delete("/remove/:id", (req, res) => {
  console.log(req.body);
  let deleteProductQuery = `DELETE FROM cart WHERE productID = '${req.params.id}'`;

  digikalaDB.query(deleteProductQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(JSON.stringify("delete product successfully"));
    }
  });
});

module.exports = cartRoutes;
