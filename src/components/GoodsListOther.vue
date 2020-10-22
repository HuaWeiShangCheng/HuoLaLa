<template>
  <div class="box">
    <div class="hh">
      <h3>{{title}}</h3>
    </div>
    <div class="phone">
      <ul v-for="(Other,index) in Others" :key="index">
        <li>
          <p class="name">{{Other.name}}</p>
          <img :src="'../../img/' + Other.img" alt="">
          <p class="cc">{{Other.discount}}</p>
        </li>
        <p class="pp">{{Other.phones}}</p>
        <p class="pri">{{Other.price}}</p>
      </ul>
    </div>
    <div class="shops">
      <ul v-for="(List, index) in Lists" :key="index">
        <li>
          <p class="name">{{ List.name }}</p>
          <img :src="'../../img/' + List.img" alt="" />
          <p class="cc">{{ List.discount }}</p>
        </li>
        <p class="pp">{{ List.percg }}</p>
        <p class="pri">{{ List.price }}</p>      
      </ul>   
    </div>
    <h3 class="mmm">发现更多{{title}} ></h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TimeLimit",
   props:["title"],
  data: function () {
    return {
      Lists: [],
      Others:[],
      type:{
        "手机":"phone",
        "笔记本":"notebook",
        "精品平板":"Flat",
        "智能穿戴":"wear",
        "智慧屏":"screen",
        "智能家居":"Home Furnishing",
        "热销配件":"parts"
      }
    };
  },
  async created() {
    let res = await axios({
      url: "http://localhost:3000/Lists",
    });
    this.Lists = res.data;
    let res1 = await axios({
      url: "http://localhost:3000/Others",
    });
    this.Others = res1.data;
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 862px;
  border-bottom: 10px solid #f9f9f9;
}
.box .hh {
  width: 100%;
  height: 7%;
  overflow: hidden;
}
.box .hh h3 {
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  margin-top: 4%;
}
.phone {
  width: 100%;
  height: 62%;
  display: flex;
  flex-wrap: wrap;
}
.phone ul {
  width: 50%;
  height: 50%; 
}
.phone ul li {
  width: 90%;
  height: 74%;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 5%;
}
.phone ul li img {
  width: 74%;
  height: 65%;
  margin-left: 14%;
  margin-top: 4%;
}
.phone ul li .cc {
  display: block;
  height: 14%;
  font-size: 14px;
  font-weight: normal;
  color: #9b9b9b;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgba(155, 155, 155, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-top: 8%;
  line-height: 28px;
  padding: 0 10px;
  box-sizing: border-box;
}
.phone ul .name {
  display: block;
  width: 60%;
  font-size: 10px;
  color: #fff;
  background-color: #ff6a6e;
  text-align: center;
  margin-left: 22%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.phone ul .pp {
  width: 100%;
  font-size: 14px;
  color: #333;
  text-align: center;
  line-height: 14px;
  margin-top: 4%;
}
.phone ul .pri {
  width: 100%;
  font-size: 14px;
  color: #ca141d;
  text-align: center;
}
.shops {
  height: 31%;
  width: 100%;
  display: flex;
  overflow-x: auto;
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
  position: relative;
}
.shops ul .name {
  padding: 0 8px;
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
  margin-top: 10%;
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
.mmm{
  width: 100%;
  font-weight: normal;
  font-size: 15px;
  margin-top: -12%;
  color: #4a4a4a;
  text-align: center;
}
</style>