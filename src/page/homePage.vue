<template>
  <div class="all">
    <div class="header">
      <Top />
      <Navigation/>
    </div>
    <div class="content">
      <Banner />
      <Pritce />
      <TimeLimit />
      <Shop />
      <Goods />
      <GoodsList />
      <GoodsListOther title="手机" />
      <GoodsListOther title="笔记本" />
      <GoodsListOther title="精品平板" />
      <GoodsListOther title="智能穿戴" />
      <GoodsListOther title="智慧屏" />
      <GoodsListOther title="智能家居" />
      <GoodsListOther title="热销配件" />
    </div>

    <MyFooter class="footer" />
  </div>
</template>

<script>
import Top from "../components/Top";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Pritce from "../components/Pritce";
import TimeLimit from "../components/TimeLimit";
import Shop from "../components/Shop";
import Goods from "../components/Goods";
import GoodsList from "../components/GoodsList";
import GoodsListOther from "../components/GoodsListOther";
import MyFooter from "../components/MyFooter";
export default {
  name: "homePage",
  components: {
    Top,
    Navigation,
    Banner,
    Pritce,
    TimeLimit,
    Shop,
    Goods,
    GoodsList,
    GoodsListOther,
    MyFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.header {
  height: 66px;
  margin-top: 6px;
}
.all {
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.footer {
  height: 52px;
}
</style>