<template>
    <div class="login">
        <div class="form">
            <span>欢迎登录</span>
            <input type="text" placeholder="用户名" v-model="uname" v-focus>
            <input type="password" placeholder="密码" v-model="upassword">
            <button @click="login">登录</button>
            <router-link to="/register">立即注册</router-link>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
    name: 'Login',
    components: {
        Footer
    },
    data(){
        return {
            uname: '',
            upassword: ''
        }
    },
    methods: {
        async login(){
            // 发送请求
            await this.$axios.post('/login',`uname=${this.uname}&upassword=${this.upassword}`).then((res)=>{
                localStorage.setItem('token',res.data.token)
            }).then(()=>{
                this.$router.push('/user')
            })
        }
    }
}
</script>
<style lang="less">
@num:50;
.login {
    width: 15rem;
    >.form {
        margin: 80rem/@num auto;
        padding-top: 150rem/@num;
        padding-bottom: 250rem/@num;
        width: 720rem/@num;
        background-color: #FFFFFF;
        >span {
            display: block;
            width: 100%;
            height: 100rem/@num;
            text-align: center;
            line-height: 100rem/@num;
        }
        >input {
            margin: 20rem/@num auto;
            padding: 30rem/@num;
            display: block;
            box-sizing: border-box;
            width: 650rem/@num;
            outline: none;
            border: 1rem/@num solid #e0e0e0;
            background-color: transparent;
        }
        >button {
            display: block;
            margin: 0 auto;
            outline: none;
            border: 0;
            width: 500rem/@num;
            height: 100rem/@num;
            background: #2aa4a5c2;
            font-size: 30rem/@num;
            color: #FFFFFF;
            letter-spacing: 20rem/@num;
        }
        >a {
            margin: 30rem/@num auto;
            display: block;
            width: 120rem/@num;
            color: #275db1;
            font-size: 30rem/@num;
            text-align: center;
        }
    }
}
</style>