<template>
  <div class="box_2 featurd_movie">
    <el-row :gutter="21">
      <el-col :span="10">
        <div class="grid_3">
          <div class="row_1">
            <el-col :span="12">
              <div class="grid_4">
                <a href="single.html">
                  <div :class="[index === 1 ? 'grid_2 col_1':'grid_2']"  v-for="(item,index) in movieList" :key="index" >
                    <img :src="item.cover" class="img-responsive" />
                    <div class="caption1">
                      <div class="action_part">
                        <el-row :gutter="10">
                          <el-col :span="12"
                            ><li><i class="icon5"> </i>{{item.cover_x}}</li></el-col>
                          <el-col :span="12"
                            ><li><i class="icon4"> </i>{{item.cover_y}}</li
                          ></el-col>
                        </el-row>
                      </div>

                      <p class="m_3">{{item.title}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid_7">
                <div class="col_2" v-for="(item,index) in terrorMovieList" :key="index" >
                  <ul class="list_4">
                    <li>
                      <i class="icon1"> </i>
                      <p>{{item.cover_x}}</p>
                    </li>
                    <li>
                      <i class="icon2"> </i>
                      <p>{{item.cover_x}}</p>
                    </li>
                    <li>
                      <i class="icon3"> </i>
                      <p>{{item.cover_x}}</p>
                    </li>
                    <li>
                      Rating
                      <p>
                        <el-rate
                        v-model="item.rate"
                        disabled
                        :colors="{ colors }"
                        score-template="{{item.rate}}"
                      >
                      </el-rate>
                      </p>
                    </li>
                    <li>Release Date : Mar 15, 2015</li>
                    <div class="clearfix"></div>
                  </ul>
                  <div class="m_5">
                    <a href="single.html"><img :src="item.cover"  class="img-responsive"/></a>
                  </div>
                </div>
              </div>
            </el-col>
            <div class="clearfix"></div>
          </div>
          <div class="row_2">
            <a href="single.html">
              <img src="@/assets/images/pic4.jpg"
                class="img-responsive"/></a>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="content_right">
          <div class="row_3">
            <el-col :span="12">
              <div :class="[index === 1 ? 'grid_5':'content_right-box']"  v-for="(item,index) in movieList" :key="index" >
                <a href="single.html">
                  <div class="grid_2">
                      <img :src="item.cover" class="img-responsive" />
                    <div class="caption1">
                      <div class="action_part">
                        <el-row :gutter="10">
                          <el-col :span="18"
                            ><li><i class="icon5"> </i>{{item.cover_x}}</li></el-col
                          >
                          <el-col :span="6"
                            ><li><i class="icon4"> </i></li
                          ></el-col>
                        </el-row>
                      </div>
                      <p class="m_3">{{item.title}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </el-col>
            <!-- <el-col :span="12">
              <div class="grid_5">
                <a href="single.html">
                  <div class="grid_2">
                    <img
                      src="@/assets/images/pic7.jpg"
                      class="img-responsive"
                      alt=""
                    />
                    <div class="caption1">
                      <div class="action_part">
                        <el-row :gutter="10">
                          <el-col :span="18"
                            ><li><i class="icon5"> </i>3,548</li></el-col
                          >
                          <el-col :span="6"
                            ><li><i class="icon4"> </i></li
                          ></el-col>
                        </el-row>
                      </div>
                      <p class="m_3">Guardians of the Galaxy</p>
                    </div>
                  </div>
                </a>
              </div>
            </el-col> -->
            <div class="clearfix"></div>
          </div>
          <div class="video">
            <iframe
              width="100%"
              height=""
              src="https://vd2.bdstatic.com/mda-ne14y7ncihg61s09/sc/cae_h264_delogo/1651463236726655251/mda-ne14y7ncihg61s09.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1651548014-0-0-dd1fdd39beda1b2238460973fd1b6760&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=3014266522&vid=5288520874284874086&abtest=100815_2-101454_2-101830_2-17451_1-3000222_2&klogid=3014266522"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="row_5">
            <el-col :span="12">
              <div class="col_2">
                <ul class="list_4">
                  <li>
                    <i class="icon1"> </i>
                    <p>2,548</p>
                  </li>
                  <li>
                    <i class="icon2"> </i>
                    <p>215</p>
                  </li>
                  <li>
                    <i class="icon3"> </i>
                    <p>546</p>
                  </li>
                  <li>
                    Rating :
                    <p>
                      <el-rate
                        v-model="ratingValue"
                        disabled
                        :colors="{ colors }"
                        score-template="{ratingValue}"
                      >
                      </el-rate>
                    </p>
                  </li>
                  <div class="clearfix"></div>
                </ul>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="m_6">
                <a href="single.html">
                  <img
                    src="@/assets/images/pic8.jpg"
                    class="img-responsive"
                    alt=""
                  />
                </a>
              </div>
            </el-col>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid_2">
          <img src="@/assets/images/pic9.jpg" class="img-responsive" alt="" />
          <div class="caption1">
            <div class="action_part">
              <el-row :gutter="10">
                <el-col :span="18"
                  ><li><i class="icon5"> </i>3,548</li></el-col
                >
                <el-col :span="6"
                  ><li><i class="icon4"> </i></li
                ></el-col>
              </el-row>
            </div>
            <p class="m_3">Guardians of the Galaxy</p>
          </div>
          <div class="col_2 col_3">
            <ul class="list_4">
              <li>
                <i class="icon1"> </i>
                <p>2,548</p>
              </li>
              <li>
                <i class="icon2"> </i>
                <p>215</p>
              </li>
              <li>
                <i class="icon3"> </i>
                <p>546</p>
              </li>
              <li>
                Rating :
                <p><img src="@/assets/images/rating1.png" alt="" /></p>
              </li>
              <li>Release :Mar 15, 2015</li>
              <div class="clearfix"></div>
            </ul>
            <div class="m_8">
              <a href="single.html"
                ><img
                  src="@/assets/images/pic10.jpg"
                  class="img-responsive"
                  alt=""
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
import { hotMovieListApi,terrorMovieListApi,popularMovieListApi } from '@/components/service/api';// 导入我们的api接口
export default {        
    name: 'moviePage',
    data(){
       return {
         ratingValue:3.8,
           movieList:[],
           terrorMovieList:[],
       }
    },
    beforeCreate() {
       hotMovieListApi({ 
          type:'movie',
          tag:'华语',
          sort:'time',
          page_limit:2,
          page_start:0              
      }).then(res => {
          this.movieList = res.subjects;
      })
    terrorMovieListApi({ 
          type:'movie',
          tag:'恐怖',
          sort:'time',
          page_limit:1,
          page_start:0              
      }).then(res => {
        this.terrorMovieList = res.subjects;
          // 获取数据成功后的其他操作
          // console.log('创建前-挂在', this.$el)
          // console.log('创建前-data', res.subjects)
      })
       popularMovieListApi({ 
          type:'movie',
          tag:'冷门佳片',
          sort:'time',
          page_limit:2,
          page_start:0              
      }).then(res => {
          // 获取数据成功后的其他操作
          // console.log('创建前-挂在', this.$el)
          // console.log('创建前-data', res.subjects)
      })      
    },
    methods: {
      group: function(array, subGroupLength) {
          let index = 0;
          let newArray = [];
          while(index < array.length) {
              newArray.push(array.slice(index, index += subGroupLength));
          }
        return newArray;
      }
  }
}
</script>