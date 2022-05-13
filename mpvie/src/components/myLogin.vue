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
                <a class="acount-btn" href="register.html">Create an Account</a>
              </el-col>
              <el-col :span="12" class="login-right">
                <h3>Registered Customers</h3>
                <p>If you have an account with us, please log in.</p>
                <el-form
                  ref="ruleForm"
                  :model="ruleForm"
                  :rules="loginRule"
                  size="large"
                  label-position="top"
                  
                >
                  <el-form-item label="你的邮箱" prop="mailbox">
                    <el-input v-model="ruleForm.mailbox"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password" class="mar-b-30">
                    <el-input v-model="ruleForm.password"></el-input>
                  </el-form-item>
                  <input type="button" value="Login" @click="register">
                  <!-- <el-button size="large" @click="resetForm('ruleForm')"  color="#d8232a">Login</el-button> -->
                  <el-button size="large" color="#fff">Forgot Your Password?</el-button>
                </el-form>
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
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import md5 from 'js-md5';
import { hotMovieListApi, popMovieListApi } from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "myLogin",
  components: { headerPage, footerPage },
  data() {
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
    return {
      ruleForm: {
        mailbox: "",
        password: "",
      },
      loginRule: {
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
            message:
              "密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为8-30位",
          },
        ],
      },
    };
  },
  created() {
    hotMovieListApi().then((res) => {
      var movieList = [],
        maxlen = 2;
      var movieListData = res.movieList;
      for (var i = 0; i <= movieListData.length - 6; i += maxlen) {
        if (typeof movieListData[i] !== "undefined") {
          movieList.push(movieListData.slice(i, i + maxlen));
        }
      }
      this.movieList = movieList;
    });
    popMovieListApi({
      type: "movie",
      tag: "热门",
      page_limit: 4,
      page_start: 0,
    }).then((res) => {
      var movieList = [];
      var movieListData = res.subjects;
      for (var i = 0; i <= movieListData.length; i++) {
        if (typeof movieListData[i] !== "undefined") {
          movieList.push(movieListData[i]);
        }
      }
      this.popMovieList = movieList;
    });
  },
  computed: {},
  method: {
    // 用户注册
    register: function() {
      alert(5)
      console.log(2)
      // this.$refs['ruleForm'].validate((valid) => {
      //   debugger
      //   if (valid) {
      //     const user = {
      //       email: this.ruleForm.email,
           
      //     }
      //     debugger
      //     // register(this.ruleForm.code, user).then(res => {
      //     //   this.$message({
      //     //     showClose: true,
      //     //     message: '注册成功，正在跳转到登录界面...',
      //     //     type: 'success'
      //     //   })
      //     //   setTimeout(() => {
      //     //     this.$router.push('/')
      //     //   }, 2000)
      //     // }).catch(err => {
      //     //   console.log(err.response.data.message)
      //     // })
      //   }
      // })
    },
    greet(event) {
      // `methods` 内部的 `this` 指向当前活动实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
};
</script>
