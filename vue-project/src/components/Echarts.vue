<template>
    <div class="echarts">
        <div id="charts"></div>
        <CityData :cityData="cityData"/>
    </div>
</template>
<script>
import CityData from './CityData'
export default {
    name:'Echarts',
    components:{
        CityData
    },
    created(){
        // 获取父组件传递的数据
        this.$bus.$on('waitData',this.getData)
    },
    data(){
        return {
            prov: this.$route.params.prov || '湖北省',
            cityData: []
        }
    },
    methods:{
        getData(e){
            let data = e.cityDatas.data
            // 根据省份名取出数据
            let arr = data.filter((item)=>{
                return item.provinceName == this.prov
            })
            this.cityData = arr
            // 对省份数据进行处理
            let datas = []
            arr.forEach(item => {
                 datas.push({'name':'现存确诊','value':item.currentConfirmedCount},{'name':'累计确诊','value':item.confirmedCount},{'name':'死亡','value':item.deadCount},{'name':'治愈','value':item.curedCount})         
            });
            this.draw(datas)
        },
        // 绘制echarts
        draw(datas){
            let myCharts = this.$echarts.init(document.getElementById('charts'))
            myCharts.setOption({
                title:{
                    text:this.prov + '疫情数据',
                    textStyle:{
                        color: '#e0e0e0',
                        fontSize: '12'
                    },
                    right:'10',
                    bottom:'10'
                },
                grid:{
                    left: 'center',
                    top: 'middle'
                },
                tooltip:{
                    confine: true
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: ["现存确诊", "累计确诊", "死亡", "治愈"]
                },
                series:[
                    {
                        type:'pie',
                        label:{
                            position:'inside'
                        },
                        // 填充数据
                        data:datas
                    }
                ]
            })
            window.addEventListener('resize',()=>{
                myCharts.resize()
            })
        }
    }
}
</script>
<style lang="less">
@num: 50;
    .echarts {
    margin: 20rem/@num auto;
    width:720rem/@num;
    background-color: #FFFFFF;
    #charts {
        width: 720rem/@num;
        height: 750rem/@num;
    }
}
</style>