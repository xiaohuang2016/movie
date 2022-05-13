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
                  <div v-for="(list, index) in movieList" :key="index">
                    <div
                      v-for="(item, i) in list"
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

                        <p class="movie__option">
                          <a href="single.html" class="ellipsis">{{ item.star }}</a>
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
                <div v-for="(item, index) in popMovieList" :key="index" class="pop_movie">
                    <img :src="item.cover" class="img-responsive pop_movie_img" />
                    <div class="caption1 pop_movie_caption">
                        <el-row class="pop_movie_bg">
                          <el-col :span="19"
                            ><li><i class="icon5"> </i>{{item.cover_x}}</li></el-col>
                          <el-col :span="5"
                            ><li><i class="icon4"> </i></li
                          ></el-col>
                        </el-row>
                      <p class="m_3">{{ item.title }}</p>
                    </div>
                  </div>
              </el-col>
            </el-row>

            <div class="clearfix"></div>
          </div>
          <h1 class="recent">Recently Viewed</h1>
        </div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import headerPage from "@/components/base/header.vue";
import footerPage from "@/components/base/footer.vue";
import { hotMovieListApi, popMovieListApi } from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "movieList",
  components: { headerPage, footerPage },
  data() {
    return {
      movieList: [],
      dark: "movie movie-test movie-test-dark movie-test-left ",
      light: "movie movie-test movie-test-light movie-test-right",
      popMovieList: [],
    };
  },
  created() {
    hotMovieListApi().then((res) => {
      var movieList = [],
        maxlen = 2;
      var movieListData = res.movieList;
      for (var i = 0; i <= movieListData.length-6; i += maxlen) {
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
  method: {},
};
</script>
