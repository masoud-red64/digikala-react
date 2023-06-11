const express = require("express");
const digikalaDB = require("../db/digikalaDB");

const commentRoutes = express.Router();

commentRoutes.get("/:id", (req, res) => {
  let productIDParam = req.params.id;
  let getCommentsQuery = `SELECT * FROM comments WHERE productID = '${productIDParam}'`;

  digikalaDB.query(getCommentsQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});

commentRoutes.post("/new-comment", (req, res) => {
  let body = req.body;
  let insertNewCommentQuery = `INSERT INTO comments( title, text, point, userID, productID, date) VALUES ('${body.title}','${body.text}','${body.point}','${body.userID}','${body.productID}','${body.date}')`;

  digikalaDB.query(insertNewCommentQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(JSON.stringify("new comment inserted successfully"));
    }
  });
});

module.exports = commentRoutes;
