<template>
    <div class="product">
        <div class="product-details" v-for="(item,i) of data" :key="i">
            <img :src="item.pimg" alt="">
            <span>{{item.product}}</span>
            <span>{{fixed}}</span>
            <span>{{item.pdesc}}</span>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer'
export default {
    name: 'product',
    components: {
        Footer
    },
    created(){
        this.getData()
    },
    data(){
        return {
            data: []
        }
    },
    computed:{
        fixed(){
            return '¥' + this.data[0].price.toFixed(2)
        }
    },
    methods:{
        getData(){
            this.$axios.get('/product?pid='+this.$route.params.pid).then(res=>{
                // 对数据做处理
                res.data.data.forEach(item => {
                    // 引入图片
                    item.pimg = require(`../${item.pimg}`)
                    this.data.push(item)
                });
            })
        }
    }
}
</script>
<style lang="less">
@num:50;
.product {
    width: 15rem;
    > .product-details {
        width: 15rem;
        >img {
            width: 100%;
        }
        >span {
            margin: 10rem/@num auto;
            display: block;
            width: 95%;
        }
        >span:nth-of-type(1) {
            font-size: 30rem/@num;
        }
        >span:nth-of-type(2) {
            font-size: 25rem/@num;
            color: red;
        }
        >span:nth-of-type(3) {
            font-size: 20rem/@num;
            color: #999;
        }
    }
}
</style>