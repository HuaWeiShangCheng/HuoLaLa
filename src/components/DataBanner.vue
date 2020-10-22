<template>
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(cuent,index) in cuents" :key="index"><img :src="'../../img2/' + cuent" alt=""></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/7</div>
      </template>
    </van-swipe>
</template>

<script>
import axios from "axios";
export default {
  name: "DataBanner",
  data() {
    return {
      current: 0,
      cuent:{},
      cuents:[]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
    async created() {
    // console.log("this.$route", this.$route);
    let res = await axios({
      url: "http://localhost:3000/cuents",
      params: {
        id: this.$route.params.id,
      },
    });
    // console.log("this.$route.params.id",this.$route.params.id)
    this.cuents = res.data[0].img;
    console.log(this.cuents);
  },
};
</script>

<style scoped>
/* @import url(../assets/swiper.css); */
.van-swipe {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
}
.van-swipe-item{
  width: 100%;
}
.van-swipe-item img {
  width: 96%;
}
.custom-indicator {
  position: absolute;
  right: 10px;
  bottom: 22px;
  font-size: 14px;
  background-color: rgba(0,0,0,.15);
  width: 46px;
  height: 22px;
  color: #fff;
  text-align: center;
  line-height: 22px;
  border-radius: 16px;
}
</style>