<template>
  <div>
    <van-nav-bar title="登陆页面" />
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
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <div class="backHome">
      <div class="go">
        <router-link to="/register">还没有账号，去注册~</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { mobileRules, pwdRules } from "@/utils/Const";
import { showFailToast, showSuccessToast } from "vant";
import { useLogin } from "@/store/index";

const username = ref("15032141415");
const password = ref("123456");
let login = useLogin();

const onSubmit = async () => {
  try {
    await login.asyncPostLogin({
      username: username.value,
      password: password.value,
    });
    showSuccessToast("登陆成功！");
  } catch (e) {
    showFailToast("操作失败");
  }
};
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