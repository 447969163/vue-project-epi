<template>
    <div class="register">
        <div class="form">
            <input type="text" placeholder="昵称" v-model="unick" v-focus>
            <input type="text" placeholder="用户名/登录名" v-model="uname">
            <input type="password" placeholder="请输入密码" v-model="upassword">
            <input type="password" placeholder="再次输入密码" v-model="upasswordAgain">
            <input type="text" placeholder="地址" v-model="address">
            <button @click="verify">注册</button>
            <router-link to="/login">已有账号？立即登录</router-link>
        </div>
        <span v-show="isShow">注册成功，即将跳转登录页面</span>
        <span v-show="isErr">{{errMsg}}</span>
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
    name: 'Register',
    components: {
        Footer
    },
    data(){
        return {
            unick: null,
            uname: null,
            upassword: null,
            upasswordAgain: null,
            address: null,
            isShow: false,
            isErr: false,
            errMsg: ''
        }
    },
    methods:{
        verify(){
            this.unick&&this.uname&&this.upassword&&this.upasswordAgain ? 
            this.upassword == this.upasswordAgain ? this.getResult() : this.errTwo()
            : this.errOne()
        },
        errOne(){
            this.errMsg = '有必填项未填写'
            this.isErr = true
            setTimeout(()=>{this.isErr = false},800)
        },
        errTwo(){
            this.isErr = true
            this.errMsg = '两次输入密码不一致'
            setTimeout(()=>{this.isErr = false},800)
        },
        async getResult(){
            // 通过验证后提交注册
            await this.$axios.post('/register',`unick=${this.unick}&uname=${this.uname}&upassword=${this.upassword}&address=${this.address}`).then((res)=>{
                if(res.data.code) {
                    this.isShow=true
                    setTimeout(()=>{
                        this.$router.push('/login')
                    },500)
                }
            })
        }
    }
}
</script>
<style lang="less">
@num:50;
.register {
    position: relative;
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
            width: 300rem/@num;
            color: #275db1;
            font-size: 30rem/@num;
            text-align: center;
        }
    }
    >span {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: block;
        width: 500rem/@num;
        height: 50rem/@num;
        background-color: darkcyan;
        font-size: 25rem/@num;
        border-radius: 20rem/@num;
        color: #FFFFFF;
        line-height: 50rem/@num;
        text-align: center;
    }
}
</style>