<template>
    <div class="select-local">
        <router-link v-for="(item,i) of data" :key="i" :to="{name:'Echarts',params:{prov:item}}">{{item}}</router-link>
    </div>
</template>
<script>
export default {
    name:'SelectLocal',
    mounted(){
        this.getData()
    },
    data(){
        return {
            data:''
        }
    },
    methods:{
        getData(){
            // 获取vuex中的数据
            let data = this.$store.state.data.cityDatas.data
            // 整理数据
            let dataArr = []
            for (let key in data) {
                dataArr.push(data[key].provinceName)
            }
            this.data = dataArr
        }
    }
}
</script>
<style lang="less">
@num: 50;
.select-local{
    display: flex;
    flex-wrap: wrap;
    > a {
        margin: 15rem/@num auto;
        display: block;
        width: 7.5rem;
        height: 100rem/@num;
        background-color: #FFFFFF;
        box-sizing: border-box;
        font-size: 30rem/@num;
        color: #000000;
        text-align: center;
        line-height: 100rem/@num;
    }
    > a:nth-child(2n) {
        border-left: 2rem/@num solid#e0e0e0;
    }
}
</style>