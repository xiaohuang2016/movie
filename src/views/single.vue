<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <div class="content">
          <div class="movie_top">
            <el-row>
              <el-col :span="20">
                <div class="movie_box">
                  <div v-for="(item, index) in singleListData.singleData" :key="index">
                    <el-row :gutter="20">
                      <el-col :span="7">
                        <div class="movie_image">
                          <span class="movie_rating">{{ item.score }}</span>

                          <img :src="item.cover_url" class="img-responsive" alt="" />
                        </div>
                      </el-col>

                      <el-col :span="16">
                        <p class="movie_option">
                          <strong>片名: </strong><a href="#">{{ item.title }}</a
                          >,
                        </p>
                        <p class="movie_option">
                          <strong>主演: </strong><a href="#">{{ item.actors }}</a
                          >,
                        </p>
                        <p class="movie_option">
                          <strong>类型: </strong>{{ item.types }}
                        </p>
                        <p class="movie_option">
                          <strong>制片国家/地区: </strong>{{ item.regions }}
                        </p>
                        <p class="movie_option">
                          <strong>上映日期: </strong>{{ item.release_date }}
                        </p>
                        <p class="movie_option">
                          <strong>播放量: </strong><a href="#">{{ item.rank }} </a>
                        </p>
                        <div class="movie_option">
                          <el-button plain @click="WantSee('wish')"> 想看 </el-button>
                          <el-button plain @click="WantSee('collect')"> 看过 </el-button>
                          <el-button type="primary" color="#d8232a">
                            <el-icon class="el-icon--right"><Upload /></el-icon>Download
                          </el-button>
                          <el-button plain @click="WantSee('short')">
                            <el-icon class="el-icon--right" color="#d8232a"
                              ><EditPen /></el-icon
                            >写短评
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="clearfix"></div>

                  <p class="m_4 text_l">
                    围棋手吉流（秦昊
                    饰）初到东京留学，陷入生活迷茫困境，在去千叶的列车上，
                    他与背着蔬菜进京的五十岚婆（倍赏千惠子
                    饰）有了一次奇特的偶遇，从此他的生活进入了一个奇异的圈子，
                    他与五十岚婆的孙子翔一（中泉英雄 饰），与翔一的女友奈菜子（张钧甯
                    饰），与旅店的服务员内藤加美（田原 饰），
                    开始有了剪不断理还乱的关系。躁动的青春，异国的少女，不移的围棋梦想，在苦闷激情的年华里冰火交融。
                  </p>

                  <!-- <el-form
                    ref="registerForm"
                    :model="register"
                    :rules="rules"
                    size="large"
                    :inline="true"
                    label-position="top"
                  >
                    <el-row :gutter="20" style="width: 100%">
                      <el-col :span="8">
                        <el-form-item prop="name" class="gery-color">
                          <el-input v-model="register.name"  placeholder="Name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item
                          prop="mailbox"
                          class="gery-color"
                        >
                          <el-input v-model="register.mailbox"  placeholder="Email"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" style="width: 100%">
                      <el-col :span="16">
                        <el-form-item  prop="desc">
                          <el-input type="textarea" v-model="register.desc" placeholder="Message"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="0" style="width: 100%">
                      <el-button
                        @click="handleRegister('registerForm')"
                        type="primary"
                        class="submit-btn"
                        color="#d8232a"
                        >提交</el-button
                      >
                    </el-row>
                  </el-form> -->

                  <div class="single text_l">
                    <h1>{{ singleListData.movieName }}的短评（全部1190条）</h1>

                    <ul class="single_list">
                      <li v-for="(item, index) in comments" :key="index">
                        <div class="preview">
                          <a href="#"><img :src="item.avator" /></a>
                        </div>

                        <div class="data">
                          <div class="title">
                            {{ item.name }}
                            <el-rate
                              v-model="item.rating"
                              disabled
                              :colors="{ colors }"
                              score-template="{item.rating}"
                            >
                            </el-rate>
                            {{ item.time }}
                          </div>
                          <p style="margin-bottom: 10px">{{ item.content }}</p>
                        </div>
                        <div class="movie_option">
                          <el-button plain>
                            <el-icon class="el-icon--right mar-r-10" color="#d8232a"
                              ><DocumentAdd /></el-icon
                            >有用
                          </el-button>
                          <el-button plain>
                            <el-icon class="el-icon--right mar-r-10" color="#d8232a"
                              ><DocumentRemove /></el-icon
                            >没用
                          </el-button>
                        </div>
                        <div class="clearfix"></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div v-for="(item, index) in singleListData.movieHotList" :key="index" class="pop_movie">
                  <img :src="item.cover_url" class="img-responsive pop_movie_img" />
                  <div class="caption1 pop_movie_caption">
                    <el-row class="pop_movie_bg">
                      <el-col :span="19"
                        ><li><i class="icon5"> </i>{{ item.vote_count }}</li></el-col
                      >
                      <el-col :span="5"
                        ><li><i class="icon4"></i></li
                      ></el-col>
                    </el-row>
                    <p class="m_3">{{ item.title }}</p>
                  </div>
                </div>
              </el-col>
            </el-row>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>

    <footerPage></footerPage>
    <el-dialog
      custom-class="subDialog"
      :title="title"
      v-model="dialogPopVisible"
      :width="width"
      destroy-on-close
      v-bind="option"
    >
      <div><loginForm @login="handleLogin"></loginForm></div>
    </el-dialog>
    <el-dialog
      custom-class="subDialog"
      :title="titleCollect"
      v-model="dialogCollect"
      :width="width"
      :center = true
      destroy-on-close
      v-bind="option"
    >
      <div><collect @collect="handleCollect"></collect></div>
    </el-dialog>
  </div>
</template>
<script>
import { ElDialog, ElNotification, ElMessageBox } from "element-plus";
import { reactive, onMounted, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { Upload, EditPen, DocumentRemove, DocumentAdd } from "@element-plus/icons-vue";
import { Location } from "@element-plus/icons-vue";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import loginForm from "@/components/base/loginForm.vue";
import collect from "@/components/base/collect.vue";
import md5 from "js-md5";
import movieList from "@/components/service/api"; // 导入我们的api接口
const dialogPopVisible = ref(false);
const dialogCollect = ref(false);
const titleCollect = ref(null)
export default {
  name: "registerForm",
  components: {
    headerPage,
    footerPage,
    Upload,
    EditPen,
    DocumentRemove,
    DocumentAdd,
    loginForm,
    collect,
    ElDialog,
  },
  data() {
    return {
      comments: [
        {
          avator: "https://img9.doubanio.com/icon/u3735222-5.jpg",
          name: "头大脑仁小",
          rating: 3,
          time: "2012-03-23 08:39:03",
          title: "环保低碳的电影",
          content:
            "电影《初到东京》给我印象最深的是倍赏千惠子和张均甯两位女演员。倍赏千惠子是日本老牌明星了，以前在山田洋次的作品中经常看到她的身影，如《幸福的黄手帕》、《远山的呼唤》、《家族》等。当然最经典的要数《寅次郎的故事》。在这个日本拍摄最多、也可称为世界之最的系列电影。",
        },
        {
          avator: "https://img2.doubanio.com/icon/u32929928-151.jpg",
          name: "珍爱生命，远离烂片",
          rating: 3.7,
          time: "2012-03-23 08:39:03",
          title: "环保低碳的电影",
          content:
            "百老汇电影中心首映式，导演兼编剧跟部分演员都到了场，。很遗憾的听不到有价值的交流，只有花边新闻记者和托儿拿到麦克风，问了些关于“某女演员浑身上下有没有一个地方不美？”以及“某女演员是多么文艺的一名才女”之类的问题。满怀期待的我的最终感受是——对不起。",
        },
        {
          avator: "https://img1.doubanio.com/icon/u2534912-17.jpg",
          name: "头大脑仁小",
          rating: 4,
          time: "2012-03-23 08:39:03",
          title: "环保低碳的电影",
          content:
            "电影《初到东京》给我印象最深的是倍赏千惠子和张均甯两位女演员。倍赏千惠子是日本老牌明星了，以前在山田洋次的作品中经常看到她的身影，如《幸福的黄手帕》、《远山的呼唤》、《家族》等。当然最经典的要数《寅次郎的故事》。在这个日本拍摄最多、也可称为世界之最的系列电影。",
        },
        {
          avator: "https://img2.doubanio.com/icon/u69533919-3.jpg",
          name: "柚木",
          rating: 2,
          time: "2012-03-23 08:39:03",
          title: "翔一是个好男人",
          content:
            "电影《初到东京》给我印象最深的是倍赏千惠子和张均甯两位女演员。倍赏千惠子是日本老牌明星了，以前在山田洋次的作品中经常看到她的身影，如《幸福的黄手帕》、《远山的呼唤》、《家族》等。当然最经典的要数《寅次郎的故事》。在这个日本拍摄最多、也可称为世界之最的系列电影。",
        },
      ],
    };
  },
  setup() {
    const store = useStore();
    //定义·数据初始化
    const singleListData = reactive({
      singleData: [],
      movieName: [],
      movieHotList: [],
    });
    movieList
      .detail({
        type: 11,
        interval_id: "15:5",
        action: "",
        start: 0,
        limit: 1,
      })
      .then((res) => {
        singleListData.singleData = res.data;
        singleListData.movieName = res.data[0].title;
        console.log("this.singleData", res.data);
      });
    movieList
      .detail({
        type: 11,
        interval_id: "15:5",
        action: "",
        start: 0,
        limit: 6,
      })
      .then((res) => {
        singleListData.movieHotList = res.data;
        console.log("this.movieHotList", res.data);
      });
    //定义·表单输入框信息
    const register = reactive({
      name: "",
      mailbox: "",
      desc: "",
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
      name: [{ required: true, message: "请输入你的姓名", trigger: "blur" }],
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
    const registerForm = ref(null);
    // 触发登录方法
    const handleRegister = () => {
      registerForm.value.validate((valid) => {
        if (valid) {
          movieList
            .hotMovieListApi({
              name: register.name,
              mailbox: register.mailbox,
            })
            .then((res) => {
              var movieList = res.movieList;
            });
        } else {
          return false;
        }
      });
    };
    //出发“想看”方法(检测是否已经登录)
    const WantSee = (e) => {
      if(e == 'wish'){
        addCollect("我想看这部电影")
      }else if(e == 'collect'){
         addCollect("我看过这部电影")
      }else{
         addCollect("电影短评")
      }
     
    };
    const addCollect = (msg) => {
      if (store.getters.getToken) {
        store.commit("userSatus", true);
        dialogCollect.value = true;
        titleCollect.value = msg
      } else {
        dialogPopVisible.value = true;
        store.commit("userSatus", false);
      }
    };
    const handleLogin = (value) => {
      if (value === "ok") {
        axios.get("./mock.json").then((res) => {
          var token = res.data.data.access_token;
          store.commit("setToken", token);
          store.commit("userSatus", true);
          dialogPopVisible.value = false;
        });
      }
    };
    const handleCollect = (value) => {
      console.log("collectParams", value);
      dialogCollect.value = false
      ElMessageBox.alert("添加收藏成功！", "温馨提⽰", {
        confirmButtonText: "好的",
        type: "warning",
      });
    };
    return {
      singleListData,
      handleRegister,
      rules,
      register,
      registerForm,
      WantSee,
      dialogPopVisible,
      handleLogin,
      dialogCollect,
      handleCollect,
      titleCollect
    };
  }
};
</script>
