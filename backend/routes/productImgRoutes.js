const express = require('express');
const digikalaDB = require('../db/digikalaDB')

const productImgRoutes = express.Router()

productImgRoutes.get('/productID/:id', (req, res)=>{
    let getAllProductImagesQuery = `SELECT * FROM productimg WHERE productID = '${req.params.id}'`

    digikalaDB.query(getAllProductImagesQuery, (err, results)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            res.send(results)
        }
    })
})

module.exports = productImgRoutes