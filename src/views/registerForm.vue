<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <div class="content">
          <div class="register">
            <h5 class="reg-title">RPersonal Information</h5>
            
              <el-form
                ref="registerForm"
                :model="register"
                :rules="rules"
                size="large"
                :inline="true"
                label-position="top"
              >
              <el-row :gutter="10" style="width:100%">
                <el-col :span="12">
                  <el-form-item label="姓名" prop="name" class="gery-color">
                    <el-input v-model="register.name"></el-input>
                  </el-form-item>
                  <el-form-item label="你的邮箱" prop="mailbox" class="gery-color">
                    <el-input v-model="register.mailbox"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="你的密码" prop="password">
                    <el-input v-model="register.password"  type="password"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="confirmed" class="mar-b-30">
                    <el-input v-model="register.confirmed" type="password"></el-input>
                  </el-form-item>
                </el-col>
                 <a class="news-letter" href="#">
                                <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i> </i>Sign Up for Newsletter</label>
                            </a>
                <el-button
                  @click="handleRegister('registerForm')"
                  type="primary"
                  class="submit-btn"
                  color="#d8232a"
                  >注册</el-button>
                 </el-row>
              </el-form>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import md5 from "js-md5";
import { hotMovieListApi, popMovieListApi } from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "registerForm",
  components: { headerPage, footerPage },
  setup() {
    //定义·表单输入框信息
    const register = reactive({
      name:"",
      mailbox: "",
      password: "",
      confirmed:""

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
     var confirmedPass = (rule, value, callback) => {
      if (value !== register.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    };
    //定义校验规则 表单代码中必须以 :rules 接收
    const rules = {
      name:[
          { required: true, message: "请输入你的姓名", trigger: "blur" }
      ],
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
      confirmed: [
        { required: true, message: "请再次输入密码", trigger: "blur" },
        {
          validator: confirmedPass,
          min: 9,
          max: 18,
          message: "两次输入密码不一致!",
          trigger: "blur",
        },
      ],
    };
    // vue3 ref 获取方式
    const registerForm = ref(null);
    var password = md5(register.password);
    // 触发登录方法
    const handleRegister = () => {
      registerForm.value.validate((valid) => {
        if (valid) {
          hotMovieListApi({
            name: register.name,
            mailbox: register.mailbox,
            password: password,
          }).then((res) => {
            var movieListData = res.movieList;
          });
        } else {
          return false;
        }
      });
    };
    return {
      handleRegister,
      rules,
      register,
      registerForm,
    };
  },
  methods: {},
};
</script>
