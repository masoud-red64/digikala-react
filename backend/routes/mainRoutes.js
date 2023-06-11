const express = require("express");
const digiKalaDB = require("../db/digikalaDB");

const mainRoutes = express.Router();

mainRoutes.get("/", (req, res) => {
  let getAllMainQuery = `SELECT * FROM main`;

  digiKalaDB.query(getAllMainQuery, (err, results) => {
    if (err) {
      res.send(null);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

mainRoutes.get("/:shortName", (req, res) => {
  let shortNameParam = req.params.shortName;
  let getOneMainQuery = `SELECT * FROM main WHERE shortName = '${shortNameParam}'`;

  digiKalaDB.query(getOneMainQuery, (err, results) => {
    if (err) {
      res.send(null);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});
mainRoutes.get("/get-title/:id", (req, res) => {
  let idParam = req.params.id;
  let getOneMainQuery = `SELECT title FROM main WHERE id = '${idParam}'`;

  digiKalaDB.query(getOneMainQuery, (err, results) => {
    if (err) {
      res.send(null);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

module.exports = mainRoutes;
