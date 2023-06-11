const express = require('express');
const digiKalaDB = require('../db/digikalaDB')

const brandRoutes = express.Router()

brandRoutes.get('/', (req, res)=>{
    let getAllBransQuery = `SELECT * FROM popularbrand`

    digiKalaDB.query(getAllBransQuery, (err, result)=>{
        if(err){
            console.log(err);
            res.send(null)
        }else{
            res.send(result)
        }
    })
})

module.exports = brandRoutes