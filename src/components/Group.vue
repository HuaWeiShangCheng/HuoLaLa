<template>
  <div class="box">
     <div class="img1">
        <img src="../assets/img/7.jpg" alt="">
     </div>
     <img src="../assets/img/9.jpg" alt="" class="img2">
  </div>
</template>

<script>
export default {
      name:"Group"
}
</script>

<style scoped>
   .box{
      width: 100%;
      height: 258px;
   } 
   .box .img1{
      width: 100%;
      height: 77%;
   }
   .box .img1 img{
      width: 100%;
      height: 100%;
   }
   .img2{
       width: 100%;
       height: 23%;
   }
</style>