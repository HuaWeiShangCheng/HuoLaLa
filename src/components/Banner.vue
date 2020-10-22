<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <div v-for="(prictue,index) in prictues" :key="index">
      <van-swipe-item><img :src="'../../img1/' + prictue" alt=""></van-swipe-item>
    </div>
  </van-swipe>
</template>

<script>
import axios from "axios";
export default {
  name: "Banner",
  data() {
    return {
      prictues: []
    };
  },
  async created(){
      let res = await axios({
       url:"http://localhost:3000/prictues"
      });
     this.prictues = res.data;
  }
};
</script>

<style scoped>
  .van-swipe div{
      width: 100%;
      height: 154px;
  }
  .van-swipe div img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
  }
</style>