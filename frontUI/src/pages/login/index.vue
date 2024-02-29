<script setup>
import {ref} from "vue";
import verifys from "@/utils/vertify";
import api from "@/api/index";

const account = ref("");
const password = ref("");
const disabled = ref(false);
const loginSubmit = () => {
  disabled.value = true;
  if (verifys.verify({
    acc: account.value,
    pwd: password.value
  })) {

    uni.showToast({
      title: "提交数据",
      icon: "loading",
      duration: 1300
    });


  } else {
    // 弹窗,无法登录
    uni.showToast({
      title: "登录失败",
      icon: "error",
      duration: 1300
    });
    setTimeout(() => {
      disabled.value = !disabled.value;
    }, 1200);
  }
};
// 微信小程序登陆使用
let code = ref("");
const weixinLogin = () => {
  disabled.value = true;
  uni.showToast({
    title: "正在登录",
    icon: "loading",
    duration: 1300
  });
  uni.login({
    //使用微信登录
    provider: "weixin",
    onlyAuthorize: true,
    success: async function (loginRes) {
      code.value = loginRes.code;

      await api.weixinLogin({code: code.value})
          .then(res => {
            console.log("res:");
            console.log(res);
          })
          .catch(e => {
            console.log("e:");
            console.log(e);
          });

    },
    fail: function (err) {
      console.log("err");
      console.log(err);
    }
  });
  disabled.value = false;

};
const src = ref("/static/icons/logo.png");
const isWeixin = ref(false);
// #ifdef MP-WEIXIN
isWeixin.value = true;
// #endif
</script>

<template>
  <div class="loginPage pageContainer">
    <div class="formContainer">
      <up-alert title="请登录" type="error" description="请先登录使用"></up-alert>
      <div class="imageLim">
        <up-image shape="circle" :show-loading="true" :src="src" width="80px" height="80px"></up-image>
      </div>
      <div class="ice-column" v-if="!isWeixin">
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
          <up-button :disabled="disabled" type="primary" plain text="登录" @click="loginSubmit"></up-button>
          <div class="block-25"></div>
        </div>
      </div>
      <div class="weixinLoginForm" v-if="isWeixin">
        <up-button :disabled="disabled" type="primary" plain text="登录" @click="weixinLogin"></up-button>
      </div>
    </div>
    <div class="footer">
      <u-tag text="小张轮胎服务" plain></u-tag>
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
.imageLim{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: @margin-s;
  margin-bottom: @margin-s;
}
.footer{
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>