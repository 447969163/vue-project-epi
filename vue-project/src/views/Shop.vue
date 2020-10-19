<template>
    <div class="shop">
        <div class="goods-box">
            <router-link class="goods" v-for="(item,i) of data" :key="i" :to="`/product/${item.pid}`">
                <img :src="`${item.pimg}`" alt=""/>
                <span>{{item.product}}</span>
                <span>¥{{fixed}}</span>
            </router-link>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer'
export default {
    name: 'Shop',
    components:{
        Footer
    },
    created(){
        this.getData()
    },
    computed:{
        fixed(){
            return this.data[0].price.toFixed(2)
        }
    },
    data(){
        return {
            data:[]
        }
    },
    methods:{
        getData(){
            this.$axios.get('/goods').then((res)=>{
                let datas = res.data.data
                // 引入图片
                datas.forEach(item=>{
                    item.pimg = require(`../${item.pimg}`)
                    // push到属性data中
                    this.data.push(item)
                })
            })
        }
    }
}
</script>
<style lang="less">
@num:50;
.shop {
    width: 15rem;
    >.goods-box {
        margin: 10rem/@num auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 720rem/@num;
        background-color: #FFFFFF;
        >.goods {
            display: block;
            margin: 20rem/@num 10rem/@num;
            width: 200rem/@num;
            height: 360rem/@num;
            color: #000000;
            >img {
                display: block;
                width:200rem/@num;
            }
            >span:nth-of-type(1) {
                margin: 5rem/@num auto;
                display: block;
                width:95%;
                height: 100rem/@num;
                overflow: hidden;
                font-size: 8rem/@num;
            }
            >span:nth-of-type(2) {
                margin-top: 10rem/@num;
                display: block;
                font-size: 25rem/@num;
                color: red;
            }
        }
    }
    >.goods-box::after {
        content: '';
        margin: 10rem/@num 10rem/@num;
        width: 200rem/@num;
        height: 360rem/@num;
    }
}
</style>