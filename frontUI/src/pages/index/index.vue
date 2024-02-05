<template>
  <div class="indexPage">
    <up-image :show-loading="true" :src="src" width="80px" height="80px" @click="click"></up-image>
  </div>
</template>

<script setup>
import {ref} from "vue";

const src = ref("https://cdn.uviewui.com/uview/album/1.jpg");

const click = () => {
  // 点击事件处理逻辑
};
</script>

<style>

</style>
