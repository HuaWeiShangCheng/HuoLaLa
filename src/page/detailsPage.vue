<template>
  <div class="app">
    <DataHeader class="header" />
    <div class="content">
      <DataBanner />
      <Dataifon />
      <Datapromotion />
      <Datachoice />
      <Datacollocation />
      <Dataadress />
      <Datarecommend />
      <Dataimg />
    </div>
    <DataFooter class="footer" />
  </div>
</template>

<script>
import axios from "axios";
import DataHeader from "../components/DataHeader";
import DataBanner from "../components/DataBanner";
import Dataifon from "../components/Dataifon";
import Datapromotion from "../components/Datapromotion";
import Datachoice from "../components/Datachoice";
import Datacollocation from "../components/Datacollocation";
import Dataadress from "../components/Dataadress";
import Datarecommend from "../components/Datarecommend";
import Dataimg from "../components/Dataimg";
import DataFooter from "../components/DataFooter";
export default {
  name: "detailsPage",
  // prpos:["id"],
  components: {
    DataHeader,
    DataBanner,
    Dataifon,
    Datapromotion,
    Datachoice,
    Datacollocation,
    Dataadress,
    Datarecommend,
    Dataimg,
    DataFooter,
  },

  // data() {
  //   return {
  //     datail: {},
  //   };
  // },
  // async created() {
  //   console.log("this.$route", this.$route);
  //   let res = await axios({
  //     url: "http://localhost:3000/datails",
  //     params: {
  //       id: this.$route.params.id,
  //     },
  //   });
  //   this.datail = res.data[0];
  // },
  // mounted() {
  //   console.log(this.$route.params.id);
  // },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>