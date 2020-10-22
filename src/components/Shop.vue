<template>
  <div class="box">
        <ul class="img">
            <li class="mmm"><img src="../assets/img/009.png" alt=""></li>
            <li class="imgs1">
                <div><img src="../assets/img/006.jpg" alt=""></div>
                <div class="top"><img src="../assets/img/007.jpg" alt=""></div>
            </li>
        </ul>
        <ul class="img1">
            <li><img src="../assets/img/003.png" alt=""></li>
            <li><img src="../assets/img/005.png" alt=""></li>
        </ul>
        <ul class="img1">
            <li><img src="../assets/img/004.jpg" alt=""></li>
            <li><img src="../assets/img/008.jpg" alt=""></li>
        </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
}
img{
    display: block;
    width: 100%;
}
.img{
   width: 100%; 
   display: flex;
}
.img li{
    width: 50%;
}
.img1{
   width: 100%;
   display: flex;
}
.img1 li{
    width: 50%;
}
</style>