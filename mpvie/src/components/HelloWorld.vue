<template>
    <div>
      <div class="container">
        <div class="container_wrap">
            <div class="header_top">
              <el-row>
                <el-col :span="6">
                    <div class="logo">
                    <a href="index.html"><img :src="logoURL" alt="" /></a>
                </div>
                </el-col>
                <el-col :span="10">
                   <div class="nav">
                      <ul class="col">
                          <li> <span class="simptip-position-bottom simptip-movable" data-tooltip="comic"><a href="movie.html"> </a></span></li>
                          <li><span class="simptip-position-bottom simptip-movable" data-tooltip="movie"><a href="movie.html"> </a> </span></li>
                          <li><span class="simptip-position-bottom simptip-movable" data-tooltip="video"><a href="movie.html"> </a></span></li>
                          <li><span class="simptip-position-bottom simptip-movable" data-tooltip="game"><a href="movie.html"> </a></span></li>
                          <li><span class="simptip-position-bottom simptip-movable" data-tooltip="tv"><a href="movie.html"> </a></span></li>
                          <li><span class="simptip-position-bottom simptip-movable" data-tooltip="more"><a href="movie.html"> </a></span></li>
                      </ul>
                    </div>
                </el-col>
                 <el-col :span="8">
                    <div class="header_right">
                      <ul class="header_right_box">
                          <li><img :src="memberURL" alt="" /></li>
                          <li>
                              <p><a href="login.html">Carol Varois</a></p>
                          </li>
                          <li class="last"><i class="edit"> </i></li>
                          <div class="clearfix"> </div>
                      </ul>
                    </div>
                 </el-col>
                <div class="clearfix"> </div>
              </el-row>
            </div>
              <div class="slider">
                  <div class="callbacks_container">
                      <div class="rslides" id="slider">
                         <el-carousel trigger="click" :autoplay="false">
                            <el-carousel-item v-for="item in slides" :key="item">
                              <img :src="item.src" class="img-responsive"/>
                              <div class="banner_desc">
                                <el-row :gutter="20">
                                   <el-col :span="17">
                                      <ul class="list_1">
                                          <el-col :span="8">
                                            <li>Published <span class="m_1">Feb 20, 2015</span></li>
                                          </el-col>
                                          <el-col :span="8">
                                            <li>Updated <span class="m_1">Feb 20 2015</span></li>
                                          </el-col> 
                                          <el-col :span="8">
                                           <li>Rating <span class="m_1">
                                              <el-rate v-model="value" disabled :colors="{colors}" score-template="{value}">
                                              </el-rate>
                                             </span>
                                             </li>
                                          </el-col>
                                        </ul>
                                    </el-col>
                                    <el-col :span="7">
                                    <ul class="list_1 list_2">
                                      <el-col :span="8">
                                        <li><i class="icon1"> </i><p>2,548</p></li>
                                      </el-col>
                                     <el-col :span="8">
                                        <li><i class="icon2"> </i><p>2,548</p></li>
                                      </el-col>
                                      <el-col :span="8">
                                        <li><i class="icon3"> </i><p>2,548</p></li>
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
                            <input type="text" value="Search..." onfocus="this.value='';" onblur="if (this.value == '') {this.value ='';}">
                            <input type="submit" value="">
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="box_2 featurd_movie">
                   <el-row :gutter="21">
                     <el-col :span="10">
                        <div class="grid_3">
                        <div class="row_1">
                          <el-col :span="12">
                              <div class="grid_4">
                                <a href="single.html">
                                    <div class="grid_2">
                                        <img src="../assets/images/pic1.jpg" class="img-responsive" alt="" />
                                        <div class="caption1">
                                            <div class="action_part">
                                              <el-row :gutter="10">
                                                 <el-col :span="18"><li><i class="icon5"> </i>3,548</li></el-col>
                                                  <el-col :span="6"><li><i class="icon4"> </i></li></el-col>
                                              </el-row>
                                              
                                            </div>
                                        
                                            <p class="m_3">Guardians of the Galaxy</p>
                                        </div>
                                    </div>
                                    <div class="grid_2 col_1">
                                        <img src="../assets/images/pic2.jpg" class="img-responsive" alt="" />
                                        <div class="caption1">
                                            <div class="action_part">
                                              <el-row :gutter="10">
                                                 <el-col :span="18"><li><i class="icon5"> </i>3,548</li></el-col>
                                                  <el-col :span="6"><li><i class="icon4"> </i></li></el-col>
                                              </el-row>
                                              
                                            </div>
                                        
                                            <p class="m_3">Guardians of the Galaxy</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                          </el-col>
                          <el-col :span="12">
                               <div class="grid_7">
                                <div class="col_2">
                                    <ul class="list_4">
                                        <li><i class="icon1"> </i>
                                            <p>2,548</p>
                                        </li>
                                        <li><i class="icon2"> </i>
                                            <p>215</p>
                                        </li>
                                        <li><i class="icon3"> </i>
                                            <p>546</p>
                                        </li>
                                        <li>Rating
                                            <p><el-rate v-model="ratingValue" disabled :colors="{colors}" score-template="{ratingValue}">
                                              </el-rate></p>
                                        </li>
                                        <li>Release Date : Mar 15, 2015</li>
                                        <div class="clearfix"> </div>
                                    </ul>
                                    <div class="m_5">
                                        <a href="single.html"><img src="../assets/images/pic3.jpg" class="img-responsive" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                          </el-col>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="row_2">
                            <a href="single.html"><img src="../assets/images/pic4.jpg" class="img-responsive" alt="" /></a>
                        </div>
                    </div>
                     </el-col>
                     <el-col :span="10">
                        <div class="content_right">
                          <div class="row_3">
                            <el-col :span="12">
                                 <div class="content_right-box">
                                  <a href="single.html">
                                       <div class="grid_2">
                                        <img src="../assets/images/pic6.jpg" class="img-responsive" alt="" />
                                        <div class="caption1">
                                            <div class="action_part">
                                              <el-row :gutter="10">
                                                 <el-col :span="18"><li><i class="icon5"> </i>3,548</li></el-col>
                                                  <el-col :span="6"><li><i class="icon4"> </i></li></el-col>
                                              </el-row>
                                            </div>
                                            <p class="m_3">Guardians of the Galaxy</p>
                                        </div>
                                    </div>
                                  </a>
                              </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid_5">
                                  <a href="single.html">
                                      <div class="grid_2">
                                        <img src="../assets/images/pic7.jpg" class="img-responsive" alt="" />
                                        <div class="caption1">
                                            <div class="action_part">
                                              <el-row :gutter="10">
                                                 <el-col :span="18"><li><i class="icon5"> </i>3,548</li></el-col>
                                                  <el-col :span="6"><li><i class="icon4"> </i></li></el-col>
                                              </el-row>
                                            </div>
                                            <p class="m_3">Guardians of the Galaxy</p>
                                        </div>
                                    </div>
                                  </a>
                              </div>
                            </el-col>
                              <div class="clearfix"> </div>
                          </div>
                          <div class="video">
                              <iframe width="100%" height="" src="https://www.youtube.com/embed/s1QeoSedWmM" frameborder="0" allowfullscreen></iframe>
                          </div>
                          <div class="row_5">
                              <el-col :span="12">
                                  <div class="col_2">
                                      <ul class="list_4">
                                          <li><i class="icon1"> </i>
                                              <p>2,548</p>
                                          </li>
                                          <li><i class="icon2"> </i>
                                              <p>215</p>
                                          </li>
                                          <li><i class="icon3"> </i>
                                              <p>546</p>
                                          </li>
                                          <li>Rating :
                                              <p> <el-rate v-model="ratingValue" disabled :colors="{colors}" score-template="{ratingValue}">
                                              </el-rate></p>
                                          </li>
                                          <div class="clearfix"> </div>
                                      </ul>

                                  </div>
                              </el-col>
                               <el-col :span="12">
                                   <div class="m_6">
                                    <a href="single.html">
                                        <img src="../assets/images/pic8.jpg" class="img-responsive" alt="" />
                                    </a>
                                  </div>
                               </el-col>
                          </div>
                        </div>
                     </el-col>
                     <el-col :span="4">
                        <div class="grid_2">
                          <img src="../assets/images/pic9.jpg" class="img-responsive" alt="" />
                          <div class="caption1">
                              <div class="action_part">
                                <el-row :gutter="10">
                                    <el-col :span="18"><li><i class="icon5"> </i>3,548</li></el-col>
                                    <el-col :span="6"><li><i class="icon4"> </i></li></el-col>
                                </el-row>
                              </div>
                              <p class="m_3">Guardians of the Galaxy</p>
                          </div>     
                        <div class="col_2 col_3">
                            <ul class="list_4">
                                <li><i class="icon1"> </i>
                                    <p>2,548</p>
                                </li>
                                <li><i class="icon2"> </i>
                                    <p>215</p>
                                </li>
                                <li><i class="icon3"> </i>
                                    <p>546</p>
                                </li>
                                <li>Rating :
                                    <p><img src="../assets/images/rating1.png" alt=""></p>
                                </li>
                                <li>Release :Mar 15, 2015 </li>
                                <div class="clearfix"> </div>
                            </ul>
                            <div class="m_8">
                                <a href="single.html"><img src="../assets/images/pic10.jpg" class="img-responsive" alt="" /></a>
                            </div>
                        </div>
                    </div>
                     </el-col>
                      <div class="clearfix"> </div>
                   </el-row>
                </div>
            </div>
        </div>
      </div>
       <div class="container">
        <footer id="footer">
            <div id="footer-3d">
                <div class="gp-container">
                    <span class="first-widget-bend"></span>
                </div>
            </div>
            <div id="footer-widgets" class="gp-footer-larger-first-col">
                <div class="gp-container">
                    <div class="footer-widget footer-1">
                        <div class="wpb_wrapper">
                            <img src="images/f_logo.png" alt="" />
                        </div>
                        <br>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <p class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <div class="footer_box">
                        <div class="col_1_of_3 span_1_of_3">
                            <h3>Categories</h3>
                            <ul class="first">
                                <li><a href="#">Dance</a></li>
                                <li><a href="#">History</a></li>
                                <li><a href="#">Specials</a></li>
                            </ul>
                        </div>
                        <div class="col_1_of_3 span_1_of_3">
                            <h3>Information</h3>
                            <ul class="first">
                                <li><a href="#">New products</a></li>
                                <li><a href="#">top sellers</a></li>
                                <li><a href="#">Specials</a></li>
                            </ul>
                        </div>
                        <div class="col_1_of_3 span_1_of_3">
                            <h3>Follow Us</h3>
                            <ul class="first">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Youtube</a></li>
                            </ul>
                            <div class="copy">
                                <p>&copy; 2015 Template by <a href="http://w3layouts.com" target="_blank"> w3layouts</a></p>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </footer>
    </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      value: 3.7,
      ratingValue:4.8,
      colors: ['#99A9BF', '#D8232A', '#FF9900'],
      logoURL: require(`../assets/images/logo.png`),
       memberURL: require(`../assets/images/p1.png`),
       slideImg:["../assets/images/banner.jpg","../assets/images/banner1.jpg","../assets/images/banner2.jpg"],
        slides: [
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
      ]
    }
  }
}
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
