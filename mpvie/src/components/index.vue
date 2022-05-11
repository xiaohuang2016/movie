<template>
  <div>
    <div class="container">
      <div class="container_wrap">
        <headerPage></headerPage>
        <div class="slider">
          <div class="callbacks_container">
            <div class="rslides" id="slider">
              <el-carousel trigger="click" :autoplay="false" height="500px">
                <el-carousel-item v-for="item in slides" :key="item">
                  <img :src="item.src" class="img-responsive" />
                  <div class="banner_desc">
                    <el-row :gutter="20">
                      <el-col :span="17">
                        <ul class="list_1">
                          <el-col :span="8">
                            <li>
                              Published <span class="m_1">Feb 20, 2015</span>
                            </li>
                          </el-col>
                          <el-col :span="8">
                            <li>
                              Updated <span class="m_1">Feb 20 2015</span>
                            </li>
                          </el-col>
                          <el-col :span="8">
                            <li>
                              Rating
                              <span class="m_1">
                                <el-rate
                                  v-model="value"
                                  disabled
                                  :colors="{ colors }"
                                  score-template="{value}"
                                >
                                </el-rate>
                              </span>
                            </li>
                          </el-col>
                        </ul>
                      </el-col>
                      <el-col :span="7">
                        <ul class="list_1 list_2">
                          <el-col :span="8">
                            <li>
                              <i class="icon1"> </i>
                              <p>2,548</p>
                            </li>
                          </el-col>
                          <el-col :span="8">
                            <li>
                              <i class="icon2"> </i>
                              <p>2,548</p>
                            </li>
                          </el-col>
                          <el-col :span="8">
                            <li>
                              <i class="icon3"> </i>
                              <p>2,548</p>
                            </li>
                          </el-col>
                        </ul>
                      </el-col>
                    </el-row>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="box_1">
            <h1 class="m_2">Featurd Movies</h1>
            <div class="search">
              <form>
                <input
                  type="text"
                  value="Search..."
                  onfocus="this.value='';"
                  onblur="if (this.value == '') {this.value ='';}"
                />
                <input type="submit" value="" />
              </form>
            </div>
            <div class="clearfix"></div>
          </div>
          <moviePage></moviePage>
        </div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import headerPage from "@/components/base/header.vue"
import footerPage from "@/components/base/footer.vue"
import moviePage from "@/components/base/movie.vue"
export default {
  name: "HelloWorld",
  components:{headerPage,footerPage,moviePage},
  data() {
    return {
      value: 3.7,
      ratingValue: 4.8,
      colors: ["#99A9BF", "#D8232A", "#FF9900"],
      logoURL: require(`../assets/images/logo.png`),
      memberURL: require(`../assets/images/p1.png`),
      slideImg: [
        "../assets/images/banner.jpg",
        "../assets/images/banner1.jpg",
        "../assets/images/banner2.jpg",
      ],
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* :root { --el-rate-void-color: red; --el-rate-fill-color: blue; }
.el-rate .el-rate__icon.is-active{
  var(--el-rate-icon-size)
} */
</style>
