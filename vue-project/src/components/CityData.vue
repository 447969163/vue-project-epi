<template>
    <div class="city">
        <div class="cityname">
            <span v-for="(item,i) of cityName" :key="i" @click="getData(item)">{{item}}</span>
        </div>
        <div class="citydata" v-show="cityDatasShow" v-for="(item,i) of cityDatas" :key="i">
            <ul>
                <li>现存确诊</li>
                <li>累计确诊</li>
                <li>死亡</li>
                <li>治愈</li>
            </ul>
            <ul>
                <li>{{item.currentConfirmedCount}}</li>
                <li>{{item.confirmedCount}}</li>
                <li>{{item.deadCount}}</li>
                <li>{{item.curedCount}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityData',
    props:['cityData'],
    data(){
        return {
            cityName:[],
            cityDatas:{},
            cityDatasShow: false
        }
    },
    methods:{
        // 索引对应城市名数据
        getData(cityName){
            // 过滤出点击城市的数据
            let arr = this.cityData.map(element => {
                return element.cities.filter((item)=>{
                    return item.cityName == cityName
                })
            });
            this.cityDatas = arr[0]
            // 配合v-show让数据显示
            this.cityDatasShow = true

        }
    },
    watch:{
        cityData(){
            // 获取省份对应城市名
            this.cityName = this.cityData[0].cities.map((item)=>{
                return item.cityName
            })
        },
    }
}
</script>

<style lang="less">
@num:50;
.city {
    margin: 20rem/@num auto;
    padding-top: 40rem/@num;
    padding-bottom: 40rem/@num;
    width: 720rem/@num;
    background-color: #FFFFFF;
    >.cityname {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 720rem/@num;
        >span {
            margin: 10rem/@num 10rem/@num;
            font-size: 20rem/@num;
            display: block;
            padding: 5rem/@num 25rem/@num;
            box-sizing: border-box;
            border: 1rem/@num solid #2aadaa;
            border-radius: 20rem/@num;
            text-align: center;
        }
    }
    >.citydata {
        width: 720rem/@num;
        >ul {
            display: flex;
            justify-content: space-around;
            width: 720rem/@num;
            >li {
                display: block;
                width: 100rem/@num;
                padding-top: 10rem/@num;
                font-size: 20rem/@num;
                text-align: center;
            }
        }
    }
}
</style>