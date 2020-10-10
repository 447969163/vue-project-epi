const express = require('express')
let app = express()
app.listen(3000)
// 跨域中间件
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});
// 引入数据路由
const epiDataRouter = require('./routes/epiData')
app.use('/api',epiDataRouter)