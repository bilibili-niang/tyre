<template>
  <div class="indexPage pageContainer">
    <u-transition :show="loginFlag">
      <Login/>
    </u-transition>
    <div class="container" v-if="!loginFlag">
      <up-image :show-loading="true" :src="src" width="80px" height="80px" @click="click"></up-image>
    </div>
  </div>
  <!--  <tabBar></tabBar>-->
</template>

<script setup>
import {ref} from "vue";
import {onShow} from "@dcloudio/uni-app";
import Login from "../login/index.vue";
// import TabBar from "@/components/common/tabBar/index.vue";

const src = ref("https://cdn.uviewui.com/uview/album/1.jpg");

const click = () => {
  // 点击事件处理逻辑
};
let loginFlag = ref(false);
/**
 * 判断本地是否有用户登录
 *
 */
const isLogin = () => {
  const tokenStr = uni.getStorageSync("token");
  if (!tokenStr) {
    loginFlag.value = true;
    // 隐藏tabbar
    uni.hideTabBar();
  } else {
    loginFlag.value = false;
    // 提示已有用户登录
    uni.showToast({
      title: "您已经登录了",
      icon: "none"
    });
  }
};

onShow(() => {
  isLogin();
});
</script>

<style>

</style>
