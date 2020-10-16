const express = require('express')
const cors = require('cors')
let app = express()
app.listen(3000)
//body-parser 中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
// 跨域中间件
app.use(cors({
    origin:['*'],
    methods:['GET','POST'],
    allowedHeaders: ['Content-Type']
}))
// 数据路由
const epiDataRouter = require('./routes/epiData')
app.use('/api',epiDataRouter)

// 注册路由
const registerRouter = require('./routes/register')
app.use('/api',registerRouter)

// 登录路由
const loginRouter = require('./routes/login')
app.use('/api',loginRouter)

// 中间件验证token
// 引入jwt
const jwt = require('./jwt')
//中间件
app.use((req,res,next)=>{
    // 如果是需要携带token才能访问的路径
    if(req.url.startsWith('/api/userinfo')) {
        // 获取请求头中的token
        let token = req.headers.token
        // 验证【解析】token
        let result = new jwt(token).verifyToken()
        // 验证结果处理
        if (result.name == 'TokenExpiredError') {// 如果返回结果的name属性是TokenExpiredError，则说明token已超时
            res.send({"code":403,"msg":"token超时"})
        } else if (result.name == 'JsonWebTokenError') { // 如果返回结果是JsonWebTokenError，则说明token不对
            res.send({"code":403,"msg":"token错误"})
        } else { // 如果正确解析了数据对象，就继续执行
            next()
        }
    } else {
        // 如果不是需要携带token也可访问的路径，则直接放行
        next()
    }
})
// 用户中心路由
const userInfoRouter = require('./routes/userInfo')
app.use('/api',userInfoRouter)