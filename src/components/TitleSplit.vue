<template>
  <div class="title-split">
    <div class="title">{{ title }}</div>
    <div class="split"></div>
  </div>
</template>

<script>
export default {
  name: "TitleSplit",
  props: {
    title: {
      type: String,
      required: true,
      default: '标题'
    }
  }
}
</script>

<style scoped lang="scss">
.title-split {
  text-align: left;

  .title {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: #f13a3a;
    border-bottom: 1px solid #f13a3a;
  }

  .split {
    height: 1px;
    background-color: #eaeaea;
  }
}
</style>