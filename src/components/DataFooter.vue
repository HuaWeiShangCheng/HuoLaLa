<template>
  <div class="box">
    <ul>
      <li>
        <span class="iconfont icon-shouye"></span>
        <p><router-link to="/homePage">首页</router-link></p>
      </li>
      <li>
        <span class="iconfont icon-wode"></span>
        <p>客服</p>
      </li>
      <li>
        <span class="iconfont icon-gouwuche1"></span>
        <p>购物车</p>
      </li>
      <div>
        <span class="lt">加入购物车</span>
        <span class="rt">立即购买</span>
      </div>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.box {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 50px;
}
.box ul {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box ul li .iconfont {
  font-size: 22px;
}
.box ul li p {
  font-size: 12px;
  color: #333333;
}
.box ul li p a{
  color: #333333;
}
.box ul li {
  text-align: center;
}
.box ul div span {
  display: block;
  width: 104px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #fff;
}
.box ul div {
  display: flex;
  align-items: center;
}
.box ul div .rt {
  background-image: linear-gradient(90deg, #e43e2d 0%, #ca141d 100%);
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.box ul div .lt {
  background-image: linear-gradient(90deg, #ff814a 0%, #f45333 100%);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
</style>