<template>
  <div class="box">
    <div class="boxTop">
      <dl class="style">
        <dt>颜色</dt>
        <dd>
          <li :class="{changeColor}" @click="changeColor =! changeColor" v-for="(color,index) in colors" :key="index">{{color}}</li>
        </dd>
      </dl>
      <dl class="edition">
        <dt>版本</dt>
        <dd>
          <li>5G全网通 8GB+128GB</li>
          <li>5G全网通 8GB+256GB</li>
        </dd>
      </dl>
      <dl class="configure">
        <dt>类型</dt>
        <dd>
          <li>官方标配</li>
        </dd>
      </dl>
    </div>
    <div class="boxBom">
      <dl>
        <dt>数量</dt>
        <dd>
          <!-- <button>-</button>
          <span class="num">1</span>
          <button>+</button> -->
          <van-stepper v-model="value" theme="round" button-size="22" disable-input />
        </dd>
      </dl>
    </div>
    <div class="boxTos" is-link @click="showPopup">
      <dl>
        <dt>保障</dt>
        <dd>
          <li>选购</li>
          <p>碎屏保</p>
          <p>延长保</p>
        </dd>
        <img src="../assets/img/icon-more-right.png" alt="" />
      </dl>
    </div>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '70%' }"
    ></van-popup>
  </div>
</template>

<script>
export default {
  name: "Datachoice",
  data() {
    return {
      show: false,
      changeColor: false,
      value:1,
      colors:["亮黑色","仲夏紫","绮境森林","7号色","蜜语红"]
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
 
};
</script>

<style scoped>
.box {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 10px solid #f9f9f9;
}
.boxTop dl dt {
  font-size: 13px;
  color: #333333;
  font-weight: bold;
  margin-top: 6px;
}
.boxTop {
  overflow: hidden;
}
.boxTop dl {
  display: flex;
}
.style {
  margin-top: 6px;
}
.style dd {
  margin-left: 16px;
}
.style dd li {
  margin: 4px 10px;
}
.style dd {
  display: flex;
  flex-wrap: wrap;
}
.style dt {
  width: 10%;
  white-space: nowrap;
}
.edition {
  margin-top: 10px;
}
.edition dd li {
  margin: 6px 0;
}
.edition dd {
  margin-left: 24px;
}
.configure {
  margin-top: 10px;
}
.style dd li,
.edition dd li {
  font-size: 13px;
  border: 1px solid rgba(178, 178, 178, 0.5);
  padding: 0 10px;
  border-radius: 10px;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
.changeColor{
  color: #ca151e;
  border: 1px solid #ca151e;
}
.configure dd li {
  margin-left: 24px;
  font-size: 13px;
  border: 1px solid #ca151e;
  padding: 0 10px;
  border-radius: 10px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: #ca151e;
}
.boxBom {
  margin-top: 10px;
}
.boxBom dl dt {
  font-size: 13px;
  font-weight: bold;
  color: #333333;
  margin-top: 4px;
}
.boxBom dl {
  display: flex;
}
.boxBom dl dd button {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  outline: none;
  border: 1px solid #918d8d;
  font-size: 18px;
  color: #918d8d;
  background-color: #fff;
}
.boxBom dl dd {
  margin-left: 24px;
}
.num {
  margin: 0 12px;
  font-size: 14px;
  color: #333333;
}
.boxTos {
  margin-top: 10px;
  border-top: 2px solid #f9f9f9;
  height: 50px;
}
.boxTos dl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.box img {
  width: 24px;
  height: 24px;
}
.boxTos dl dt {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
}
.boxTos dl dd {
  width: 72%;
  display: flex;
  font-size: 13px;
  color: #333333;
}
.boxTos dl dd p {
  border: 1px solid rgba(178, 178, 178, 0.5);
  padding: 0 5px;
  margin: 0 6px;
  border-radius: 6px;
}
</style>