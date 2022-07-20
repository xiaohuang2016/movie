<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <div class="content">
          <div class="register">
            <el-row :gutter="30">
              <el-col :span="12" class="login-left">
                <h3>New Customers</h3>
                <p>
                  By creating an account with our store, you will be able to move through
                  the checkout process faster, store multiple shipping addresses, view and
                  track your orders in your account and more.
                </p>
                <a class="acount-btn" @click="toRegister">Create an Account</a>
              </el-col>
              <el-col :span="12" class="login-right">
                <loginForm @login="handleLogin"></loginForm>
              </el-col>
            </el-row>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import loginForm from "@/components/base/loginForm.vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "myLogin",
  components: { headerPage, footerPage, loginForm },
  setup() {
    const router = useRouter();
    const store = useStore();
    const toRegister = () => {
      router.push({
        name: "registerForm",
      });
    };
    const handleLogin = (value) => {
      if (value === "ok") {
        axios.get("./mock.json").then((res) => {
          var token = res.data.data.access_token;
          store.commit("setToken", token);
          store.commit("userSatus", true);
          router.go(-1)
        });
      }
    };
    return {
      toRegister,handleLogin
    };
  },
};
</script>
