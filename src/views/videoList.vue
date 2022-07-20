<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <section class="post-news-area section-padding-100-0">
          <div class="container">
            <div class="row">
              <!-- Post Details Content Area -->
              <div class="col-12 col-lg-8">
                <div class="post-details-content mb-100">
                  <div class="single-blog-post style2 mb-50">
                    <div class="blog-thumb mb-30">
                      <img :src="detailImg" alt="" />
                    </div>
                    <div class="blog-content">
                      <a href="#" class="post-tag">Featured</a>
                      <h4>A day in New York</h4>
                      <div class="post-meta mb-30">
                        <a href="#"> <img :src="author" alt="" /> {{ count }}</a>
                        <a href="#"><img :src="calender" alt="" /> July 23, 2018</a>
                        <a href="#"><img :src="chat" alt="" /> 5</a>
                        <a href="#"><img :src="like" alt="" /> 12k</a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        sapien nunc, aliquam et sollicitudin a, mollis sit amet odio. Cras
                        in varius libero, ac molestie enim. Aenean semper leo et tellus
                        luctus, ultricies condimentum odio placerat. Sed ultrices in orci
                        eget tristique. Nullam ullamcorper justo sit amet lectus volutpat
                        finibus. Ut luctus risus vel quam malesuada dapibus non eu libero.
                        Phasellus et purus vel purus malesuada eleifullamcorper end.
                      </p>
                      <p>
                        Aliquam et semper neque. Donec vitae ultrices justo. Curabitur a
                        semper leo, quis maximus tellus. Fusce euismod nisi eu sapien
                        dignissim pulvinar. Suspendisse sagittis, nibh ac auctor
                        facilisis, tellus mi ultrices velit, vehicula feugiat eros felis
                        et magna. Etiam eu nibh ac ligula feugiat scelerisque at ut nisi.
                        Cras id posuere nisi.
                      </p>
                      <img :src="detailImg02" class="mb-30" alt="" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        sapien nunc, aliquam et sollicitudin a, mollis sit amet odio. Cras
                        in varius libero, ac molestie enim. Aenean semper leo et tellus
                        luctus, ultricies condimentum odio placerat. Sed ultrices in orci
                        eget tristique. Nullam ullamcorper justo sit amet lectus volutpat
                        finibus. Ut luctus risus vel quam malesuada dapibus non eu libero.
                        Phasellus et purus vel purus malesuada eleifullamcorper end.
                      </p>
                      <p>
                        Aliquam et semper neque. Donec vitae ultrices justo. Curabitur a
                        semper leo, quis maximus tellus. Fusce euismod nisi eu sapien
                        dignissim pulvinar. Suspendisse sagittis, nibh ac auctor
                        facilisis, tellus mi ultrices velit, vehicula feugiat eros felis
                        et magna. Etiam eu nibh ac ligula feugiat scelerisque at ut nisi.
                        Cras id posuere nisi.
                      </p>
                      <div class="row">
                        <div class="col-lg-6">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean sapien nunc, aliquam et sollicitudin a, mollis sit amet
                            odio. Cras in varius libero, ac molestie enim. Aenean semper
                            leo et tellus luctus, ultricies condimentum odio placerat. Sed
                            ultrices in orci eget tristique. Nullam ullamcorper justo sit
                            amet lectus volutpat finibus. Ut luctus risus vel quam
                            malesuada dapibus non eu libero. Phasellus et purus vel purus
                            malesuada eleifullamcorper end.
                          </p>
                          <p>
                            Aliquam et semper neque. Donec vitae ultrices justo. Curabitur
                            a semper leo, quis maximus tellus. Fusce euismod nisi eu
                            sapien dignissim pulvinar. Suspendisse sagittis, nibh ac
                            auctor facilisis, tellus mi ultrices velit, vehicula feugiat
                            eros felis et magna. Etiam eu nibh ac ligula.
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <img :src="detailImg03" alt="" />
                        </div>
                      </div>
                      <!-- Like Dislike Share -->
                      <div class="like-dislike-share mt-50">
                        <el-button type="warning" size="large">
                          <el-icon><Pointer /></el-icon>
                        </el-button>
                        <el-button type="warning" size="large">
                          <el-icon><Link /></el-icon>
                        </el-button>
                        <el-button type="warning" size="large">
                          <el-icon><Star /></el-icon>112
                        </el-button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Comment Area Start -->
                <div class="single text_l">
                  <h1>Comments（1190）</h1>

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
                      <div class="clearfix"></div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Sidebar Widget -->
              <div class="col-12 col-sm-9 col-md-6 col-lg-4">
                <div class="sidebar-area mb-100">
                  <!-- Single Sidebar Widget -->
                  <div class="single-widget-area border-style mb-50">
                    <h2 class="widget-title">Newsletter</h2>
                    <p>Subscribe to our newsletter and join our thousand subscribers.</p>
                    <el-form
                      ref="newsLetterForm"
                      :model="newsLetter"
                      class="mt-15"
                      :rules="rules"
                      label-position="top"
                    >
                      <el-form-item prop="mailbox">
                        <el-input
                          v-model="newsLetter.mailbox"
                          placeholder="Your E-mail Address"
                        ></el-input>
                      </el-form-item>
                      <el-button
                        @click="handleLetter('newsLetterForm')"
                        type="primary"
                        class="btn videomag-btn mt-15"
                        color="#d8232a"
                        size="large"
                        >Subscribe{{ ruleStatus }}</el-button
                      >
                    </el-form>
                  </div>

                  <!-- Single Sidebar Widget -->
                  <div class="single-widget-area mb-50">
                    <h2 class="widget-title">July Top</h2>

                    <!-- Single Blog Post -->
                    <div
                      class="single-blog-post style4 d-flex mb-30 wow fadeInUp"
                      data-wow-delay="300ms"
                      v-for="(item, index) in topJuly.data"
                      :key="index"
                    >
                      <div class="blog-thumb">
                        <img :src="item.cover" alt="" />
                        <!-- Play Button -->
                        <a href="#" class="video-play-btn style3"
                          ><el-icon size="40px"><VideoPlay /></el-icon
                        ></a>
                      </div>
                      <div class="blog-content">
                        <a href="#" class="post-tag">Featured</a>
                        <a href="#" class="post-title ellipsis">{{ item.title }}</a>
                        <div class="post-meta">
                          <a href="#"><img :src="chat" alt="" /> {{ item.cover_x }}</a>
                          <a href="#"><img :src="like" alt="" /> {{ item.rate }}</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Single Sidebar Widget -->
                  <div class="single-widget-area border-style mb-50">
                    <h2 class="widget-title">Most liked</h2>
                    <!-- Single Blog Post -->
                    <div class="single-blog-post style3">
                      <div class="blog-thumb mb-30">
                        <img :src="detailImg04" alt="" />
                        <!-- Play Button -->
                        <a
                          href="https://www.youtube.com/watch?v=0aNNYEUARAk"
                          class="video-play-btn style2"
                          ><el-icon size="60px"><VideoPlay /></el-icon
                        ></a>
                      </div>
                      <div class="blog-content">
                        <a href="#" class="post-tag">Featured</a>
                        <a href="#" class="post-title">Coffee in Paris</a>
                        <div class="post-meta d-flex justify-content-between">
                          <a href="#"><img :src="calender" alt="" />July 23, 2018</a>
                          <div class="d-flex">
                            <a href="#"><img :src="chat" alt="" /> 5</a>
                            <a href="#"><img :src="like" alt="" /> 12k</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Single Sidebar Widget -->
                  <div class="single-widget-area border-style mb-50">
                    <h2 class="widget-title">Featured</h2>
                    <!-- Single Blog Post -->
                    <div class="single-blog-post style3">
                      <div class="blog-thumb mb-30">
                        <img :src="detailImg05" alt="" />
                        <!-- Play Button -->
                        <a
                          href="https://www.youtube.com/watch?v=0aNNYEUARAk"
                          class="video-play-btn style2"
                          ><el-icon size="60px"><VideoPlay /></el-icon
                        ></a>
                      </div>
                      <div class="blog-content">
                        <a href="#" class="post-tag">Featured</a>
                        <a href="#" class="post-title">Coffee in Paris</a>
                        <div class="post-meta d-flex justify-content-between">
                          <a href="#"><img :src="calender" alt="" />July 23, 2018</a>
                          <div class="d-flex">
                            <a href="#"><img :src="chat" alt="" /> 5</a>
                            <a href="#"><img :src="like" alt="" /> 12k</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Reply Form -->
                  <div class="single-widget-area border-style mb-50">
                    <h2 class="widget-title">Leave a comment</h2>
                    <el-form
                      ref="commentForm"
                      :model="comment"
                      class="mt-15"
                      :rules="rules"
                      label-position="top"
                    >
                      <el-form-item prop="name">
                        <el-input
                          v-model="comment.name"
                          placeholder="Your Name"
                        ></el-input>
                      </el-form-item>
                      <el-form-item prop="mailbox">
                        <el-input
                          v-model="comment.mailbox"
                          placeholder="Your Email"
                        ></el-input>
                      </el-form-item>
                      <el-button
                        @click="handleComment('commentForm')"
                        type="primary"
                        class="btn videomag-btn mt-15"
                        color="#d8232a"
                        size="large"
                        >Submit Comment</el-button
                      >
                    </el-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { VideoPlay, Link, Star, Pointer } from "@element-plus/icons-vue";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import movieList from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "movieList",
  components: { headerPage, footerPage, VideoPlay, Link, Star, Pointer },
  data() {
    return {
      detailImg: require(`@/assets/images/bg-img/37.jpg`),
      detailImg02: require(`@/assets/images/bg-img/38.jpg`),
      detailImg03: require(`@/assets/images/bg-img/39.jpg`),
      detailImg04: require(`@/assets/images/bg-img/40.jpg`),
      detailImg05: require(`@/assets/images/bg-img/41.jpg`),
      author: require(`@/assets/images/core-img/author2.png`),
      calender: require(`@/assets/images/core-img/calendar2.png`),
      chat: require(`@/assets/images/core-img/chat2.png`),
      like: require(`@/assets/images/core-img/like2.png`),
      hotMovie: [],
      dark: "movie movie-test movie-test-dark movie-test-left ",
      light: "movie movie-test movie-test-light movie-test-right",
      popMovie: [],
      recentlyMovie: [],
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
    const topJuly = reactive({
      data:[]
    }); // reactive 声明复杂数据类型
    // 触发JulyTop方法
    movieList
      .popMovieListApi({
        type: "movie",
        tag: "热门",
        page_limit: 12,
        page_start: 0,
      })
      .then((res) => {
        var movie = [];
        var movieListData = res.data.subjects;
        for (var i = 0; i <= movieListData.length; i++) {
          if (typeof movieListData[i] !== "undefined") {
            //定义·JulyTop数据
             topJuly.data = movieListData.slice(0, 7);
          }
        }
      });

    //定义·表单Newsletter输入框信息
    const newsLetter = reactive({
      mailbox: "",
    });
    //定义·表单Leave a comment输入框信息
    const comment = reactive({
      name: "",
      mailbox: "",
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
      name: [{ required: true, message: "请输入你的名字", trigger: "blur" }],
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
    };
    // ref 获取newsLetterForm方式
    const newsLetterForm = ref(null);
    // 触发Newsletter方法
    const handleLetter = () => {
      newsLetterForm.value.validate((valid) => {
        if (valid) {
          // movieList.auth().then((res) => {
          //   console.log("state.token", store.state.token);
          // });
        } else {
          return false;
        }
      });
    };
    // ref 获取newsLetterForm方式
    const commentForm = ref(null);
    // 触发Leave a comment方法
    const handleComment = () => {
      commentForm.value.validate((valid) => {
        if (valid) {
          // movieList.auth().then((res) => {
          //   console.log("state.token", store.state.token);
          // });
        } else {
          return false;
        }
      });
    };
    return {
     topJuly,
      handleLetter,
      rules,
      newsLetter,
      newsLetterForm,
      comment,
      commentForm,
      handleComment,
    };
  },
};
</script>
<style scope>
.el-input--small .el-input__wrapper {
  padding: 0;
}
.el-input--small .el-input__inner {
  height: 56px;
  line-height: 56px;
}
</style>
