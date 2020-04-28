<template>
  <div id="app" :key="Key">
    <TopNav></TopNav>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import TopNav from './components/TopNav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { router } from "./route/router"

export default {
  name: 'app',
  router,
  components: {
    TopNav,
    Header,
    Footer
  },
  data(){
    return {
      Key:"" // 监听URL的变化(解决路由不变,参数变,但页面不刷新的问题)
    }
  },
  watch: {
    $route: function(newUrl, oldUrl) {
      // 路由(包括参数)发生变化时,对Key进行赋值
      // 如果Key发生了变化,则页面执行刷新
      this.Key = new Date().getTime();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
