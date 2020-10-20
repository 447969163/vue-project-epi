<template>
    <div class="product">
        <div class="product-details" v-for="(item,i) of data" :key="i">
            <img :src="item.pimg" alt="">
            <span>{{item.product}}</span>
            <span>{{fixed}}</span>
            <span>{{item.pdesc}}</span>
            <button @click="buy" v-show="!isClickBuy">购买</button>
            <div class="num" v-show="isClickBuy">
                <span>请选择数量</span>
                <button @click="add">+</button><input type="text" v-model="num"><button @click="cut">-</button>
            </div>
            <button @click="pay" v-show="isClickBuy">支付{{total}}元</button>
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
            data: [],
            num:1,
            isClickBuy:false
        }
    },
    computed:{
        fixed(){
            return '¥' + this.data[0].price.toFixed(2)
        },
        total(){
            return (this.num * this.data[0].price).toFixed(2)
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
        },
        // 购物车相关
        buy(){
            this.isClickBuy = true
        },
        add(){
            this.num++
        },
        cut(){
            this.num<=1 ? false:this.num--
        },
        pay(){
            // 检查登录状态
            if (localStorage.getItem('token') == null){
                // 如果没登录，跳转到login界面
                this.$router.push('/login')
            }else{
                // 如果已经登录,获取uid
                // 获取订单创建时间
                let odate = new Date().getTime()
                //默认直接支付成功，插入订单表
                this.$axios.post('/insertorder',`odate=${odate}&ostate=下单成功&omoney=${this.total}&uid=${localStorage.getItem('uid')}`,{headers:{'token':localStorage.getItem('token')}}).then(res=>{
                    console.log(res.data)
                    if (res.data.code == 200) {
                        this.$router.push('/user')
                    }else{
                        this.$router.push('/login')
                    }
                })
            }
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
        >button{
            margin: 20rem/@num auto;
            display: block;
            width: 600rem/@num;
            height: 80rem/@num;
            outline: none;
            border: 0;
            border-radius: 10rem/@num;
            color: #FFFFFF;
            letter-spacing: 5rem/@num;
            background-color: #4db730e6;
        }
        >.num {
            margin: 10rem/@num auto;
            width: 240rem/@num;
            >span {
                display: block;
                font-size: 30rem/@num;
            }
            >button {
                outline: none;
                border: 0;
                width: 80rem/@num;
                height: 80rem/@num;
                background-color: #999;
            }
            >input {
                width: 80rem/@num;
                height: 80rem/@num;
                outline: none;
                border: 0;
                text-align: center;
            }
        }
    }
}
</style>