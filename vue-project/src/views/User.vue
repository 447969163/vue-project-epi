<template>
    <div class="user">
        <div class="userinfo" v-for="(item,i) of data" :key="i">
                <span>{{item.unick}}</span>
                <span>uid:{{item.uid}}</span>
                <span>{{item.address}}</span>
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
            data:[]
        }
    },
    methods: {
        async getData(){
            this.$axios.post('/userinfo',{},{headers:{'token':localStorage.getItem('token')}}).then((res)=>{
                this.data = res.data
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
        width: 15rem;
        background-color: #FFFFFF;
        >span {
            display: block;
        }
        >span:first-child {
            float: left;
            font-size: 30rem/@num;
        }
        >span:nth-child(2){
            font-size: 20rem/@num;
            color: #e0e0e0;
        }
    }
}
</style>