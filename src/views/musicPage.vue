<template>
  <div>
    <div class="container">
      <div class="container_wrap bg-white">
        <headerPage></headerPage>

        <!-- ##### Hero Area Start ##### -->
        <section class="hero-area">
          <div class="hero-slides owl-carousel">
            <el-carousel
              trigger="click"
              :auto-paly="false"
              indicator-position="none"
              height="600px"
            >
              <el-carousel-item v-for="item in banner" :key="item">
                <!-- Single Hero Slide -->
                <div
                  class="single-hero-slide d-flex align-items-center justify-content-center"
                >
                  <!-- Slide Img -->
                  <div
                    class="slide-img bg-img"
                    :style="{ backgroundImage: 'url(' + item.bg + ')' }"
                  ></div>
                  <!-- Slide Content -->
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="hero-slides-content text-center">
                          <h6 data-animation="fadeInUp" data-delay="100ms">
                            {{ item.title }}
                          </h6>
                          <h2 data-animation="fadeInUp" data-delay="300ms">
                            {{ item.title02 }} <span>{{ item.title02 }}</span>
                          </h2>
                          <a
                            data-animation="fadeInUp"
                            data-delay="500ms"
                            href="#"
                            class="btn oneMusic-btn mt-50"
                            >{{ item.btnText }} <i class="fa fa-angle-double-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </section>
        <!-- ##### Hero Area End ##### -->

        <!-- ##### Latest Albums Area Start ##### -->
        <section class="latest-albums-area section-padding-40">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-heading style-2">
                  <p>See what’s new</p>
                  <h2>Latest Albums</h2>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-12 col-lg-9">
                <div class="ablums-text text-center mb-70">
                  <p>
                    Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus
                    eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam
                    fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus
                    odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.
                    Donec in velit non elit pulvinar pellentesque et non eros.
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="gallery">
                  <el-carousel
                    trigger="click"
                    :auto-paly="true"
                    indicator-position="none"
                    height="350px">
                    <el-carousel-item v-for="albumsItem in albums" :key="albumsItem">
                      <el-row>
                        <el-col :span="6" v-for="item in albumsItem" :key="item">
                          <li>
                            <a href="single.html">
                              <img :src="item.img" alt="" width="190" />
                              <h3>Album Name</h3>
                              <p>$-49.00</p>
                              <button>Add to cart</button>
                            </a>
                          </li>
                        </el-col>
                      </el-row>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- ##### Latest Albums Area End ##### -->

        <!-- ##### Buy Now Area Start ##### -->
        <section class="oneMusic-buy-now-area has-fluid bg-gray section-padding-100">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="section-heading style-2">
                  <p>See what’s new</p>
                  <h2>Buy What’s New</h2>
                </div>
              </div>
            </div>

            <div class="row">
              <!-- Single Album Area -->
              <div
                class="col-12 col-sm-6 col-md-5 col-lg-3"
                v-for="item in musicHK.data"
                :key="item"
              >
                <div class="single-album-area wow fadeInUp" data-wow-delay="100ms">
                  <div class="album-thumb">
                    <img :src="item.videoImg" alt="" />
                    <!-- Album Price -->
                    <div class="album-price">
                      <p>$0.90</p>
                    </div>
                    <!-- Play Icon -->
                    <div class="play-icon">
                      <a href="#" class="video--play--btn"
                        ><span class="icon-play-button"></span
                      ></a>
                    </div>
                  </div>
                  <div class="album-info">
                    <a href="#">
                      <h5>{{ item.artistName }}</h5>
                    </a>
                    <p class="ellipsis">{{ item.videoName }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div
                  class="load-more-btn text-center wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <a href="#" class="btn oneMusic-btn"
                    >Load More <i class="fa fa-angle-double-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- ##### Buy Now Area End ##### -->

        <!-- ##### Featured Artist Area Start ##### -->
        <section
          class="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed"
          :style="{ backgroundImage: 'url(' + img4 + ')' }"
        >
          <div class="container">
            <div class="row align-items-end">
              <div class="col-12 col-md-5 col-lg-4">
                <div class="featured-artist-thumb">
                  <img src="img/bg-img/fa.jpg" alt="" />
                </div>
              </div>
              <div class="col-12 col-md-7 col-lg-8">
                <div class="featured-artist-content">
                  <!-- Section Heading -->
                  <div class="section-heading white text-left mb-30">
                    <p>See what’s new</p>
                    <h2>Buy What’s New</h2>
                  </div>
                  <p>
                    Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus
                    eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam
                    fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus
                    odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.
                    Donec in velit non elit pulvinar pellentesque et non eros.
                  </p>
                  <div class="song-play-area">
                    <div class="song-name">
                      <p>01. Main Hit Song</p>
                    </div>
                    <iframe
                      frameborder="no"
                      border="0"
                      marginwidth="0"
                      marginheight="0"
                      width="330"
                      height="86"
                      src="//music.163.com/outchain/player?type=2&id=28875230&auto=1&height=66"
                    ></iframe>
                    <!-- <audio preload="auto" controls>
                      <source src="https://other-web-nf01-sycdn.kuwo.cn/69bc799201a6c03f354f6c8c81569b29/62d03687/resource/n3/35/5/1615658295.mp3" />
                    </audio> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- ##### Featured Artist Area End ##### -->

        <div class="site-section bg-dark block-13">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div
                class="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
              >
                <h2 class="mt-15 mb-15">Love By Our Listeners</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit
                  nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?
                </p>
              </div>
            </div>
            <div class="nonloop-block-13 owl-carousel">
              <el-carousel trigger="click" :autoplay="true">
                <el-carousel-item v-for="vedioItem in chinaVideoList.data" :key="vedioItem">
                  <el-row :gutter="20">
                    <el-col :span="8" v-for="item in vedioItem" :key="item">
                      <div class="text-center p-3 p-md-5 bg-white">
                        <div class="mb-4">
                          <img
                            :src="item.videoImg"
                            alt="Image"
                            class="w-h-80 img-fluid rounded-circle"
                          />
                        </div>
                        <div class="text-black">
                          <h3 class="font-weight-light h5">{{ item.artistName }}</h3>
                          <p class="font-italic ellipsis text-c">{{ item.videoName }}</p>
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
    <footerPage></footerPage>
  </div>
</template>

<script>
import "@/assets/css/music.css";
import { reactive, ref } from "vue";
import { useRouter, useStore } from "vue-router";
// import { VideoPlay } from "@element-plus/icons-vue";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import movieList from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "videoPage",
  components: { headerPage, footerPage },
  data() {
    return {
      img1: require(`@/assets/images/music/bg-1.jpg`),
      img2: require(`@/assets/images/music/bg-2.jpg`),
      img4: require(`@/assets/images/music/bg-4.jpg`),
      img10: require(`@/assets/images/music/b1.jpg`),
      img11: require(`@/assets/images/music/b2.jpg`),
      img12: require(`@/assets/images/music/b3.jpg`),
      img13: require(`@/assets/images/music/b4.jpg`),
      author: require(`@/assets/images/core-img/author2.png`),
      calender: require(`@/assets/images/core-img/calendar2.png`),
      chat: require(`@/assets/images/core-img/chat2.png`),
      like: require(`@/assets/images/core-img/like2.png`),
      hotMovie: [],
      dark: "movie movie-test movie-test-dark movie-test-left ",
      light: "movie movie-test movie-test-light movie-test-right",
      banner: [
        {
          bg: require(`@/assets/images/music/bg-1.jpg`),
          title: "Latest album",
          title02: "Beyond Time",
          btnText: "Discover",
        },
        {
          bg: require(`@/assets/images/music/bg-2.jpg`),
          title: "Latest album",
          title02: "Colorlib Music",
          btnText: "Discover",
        },
      ],
      albums: [
        [
          {
            tag: "Second Song",
            title: "The Cure",
            img: require(`@/assets/images/music/a1.jpg`),
          },
          {
            tag: "Second Song",
            title: "The Cure",
            img: require(`@/assets/images/music/a2.jpg`),
          },
          {
            tag: "Second Song",
            title: "The Cure",
            img: require(`@/assets/images/music/a3.jpg`),
          },
          {
            tag: "Second Song",
            title: "The Cure",
            img: require(`@/assets/images/music/a4.jpg`),
          },
        ],
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
    // const store = useStore();
    const toVideoList = () => {
      router.push({
        name: "videoList",
      });
    };
    //定义travelVideos初始化数据
    const musicHK = reactive({
      data: [],
    });
    //定义videoList初始化数据
    const videoList = reactive({
      data: [],
    });
    //定义chinaVideoList初始化数据
    const chinaVideoList = reactive({
      data: [],
    });
    const mp3 = ref(null);

    movieList
      .musicApi({
        videoType: 1,
        pageSize: 8,
        pageNum: 1,
      })
      .then((res) => {
        var musicListData = res.data.list;
        for (var i = 0; i <= musicListData.length; i++) {
          if (typeof musicListData[i] !== "undefined") {
            musicHK.data.push(musicListData[i]);
          }
        }
      });
    movieList
      .videoApi({
        videoType: 1,
        pageSize: 12,
        pageNum: 1,
      })
      .then((res) => {
         var index = 0,
         recentNum = 3,
          coverList = [];
        var musicListData = res.data.list;
        for (var i = 0; i <= musicListData.length / recentNum - 1; i++) {
          if (typeof musicListData[i] !== "undefined") {
            chinaVideoList.data.push(musicListData.slice(index, (index += 3)));
          }
        }
        console.log("chinaVideoList", chinaVideoList.data);
      });
    return {
      musicHK,
      mp3,
      chinaVideoList,
    };
  },
};
</script>
<style scope>
.single-blog-post.style4 .blog-thumb {
  height: 100px;
}
.popular-artists-area {
  padding: 45px 30px 15px;
}
</style>
