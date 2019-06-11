<template>
  <div id="app">
    <el-container>
      <el-header height="auto">
        <component v-bind:is="CommonHeader"></component>
      </el-header>

      <el-container>

        <el-aside width="0">

        </el-aside>

        <el-main>
          <router-view @setHeader="setHeader" @setFooter="setFooter"></router-view>
        </el-main>

      </el-container>

      <el-footer>
        <component v-bind:is="CommonFooter"></component>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
    import CommonHeader from '@/components/CommonHeader'
    import CommonFooter from '@/components/CommonFooter'
export default {
  name: 'App',
  data:function(){
      return {
          CommonHeader:CommonHeader,
          CommonFooter:CommonFooter,
      }
  },
  methods:{
      setHeader:function(header){
          this.CommonHeader=header;
      },
      setFooter:function(footer){
          this.CommonFooter=footer;
      },
      checkLoginOrNo:function(){
          // this
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
