<template>
  <div class="box">
    <div class="boxTop" is-link @click="showAdd">
      <dl>
        <dt>送至</dt>
        <dd>
          <p>陕西 西安市 莲湖区</p>
          <p class="shopp">现货</p>
        </dd>
        <img src="../assets/img/icon-more-right.png" alt="" class="right" />
      </dl>
    </div>
    <div class="boxBottom" is-link @click="showPopup">
      <dl>
        <dt>服务</dt>
        <dd>
          <li class="mmm">
            <img src="../assets/img/icon_discount.png" alt="" />
            <p>已满48元包邮</p>
          </li>
          <li>
            <img src="../assets/img/icon_discount.png" alt="" />
            <p>由华为终端提供商品、发货开票及售后服务</p>
          </li>
        </dd>
        <img src="../assets/img/icon-more-right.png" alt="" class="right" />
      </dl>
    </div>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '70%' }"
    ></van-popup>
    <van-popup v-model="show1" position="bottom" :style="{ height: '70%' }"
      ><van-area :area-list="areaList"/></van-popup>
  </div>
</template>

<script>
export default {
  name: "Dataadress",
  data() {
    return {
      show: false,
      show1: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
        },
      },
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showAdd() {
      this.show1 = true;
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 10px solid #f9f9f9;
}
.right {
  width: 25px;
  height: 25px;
}
.boxTop {
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f9f9f9;
  overflow: hidden;
}
.box div dl {
  display: flex;
  justify-content: space-between;
}
.box dl dt {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
}
.box div dl dd {
  width: 70%;
}
.boxTop dl dd p {
  font-size: 14px;
  color: #333333;
}
.boxTop dl {
  margin-top: 10px;
}
.boxTop dl dd .shopp {
  font-size: 13px;
  color: #d0021b;
}
.boxBottom,
.boxBottom dl {
  height: 64px;
}
.boxBottom dl dd li p {
  font-size: 12px;
  margin-left: 4px;
}
.boxBottom dl dd li img {
  width: 13px;
  height: 13px;
}
.boxBottom dl dd li {
  display: flex;
  align-items: center;
  margin: 8px 0;
}
.boxBottom dl dt {
  margin-top: 6px;
}
</style>