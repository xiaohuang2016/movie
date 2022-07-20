<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <div class="content">
          <h2 class="m_3">黔朝酒庄产品列表</h2>
          <div class="movie_top">
            <el-row :gutter="40">
              <el-col :span="24">
                <div class="movie_box">
                  <div v-for="(list, index) in hotMovie" :key="index">
                    <div
                      v-for="(item, i) in hotMovie"
                      :key="i"
                      :class="[index % 2 == 0 ? dark : light]"
                    >
                      <div class="movie__images">
                        <a href="single.html" class="movie-beta__link">
                          <img :src="item.img" class="img-responsive" />
                        </a>
                      </div>

                      <div class="movie__info">
                        <a href="single.html" class="movie__title ellipsis">{{
                          item.nm
                        }}</a>

                        <!-- <p class="movie__option">
                          <a href="single.html" class="ellipsis">{{ item.star }}</a>
                        </p> -->

                        <ul class="list_6">
                          <li>
                            规格 : &nbsp;&nbsp;

                            <p>{{ item.size }}</p>
                          </li>
                          <li>
                            销售价：
                            <p>
                              {{ item.market }} &nbsp;&nbsp; &nbsp;&nbsp;{{ item.dj }}
                            </p>
                          </li>
                          <li>
                            VIP价 : &nbsp;&nbsp;

                            <p>{{ item.vip }}&nbsp;&nbsp; &nbsp;&nbsp;{{ item.djVip }}</p>
                          </li>
                          <div class="clearfix"></div>
                        </ul>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </div>

                  <div class="clearfix"></div>

                  <!-- Movie variant with time -->
                </div>
              </el-col>
              <!-- <el-col :span="5">
                <div v-for="(item, index) in popMovie" :key="index" class="pop_movie">
                  <img :src="item.cover" class="img-responsive pop_movie_img" />
                  <div class="caption1 pop_movie_caption">
                    <el-row class="pop_movie_bg">
                      <el-col :span="19"
                        ><li><i class="icon5"> </i>{{ item.cover_x }}</li></el-col
                      >
                      <el-col :span="5"
                        ><li><i class="icon4"> </i></li
                      ></el-col>
                    </el-row>
                    <p class="m_3">{{ item.title }}</p>
                  </div>
                </div>
              </el-col> -->
            </el-row>

            <div class="clearfix"></div>
          </div>
          <h1 class="recent">Recently Viewed</h1>
          <el-carousel
            trigger="click"
            :autoplay="true"
            height="200px"
            indicator-position="none"
          >
            <el-carousel-item v-for="item in recentlyMovie" :key="item">
              <el-row :gutter="20">
                <el-col :span="6" v-for="movieItem in item" :key="movieItem"
                  ><img :src="movieItem.cover" class="img-responsive"
                /></el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import movieList from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "alcoholList",
  components: { headerPage, footerPage },
  data() {
    return {
      // hotMovie: [],
      dark: "movie movie-test movie-test-dark movie-test-left ",
      light: "movie movie-test movie-test-light movie-test-right",
      popMovie: [],
      recentlyMovie: [],
       hotMovie: [
        
          {
            img: require(`@/assets/images/jiu/10.jpg`),
            nm: "黔朝10年",
            size: "整箱6瓶*500ML",
            market: "1194元/箱",
            dj: "199元/瓶",
            vip: "597元/箱",
            djVip: "99元/瓶",
          },
          {
            img: require(`@/assets/images/jiu/20.jpg`),
            nm: "黔朝20年",
            size: "整箱6瓶*500ML",
            market: "2394元/箱",
            dj: "399元/瓶",
            vip: "1197元/箱",
            djVip: "199元/瓶",
          },
        
        
          {
            img: require(`@/assets/images/jiu/30.jpg`),
            nm: "黔朝30年",
            size: "整箱6瓶*500ML",
            market: "3594元/箱",
            dj: "599元/瓶",
            vip: "1797元/箱",
            djVip: "299元/瓶",
          },
          {
            img: require(`@/assets/images/jiu/song.jpg`),
            nm: "黔朝宋",
            size: "整箱6瓶*500ML",
            market: "5880元/箱",
            dj: "980元/瓶",
            vip: "2940元/箱",
            djVip: "490元/瓶",
          },
        
      
          {
            img: require(`@/assets/images/jiu/qin.jpg`),
            nm: "黔朝秦",
            size: "整箱6瓶*500ML",
            market: "1587元/箱",
            dj: "263元/瓶",
            vip: "789元/箱",
            djVip: "131元/瓶",
          },
          {
            img: require(`@/assets/images/jiu/sheng.jpg`),
            nm: "黔朝宋",
            size: "整箱6瓶*500ML",
            market: "350元/箱",
            dj: "168元/瓶",
            vip: "175元/箱",
            djVip: "84元/瓶",
          },

          {
            img: require(`@/assets/images/jiu/qin.jpg`),
            nm: "黔朝品鉴酒A1",
            size: "500ML",
            market: "80元/斤",
            vip: "40元/斤",
          },
          {
            img: require(`@/assets/images/jiu/qin.jpg`),
            nm: "黔朝品鉴酒B1",
            size: "500ML",
            market: "80元/斤",
            vip: "40元/斤",
          },

          {
            img: require(`@/assets/images/jiu/qin.jpg`),
            nm: "黔朝品鉴酒B2",
            size: "500ML",
            market: "80元/斤",
            vip: "40元/斤",
          },
          {
            img: require(`@/assets/images/jiu/qin.jpg`),
            nm: "黔朝品鉴酒C1",
            size: "500ML",
            market: "80元/斤",
            vip: "40元/斤",
          },

          {
            img: require(`@/assets/images/jiu/qin.jpg`),
            nm: "黔朝品鉴酒C2",
            size: "500ML",
            market: "80元/斤",
            vip: "40元/斤",
          },
          {
            img: require(`@/assets/images/jiu/qin.jpg`),
            nm: "黔朝品鉴酒C3",
            size: "500ML",
            market: "80元/斤",
            vip: "40元/斤",
          },
      ],
      // hotMovie: [
      //   [
      //     {
      //       img: require(`@/assets/images/jiu/10.jpg`),
      //       nm: "黔朝10年",
      //       size: "整箱6瓶*500ML",
      //       market: "1194元/箱",
      //       dj: "199元/瓶",
      //       vip: "597元/箱",
      //       djVip: "99元/瓶",
      //     },
      //     {
      //       img: require(`@/assets/images/jiu/20.jpg`),
      //       nm: "黔朝20年",
      //       size: "整箱6瓶*500ML",
      //       market: "2394元/箱",
      //       dj: "399元/瓶",
      //       vip: "1197元/箱",
      //       djVip: "199元/瓶",
      //     },
      //   ],
      //   [
      //     {
      //       img: require(`@/assets/images/jiu/30.jpg`),
      //       nm: "黔朝30年",
      //       size: "整箱6瓶*500ML",
      //       market: "3594元/箱",
      //       dj: "599元/瓶",
      //       vip: "1797元/箱",
      //       djVip: "299元/瓶",
      //     },
      //     {
      //       img: require(`@/assets/images/jiu/song.jpg`),
      //       nm: "黔朝宋",
      //       size: "整箱6瓶*500ML",
      //       market: "5880元/箱",
      //       dj: "980元/瓶",
      //       vip: "2940元/箱",
      //       djVip: "490元/瓶",
      //     },
      //   ],
      //   [
      //     {
      //       img: require(`@/assets/images/jiu/qin.jpg`),
      //       nm: "黔朝秦",
      //       size: "整箱6瓶*500ML",
      //       market: "1587元/箱",
      //       dj: "263元/瓶",
      //       vip: "789元/箱",
      //       djVip: "131元/瓶",
      //     },
      //     {
      //       img: require(`@/assets/images/jiu/sheng.jpg`),
      //       nm: "黔朝宋",
      //       size: "整箱6瓶*500ML",
      //       market: "350元/箱",
      //       dj: "168元/瓶",
      //       vip: "175元/箱",
      //       djVip: "84元/瓶",
      //     },
      //   ],
      //   [
      //     {
      //       img: require(`@/assets/images/jiu/qin.jpg`),
      //       nm: "黔朝品鉴酒A1",
      //       size: "500ML",
      //       market: "80元/斤",
      //       vip: "40元/斤",
      //     },
      //     {
      //       img: require(`@/assets/images/jiu/qin.jpg`),
      //       nm: "黔朝品鉴酒B1",
      //       size: "500ML",
      //       market: "80元/斤",
      //       vip: "40元/斤",
      //     },
      //   ],
      //    [
      //     {
      //       img: require(`@/assets/images/jiu/qin.jpg`),
      //       nm: "黔朝品鉴酒B2",
      //       size: "500ML",
      //       market: "80元/斤",
      //       vip: "40元/斤",
      //     },
      //     {
      //       img: require(`@/assets/images/jiu/qin.jpg`),
      //       nm: "黔朝品鉴酒C1",
      //       size: "500ML",
      //       market: "80元/斤",
      //       vip: "40元/斤",
      //     },
      //   ],
      //    [
      //     {
      //       img: require(`@/assets/images/jiu/qin.jpg`),
      //       nm: "黔朝品鉴酒C2",
      //       size: "500ML",
      //       market: "80元/斤",
      //       vip: "40元/斤",
      //     },
      //     {
      //       img: require(`@/assets/images/jiu/qin.jpg`),
      //       nm: "黔朝品鉴酒C3",
      //       size: "500ML",
      //       market: "80元/斤",
      //       vip: "40元/斤",
      //     },
      //   ],
      // ],
    };
  },
  created() {
    const page_limit = 40,
      recentNum = 4;

    // movieList.hotMovieListApi().then((res) => {
    //   var movie = [],
    //     maxlen = 2;
    //   var movieListData = res.data.movieList;
    //   for (var i = 0; i <= movieListData.length - 6; i += maxlen) {
    //     if (typeof movieListData[i] !== "undefined") {
    //       movie.push(movieListData.slice(i, i + maxlen));
    //     }
    //   }
    //   console.log("movie", movie);
    //   this.hotMovie = movie;
    // });
    // movieList
    //   .popMovieListApi({
    //     type: "movie",
    //     tag: "热门",
    //     page_limit: 4,
    //     page_start: 0,
    //   })
    //   .then((res) => {
    //     var movie = [];
    //     var movieListData = res.data.subjects;
    //     for (var i = 0; i <= movieListData.length; i++) {
    //       if (typeof movieListData[i] !== "undefined") {
    //         movie.push(movieListData[i]);
    //       }
    //     }
    //     this.popMovie = movie;
    //   });
    // movieList
    //   .recentlyMovieListApi({
    //     type: "movie",
    //     tag: "最新",
    //     page_limit: page_limit,
    //     page_start: 0,
    //   })
    //   .then((res) => {
    //     var index = 0,
    //       coverList = [];
    //     var movieListData = res.data.subjects;
    //     for (var i = 0; i <= movieListData.length / recentNum - 1; i++) {
    //       if (typeof movieListData[i] !== "undefined") {
    //         coverList.push(movieListData.slice(index, (index += 4)));
    //       }
    //     }
    //     console.log("coverList", coverList);
    //     this.recentlyMovie = coverList;
    //   });
  },
  computed: {},
  method: {},
};
</script>
<style scope>
a.movie__title {
  font-size: 1.6em;
}
ul.list_6 li {
  font-size: 1.2em;
}
ul.list_6 li p {
  font-size: 18px;
  line-height: 38px;
}
</style>
