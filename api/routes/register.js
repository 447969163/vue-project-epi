const express = require('express')
let router = express.Router()
const pool = require('../pool')
router.post('/register',(req,res)=>{
    pool.query('INSERT INTO user VALUES (?,?,?,MD5(?),?)',[null,req.body.unick,req.body.uname,req.body.upassword,req.body.address],(err,result)=>{
        if (err) throw err
        res.send({code:'200',msg:'注册成功'})
    })
})
module.exports = router
