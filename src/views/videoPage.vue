<template>
  <div>
    <div class="container">
      <div class="container_wrap bg-white">
        <headerPage></headerPage>
        <!-- ##### Hero Area Start ##### -->
        <div class="hero-area d-flex flex-wrap">
          <div class="hero-single-section">
            <!-- Single Welcome Post -->
            <div
              class="single-welcome-post bg-img item1 wow fadeInUp"
              data-wow-delay="300ms"
              :style="{ backgroundImage: 'url(' + img1 + ')' }"
              @click="toVideoList"
            >
              <!-- Play Button -->
              <a class="video-play-btn"
                ><el-icon size="100px"><VideoPlay /></el-icon
              ></a>
              <!-- Content -->
              <div class="welcome-post-content">
                <!-- Single Blog Post -->
                <div class="single-blog-post white">
                  <div class="blog-content">
                    <!-- <a href="#" class="post-tag">Featured</a> -->
                    <a href="#" class="post-title">Watch a tiny cat taking a bath</a>
                    <div class="post-meta">
                      <a href="#"> <img :src="author" alt="" /> By James Smith</a>
                      <a href="#"><img :src="calender" alt="" /> July 23, 2018</a>
                      <a href="#"><img :src="chat" alt="" /> 5</a>
                      <a href="#"><img :src="like" alt="" /> 12k</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-single-section">
            <!-- Single Welcome Post -->
            <div
              class="single-welcome-post bg-img item2 wow fadeInUp"
              data-wow-delay="400ms"
              :style="{ backgroundImage: 'url(' + img2 + ')' }"
              @click="toVideoList"
            >
              <!-- Content -->
              <div class="welcome-post-content">
                <!-- Single Blog Post -->
                <div class="single-blog-post white">
                  <div class="blog-content">
                    <!-- <a href="#" class="post-tag">Featured</a> -->
                    <a href="#" class="post-title">Spain: Take a virtual tour</a>
                    <div class="post-meta">
                      <a href="#"> <img :src="author" alt="" /> By James Smith</a>
                      <a href="#"><img :src="calender" alt="" /> July 23, 2018</a>
                      <a href="#"><img :src="chat" alt="" /> 5</a>
                      <a href="#"><img :src="like" alt="" /> 12k</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-second-section d-flex flex-wrap">
              <!-- Single Welcome Post -->
              <div
                class="single-welcome-post bg-img item3 wow fadeInUp"
                data-wow-delay="500ms"
                :style="{ backgroundImage: 'url(' + img3 + ')' }"
                @click="toVideoList"
              >
                <!-- Content -->
                <div class="welcome-post-content">
                  <!-- Single Blog Post -->
                  <div class="single-blog-post style2 white">
                    <div class="blog-content">
                      <a href="#" class="post-tag">Featured</a>
                      <a href="#" class="post-title">5 Tips to create your garden</a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Single Welcome Post -->
              <div
                class="single-welcome-post bg-img item4 wow fadeInUp"
                data-wow-delay="600ms"
                :style="{ backgroundImage: 'url(' + img4 + ')' }"
              >
                <!-- Content -->
                <div class="welcome-post-content">
                  <!-- Single Blog Post -->
                  <div class="single-blog-post style2 white">
                    <div class="blog-content">
                      <a href="#" class="post-tag">Featured</a>
                      <a href="#" class="post-title">10 Movies you need to see</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ##### Hero Area End ##### -->
        <!-- ##### Tabs Area Start ##### -->
        <div class="video-mag-tabs-area mt-50 wow fadeInUp" data-wow-delay="200ms">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="latest"
                    role="tabpanel"
                    aria-labelledby="latest-tab"
                  >
                    <div class="latest-videos-slide owl-carousel">
                      <el-carousel
                        trigger="click"
                        :auto-paly="false"
                        indicator-position="none"
                      >
                        <el-carousel-item
                          v-for="item in taiwanVideoList.data"
                          :key="item"
                        >
                          <el-row :gutter="40">
                            <el-col :span="8" v-for="vedioItem in item" :key="vedioItem">
                              <div class="single-blog-post style2">
                                <div class="blog-thumb mb-30">
                                  <img
                                    :src="vedioItem.videoImg"
                                    alt=""
                                    class="img-responsive"
                                  />
                                  <!-- Play Button -->
                                  <a
                                    @click="handleVideo(vedioItem.id)"
                                    class="video-play-btn style2"
                                    ><el-icon size="60px"><VideoPlay /></el-icon
                                  ></a>
                                </div>
                                <div class="blog-content">
                                  <!-- <a href="#" class="post-tag">{{ vedioItem.showInfo }}</a> -->
                                  <a href="#" class="post-title ellipsis">{{
                                    vedioItem.videoName
                                  }}</a>
                                  <div class="post-meta">
                                    <a href="#">
                                      <img :src="author" alt="" />
                                      {{ vedioItem.artistName }}</a
                                    >
                                    <!-- <a href="#"
                                      ><img :src="calender" alt="" />
                                      {{ vedioItem.artistName }}</a
                                    > -->
                                    <a href="#"
                                      ><img :src="like" alt="" /> {{ vedioItem.id }}</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ##### Tabs Area End ##### -->

        <!-- ##### Travel Videos Area Start ##### -->
        <section class="travel-videos-area">
          <div class="container">
            <div class="travel-videos-content">
              <div class="row">
                <div class="col-12">
                  <div class="section-heading wow fadeInUp" data-wow-delay="200ms">
                    <h2>Travel Videos</h2>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-lg-6">
                  <!-- Single Welcome Post -->
                  <div
                    class="single-welcome-post style-2 bg-img mb-30 wow fadeInUp"
                    data-wow-delay="300ms"
                    :style="{ backgroundImage: 'url(' + img1 + ')' }"
                  >
                    <!-- Play Button -->
                    <a href="#"  class="video-play-btn"
                      ><el-icon size="100px"><VideoPlay /></el-icon
                    ></a>
                    <!-- Content -->
                    <div class="welcome-post-content">
                      <!-- Single Blog Post -->
                      <div class="single-blog-post white">
                        <div class="blog-content">
                          <a href="#" class="post-tag">Featured</a>
                          <a href="#" class="post-title"
                            >Watch a tiny cat taking a bath</a
                          >
                          <div class="post-meta">
                            <a href="#"> <img :src="author" alt="" /> By James Smith</a>
                            <a href="#"><img :src="calender" alt="" /> July 23, 2018</a>
                            <a href="#"><img :src="chat" alt="" /> 5</a>
                            <a href="#"><img :src="like" alt="" /> 12k</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <el-row :gutter="20">
                    <el-col :span="12" v-for="item in chinaVideoList.data" :key="item">
                      <!-- Single Blog Post -->
                      <div class="single-blog-post style2 mb-30">
                        <div class="blog-thumb mb-15">
                          <img :src="item.videoImg" alt="" class="img-responsive" />
                          <!-- Play Button -->
                          <a
                            @click="handleVideo(item.id)"
                            class="video-play-btn style2"
                            ><el-icon size="60px"><VideoPlay /></el-icon
                          ></a>
                        </div>
                        <div class="blog-content">
                          <!-- <a href="#" class="post-tag">{{ vedioItem.showInfo }}</a> -->
                          <a href="#" class="post-title ellipsis">{{ item.videoName }}</a>
                          <div class="post-meta">
                            <a href="#">
                              <img :src="author" alt="" />
                              {{ item.artistName }}</a
                            >
                            <!-- <a href="#"><img :src="calender" alt="" /> {{ item.rt }}</a>
                            <a href="#"><img :src="chat" alt="" /> {{ item.wish }}</a> -->
                            <a href="#"><img :src="like" alt="" /> {{ item.id }}</a>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- ##### Travel Videos Area End ##### -->

        <!-- ##### Small Videos Area Start ##### -->
        <section class="small-videos-area">
          <div class="container">
            <div class="small-videos-content">
              <div class="row">
                <!-- Fashion News -->
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="section-heading wow fadeInUp" data-wow-delay="200ms">
                    <h2>Fashion</h2>
                  </div>

                  <!-- Single Blog Post -->
                  <div
                    class="single-blog-post style2 mb-50 wow fadeInUp"
                    data-wow-delay="300ms"
                    v-for="(item, index) in videoFashion"
                    :key="index"
                  >
                    <div class="blog-thumb mb-5">
                      <img :src="item.postImg" alt="" />
                      <!-- Play Button -->
                      <a
                        href="https://www.youtube.com/watch?v=0aNNYEUARAk"
                        class="video-play-btn style2"
                      >
                        <el-icon size="60px"><VideoPlay /></el-icon>
                      </a>
                    </div>
                    <div class="blog-content">
                      <a href="#" class="post-tag">{{ item.postTag }}</a>
                      <a href="#" class="post-title">{{ item.postTitle }}</a>
                      <div class="post-meta">
                        <a href="#"><img :src="author" alt="" />{{ item.author }}</a>
                        <a href="#"><img :src="calender" alt="" /> {{ item.calender }}</a>
                        <a href="#"><img :src="chat" alt="" /> {{ item.chat }}</a>
                        <a href="#"><img :src="like" alt="" /> {{ item.like }}</a>
                      </div>
                    </div>
                  </div>

                  <!-- Single Blog Post -->
                  <div
                    class="single-blog-post style4 d-flex mb-30 wow fadeInUp"
                    data-wow-delay="400ms"
                    v-for="(item, index) in makeupVideoList.data"
                    :key="index"
                  >
                    <div class="blog-thumb">
                      <img :src="item.videoImg" alt="" />
                      <!-- Play Button -->
                      <a href="#" @click="handleVideo(item.id)" class="video-play-btn style3"
                        ><el-icon size="40px"><VideoPlay /></el-icon
                      ></a>
                    </div>
                    <div class="blog-content">
                      <!-- <a href="#" class="post-tag">{{ item.artistName }}</a> -->
                      <a href="#" class="post-title">{{ item.videoName }}</a>
                      <div class="post-meta">
                        <a href="#"><img :src="author" alt="" />{{ item.artistName }}</a>
                        <a href="#"><img :src="like" alt="" /> {{ item.id }}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Technology News -->
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="section-heading wow fadeInUp" data-wow-delay="200ms">
                    <h2>Technology</h2>
                  </div>

                  <!-- Single Blog Post -->
                  <div
                    class="single-blog-post style2 mb-50 wow fadeInUp"
                    data-wow-delay="300ms"
                    v-for="(item, index) in hongkongVideoList.data"
                    :key="index"
                  >
                    <div class="blog-thumb mb-5">
                      <img :src="item.videoImg" alt="" />
                      <!-- Play Button -->
                      <a
                        @click="handleVideo(item.id)"
                        class="video-play-btn style2"
                      >
                        <el-icon size="60px"><VideoPlay /></el-icon>
                      </a>
                    </div>
                    <div class="blog-content">
                      <a href="#" class="post-tag">{{ item.artistName }}</a>
                      <a href="#" class="post-title">{{ item.videoName }}</a>
                      <div class="post-meta">
                        <a href="#"><img :src="author" alt="" />{{ item.artistName }}</a>
                        <!-- <a href="#"><img :src="calender" alt="" /> {{ item.calender }}</a> -->
                        <a href="#"><img :src="chat" alt="" /> {{ item.id }}</a>
                        <a href="#"><img :src="like" alt="" /> {{ item.id }}</a>
                      </div>
                    </div>
                  </div>

                  <!-- Single Blog Post -->
                  <div
                    class="single-blog-post style4 d-flex mb-30 wow fadeInUp"
                    data-wow-delay="400ms"
                    v-for="(item, index) in chinaVideoList.data"
                    :key="index"
                  >
                    <div class="blog-thumb">
                      <img :src="item.videoImg" alt="" />
                      <!-- Play Button -->
                      <a href="#" @click="handleVideo(item.id)" class="video-play-btn style3"
                        ><el-icon size="40px"><VideoPlay /></el-icon
                      ></a>
                    </div>
                    <div class="blog-content">
                      <!-- <a href="#" class="post-tag">Featured</a> -->
                      <a href="#" class="post-title">{{ item.videoName }}</a>
                      <div class="post-meta">
                        <a href="#"><img :src="chat" alt="" /> {{ item.id }}</a>
                        <a href="#"><img :src="like" alt="" /> {{ item.id }}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- July Top News -->
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="section-heading wow fadeInUp" data-wow-delay="200ms">
                    <h2>July Top</h2>
                  </div>

                  <!-- Single Blog Post -->
                  <div
                    class="single-blog-post style4 d-flex mb-30 wow fadeInUp"
                    data-wow-delay="300ms"
                    v-for="(item, index) in koreaVideoList.data"
                    :key="index"
                  >
                    <div class="blog-thumb">
                      <img :src="item.videoImg" alt="" />
                      <!-- Play Button -->
                      <a
                        href="#"
                        class="video-play-btn style3"
                        @click="handleVideo(item.id)"
                        ><el-icon size="40px"><VideoPlay /></el-icon
                      ></a>
                    </div>
                    <div class="blog-content">
                      <!-- <a href="#" class="post-tag">Featured</a> -->
                      <a href="#" class="post-title">{{ item.videoName }}</a>
                      <div class="post-meta">
                        <a href="#"><img :src="chat" alt="" /> {{ item.id }}</a>
                        <a href="#"><img :src="like" alt="" /> {{ item.id }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <footerPage></footerPage>
    <el-dialog
      custom-class="subDialog"
      :title="videoName"
      v-model="dialogVideo"
      :width="width"
      :center="true"
      destroy-on-close
      v-bind="option"
    >
      <iframe
        width="100%"
        :height="playerOptions.height"
        :src="playerOptions.source"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </el-dialog>
  </div>
</template>

<script>
import { ElDialog, ElNotification, ElMessageBox } from "element-plus";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { VideoPlay } from "@element-plus/icons-vue";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import movieList from "@/components/service/api"; // 导入我们的api接口
const dialogVideo = ref(false);
const videoName = ref(null);
export default {
  name: "videoPage",
  components: { headerPage, footerPage, VideoPlay },
  data() {
    return {
      img1: require(`@/assets/images/bg-img/1.jpg`),
      img2: require(`@/assets/images/bg-img/2.jpg`),
      img3: require(`@/assets/images/bg-img/3.jpg`),
      img4: require(`@/assets/images/bg-img/4.jpg`),
      author: require(`@/assets/images/core-img/author2.png`),
      calender: require(`@/assets/images/core-img/calendar2.png`),
      chat: require(`@/assets/images/core-img/chat2.png`),
      like: require(`@/assets/images/core-img/like2.png`),
      hotMovie: [],
      dark: "movie movie-test movie-test-dark movie-test-left ",
      light: "movie movie-test movie-test-light movie-test-right",
      videoFashion: [
        {
          postTag: "Featured",
          postTitle: "Vacation Blog: Ibiza",
          postImg: require(`@/assets/images/bg-img/12.jpg`),
          author: "By James Smith",
          calender: "July 23,2018",
          chat: "5",
          like: "12k",
        },
      ],
      videoTech: [
        {
          postTag: "Featured",
          postTitle: "Vacation Blog: Ibiza",
          postImg: require(`@/assets/images/bg-img/13.jpg`),
          author: "By James Smith",
          calender: "July 23,2018",
          chat: "5",
          like: "12k",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    const toVideoList = () => {
      router.push({
        name: "videoList",
      });
    };
    const page_limit = 40,
      recentNum = 3;
    //定义chinaVideoList初始化数据
    const chinaVideoList = reactive({
      data: [],
    });
    //定义hongkongVideoList初始化数据
    const hongkongVideoList = reactive({
      data: [],
    });
    //定义koreaVideoList初始化数据
    const koreaVideoList = reactive({
      data: [],
    });
    //定义taiwanVideoList初始化数据
    const taiwanVideoList = reactive({
      data: [],
    });
    //定义makeupVideoList初始化数据
    const makeupVideoList = reactive({
      data: [],
    });
    //定义playerOptions初始化数据
    const playerOptions = reactive({
      height: "400",
      source: "",
    });

    movieList
      .videoApi({
        videoType: 1,
        pageSize: 4,
        pageNum: 1,
      })
      .then((res) => {
        chinaVideoList.data = res.data.list;
      });
    movieList
      .videoApi({
        videoType: 4,
        pageSize: 7,
        pageNum: 1,
      })
      .then((res) => {
        koreaVideoList.data = res.data.list;
      });
    movieList
      .videoApi({
        videoType: 2,
        pageSize: 1,
        pageNum: 1,
      })
      .then((res) => {
        hongkongVideoList.data = res.data.list;
      });
    movieList
      .videoApi({
        videoType: 5,
        pageSize: 4,
        pageNum: 1,
      })
      .then((res) => {
        makeupVideoList.data = res.data.list;
      });
    movieList
      .videoApi({
        videoType: 3,
        pageSize: 12,
        pageNum: 1,
      })
      .then((res) => {
        var index = 0,
          coverList = [];
        var movieListData = res.data.list;
        for (var i = 0; i <= movieListData.length / recentNum - 1; i++) {
          if (typeof movieListData[i] !== "undefined") {
            coverList.push(movieListData.slice(index, (index += 3)));
          }
        }
        console.log("taiwanVideoList", coverList);
        taiwanVideoList.data = coverList;
      });
    const handleVideo = (id) => {
      movieList
        .videoPlayApi({
          id: id,
        })
        .then((res) => {
          dialogVideo.value = true;
          videoName.value = res.data.videoName;
          playerOptions.source = res.data.videoUrl;
          
          // playerOptions.options.poster = res.videoImg;
        });
    };
    return {
      chinaVideoList,
      taiwanVideoList,
      hongkongVideoList,
      koreaVideoList,
      toVideoList,
      makeupVideoList,
      playerOptions,
      handleVideo,
      dialogVideo,
      videoName
    };
  },
};
</script>
