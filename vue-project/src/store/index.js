import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    data:''
  },
  mutations:{
    // 将Home组件请求回来的数据，插入state中的data属性中
    setData(state,payload){
      state.data = payload
    }
  }
})
