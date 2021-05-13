<template>
  <el-container>
    <el-header height="220px">
<!--      标题-->
      <div class="title-container">
        <div class="title-box">
          <div class="title">财务记账服务模板</div>
          <el-button type="text" icon="el-icon-phone">000-0000000</el-button>
        </div>
      </div>
<!--      导航菜单-->
      <div class="menu-box">
        <Menu></Menu>
      </div>
    </el-header>
    <el-main>
      <el-image
          style="width: 960px; height: 450px"
          src="//12618670.s61i.faiusr.com/2/AD0IrpeCBhACGAAgxdfJ3wUoksnHnAYwwAc4wgM.jpg"
          fit="fit"></el-image>
      <slot></slot>
    </el-main>
    <el-footer height="122px">
      <div class="footer-box">
        <div class="audit">京ICP备xxxxxxxx号</div>
        <div class="copyright">Copyright © 2016-现在 理帮LBacct.com 版权所有</div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "Layout",
  components: {
    Menu
  }
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

    .menu-box {
      width: 960px;
      margin: 0 auto;
    }
  }

  .el-main {
    margin: 0 auto;
    padding: 0;
    width: 960px;
  }

  .el-footer {
    color: #646464;
    background-color: #363636;

    .footer-box {
      margin: 0 auto;
      width: 960px;
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
    }
  }
}
</style>