<template>
  <div class="box">
    <div class="time">
      <h3>限时购</h3>
      <img src="../assets/img/seckill_title.png" alt="" />
      <van-count-down :time="time" />
      <span>后结束</span>
    </div>
    <div class="shops">
      <ul v-for="(shop, index) in shops" :key="index" @click="fn(shop.id)">
        <!-- <router-link :to="{ name: 'detailsPage', params: { id:'002' }}"> -->
        <li>
          <div>
            <img :src="'../../img/' + shop.img" alt="" />
          </div>
          <p>{{ shop.name }}</p>
        </li>
        <!-- </router-link> -->
        <p class="mm">{{ shop.discount }}</p>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TimeLimit",
  data: function () {
    return {
      shops: [],
      datails: [],
      time: 30 * 60 * 60 * 1000,
    };
  },
  async created() {
    let res = await axios({
      url: "http://localhost:3000/shops",
    });
    this.shops = res.data;
  },
  methods: {
   async fn(id) {
    this.$router.push({ name: 'detailsPage', params: { id: id }})
      // let res1 = await axios({
      //   url: "http://localhost:3000/datails",
      //   params: {
      //     // name:"detailsPage",
      //     id: id,
      //   },
      // });
      // this.datails = res1.data;
      // console.log(this.datails);
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 154px;
  background-color: #f6f6f6;
}
.time {
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.time h3 {
  font-size: 16px;
  font-weight: normal;
  color: #4d4d4d;
}
.time img {
  width: 5%;
  height: 40%;
}
.time .van-count-down {
  font-size: 16px;
  color: #4d4d4d;
}
.time span {
  font-size: 12px;
  color: #9b9b9b;
}
.shops {
  height: 75%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-y: auto;
}

.shops ul {
  width: 23%;
  height: 114px;
  /* background-color: aqua; */
  flex-shrink: 0;
}
.shops ul li {
  width: 90%;
  height: 79%;
  background-color: #fff;
  border-radius: 10px;
  margin-left: 5%;
}
.shops ul li div {
  /* display: block; */
  width: 90%;
  height: 80%;
  margin-left: 6%;
}
.shops ul li img {
  width: 100%;
  height: 100%;
}
.shops ul li p {
  font-size: 12px;
  font-weight: normal;
  color: #c5c5c5;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shops .mm {
  font-size: 12px;
  color: #c9141d;
  text-align: center;
  margin-top: 6%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>