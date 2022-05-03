<template>
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
            <li>
              <span
                class="simptip-position-bottom simptip-movable"
                data-tooltip="comic"
                ><a href="movie.html"> </a
              ></span>
            </li>
            <li>
              <span
                class="simptip-position-bottom simptip-movable"
                data-tooltip="movie"
                ><a href="movie.html"> </a>
              </span>
            </li>
            <li>
              <span
                class="simptip-position-bottom simptip-movable"
                data-tooltip="video"
                ><a href="movie.html"> </a
              ></span>
            </li>
            <li>
              <span
                class="simptip-position-bottom simptip-movable"
                data-tooltip="game"
                ><a href="movie.html"> </a
              ></span>
            </li>
            <li>
              <span
                class="simptip-position-bottom simptip-movable"
                data-tooltip="tv"
                ><a href="movie.html"> </a
              ></span>
            </li>
            <li>
              <span
                class="simptip-position-bottom simptip-movable"
                data-tooltip="more"
                ><a href="movie.html"> </a
              ></span>
            </li>
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
            <div class="clearfix"></div>
          </ul>
        </div>
      </el-col>
      <div class="clearfix"></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "headerPage",
  data() {
    return {
      logoURL: require(`@/assets/images/logo.png`),
      memberURL: require(`@/assets/images/p1.png`),
    };
  },
};
</script>
