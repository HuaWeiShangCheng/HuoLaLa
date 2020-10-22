<template>
  <div class="box">
    <ul>
      <li v-for="(msg, index) in msgs" :key="index"><p @click="fn()"><router-link to="/makeGroup">{{msg}}</router-link></p></li>
    </ul>
    <span>∨</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navigation",
  data:function(){
      return {
          msgs:[]
      }
  },
  methods:{
    fn(){
      
    }
  },
  async created() {
    let res = await axios({
      url: "http://localhost:3000/msgs",
      method: "get"
    });
    console.log("res.data",res.data);
    this.msgs = res.data;   
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box ul{
  width: 92%;
  display: flex;
  overflow-y: auto;
  /* justify-content: space-between; */
  align-items: center;
}
.box ul li{
  width: 29%;
  height: 34px;
  line-height: 34px;
  flex-shrink: 0; 
  text-align: center;
  position: relative;
}
.box ul li:nth-of-type(1){
  width: 16%;
}
.box ul li:nth-of-type(6){
  width: 16%;
}
.box ul li p a{
font-size: 14px;
color: #777777;
}
p::after{
  content: "";
  display: block;
  width: 40%;
  height: 3px;
  background-color: #cc0e11;
  margin-top: -2px;
  position: absolute;
  left: 30%;
  border-radius: 6px;
  display: none;
}
.box span{
  margin-top: -4px;
}
</style>