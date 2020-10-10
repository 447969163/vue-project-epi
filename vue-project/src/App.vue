<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import '//at.alicdn.com/t/font_2101682_obvz8o0chx.css';
//默认html根元素
html{
  font-size:50px; // 750/15=50
}
//定义设计稿拆分份数
@num: 15;
//媒体查询自适应
@media screen and (min-width:320px){
  html{
    font-size: 320px/@num;
  }
}
@media screen and (min-width:360px){
  html{
    font-size: 360px/@num;
  }
}
@media screen and (min-width:365px){
  html{
    font-size: 365px/@num;
  }
}
@media screen and (min-width:375px){
  html{
    font-size: 375px/@num;
  }
}
@media screen and (min-width:384px){
  html{
      font-size: 384px/@num;
  }
}
@media screen and (min-width:400px){
  html{
    font-size: 400px/@num;
  }
}
@media screen and (min-width:414px){
  html{
    font-size: 414px/@num;
  }
}
@media screen and (min-width:424px){
  html{
    font-size: 424px/@num;
  }
}
@media screen and (min-width:480px){
  html{
    font-size: 480px/@num;
  }
}
@media screen and (min-width:540px){
  html{
    font-size: 540px/@num;
  }
}
@media screen and (min-width:720px){
  html{
    font-size: 720px/@num;
  }
}
@media screen and (min-width:750px){
  html{
    font-size: 750px/@num;
  }
}
//css reset
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
//主体居中
body{
  min-width: 320px;
  width: 15rem;
  margin: 0 auto;
  line-height: 1.5;
  background: #e0e0e0;
}
</style>
