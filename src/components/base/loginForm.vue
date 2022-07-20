<template>
  <div>
    <h3>Registered Customers</h3>
    <p>If you have an account with us, please log in.</p>
    <el-form
      ref="loginForm"
      :model="loginUser"
      :rules="rules"
      size="large"
      label-position="top"
    >
      <el-form-item label="你的邮箱" prop="mailbox">
        <el-input v-model="loginUser.mailbox"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="mar-b-30">
        <el-input v-model="loginUser.password" type="password"></el-input>
      </el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn white"
        color="#d8232a"
        >提交{{ ruleStatus }}</el-button
      >
      <el-button size="large" color="#fff" @click="log">Forgot Your Password?</el-button>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import md5 from "js-md5";
import axios from "axios";
import { useStore } from "vuex";
import movieList from "@/components/service/api"; // 导入我们的api接口
import { setItem, getItem } from "@/utils/storage.js";
export default {
  name: "loginForm",
  setup(props,{emit}) {
    const store = useStore();
    //定义·表单输入框信息
    const loginUser = reactive({
      mailbox: "",
      password: "",
    });
    //自定义的邮箱和手机验证规则
    var checkEmail = (rule, value, cb) => {
      //验证邮箱的正则表达式
      const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (regEmail.test(value)) {
        //合法的邮箱
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    //定义校验规则 表单代码中必须以 :rules 接收
    const rules = {
      mailbox: [
        { required: true, message: "请输入你的邮箱", trigger: "blur" },
        {
          validator: checkEmail,
          min: 9,
          max: 18,
          message: "邮箱格式错误",
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
          pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
          message: "密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为8-30位",
        },
      ],
    };
    // vue3 ref 获取方式
    const loginForm = ref(null);
    var password = md5(loginUser.password);
    // 触发登录方法
    const handleLogin = () => {
      loginForm.value.validate((valid) => {
        if (valid) {
          emit('login', 'ok')
          // movieList.auth().then((res) => {
          //   console.log("state.token", store.state.token);
          // });
        } else {
          return false;
        }
      });
    };
    return {
      handleLogin,
      rules,
      loginUser,
      loginForm,
    };
  }
};
</script>
