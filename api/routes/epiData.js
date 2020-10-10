const express = require('express')
const request = require('request')
const cheerio = require('cheerio')
const router = express()

router.get('/epidata',(req,res)=>{
    request('https://ncov.dxy.cn/ncovh5/view/pneumonia',(err, response , body) => {
        // 去掉空白
        let spaceReg = /\s+/g
        let $ = cheerio.load(response.body)
        // 取全国数据
        let chinaDatas = $('#getStatisticsService').html().replace(spaceReg,'').match(/(?<=try\{window.getStatisticsService\=).*?(?=\}catch\(e\)\{\})/g)
        // 取城市数据
        let cityDatas = JSON.parse('{"data":[' + $('#getAreaStat').html().replace(spaceReg,'').match(/(?<=try\{window.getAreaStat\=\[).*?(?=\]\}catch\(e\)\{\})/g).toString() + ']}')
        // 抽取页面所需全国数据
        let chinaData = chinaDatas.map((elem)=>{
            let item = JSON.parse(elem)
            return {
                // 数据开始记录时间
                "createTime": item.createTime,
                // 更新时间
                "modifyTime": item.modifyTime,
                // 现存确诊
                "currentConfirmedCount": item.currentConfirmedCount,
                // 累计确诊
                "confirmedCount": item.confirmedCount,
                // 境外输入
                "suspectedCount": item.suspectedCount,
                // 累计治愈
                "curedCount": item.curedCount,
                // 累计死亡
                "deadCount": item.deadCount,
                // 现存无症状
                "seriousCount": item.seriousCount,
                //较昨日 境外输入
                "suspectedIncr": item.suspectedIncr,
                // 较昨日 现存确诊
                "currentConfirmedIncr": item.currentConfirmedIncr,
                // 较昨日 累计确诊
                "confirmedIncr": item.confirmedIncr,
                // 较昨日 累计治愈
                "curedIncr": item.curedIncr,
                // 较昨日 累计死亡
                "deadIncr": item.deadIncr,
                // 较昨日 无症状
                "seriousIncr": item.seriousIncr,
            }
        })
        res.send({"code":200,"msg":"请求成功","data":{chinaData},cityDatas})
    })
})
module.exports = router