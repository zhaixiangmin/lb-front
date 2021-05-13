<template>
  <el-container>
    <el-header height="220px">
      <div class="title-container">
        <div class="title-box">
          <div class="title">财务记账服务模板</div>
          <el-button type="text" icon="el-icon-phone">000-0000000</el-button>
        </div>
      </div>
    </el-header>
    <el-main>
      主要区域容器
      <slot></slot>
    </el-main>
    <el-footer>
      底栏容器
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped lang="scss">
.el-container {
  .el-header {
    padding: 0;

    .title-container {
      height: 120px;
      line-height: 120px;
      background: #F13A3A;

      .title-box {
        margin: 0 auto;
        width: 960px;
        display: flex;
        justify-content: space-between;
        color: #fff;

        .title {
          font-size: 32px;
          font-weight: bold;
        }

        .el-button ::v-deep {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
          color: #fff;

          i.el-icon-phone {
            font-size: 42px;
          }
        }
      }
    }
  }
}
</style>