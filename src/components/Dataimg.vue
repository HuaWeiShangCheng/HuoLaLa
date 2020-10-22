<template>
  <div class="box">
     <div v-for="(Img,index) in Imgs" :key="index">
         <img :src="'../../img2/' + Img" alt="">
     </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Dataimg",
    data(){
        return {
            Imgs:[]
        }
       
    },
     async created(){
            let res = await axios({
                url:"http://localhost:3000/Imgs"
            });
            this.Imgs = res.data;
        }
}
</script>

<style scoped>
    .box,
    .box div,
    .box div img
    {
        width: 100%;
    }
</style>