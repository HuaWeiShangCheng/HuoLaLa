<template>
  <div class="box">
      <ul>
          <li>
              <span class="iconfont icon-shouye"></span>
              <p>首页</p>
          </li>
           <li>
              <span class="iconfont icon-fenlei"></span>
              <p>分类</p>
          </li>
           <li>
              <span class="iconfont icon-faxian1"></span>
              <p>发现</p>
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
</template>

<script>
export default {
     name:"MyFooter"
}
</script>

<style scoped>
    @import url(../assets/font/iconfont.css);
    .box{
        width: 100%;
        height: 52px;
    }
    .box ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .box ul li{
        width: 20%;
        text-align: center;
    }
    .box ul li .iconfont{
        display: block;
        font-size: 24px;
        color: #787878;
    }
     .box ul li p{
         font-size: 12px;
         color: #787878;
     }
</style>