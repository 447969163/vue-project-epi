const express = require('express')
let router= express.Router()
const pool = require('../pool')
const jwt = require('../jwt')
router.post('/userinfo',(req,res)=>{
    // 获取token
    let token = req.headers.token
    // 解密token
    res.send(new jwt(token).verifyToken())
})
module.exports = router