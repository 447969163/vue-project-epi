# 爬虫
## 路径
api目录
## 数据来源
|数据来源|源站链接|
|:---|:---|
|丁香医生|https://ncov.dxy.cn/ncovh5/view/pneumonia|
## 模块
|模块名|
|:---|
|express|
|request|
|cheerio|
## 思路
+ 分析源站
  + 源站中，每个国家的总疫情数据存储在id为`getStatisticsService`的`script`标签中
  + 每个省份及下属城市的疫情数据存储在id为`getAreaStat`的`script`标签中
  + 通过正则去掉多余的内容，并转为json格式
  + 通过json化的数据取出所需数据
# 项目
## 构成
|类型|组件|
|:---|:---|
|页面|Home|
|页面|SelectLocal|
|组件|Header|
|组件|TotalData|
|组件|Echarts|
|组件|CityData|
## 包
+ vuex
+ router
+ echarts
+ axios
+ less
## 思路
+ Home页面请求数据并通过$bus,$emit,$on的方式传递给子组件
+ Home页面请求到的数据通过vuex传递给Select页面
+ Select页面取出省份名，通过路由传参的方式传递给Echarts组件
+ Echarts组件拿到省份名后，整理数据，交给渲染echarts界面
+ Echarts通过props方式传递给子组件CityData
+ CityData监听Echarts组件传入的数据变化
+ 确认数据拿到了，就开始对数据进行整理，抽出所有城市名
+ 过滤所点城市的数据，渲染到页面
# 效果展示
https://www.achrome.cn/#/