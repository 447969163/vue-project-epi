<template>
<div>
  <Header />
  <TotalData />
  <Echarts />
  <!-- <CityData /> -->
</div>
</template>
<script>
//引入子组件
import Header from '../components/Header'
import TotalData from '../components/TotalData'
import Echarts from '../components/Echarts'
import CityData from '../components/CityData'

export default {
  name:'Home',
  components: {
    Header,
    TotalData,
    Echarts,
    CityData
  },
  created(){
    this.getData()
  },
  methods:{
    // 发送请求
    async getData(){
      await this.$axios.get('/epidata').then((res)=>{
        // 将请求结果分发给子组件
        this.$bus.$emit('waitData',res.data)
        // 存一份到vuex
        this.$store.commit('setData',res.data)
      })
    }
  }
}
</script>