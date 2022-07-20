<template>
  <div class="header_top">
    <el-row>
      <el-col :span="4">
        <div class="logo">
          <botton @click="toHome">
            <img :src="logoURL" alt="" />
          </botton>
          <!-- <a href="index.html"><img :src="logoURL" alt="" /></a> -->
        </div>
      </el-col>
      <el-col :span="17">
        <div class="nav">
          <ul class="col">
            <li>
              <span
                class="simptip-position-bottom simptip-movable"
                data-tooltip="comic"
              ></span>
            </li>
            <li>
              <span class="simptip-position-bottom simptip-movable" data-tooltip="movie"
                ><a @click="toMovie"> </a>
              </span>
            </li>
            <li>
              <span class="simptip-position-bottom simptip-movable" data-tooltip="video"
                ><a @click="toVideo"> </a
              ></span>
            </li>
            <li>
              <span class="simptip-position-bottom simptip-movable" data-tooltip="music"
                ><a @click="toMusic"> </a
              ></span>
            </li>
            <li>
              <span class="simptip-position-bottom simptip-movable" data-tooltip="book"
                ><a @click="toBook"> </a
              ></span>
            </li>
            <li>
              <span class="simptip-position-bottom simptip-movable" data-tooltip="more"
                ><a @click="toBook"> </a
              ></span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="header_right">
          <ul class="header_right_box">
            <!-- <el-icon size="26px" @click="toLogin"><Lock/></el-icon> -->
            <!-- <el-icon><SwitchButton /></el-icon> -->
            <el-row>
              <el-col :span="12" v-show="!isLogin"
                ><el-icon size="26px" @click="toLogin"><Unlock /></el-icon
              ></el-col>
              <el-col :span="12" v-show="!isLogin"
                ><el-icon size="26px" @click="toRegister"><UserFilled /></el-icon
              ></el-col>
              <el-col :span="12" v-show="isLogin"><img :src="memberURL" /></el-col>
              <el-col :span="12" v-show="isLogin"
                ><el-icon size="26px" @click="toLogout" style="margin-top: 5px"><SwitchButton /></el-icon
              ></el-col>
            </el-row>
          </ul>
        </div>
      </el-col>
      <div class="clearfix"></div>
    </el-row>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Unlock, SwitchButton, UserFilled } from "@element-plus/icons-vue";
export default {
  name: "headerPage",
  components: {
    Unlock,
    UserFilled,
    SwitchButton,
  },
  data() {
    return {
      logoURL: require(`@/assets/images/logo.png`),
      memberURL: require(`@/assets/images/p1.png`),
    };
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    console.log(store.getters.getIsLogin); // hello
    if (store.getters.getToken) {
      store.commit('userSatus',true)
    } else {
      store.commit('userSatus',false)
    }
    const toHome = () => {
      router.push({
        name: "home",
      });
    };
    const toMovie = () => {
      router.push({
        name: "movieList",
      });
    };
    const toVideo = () => {
      router.push({
        name: "videoPage",
      });
    };
    const toBook = () => {
      router.push({
        name: "bookPage",
      });
    };
    const toMusic = () => {
      router.push({
        name: "musicPage",
      });
    };
    const toLogin = () => {
      router.push({
        name: "login",
      });
    };
    const toRegister = () => {
      router.push({
        name: "registerForm",
      });
    };
    const toLogout = () => {
       // 清空token
      window.localStorage.clear()
      // 跳转到登录页
      router.push({
        name: "login",
      });
    };
    return {
      toHome,
      toMovie,
      toVideo,
      toBook,
      toMusic,
      toLogin,
      toRegister,
      toLogout,
      isLogin: computed(() => store.getters.getIsLogin),
    };
  },
};
</script>
