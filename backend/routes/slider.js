const express = require("express");
const digiKalaDB = require("../db/digikalaDB");

const sliderRoutes = express.Router();

sliderRoutes.get("/", (req, res) => {
  let getAllSliderQuery = `SELECT * FROM slider`;

  digiKalaDB.query(getAllSliderQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(results);
    }
  });
});

module.exports = sliderRoutes;
