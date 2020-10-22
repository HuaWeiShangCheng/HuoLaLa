<template>
  <div class="box">
    <div class="hh">
      <h3>精品推荐</h3>
    </div>
    <div class="shops">
      <ul v-for="(List, index) in Lists" :key="index">
        <li>
          <p class="name">{{List.name}}</p>
          <img :src="'../../img/' + List.img" alt="" />
          <p class="cc">{{List.discount}}</p>
        </li>
        <p class="pp">{{List.percg}}</p>
        <p class="pri">{{List.price}}</p>
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
      Lists: [],
    };
  },
  async created() {
    let res = await axios({
      url: "http://localhost:3000/Lists",
    });
    this.Lists = res.data;
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 312px;
  border-bottom: 10px solid #f9f9f9;
}
.box .hh {
  width: 100%;
  height: 18%;
  overflow: hidden;
}
.box .hh h3 {
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  margin-top: 4%;
}
.shops {
  height: 80%;
  width: 100%;
  display: flex;
  overflow-y: auto;
  /* background-color: brown; */
}

.shops ul {
  width: 37%;
  height: 80%;
  /* background-color: aqua; */
  flex-shrink: 0;
}
.shops ul li {
  width: 90%;
  height: 74%;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 5%;
}
.shops ul .name {
  padding: 0 6px;
  display: block;
  width: 60%;
  font-size: 10px;
  color: #fff;
  background-color: #ff6a6e;
  text-align: center;
  margin-left: 17%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.shops ul li img {
  width: 74%;
  height: 65%;
  margin-left: 14%;

}
.shops ul li .cc {
  display: block;
  height: 16%;
  font-size: 10px;
  font-weight: normal;
  color: #9b9b9b;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgba(155, 155, 155, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
   margin-top: 6%;
   padding: 0 10px;
   box-sizing: border-box;
   line-height: 24px;
}
.shops ul .pp {
  font-size: 12px;
  color: #333;
  text-align: center;
  margin-top: 5%;
}
.shops ul .pri {
  font-size: 12px;
  color: #ca141d;
  text-align: center;
  margin-top: 2%;
}
</style>