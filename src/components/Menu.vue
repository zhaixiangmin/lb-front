<template>
  <el-menu
      mode="horizontal"
      default-active="/"
      text-color="#2b2b2b"
      active-text-color="#fff"
      router
  >
    <el-menu-item
        v-for="(item, index) in list"
        :key="index"
        :index="item.path"
    >{{ item.name }}</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      list: [
        { path: '/', name: '首页' },
        { path: 'about', name: '关于我们' },
        { path: 'service', name: '服务项目' },
        { path: 'news', name: '行业资讯' },
        { path: 'contract', name: '联系我们' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu {
  border-bottom: none;

  .el-menu-item {
    margin: 30px 0;
    min-width: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-radius: 20px;

    & + li {
      margin-left: 10px;
    }

    &.is-active {
      background-color: #f13a3a;
    }
  }
}
</style>