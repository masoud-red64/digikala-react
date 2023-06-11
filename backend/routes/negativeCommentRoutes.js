const express = require('express')
const digiKalaDB = require('../db/digikalaDB')

const negativeCommentRoutes = express.Router()

negativeCommentRoutes.get('/:commentID', (req, res)=>{
    let getNegativeCommentQuery = `SELECT * FROM negative WHERE commentID = '${req.params.commentID}'`

    digiKalaDB.query(getNegativeCommentQuery, (err, results)=>{
        if(err){
            res.send(null)
            console.log(err);
        }else{
            res.send(results)
        }
    })
})

module.exports = negativeCommentRoutes