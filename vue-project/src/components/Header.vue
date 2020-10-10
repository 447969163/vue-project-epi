<template>
<div class="header">
  <div class="banner"></div>
  <div class="data-origin">数据来源：丁香医生</div>
  <router-link to="/selectlocal" class="select-btn"><i class="iconfont icon-qiehuan"></i> 切换地区</router-link>
</div>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style lang="less">
  //定义根元素
  @num: 50;
    .header {
      position: relative;
      width: 15rem;
      height: 250rem/@num;
      .banner {
      position: absolute;
      width: 15rem;
      height: 250rem/@num;
      background-image: url('../../src/assets/banner.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .data-origin {
      position: absolute;
      top: 15rem/@num;
      right: 0;
      width: 8rem;
      height: 40rem/@num;
      background-color: rgba(19,15,133,.6);
      border: 0;
      border-top-left-radius: 4rem;
      border-bottom-left-radius: 4rem;
      color: #FFFFFF;
      font-size: .3rem;
      text-align: center;
      line-height: 40rem/@num;
      letter-spacing: 4rem/@num;
    }
    .select-btn {
      position: absolute;
      top: 180rem/@num;
      left: 40rem/@num;
      width: 330rem/@num;
      height: 50rem/@num;
      background-color: rgba(0,0,249,.38);
      border: .005rem solid hsla(0,0%,100%,.38);
      border-radius: 20rem/@num;
      color: #FFFFFF;
      font-size: .5rem;
      text-align: center;
      line-height: 50rem/@num;
      letter-spacing: 4rem/@num;
    }
  }
</style>