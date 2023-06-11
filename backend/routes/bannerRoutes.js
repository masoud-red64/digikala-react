const express = require("express");
const digiKalaDB = require("../db/digikalaDB");

const bannerRoutes = express.Router();

bannerRoutes.get("/1", (req, res) => {
  let getAllBannersQuery = `SELECT * FROM banner1`;

  digiKalaDB.query(getAllBannersQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});

bannerRoutes.get("/2", (req, res) => {
  let getAllBannersQuery = `SELECT * FROM banner2`;

  digiKalaDB.query(getAllBannersQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});

module.exports = bannerRoutes;
