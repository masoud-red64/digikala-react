const express = require("express");
const digikalaDB = require("../db/digikalaDB");

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  let getAllUsersQuery = `SELECT * FROM users `;

  digikalaDB.query(getAllUsersQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});
userRoutes.get("/:id", (req, res) => {
  let userIDParam = req.params.id;
  let getOneUserQuery = `SELECT * FROM users WHERE id = '${userIDParam}'`;

  digikalaDB.query(getOneUserQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});

module.exports = userRoutes;
