const express = require('express')
const router = express.Router()
const pool = require('../pool')
router.get('/goods',(req,res)=>{
    pool.query('SELECT pid,product,pimg,price FROM goods',(err,result)=>{
        if (err) throw err
        res.send({code:'200',msg:'请求成功',data:result})
    })
})
module.exports = router