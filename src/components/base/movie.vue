<template>
  <div class="box_2 featurd_movie">
    <el-row :gutter="21">
      <el-col :span="10">
        <div class="grid_3">
          <div class="row_1">
            <el-col :span="12">
              <div class="grid_4">
                <a @click="toSingle">
                  <div
                    :class="[index == 1 ? 'grid_2 col_1' : 'grid_2']"
                    v-for="(item, index) in movieDataList.terrMovieList"
                    :key="index"
                  >
                    <img :src="item.img" class="img-responsive" />
                    <div class="caption1">
                      <div class="action_part">
                        <el-row :gutter="10">
                          <el-col :span="14"
                            ><li><i class="icon5"> </i>{{ item.wish }}</li></el-col
                          >
                          <el-col :span="10"
                            ><li><i class="icon4"> </i>{{ item.showst }}</li></el-col
                          >
                        </el-row>
                      </div>

                      <p class="m_3">{{ item.nm }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </el-col>
            <el-col :span="12" style="width: 50%">
              <div class="col_2" v-for="(item, index) in movieDataList.popMovieList" :key="index">
                <ul class="list_4 pad_tb_2em">
                  <li>
                    <i class="icon1"> </i>
                    <p>{{ item.wish }}</p>
                  </li>
                  <li>
                    <i class="icon2"> </i>
                    <p>{{ item.showst }}</p>
                  </li>
                  <li>
                    <i class="icon3"> </i>
                    <p>{{ item.sc }}</p>
                  </li>
                  <li>
                    评分:
                    <p>{{ item.sc }}</p>
                  </li>
                  <li>上映:{{ item.comingTitle }}</li>
                  <div class="clearfix"></div>
                </ul>
                <div class="m_5">
                  <a @click="toSingle"><img :src="item.img" class="img-responsive" /></a>
                </div>
              </div>
            </el-col>
            <div class="clearfix"></div>
          </div>
          <div class="row_2">
            <a @click="toSingle"
              ><img src="@/assets/images/pic4.jpg" class="img-responsive" alt=""
            /></a>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="content_right">
          <el-row :gutter="30">
            <el-col :span="12" v-for="(item, index) in movieDataList.chineseMovieList" :key="index">
              <div :class="[index == 0 ? 'grid_5' : 'content_right-box']">
                <a @click="toSingle">
                  <div class="grid_2">
                    <img :src="item.img" class="img-responsive" />
                    <div class="caption1">
                      <div class="action_part">
                        <el-row :gutter="10">
                          <el-col :span="14"
                            ><li><i class="icon5"> </i>{{ item.wish }}</li></el-col
                          >
                          <el-col :span="10"
                            ><li><i class="icon4"> </i>{{ item.showst }}</li></el-col
                          >
                        </el-row>
                      </div>
                      <p class="m_3">{{ item.nm }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </el-col>

            <div class="clearfix"></div>
          </el-row>
          <div class="video">
            <iframe
              width="100%"
              height=""
              src="https://vd2.bdstatic.com/mda-ne14y7ncihg61s09/sc/cae_h264_delogo/1651463236726655251/mda-ne14y7ncihg61s09.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1651548014-0-0-dd1fdd39beda1b2238460973fd1b6760&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=3014266522&vid=5288520874284874086&abtest=100815_2-101454_2-101830_2-17451_1-3000222_2&klogid=3014266522"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="row_5" v-for="(item, index) in movieDataList.japMovieList" :key="index">
            <el-row :gutter="25">
              <el-col :span="12">
                <div class="col_2">
                  <ul class="list_4">
                    <li>
                      <i class="icon1"> </i>
                      <p>{{ item.wish }}</p>
                    </li>
                    <li>
                      <i class="icon2"> </i>
                      <p>{{ item.sc }}</p>
                    </li>
                    <li>
                      <i class="icon3"> </i>
                      <p>{{ item.showst }}</p>
                    </li>
                    <li>
                      评分:
                      <p>{{ item.sc }}</p>
                    </li>
                    <li>
                      上映:
                      <p>{{ item.comingTitle }}</p>
                    </li>
                    <div class="clearfix"></div>
                  </ul>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="m_6">
                  <a @click="toSingle">
                    <img :src="item.img" class="img-responsive" alt="" />
                  </a>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid_2">
          <div v-for="(item, index) in movieDataList.newMovieList" :key="index">
            <img :src="item.img" class="img-responsive" alt="" />
            <div class="caption1">
              <div class="action_part">
                <el-row>
                  <el-col :span="14"
                    ><li><i class="icon5"> </i>{{ item.wish }}</li></el-col
                  >
                  <el-col :span="10"
                    ><li><i class="icon4"> </i>{{ item.showst }}</li></el-col
                  >
                </el-row>
              </div>
              <p class="m_3">{{ item.nm }}</p>
            </div>
          </div>
          <div class="col_2 col_3" v-for="(item, index) in movieDataList.hotMovieList" :key="index">
            <ul class="list_4">
              <li>
                <i class="icon1"> </i>
                <p>{{ item.wish }}</p>
              </li>
              <li>
                <i class="icon2"> </i>
                <p>{{ item.showst }}</p>
              </li>
              <li>
                <i class="icon3"> </i>
                <p>{{ item.showst }}</p>
              </li>
              <li>
                评分:
                <p>{{ item.sc }}</p>
              </li>
              <li>上映:{{ item.comingTitle }}</li>
              <div class="clearfix"></div>
            </ul>
            <div class="m_8">
              <a @click="toSingle"
                ><img :src="item.img" class="img-responsive" alt=""
              /></a>
            </div>
          </div>
        </div>
      </el-col>
      <div class="clearfix"></div>
    </el-row>
  </div>
</template>

<script>
import {reactive} from 'vue';
import {useRouter } from "vue-router";
import movieList from "@/components/service/api"; // 导入我们的api接口
export default {
  name: "moviePage",
  setup() {
     const router = useRouter();
     const movieDataList = reactive({
        terrMovieList: [],
        popMovieList: [],
        chineseMovieList: [],
        japMovieList: [],
        newMovieList: [],
        hotMovieList: [],
     })
     const toSingle = () => {
      router.push({
        name: "single",
      });
    };
    movieList.hotMovieListApi().then((res) => {
      var terrMovieList = [],
        popMovieList = [],
        chineseMovieList = [],
        japMovieList = [],
        newMovieList = [],
        hotMovieList = [];
      var movieListData = res.data.movieList;
      for (var i = 0; i <= movieListData.length; i++) {
        if (i <= 1) {
          terrMovieList.push(movieListData[i]);
        } else if (i == 2) {
          popMovieList.push(movieListData[i]);
        } else if (i == 3) {
          japMovieList.push(movieListData[i]);
        } else if (i == 4) {
          newMovieList.push(movieListData[i]);
        } else if (i == 5) {
          hotMovieList.push(movieListData[i]);
        } else if (i > 7 && i < 10) {
          chineseMovieList.push(movieListData[i]);
        }
      }
      movieDataList.terrMovieList = terrMovieList;
      movieDataList.popMovieList = popMovieList;
      movieDataList.chineseMovieList = chineseMovieList;
      movieDataList.japMovieList = japMovieList;
      movieDataList.newMovieList = newMovieList;
      movieDataList.hotMovieList = hotMovieList;
    });
     return{
      toSingle,movieDataList
    }
  }
};
</script>
