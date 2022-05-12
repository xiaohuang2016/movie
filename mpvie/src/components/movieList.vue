<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <div class="content">
          <h2 class="m_3">Now in the Movie</h2>
          <div class="movie_top">
            <div class="col-md-9 movie_box">
              <!-- Movie variant with time -->

              <!-- Movie variant with time -->

              <!-- Movie variant with time -->
              <div
                v-for="(list, index) in movieList"
                :key="index"
                 :class="[index % 2 == 0?dark:light]" >
              <div :class= "setClass" data-num="21" ref="dataNum"></div>
              
            <div v-for="(item,index) in list"  :key="index">
                  <div class="movie__images">
                    <a href="single.html" class="movie-beta__link">
                      <img :src="item.img" class="img-responsive" />
                    </a>
                  </div>

                  <div class="movie__info">
                    <a href="single.html" class="movie__title">{{
                      item.nm || 0
                    }}</a>

                    <p class="movie__time">80 min</p>

                    <p class="movie__option">
                      <a href="single.html">{{ item.star || 0 }}</a> |
                    </p>

                    <ul class="list_6">
                      <li>
                        <i class="icon1"> </i>

                        <p>{{ item.version || 0 }}</p>
                      </li>

                      <li>
                        <i class="icon3"> </i>

                        <!-- <p>{{item.wish}}</p> -->
                      </li>

                      <li>
                        Rating : &nbsp;&nbsp;

                        <!-- <p>{{item.sc}}</p> -->
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

            <div class="col-md-3">
              <div class="movie_img">
                <div class="grid_2">
                  <!-- <img src="images/pic6.jpg" class="img-responsive" alt="" /> -->

                  <div class="caption1">
                    <ul class="list_5 list_7">
                      <li>
                        <i class="icon5"> </i>

                        <p>3,548</p>
                      </li>
                    </ul>

                    <i class="icon4 icon6 icon7"> </i>

                    <p class="m_3">Guardians of the Galaxy</p>
                  </div>
                </div>
              </div>

              <div class="grid_2 col_1">
                <!-- <img src="images/pic2.jpg" class="img-responsive" alt="" /> -->

                <div class="caption1">
                  <ul class="list_3 list_7">
                    <li>
                      <i class="icon5"> </i>

                      <p>3,548</p>
                    </li>
                  </ul>

                  <i class="icon4 icon7"> </i>

                  <p class="m_3">Guardians of the Galaxy</p>
                </div>
              </div>

              <div class="grid_2 col_1">
                <!-- <img src="images/pic9.jpg" class="img-responsive" alt="" /> -->

                <div class="caption1">
                  <ul class="list_3 list_7">
                    <li>
                      <i class="icon5"> </i>

                      <p>3,548</p>
                    </li>
                  </ul>

                  <i class="icon4 icon7"> </i>

                  <p class="m_3">Guardians of the Galaxy</p>
                </div>
              </div>
            </div>

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
import { hotMovieListApi } from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "movieList",
  components: { headerPage, footerPage },
  data() {
    return {
      movieList: [],
      dark:"movie movie-test movie-test-dark movie-test-left ",
      light:"movie movie-test movie-test-light movie-test-right",
      isDark:false,
      isLighe:false,
    };
  },
  created() {
      console.log("dark",this.dark)
       console.log("dark",this.dark)
    hotMovieListApi().then((res) => {
      var movieList = [],
        maxlen = 2;
      var movieListData = res.movieList;
      for (var i = 0; i <= movieListData.length; i += maxlen) {
        if (typeof movieListData[i] !== "undefined") {
          movieList.push(movieListData.slice(i, i + maxlen));
        }
      }
      console.log("terrMovieList", movieList);
      this.movieList = movieList;
    });
  },
    computed:{
        setClass(e){
            // var index =this.$refs.dataNum.dataset.num;
            // var mu = $(e.currentTarget).attr('data-num')
            
            return 'p1';
        }
    },
  method:{
     
  }
};
</script>
