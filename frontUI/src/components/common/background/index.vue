<script>
export default {
  name: "pageContainer"
};
</script>

<template>
  <div class="pageContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
@import "../../../static/css/variable.less";

.pageContainer{
  background: @pageBac;
}
</style>