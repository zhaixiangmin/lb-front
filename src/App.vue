<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    登录页面-->
    <router-view v-if="$route.path === '/login'" />
<!--    非登录页面，采用统一布局-->
    <Layout v-else>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
export default {
  name: 'App',
  components: {
    Layout
  },
  created() {
    console.log('$route', this.$route)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
