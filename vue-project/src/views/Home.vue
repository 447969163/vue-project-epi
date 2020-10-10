<template>
<div>
  <Header />
  <TotalData :data="data"/>
  <Echarts :data="data"/>
</div>
</template>
<script>
//引入子组件
import Header from '../components/Header'
import TotalData from '../components/TotalData'
import Echarts from '../components/Echarts'

export default {
  name:'Home',
  components: {
    Header,
    TotalData,
    Echarts
  },
  created(){
    this.getData()
  },
  data(){
    return {
      // 存储请求结果
      data:'',
    }
  },
  methods:{
    // 发送请求、将请求结果放在localstorage中，并传递给vuex
    async getData(){
      await this.$axios.get('/epidata').then((res)=>{
        localStorage.setItem('data',JSON.stringify(res.data))
      }).then(()=>{
        this.$store.commit('setData',localStorage.getItem('data'))
      }).then(()=>{
        this.data = JSON.parse(this.$store.state.data)
      })
    }
  }
}
</script>