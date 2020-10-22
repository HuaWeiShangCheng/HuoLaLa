<template>
<div>
 <Group/>
 <Makeshops/>
</div>
   
</template>

<script>
import Group from "../components/Group";
import Makeshops from "../components/Makeshops";
export default {
   name:"makeGroup",
   components:{
       Group,Makeshops
   }
}
</script>

<style>
    * {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>