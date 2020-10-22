<template>
  <div class="box">
    <dl class="remmond">
      <dt>推荐</dt>
      <dd>
        <li>HUAWEI nova 7 Pro 5G</li>
        <li>HUAWEI nova 7 Pro 5G</li>
      </dd>
    </dl>
    <dl class="exchange">
      <img src="../assets/img/icon_replace_grey.png" alt="" />
      <div>
        <dd class="new">以旧换新</dd>
        <dd class="change">高价回收送多重购新补贴</dd>
      </div>
      <img src="../assets/img/icon-more-arrow-1.png" alt="" />
    </dl>
  </div>
</template>

<script>
export default {
  name: "Datarecommend",
};
</script>

<style scoped>
.box {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
  border-bottom: 10px solid #f9f9f9;
}
.remmond dt {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 4px;
}
.remmond {
  height: 90px;
  margin-top: 10px;
  display: flex;
  border-bottom: 10px solid #f9f9f9;
}
.remmond dd li {
  margin: 6px 0;
  font-size: 13px;
  background-color: #f3f3f3;
  padding: 0 10px;
  border-radius: 10px;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
.remmond dd {
  margin-left: 24px;
}
.exchange {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.exchange img {
  width: 20px;
  height: 20px;
}
.exchange div{
    display: flex;
    width: 72%;
}
.new {
  font-size: 12px;
  border: 1px solid rgba(239, 90, 98, 0.5);
  padding: 0 6px;
  color: #ef5a62;
  border-radius: 6px;
}
.change {
  font-size: 13px;
  color: #333333;
  margin-left: 6px;
}
</style>