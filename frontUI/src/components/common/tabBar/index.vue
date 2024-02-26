<script>
export default {
  name: "tabBar"
};
</script>

<script setup>
import {ref} from "vue";

const value6 = ref(0);
const changeTab = (name) => {
  value6.value = name;
  console.log("name:");
  console.log(name);
  // 跳转
  uni.navigateTo({
    // url: "/pages/" + value6.value + "/index.vue",
    // url: "pages/contact/"+name+".vue",
    url: "pages/" + name + "/index.vue",

  });
};
</script>
<template>
  <div class="tabBar">
    <u-tabbar
        :value="value6"
        @change="changeTab"
        :fixed="true"
        :placeholder="true"
        :safeAreaInsetBottom="true"
        :border="false"
    >
      <u-tabbar-item text="首页" name="index" icon="home"></u-tabbar-item>
      <u-tabbar-item text="联系人" name="contact" icon="list-dot"></u-tabbar-item>
      <u-tabbar-item text="我的" name="mine" icon="account"></u-tabbar-item>
    </u-tabbar>
  </div>
</template>


<style scoped>

</style>