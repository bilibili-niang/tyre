<script setup>
import {ref} from "vue";
import verifys from "@/utils/vertify";

const account = ref("");
const password = ref("");
const loginSubmit = () => {
  if (verifys.verify({
    acc: account.value,
    pwd: password.value
  })) {
    uni.showToast({
      title: "提交数据",
      icon: "success",
      duration: 1300
    });
  } else {
    // 弹窗,无法登录
    uni.showToast({
      title: "登录失败",
      icon: "none",
      duration: 1300
    });
  }
};
</script>

<template>
  <div class="loginPage pageContainer">
    <div class="formContainer">
      <up-alert title="请登录" closable type="error" description="请登录使用"></up-alert>
      <div class="inputLim">
        <up-input
            placeholder="用户名"
            v-model="account"
            border="bottom"
        ></up-input>
      </div>

      <div class="inputLim">
        <up-input
            placeholder="密码"
            v-model="password"
            border="bottom"
        ></up-input>
      </div>

      <div class="btnLim">
        <div class="block-25"></div>
        <up-button type="primary" plain text="登录" @click="loginSubmit"></up-button>
        <div class="block-25"></div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="less">
@import "@/static/css/common.less";

.loginPage{
  .flex-col();
}
.loginPage{
  margin-top: 20%;
  padding-left: @margin-m;
  padding-right: @margin-m;
  box-sizing: border-box;

  .formContainer{
    background: @pageBac;
    padding: @padding-s;
    border-radius: 5px;
  }
}
</style>