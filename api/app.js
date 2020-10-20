const express = require('express')
let app = express()
app.listen(3000)
//body-parser 中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

// 跨域中间件
app.all('*',(req, res, next)=>{ 
    // 设置同源
    res.header("Access-Control-Allow-Origin", "*")
    // 设置headers
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Token, Content-Length")
    // 设置请求方式
    res.header("Access-Control-Allow-Methods","POST,GET,OPTIONS")
    res.header("Content-Type","application/json;charset=utf-8")
    next()
});

// 数据路由
const epiDataRouter = require('./routes/epiData')
app.use('/api',epiDataRouter)

// 注册路由
const registerRouter = require('./routes/register')
app.use('/api',registerRouter)

// 登录路由
const loginRouter = require('./routes/login')
app.use('/api',loginRouter)

// 商品路由
const goodsRouter = require('./routes/goods')
app.use('/api',goodsRouter)

// 商品详情页路由
const productRouter = require('./routes/product')
app.use('/api',productRouter)

// 中间件验证token
// 引入jwt
const jwt = require('./jwt')
//中间件
app.use((req,res,next)=>{
    // 如果是需要携带token才能访问的路径
    if(req.url.startsWith('/api/userinfo')||req.url.startsWith('/api/insertorder')) {
        // 获取请求头中的token
        let token = req.headers.token
        // 验证【解析】token
        let result = new jwt(token).verifyToken()
        // 验证结果处理
        if (result.name == 'TokenExpiredError') {// 如果返回结果的name属性是TokenExpiredError，则说明token已超时
            res.send({"code":403,"msg":"token超时"})
        } else if (result.name == 'JsonWebTokenError') { // 如果返回结果是JsonWebTokenError，则说明token不对
            res.send({"code":402,"msg":"token错误"})
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
// 插入订单路由
const insertOrderRouter = require('./routes/insertOrder')
app.use('/api',insertOrderRouter)