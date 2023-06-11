const express = require('express')
const digikalaDB = require('../db/digikalaDB')

const productFeatureRoutes = express.Router()

productFeatureRoutes.get('/productID/:id', (req, res)=>{
    let getProductFeatureQuery = `SELECT * FROM productfeature WHERE productID = '${req.params.id}'`

    digikalaDB.query(getProductFeatureQuery, (err, results)=>{
        if(err){
            console.log(err);
            res.send(null)
        }else{
            res.send(results)
        }
    })
})

module.exports = productFeatureRoutes