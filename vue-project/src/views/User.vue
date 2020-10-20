<template>
    <div class="user">
        <div class="userinfo">
            <div class="user" v-for="(item,i) of userData" :key="i-(orderData.length+1)">
                <span>用户昵称：{{item.unick}}</span>
                <span>用户地址：{{item.address}}</span>
            </div>
            <span>订单记录</span>
            <div class="order" v-for="(item,i) of orderData" :key="i">
                <span>{{item.odate | toDate}}</span>
                <span>消费{{item.omoney}}元</span>
                <span>状态：{{item.ostate}}</span>
            </div>
            <button @click="logOut">退出登录</button>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
    name: 'User',
    components:{
        Footer
    },
    mounted(){
        this.getData()
    },
    data(){
        return {
            userData:[],
            orderData: []
        }
    },
    methods: {
        async getData(){
            this.$axios.post('/userinfo',{},{headers:{'token':localStorage.getItem('token')}}).then((res)=>{
                localStorage.setItem('uid',res.data.userdata[0].uid)
                this.userData = res.data.userdata
                this.orderData = res.data.orderdata
            })
        },
        logOut(){
            localStorage.clear('token')
            this.$router.push('/')
        }
    }
}
</script>
<style lang="less">
@num:50;
.user {
    width: 15rem;
    .userinfo {
        margin-top: 30rem/@num;
        padding-top: 50rem/@num;
        padding-bottom: 50rem/@num;
        width: 15rem;
        background-color: #FFFFFF;
        >.user {
            width: 100%;
            >span {
                display: block;
                font-size: 40rem/@num;
            }
        }
        >span {
            display: block;
            margin: 20rem/@num auto;
            text-align: center;
            font-size: 35rem/@num;
        }
        .order {
            width: 100%;
            >span {
                margin: 15rem/@num auto;
                font-size: 30rem/@num;
            }
        }
        >button {
            margin: 40rem/@num auto;
            display: block;
            outline: none;
            border: none;
            color: #FFFFFF;
            background-color: #1e98b9;
            width: 500rem/@num;
            height: 80rem/@num;
        }
    }
}
</style>