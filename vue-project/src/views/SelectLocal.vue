<template>
    <div class="select-local">
        <router-link v-for="(item,i) of datas" :key="i" :to="{name:'Echarts',params:{prov:item}}">{{item}}</router-link>
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
            // 全部数据
            data: this.$store.state.data,
            // 根据页面所需格式整理出来的数据
            datas: []
        }
    },
    methods:{
        getData(){
            // 整理出接口中所有的省份名
            let data = JSON.parse(this.data).cityDatas.data
            let dataArr = []
            for (let key in data) {
                dataArr.push(data[key].provinceName)
            }
            this.datas = dataArr
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