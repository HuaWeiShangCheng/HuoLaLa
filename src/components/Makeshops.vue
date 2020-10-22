<template>
  <div class="box">
    <ul v-for="(Group,index) in Groups" :key="index" >
      <li>
        <span class="peple">{{Group.peple}}</span>
        <img :src="'../../img1/' + Group.img1" alt="" />
        <p class="Charger">{{Group.Charger}}</p>
        <p class="UnitPrice"><b>{{Group.UnitPrice}}</b> 单买价<span>{{Group.Unit}}</span></p>
        <span class="grop">{{Group.grop}}</span>
      </li>
    </ul>
    <div class="imgs">
       <img src="../assets/img/6.png" alt="" >
    </div>  
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Makeshops",
  data:function(){
    return {
      Groups:[]
    }
  },
  async created(){
    let res = await axios({
       url:"http://localhost:3000/Groups"
    });
    this.Groups = res.data;
  } 
};
</script>

<style scoped>
.box {
  width: 100%;
}
.box ul {
  width: 100%;
  position: relative;
  padding: 0 10px;
  box-sizing: border-box;
}
.box ul li {
  width: 100%;
}
.box ul li p {
  line-height: 18px;
}
.box ul li img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.box ul li .peple {
  display: block;
  width: 13%;
  font-size: 12px;
  background-color: #e16773;
  color: #fff;
  position: absolute;
  top: 5%;
  text-align: center;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.Charger {
  font-size: 15px;
  color: #000000;
}
.UnitPrice {
  font-size: 12px;
  color: #999999;
}
.UnitPrice b {
  font-size: 14px;
  color: #ca141d;
  font-weight: normal;
}
.UnitPrice span {
  text-decoration: line-through;
}
.grop {
  display: block;
  width: 20%;
  height: 26px;
  background-color: #d51f26;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 26px;
  border-radius: 14px;
  position: absolute;
  right: 10%;
  bottom: 3%;
}
.imgs{
  width: 100%;
  position: fixed;
  bottom: -4px;
  /* top: 0; */
}
.imgs img{
  width: 100%;
}
</style>