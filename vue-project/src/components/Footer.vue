<template>
    <div class="footer">
        <router-link to="/">首页</router-link>
        <router-link to="/shop">商城</router-link>
        <router-link to="/user">我的</router-link>
    </div>
</template>

<script>
export default {
    name:'Footer',

}
</script>

<style lang="less">
@num:50;
.footer {
    margin: 20rem/@num auto 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15rem;
    height: 100rem/@num;
    background-color: #FFFFFF;
    >a {
        color: #000000;
        font-size: 30rem/@num;
    }
}
</style>