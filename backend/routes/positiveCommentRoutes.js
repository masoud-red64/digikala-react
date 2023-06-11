const express = require('express')
const digiKalaDB = require('../db/digikalaDB')

const positiveCommentRoutes = express.Router()

positiveCommentRoutes.get('/:commentID', (req, res)=>{
    let getPositiveCommentQuery = `SELECT * FROM positive WHERE commentID = '${req.params.commentID}'`

    digiKalaDB.query(getPositiveCommentQuery, (err, results)=>{
        if(err){
            res.send(null)
            console.log(err);
        }else{
            res.send(results)
        }
    })
})

module.exports = positiveCommentRoutes