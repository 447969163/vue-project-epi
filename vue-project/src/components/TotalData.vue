<template>
    <div class="china-data">
        <span>国内疫情数据</span>
        <!-- 首页格子显示 -->
        <div class="item" v-for="(item,i) of data" :key="i">
            <span>{{item.title}}</span>
            <span>{{item.bold}}</span>
            <span>{{item.subtitle}}</span>
            <span><span v-if="item.fine>=0">+</span>{{item.fine}}</span>
        </div>
        <span>数据更新 {{updataTime}}</span>
    </div>
</template>

<script>
export default {
    name: "TotalData",
    data(){
        return {
            data:'',
            updataTime: ''
        }
    },
    created(){
        // 获取父组件传递来的值
        this.$bus.$on('waitData',this.getData)
    },
    methods:{
        getData(e){
            // 拿到数据
            let data = e.data.chinaData[0]
            // 取出数据中的更新时间
            this.updataTime = new Date(data.modifyTime).toLocaleDateString()
            // 整理数据格式
            let datas = []
            datas.push(
                {'title':'现存确诊','subtitle':'较昨日','bold':data.currentConfirmedCount,'fine':data.currentConfirmedIncr},
                {'title':'境外输入','subtitle':'较昨日','bold':data.suspectedCount,'fine':data.suspectedIncr},
                {'title':'现存无症状','subtitle':'较昨日','bold':data.seriousCount,'fine':data.seriousIncr},
                {'title':'累计确诊','subtitle':'较昨日','bold':data.confirmedCount,'fine':data.confirmedIncr},
                {'title':'累计死亡','subtitle':'较昨日','bold':data.deadCount,'fine':data.deadIncr},
                {'title':'累计治愈','subtitle':'较昨日','bold':data.curedCount,'fine':data.curedIncr}
            )
            this.data = datas
        }
    }
}

</script>

<style lang="less">
@num: 50;
    .china-data{
        margin: 30rem/@num auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 720rem/@num;
        height: 500rem/@num;
        background-color: #FFFFFF;
        border: 0;
        border-radius: 4rem/@num;
        > span {
            display: block;
            width: 100%;
            height: 100rem/@num;
            line-height: 100rem/@num;
        }
        > span:nth-child(1) {
            font-size: 25rem/@num;
            font-weight: bold;
            text-align: center;
        }
        > span:last-child{
            font-size: 20rem/@num;
            color:#888888;
            padding-left: 65%;
        }
        .item {
            position: relative;
            width: 240rem/@num;
            height: 150rem/@num;
            border: 0;
            > span {
                display:block;
                font-size: .5rem;
                text-align: center;
            }
            > span:nth-child(1){
                font-weight: bold;
            }
            > span:nth-child(2){
                font-size: .7rem;
                font-weight: bold;
                color: #a91919;
            }
            > span:nth-child(3){
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                display: inline;
                font-size: .3rem;
                color: #888888;
            }
            > span:nth-child(4){
                position: absolute;
                display: inline;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                font-size: .3rem;
                color: #a74949;
            }
        }
    }
</style>