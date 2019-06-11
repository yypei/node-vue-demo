<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item index="/register" class="float-right"><router-link to="/register">注册</router-link></el-menu-item>
            <!--<el-submenu index="2" class="float-right">
                <template slot="title">账号</template>
                <el-menu-item index="2-1">个人中心</el-menu-item>
            </el-submenu>-->
            <el-menu-item index="/login" class="float-right" @click="showLoginBox"><a>登录</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
        <LoginBox ref="loginBox"></LoginBox>
    </div>

</template>

<script>
    import LoginBox from '@/components/LoginBox'
    export default {
        name:'CommonHeader',
        data() {
            return {
                activeIndex: '/'
            };
        },
        components:{LoginBox},
        created:function(){
            this.setHeaderNavActive();
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            setHeaderNavActive(){
                this.activeIndex=this.$route.path
            },
            showLoginBox:function(){
                console.log(this.$refs);
                this.$refs.loginBox.showBox();
            }

        },
        watch:{
            $route(to,from){
                this.activeIndex=this.$route.path;
                console.log(this.$route.path);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../static/less/CommonHeader.less";
</style>