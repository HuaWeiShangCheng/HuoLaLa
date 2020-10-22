<template>
  <div class="box">
    <h4>促销</h4>
    <ul>
      <li v-for="(promotion, index) in promotions" :key="index">
        <span class="mmm">{{ promotion.gift }}</span>
        <p>{{ promotion.subsidy }}</p>
      </li>
    </ul>
    <img src="../assets/img/icon-more-right.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Datapromotion",
  data() {
    return {
      promotions: [
        { gift: "一站式换新", subsidy: "APP专享，最高补贴500元" },
        { gift: "商品赠券", subsidy: "购机赠三只松鼠满减礼包+高德地图打车优惠券" },
        { gift: "赠送积分", subsidy: "购买即赠商城积分，积分可抵现"}
      ],
    };
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  display: flex;
  border-top: 2px solid #f9f9f9;
  border-bottom: 10px solid #f9f9f9;
  background-color: #fff;
  justify-content: space-around;
}
.box img {
  width: 24px;
  height: 24px;
  margin-top: 12px;
}
.box h4 {
  font-size: 13px;
  margin-top: 12px;
}
.box ul {
  width: 67%;
  line-height: 23px;
  margin-top: 12px;
}
.box ul li {
  display: flex;
  /* justify-content: space-around; */
}
.mmm {
  display: block;
  border: 1px solid rgba(239, 90, 98, 0.5);
  color: #ef5a62;
  border-radius: 10px;
  font-size: 12px;
  width: 70px;
  height: 18px;
  text-align: center;
  line-height: 18px;
}
.box ul li p {
  font-size: 12px;
  margin-left: 10px;
  text-align: center;
  /* line-height: 10px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>