<template>
  <div class="box">
    <div v-for="(datail, index) in datails" :key="index">
      <h3>{{ datail.price }}</h3>
      <h5>
        {{ datail.set }}
      </h5>
      <p>
        <span class="color1">{{ datail.subsidy }}</span
        >{{ datail.explain }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dataifon",
  props: ["id"],
  data() {
    return {
      datail: {},
      datails:[]
    };
  },
  async created() {
    console.log("this.$route", this.$route);
    let res = await axios({
      url: "http://localhost:3000/datails",
      params: {
        id: this.$route.params.id,
      },
    });
    console.log("this.$route.params.id",this.$route.params.id)
    this.datails = res.data;
    console.log(this.datails);
  },
};
</script>

<style scoped>
.box {
  padding: 0 10px;
  line-height: 22px;
  background-color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
}
.box h3 {
  font-size: 18px;
  color: #ca141d;
}
.box h5 {
  display: block;
  font-size: 15px;
  color: #333333;

  word-break: break-all;
}
.box p .color1 {
  font-size: 13px;
  color: #ca141d;
}
.box p {
  font-size: 13px;
  color: #888;
}
</style>