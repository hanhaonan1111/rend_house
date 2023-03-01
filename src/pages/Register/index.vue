<template>
  <van-nav-bar title="注册页面" />
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="mobileRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="pwdRules"
      />
      <van-field
        v-model="password2"
        type="password"
        name="password"
        label="确认密码"
        placeholder="确认密码"
        :rules="[
          ...pwdRules,
          {
            validator: ConfirmPwd,
            message: '两次输入不一致',
          },
        ]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
  <div class="backHome">
    <div class="go">
      <router-link to="/login">已有账号，去登陆~</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mobileRules, pwdRules } from "@/utils/Const";
import { ref } from "vue";
import { useLogin } from "@/store";
import { showFailToast, showSuccessToast } from "vant";
import router from "@/router/router";
let user = useLogin();
const username = ref("13783829745");
const password = ref("12345111");
const password2 = ref("12345111");

const onSubmit = async () => {
  let data = {
    username: username.value,
    password: password.value,
  };

  user.registerUser(data);

  //router.push("/");
};

function ConfirmPwd() {
  return password2.value === password.value;
}
</script>
<style lang="scss" scoped>
form {
  margin-top: 20px;
}
.go {
  a {
    color: blue;
  }
  margin-top: 28px;
  text-align: center;
}
</style>