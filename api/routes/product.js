const express = require('express')
const router = express.Router()
const pool = require('../pool')
router.get('/product',(req,res)=>{
    pool.query('SELECT * FROM goods WHERE pid=?',[req.query.pid],(err,result)=>{
        if (err) throw err
        res.send({code:'200',msg:'请求成功',data:result})
    })
})
module.exports = router