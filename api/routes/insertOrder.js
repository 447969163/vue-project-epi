const express = require('express')
const router = express.Router()
const pool = require('../pool')
router.post('/insertorder',(req,res)=>{
    let odate = req.body.odate
    let ostate = req.body.ostate
    let omoney = req.body.omoney
    let uid = req.body.uid
    pool.query('INSERT INTO orders VALUES(null,?,?,?,?);',[odate,ostate,omoney,uid],(err,result)=>{
        if (err) throw err
        res.send({code:'200',msg:'插入成功'})
    })
})
module.exports = router