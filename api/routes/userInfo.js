const express = require('express')
let router= express.Router()
const pool = require('../pool')
const jwt = require('../jwt')
router.post('/userinfo',(req,res)=>{
    // 获取token
    let token = req.headers.token
    // 解密token
    let data = new jwt(token).verifyToken()
    let uid = data[0].uid
    pool.query('SELECT * FROM orders WHERE uid=?',[uid],(err,result)=>{
        if (err) throw err
        res.send({code:200,msg:'请求成功',userdata:data,orderdata:result})
    })
})
module.exports = router