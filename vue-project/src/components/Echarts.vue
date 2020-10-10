<template>
    <div class="echarts">
        <div id="charts"></div>
    </div>
</template>
<script>
export default {
    name:'Echarts',
    props:['data'],
    data(){
        return {
            // echarts绘制所需格式整理好的数据
            datas:[],
            // 获取省份名
            prov: this.$route.params.prov || '湖北省'
        }
    },
    watch:{
        data(){
            new Promise((resolve,reject)=>{
                resolve(this.getData())
            }).then(()=>{
                this.draw()
            })
        }
    },
    methods:{
        // 数据处理
        getData(){
            let data = this.data.cityDatas.data
            // 根据省份名取出数据
            let arr = data.filter((item)=>{
                return item.provinceName == this.prov
            })
            // 对省份数据进行处理
            let datas = []
            arr.forEach(item => {
                 datas.push({'name':'现存确诊','value':item.currentConfirmedCount},{'name':'累计确诊','value':item.confirmedCount},{'name':'死亡','value':item.deadCount},{'name':'治愈','value':item.curedCount})         
            });
            this.datas = datas
        },
        // echarts绘制
        draw(){
            // 绘制echarts
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
                        data:this.datas
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
    height: 750rem/@num;
    background-color: #FFFFFF;
    #charts {
        width: 720rem/@num;
        height: 750rem/@num;
    }
}
</style>