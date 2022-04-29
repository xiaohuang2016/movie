<template>
    <div>
      <div class="container">
        <div class="container_wrap">
            <div class="header_top row">
                <div class="col-sm-3 logo">
                    <a href="index.html"><img :src="logoURL" alt="" /></a>
                </div>
                <div class="col-sm-6 nav">
                    <ul class="col">
                        <li> <span class="simptip-position-bottom simptip-movable" data-tooltip="comic"><a href="movie.html"> </a></span></li>
                        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="movie"><a href="movie.html"> </a> </span></li>
                        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="video"><a href="movie.html"> </a></span></li>
                        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="game"><a href="movie.html"> </a></span></li>
                        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="tv"><a href="movie.html"> </a></span></li>
                        <li><span class="simptip-position-bottom simptip-movable" data-tooltip="more"><a href="movie.html"> </a></span></li>
                    </ul>
                </div>
                <div class="col-sm-3 header_right">
                    <ul class="header_right_box">
                        <li><img :src="memberURL" alt="" /></li>
                        <li>
                            <p><a href="login.html">Carol Varois</a></p>
                        </li>
                        <li class="last"><i class="edit"> </i></li>
                        <div class="clearfix"> </div>
                    </ul>
                </div>
                <div class="clearfix"> </div>
            </div>
              <div class="slider">
                <div class="callbacks_container">
                    <ul class="rslides" id="slider">
                        <!-- <li><img src="images/banner.jpg" class="img-responsive" alt="" />
                            <div class="button">
                                <a href="#" class="hvr-shutter-out-horizontal">Watch Now</a>
                            </div>
                        </li>
                        <li><img src="images/banner1.jpg" class="img-responsive" alt="" />
                            <div class="button">
                                <a href="#" class="hvr-shutter-out-horizontal">Watch Now</a>
                            </div>
                        </li>
                        <li><img src="images/banner2.jpg" class="img-responsive" alt="" />
                            <div class="button">
                                <a href="#" class="hvr-shutter-out-horizontal">Watch Now</a>
                            </div>
                        </li> -->
                        <!-- <Carousel
                    :autoplay="true"
                    :duration="2000"
                    :initIndex="2"
                    :direction="true"
                    directionMode="hover"
                    :directionSize="20"
                    directionColor="skyblue"
                    :indicator="true"
                    indicatorMode="always"
                    indicatorColor="white"
                    indicatorActiveColor="skyblue"
                    @before-moving="beforeMoving"
                    @after-moving="afterMoving"
                  >
                    <CarouselItem v-for="(item, index) in slides" :key="index" :idx="index">
                      <img :src="item.src" />
                    </CarouselItem>
                  </Carousel> -->
                    <carousel>
                      <slide v-for="slide in 10" :key="slide">{{ slide }}</slide>
                      <template #addons>
                        <navigation />
                      </template>
                    </carousel>
                    </ul>
                </div>
                <div class="banner_desc">
                    <div class="col-md-9">
                        <ul class="list_1">
                            <li>Published <span class="m_1">Feb 20, 2015</span></li>
                            <li>Updated <span class="m_1">Feb 20 2015</span></li>
                            <li>Rating <span class="m_1"><img src="images/rating.png" alt=""/></span></li>
                        </ul>
                    </div>
                    <div class="col-md-3 grid_1">
                        <ul class="list_1 list_2">
                            <li><i class="icon1"> </i>
                                <p>2,548</p>
                            </li>
                            <li><i class="icon2"> </i>
                                <p>215</p>
                            </li>
                            <li><i class="icon3"> </i>
                                <p>546</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
export default {
  name: 'HelloWorld',
      components: {
      Carousel,
      Slide
    },
  data(){
    return{
      logoURL: require(`../assets/images/logo.png`),
       memberURL: require(`../assets/images/p1.png`),
       slide:["../assets/images/banner.jpg","../assets/images/banner1.jpg","../assets/images/banner2.jpg"],
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
</style>
