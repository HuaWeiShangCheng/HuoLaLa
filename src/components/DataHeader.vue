<template>
  <div class="box">
    <div class="box-header">
      <span><img src="../assets/img/icon_back_grey.png" alt="" /></span>
       <ul>
          <li>商品</li>
          <li>评价</li>
          <li>参数</li>
          <li>详情</li>
        </ul>  
      <span @click="change"><img src="../assets/img/icon_more_grey.png" alt="" /></span>
    </div>
    <div class="side" v-if="seen">
      <ul>
        <li>
          <span class="iconfont icon-shouye"></span>
          <p><router-link to="/homePage">首页</router-link></p>
        </li>
        <li>
          <span class="iconfont icon-fenlei"></span>
          <p>搜索</p>
        </li>
        <li>
          <span class="iconfont icon-faxian1"></span>
          <p>分类</p>
        </li>
        <li>
          <span class="iconfont icon-gouwuche"></span>
          <p>购物车</p>
        </li>
        <li>
          <span class="iconfont icon-wode"></span>
          <p>我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataHeader",
  data:function(){
    return {
       seen:false,
       isTOP:false,
    }
  },
  methods:{
    change(){
      this.seen = !this.seen;
      if(this.seen){
        console.log(this.seen);
      }else{
        console.log("no")
      }
    },
  }
  //    handleScroll() {
  //     //方法一
  //     var top = Math.floor(
  //       document.body.scrollTop ||
  //         document.documentElement.scrollTop ||
  //         window.pageYOffset
  //     );
  //     console.log(top);
  //   },
  //   // Show(){
  //   //   if(ScrollTop>0){
  //   //     console.log(ScrollTop)
  //   //      this.isTOP = true
  //   //   }else{
  //   //      this.isTOP = false
  //   //   }
  //   // }
  // },
  // mounted() {
  //   //可以在这里面直接进行滚动条的获取
  //   window.addEventListener("scroll", this.handleScroll, true);
  // },
  // methods: {
  //   handleScroll() {
  //     //方法一
  //     var top = Math.floor(
  //       document.body.scrollTop ||
  //         document.documentElement.scrollTop ||
  //         window.pageYOffset
  //     );
  //     console.log(top);
  //   },
  // }
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
.box {
  width: 100%;
  height: 42px;
  padding: 0 10px;
  box-sizing: border-box;
}
.box-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-header ul {
  display: flex;
  width: 70%;
  justify-content: space-evenly;
}
.box-header ul li {
  font-size: 18px;
}
.box-header span {
  width: 24px;
  height: 24px;
}
.box-header span img {
  width: 100%;
  height: 100%;
}
.side {
  position: fixed;
  right: 10px;
  /* display: none; */
  z-index: 100;
}
.side ul li {
  width: 100px;
  height: 42px;
  border: 1px solid #abafaff9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: #333;
  background-color: #fff;
  opacity: 0.7;
}
.side ul li p a{
  color: #333;
}
.side ul li .iconfont {
  font-size: 24px;
}
/* .YES{
  display: block;
}
.N0{
  display: none;
} */
</style>