<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <div class="content">
          <h2 class="m_3">Now in the Movie</h2>
          <div class="movie_top">
            <el-row :gutter="40">
              <el-col :span="19">
                <div class="movie_box">
                  <div v-for="(list, index) in movieData.hotMovie" :key="index">
                    <div
                      v-for="(item, i) in list"
                      :key="i"
                      :class="[index % 2 == 0 ? dark : light]"
                    >
                      <div class="movie__images">
                        <a  @click="toSingle" class="movie-beta__link">
                          <img :src="item.img" class="img-responsive" />
                        </a>
                      </div>

                      <div class="movie__info">
                        <a  @click="toSingle" class="movie__title ellipsis">{{
                          item.nm
                        }}</a>

                        <p class="movie__option">
                          <a  @click="toSingle" class="ellipsis">{{ item.star }}</a>
                        </p>

                        <ul class="list_6">
                          <li>
                            <i class="icon3"> </i>

                            <p>{{ item.wish }}</p>
                          </li>

                          <li>
                            Rating : &nbsp;&nbsp;

                            <p>{{ item.sc }}</p>
                          </li>
                          <li>
                            上映：
                            <p>{{ item.rt }}</p>
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
              <el-col :span="5">
                <div v-for="(item, index) in movieData.popMovie" :key="index" class="pop_movie">
                  <img :src="item.cover" class="img-responsive pop_movie_img" />
                  <a class="caption1 pop_movie_caption"  @click="toSingle">
                    <el-row class="pop_movie_bg">
                      <el-col :span="19"
                        ><li><i class="icon5"> </i>{{ item.cover_x }}</li></el-col
                      >
                      <el-col :span="5"
                        ><li><i class="icon4"> </i></li
                      ></el-col>
                    </el-row>
                    <p class="m_3">{{ item.title }}</p>
                  </a>
                </div>
              </el-col>
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
            <el-carousel-item v-for="item in movieData.recentlyMovie" :key="item">
              <el-row :gutter="20">
                <el-col :span="6" v-for="movieItem in item" :key="movieItem"><img :src="movieItem.cover" class="img-responsive" /></el-col>
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
import {reactive} from 'vue';
import {useRouter } from "vue-router";
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import movieList from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "movieList",
  components: { headerPage, footerPage },
  data() {
    return {
      dark: "movie movie-test movie-test-dark movie-test-left ",
      light: "movie movie-test movie-test-light movie-test-right",
      slides: [
        {
          title: "parent",
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          title: "parent",
          slide: 23424234234234,
          src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          title: "parent",
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        },
      ],
    };
  },
  setup() {
     const router = useRouter();
      const toSingle = () => {
      router.push({
        name: "single",
      });
    };
    //定义电影数据初始化-movieData
    const movieData = reactive({
      hotMovie:[],
      popMovie:[],
      recentlyMovie:[]
    })
    const page_limit = 40,recentNum = 4
    movieList.hotMovieListApi().then((res) => {
      var movie = [],
        maxlen = 2;
      var movieListData = res.data.movieList;
      for (var i = 0; i <= movieListData.length - 6; i += maxlen) {
        if (typeof movieListData[i] !== "undefined") {
          movie.push(movieListData.slice(i, i + maxlen));
        }
      }
      movieData.hotMovie = movie;
    });
    movieList.popMovieListApi({
        type: "movie",
        tag: "热门",
        page_limit: 4,
        page_start: 0,
      })
      .then((res) => {
        var movie = [];
        var movieListData = res.data.subjects;
        for (var i = 0; i <= movieListData.length; i++) {
          if (typeof movieListData[i] !== "undefined") {
            movie.push(movieListData[i]);
          }
        }
        movieData.popMovie = movie;
      });
    movieList
      .recentlyMovieListApi({
        type: "movie",
        tag: "最新",
        page_limit: page_limit,
        page_start: 0,
      })
      .then((res) => {
        var index = 0,
          coverList = [];
        var movieListData = res.data.subjects;
        for (var i = 0; i <= movieListData.length/recentNum-1; i++) {
          if (typeof movieListData[i] !== "undefined") {
           coverList.push(movieListData.slice(index, (index += 4)));
          }
        }
        console.log("coverList", coverList);
        movieData.recentlyMovie = coverList;
      });
      return{
        movieData,toSingle
      }
  }
};
</script>
