<template>
  <div>
    <div class="container">
      <div class="container_wrap bg-white">
        <headerPage></headerPage>
        <section class="hero-wrap" id="home">
          <div class="overlay"></div>
          <div class="container-fluid">
            <div class="row no-gutters slider-text">
              <div class="col-lg-12 d-flex align-items-end">
                <div class="w-100 text">
                  <div class="text-center mt-4">
                    <h2 class="mb-4">Read This If You Want To Take Great Photographs.</h2>
                    <h1>Mellisa Berlusconi</h1>
                  </div>
                  <a
                    href="#"
                    class="img"
                    :style="{ backgroundImage: 'url(' + img1 + ')' }"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="ftco-section intro" id="about">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10 d-flex">
                <a href="#" class="icon-video mt-lg-3">
                  <span class="fa fa-play"></span>
                </a>
                <div class="text">
                  <h2>
                    "I'm Mellisa Berlusconi A Writer Based in England Far far away, behind
                    the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts."
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ftco-section ftco-about ftco-no-pt ftco-no-pb">
          <div class="container-xl">
            <div class="row g-xl-5">
              <div
                class="col-md-6 d-flex align-items-center align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div
                  class="img img-about"
                  :style="{ backgroundImage: 'url(' + img2 + ')' }"
                ></div>
              </div>
              <div
                class="col-md-6 ps-lg-5 d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div class="text">
                  <h2 class="mb-4">
                    Mellisa Berlusconi A Writer &amp; Author of the Book
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in which
                    roasted parts of sentences fly into your mouth.
                  </p>
                  <p class="mt-4">
                    <a href="#" class="btn btn-primary px-4 py-3">See More Works</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ftco-section ftco-project ftco-no-pb" id="books">
          <div class="container-fluid">
            <div class="row justify-content-center mb-5">
              <div
                class="col-md-7 heading-section text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span class="subheading">Our Books</span>
                <h2>Books that I've Written</h2>
                <p>
                  A small river named Duden flows by their place and supplies it with the
                  necessary regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-6 col-lg-3"
                data-aos="flip-left"
                data-aos-delay="100"
                data-aos-duration="1000"
                v-for="item in bookList.data"
                :key="item"
              >
                <div
                  class="project img ftco-animate d-flex justify-content-center align-items-start"
                  :style="{ backgroundImage: 'url(' + item.img + ')' }"
                >
                  <div class="overlay"></div>
                  <div class="text p-4">
                    <h3>
                      <a href="#"
                        >由{{ item.star }}主演的{{ item.nm }}于{{
                          item.comingTitle
                        }}上映</a
                      >
                    </h3>
                    <span>{{ item.showInfo }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ftco-section testimony-section bg-light ftco-no-pb">
          <div class="container-xl">
            <div class="row justify-content-center pb-4">
              <div
                class="col-md-7 text-center heading-section"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span class="subheading">Testimonial</span>
                <h2 class="mb-2">Our Happy Readers</h2>
              </div>
            </div>

            <el-carousel trigger="click" indicator-position="outside" height="300px">
              <el-carousel-item v-for="list in chinaVideoList.data" :key="list">
                <el-row :gutter="20">
                  <el-col :span="8" v-for="(item, index) in list" :key="index">
                    <div
                      :class="[
                        index % 2 == 0
                          ? 'testimony-wrap'
                          : 'testimony-wrap testimony-yellow',
                      ]"
                    >
                      <div class="text">
                        <div class="d-flex align-items-center mb-4">
                          <div
                            class="user-img"
                            :style="{ backgroundImage: 'url(' + item.videoImg + ')' }"
                          >
                            <div
                              class="icon d-flex align-items-center justify-content-center"
                            >
                              <span class="fa fa-quote-left"></span>
                            </div>
                          </div>
                          <div class="ps-3 tx">
                            <p class="name">{{ item.artistName }}</p>
                            <span class="position ellipsis">{{ item.videoName }}</span>
                          </div>
                        </div>
                        <p class="mb-4 msg">
                          Far far away, behind the word mountains, far from the countries
                          Vokalia and Consonantia, there live the blind texts.
                        </p>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-carousel-item>
            </el-carousel>
          </div>
        </section>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import "@/assets/css/book.css";
import { reactive } from "vue";
import { useRouter } from "vue-router";
// import { VideoPlay } from "@element-plus/icons-vue";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import movieList from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "bookPage",
  components: { headerPage, footerPage },
  data() {
    return {
      img1: require(`@/assets/images/bg_1.jpg`),
      img2: require(`@/assets/images/about.jpg`),
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
    //定义technology初始化数据
    const bookList = reactive({
      data: [],
    });
    movieList.hotMovieListApi().then((res) => {
      bookList.data = res.data.movieList.slice(0, 8);
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
      chinaVideoList,
      bookList,
      toVideoList,
    };
  },
};
</script>
