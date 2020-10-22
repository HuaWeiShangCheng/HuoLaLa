<template>
  <div class="box">
    <img src="../assets/img/logo_vmall.png" alt="" />
    <div class="search">
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item v-for="(phone, index) in phones" :key="index">{{
            phone.name
          }}</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </div>
    <i class="iconfont icon-xinxi4"></i>
    <p>登录</p>
  </div>
</template>

<script>
export default {
  name: "Top",
  data: function () {
    return {
      phones: [
        { name: "Mate40" },
        { name: "荣耀30" },
        { name: "nova 7" },
        { name: "荣耀X10" },
        { name: "耳机" },
        { name: "手表" },
        { name: "平板" },
        { name: "手环" },
        { name: "路由器" },
        { name: "荣耀30青春" },
        { name: "荣耀30S" },
      ],
    };
  },
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.box {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box img {
  width: 18%;
  height: 14px;
}
.search {
  width: 56%;
  height: 32px;
  position: relative;
}
.van-notice-bar {
  width: 85%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 16px;
  color: #cacaca;
}
.van-swipe-item {
  font-size: 13px;
  color: #cacaca;
}
.icon-xinxi4 {
  font-size: 20px;
  color: #2d2d2d;
}
p {
  font-size: 13px;
  color: #4c4c4c;
}
.notice-swipe {
  height: 32px;
  line-height: 32px;
}
</style>