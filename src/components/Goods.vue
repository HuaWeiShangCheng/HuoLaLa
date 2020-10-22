<template>
  <div class = "box">
     <ul v-for="(Good,index) in Goods" :key="index">
         <li>
             <span>{{Good.HotSale}}</span>
             <img :src="'../../img/' + Good.img" alt="">
             <p class="nove">{{Good.name}}</p>
             <p class="pixel">{{Good.pixel}}</p>
             <p class="pe">{{Good.pe}}</p>
         </li>
     </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Goods",
    data:function(){
        return {
            Goods:[]
        }
    },
   async created(){
       let res = await axios({
            url:"http://localhost:3000/Goods"
        });
        this.Goods = res.data;
    }
}
</script>

<style scoped>
   .box{
       width: 100%;
       height: 206px;
       margin-top: 2%;
       display: flex;
       justify-content: space-between;
   }
   .box ul{
       width: 33%;
       height: 100%;
       background-color: #f9f9f9;
       border-bottom-left-radius: 10px;
   }
   .box ul li{
       width: 100%;
       height: 100%;    
       text-align: center;
   }
   .box ul li img{
       width: 71%;
       height: 40%;
   }
   .box ul li span{
       padding: 0 8px;
       background-color: #FF6A6E;
       font-size: 10px;
       color: #ffffff;
       border-bottom-left-radius: 4px;
       border-bottom-right-radius: 4px;
   }
   .nove{
       font-size: 15px;
       color: #333;
       margin-top: 14%;
   }
    .pixel{
       font-size: 10px;
       color: #9b9b9b;
   }
   .pe{
       font-size: 15px;
       color: #333;
   }
</style>