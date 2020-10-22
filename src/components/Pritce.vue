<template>
  <div class="box">
    <img src="../assets/img/bg.png" alt="" class="img1" />
    <ul>
      <li v-for="(data, index) in datas" :key="index">
        <img :src="'../../img/' + data.img" alt="" />
        <p>{{ data.massage }}</p>
      </li>
    </ul>
    <div class="ifon">
      <div>
        <img src="../assets/img/001.png" alt="" />
        <span class="ooo"></span>
        <p>重磅发布丨EMUI11和鸿蒙OS 2.0来了</p>
        <span>更多</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pritce",
  data: function () {
    return {
      datas: [
        { img: "4.png", massage: "会员领券" },
        { img: "5.png", massage: "华为数码" },
        { img: "2.png", massage: "教育优惠" },
        { img: "6.png", massage: "荣耀数码" },
        { img: "1.png", massage: "以旧换新" },
        { img: "7.png", massage: "邀请有礼" },
        { img: "8.png", massage: "众测" },
        { img: "3.png", massage: "直播频道" },
        { img: "9.png", massage: "积分商城" },
        { img: "10.png", massage: "生态产品" },
      ],
    };
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 157px;
  position: relative;
}
.box .img1 {
  width: 100%;
}
.box ul {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  /* justify-content: space-around; */
  position: absolute;
  top: 25%;
}
.box ul li {
  flex-shrink: 0;
  width: 20%;
  text-align: center;
}
.box ul p {
  font-size: 12px;
}
.box ul li img {
  width: 43%;
  height: 60%;
}
.www {
  /* width: 100%; */
  height: 2px;
  position: absolute;
  top: 65%;
  left: 47%;
}
.www span {
  display: block;
  width: 8px;
  height: 2px;
  background-color: #777777;
  position: absolute;
}
.www span:nth-of-type(2) {
  left: 14px;
}
.ifon {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 78%;
}
.ifon div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.ifon img {
  max-width: 100%;
  height: 13px;
}
.ifon p {
  font-size: 10px;
  color: #4d4d4d;
}
.ooo {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #cdcdcd;
}
.ifon span {
  font-size: 10px;
  color: #999999;
}
</style>