const express = require('express');
const digiKalaDB = require('../db/digikalaDB')

const categoryRoutes = express.Router()

categoryRoutes.get('/', (req, res)=>{
    let getAllCategoryQuery = `SELECT * FROM category `

    digiKalaDB.query(getAllCategoryQuery, (err, result)=>{
        if(err){
            console.log(err);
            res.send(null)
        }else{
            res.send(result)
        }
    })

})

categoryRoutes.get('/category/:mainID', (req, res)=>{
    let mainIDParam = req.params.mainID
    let getAllCategoryQuery = `SELECT * FROM category WHERE mainID = '${mainIDParam}'`

    digiKalaDB.query(getAllCategoryQuery, (err, results)=>{
        if(err){
            res.send(null)
        }else{
            console.log(results);
            res.send(results)
        }
    })
})

categoryRoutes.get('/products/:shortName', (req, res)=>{
    let shortNameParam = req.params.shortName
    let getOneCategoryQuery = `SELECT * FROM category WHERE shortName = '${shortNameParam}'`

    digiKalaDB.query(getOneCategoryQuery, (err, results)=>{
        if(err){
            res.send(null)
        }else{
            console.log(results);
            res.send(results)
        }
    })
})

module.exports = categoryRoutes